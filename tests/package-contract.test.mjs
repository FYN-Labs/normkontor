import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pluginRoot = path.join(root, "plugins", "3a-cod3x");
const expectedPluginFiles = [
  ".claude-plugin/plugin.json",
  ".codex-plugin/plugin.json",
  "skills/3a-cod3x-review/SKILL.md",
  "skills/3a-cod3x-review/agents/openai.yaml",
  "skills/3a-cod3x/SKILL.md",
  "skills/3a-cod3x/agents/openai.yaml",
];
const forbiddenRuntimeFields = ["apps", "commands", "hooks", "mcpServers", "scripts"];

async function json(relativePath) {
  return JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
}

async function text(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(absolute));
    else files.push(absolute);
  }
  return files;
}

test("both host manifests expose one instruction-only plugin identity", async () => {
  const codex = await json("plugins/3a-cod3x/.codex-plugin/plugin.json");
  const claude = await json("plugins/3a-cod3x/.claude-plugin/plugin.json");

  assert.equal(codex.name, "3a-cod3x");
  assert.equal(claude.name, codex.name);
  assert.equal(claude.version, codex.version);
  assert.equal(codex.interface.displayName, "3A COD3X");
  assert.equal(codex.repository, "https://github.com/FYN-Labs/normkontor");
  assert.equal(codex.homepage, "https://normkontor.de");
  assert.deepEqual(codex.interface.capabilities, ["Instructions"]);

  for (const manifest of [codex, claude]) {
    for (const field of forbiddenRuntimeFields) {
      assert.equal(field in manifest, false, `${field} is outside the instruction-only boundary`);
    }
  }
});

test("Codex and Claude marketplaces resolve the same local plugin", async () => {
  const codex = await json(".agents/plugins/marketplace.json");
  const claude = await json(".claude-plugin/marketplace.json");

  assert.equal(codex.name, "normkontor");
  assert.equal(claude.name, "normkontor");
  assert.equal(codex.plugins.length, 1);
  assert.equal(claude.plugins.length, 1);
  assert.equal(codex.plugins[0].name, "3a-cod3x");
  assert.equal(codex.plugins[0].source.path, "./plugins/3a-cod3x");
  assert.equal(codex.plugins[0].policy.installation, "AVAILABLE");
  assert.equal(codex.plugins[0].policy.authentication, "ON_INSTALL");
  assert.equal(claude.plugins[0].name, "3a-cod3x");
  assert.equal(claude.plugins[0].source, "./plugins/3a-cod3x");
});

test("the plugin topology cannot silently acquire a runtime", async () => {
  const files = (await filesUnder(pluginRoot))
    .map((file) => path.relative(pluginRoot, file))
    .sort();
  assert.deepEqual(files, expectedPluginFiles);
});

test("both skills keep canonical ids, version, and invocation metadata", async () => {
  const codex = await json("plugins/3a-cod3x/.codex-plugin/plugin.json");
  const main = await text("plugins/3a-cod3x/skills/3a-cod3x/SKILL.md");
  const review = await text("plugins/3a-cod3x/skills/3a-cod3x-review/SKILL.md");
  const mainUi = await text("plugins/3a-cod3x/skills/3a-cod3x/agents/openai.yaml");
  const reviewUi = await text("plugins/3a-cod3x/skills/3a-cod3x-review/agents/openai.yaml");

  assert.match(main, /^name: 3a-cod3x$/m);
  assert.match(review, /^name: 3a-cod3x-review$/m);
  assert.match(main, new RegExp(`version: "${codex.version.replaceAll(".", "\\.")}"`));
  assert.match(review, new RegExp(`version: "${codex.version.replaceAll(".", "\\.")}"`));
  assert.match(mainUi, /\$3a-cod3x\b/);
  assert.match(reviewUi, /\$3a-cod3x-review\b/);
  assert.match(mainUi, /allow_implicit_invocation: true/);
  assert.match(reviewUi, /allow_implicit_invocation: true/);
});

test("ordinary review and required assurance have deterministic verdicts", async () => {
  const main = await text("plugins/3a-cod3x/skills/3a-cod3x/SKILL.md");
  const review = await text("plugins/3a-cod3x/skills/3a-cod3x-review/SKILL.md");
  assert.match(review, /if assurance is not required, NOT_REQUIRED can PASS/);
  assert.match(review, /if assurance is required and complete, SATISFIED can PASS/);
  assert.match(review, /BLOCKED_ASSURANCE or UNVERIFIED is\s+STOP_AND_REFRAME/);
  assert.match(review, /classify it as P0 and stop that\s+simplification/);
  assert.match(main, /Use \$3a-cod3x-review for\s+an explicit or package-gate challenge/);
});

test("public source contains no local paths or known private markers", async () => {
  const roots = [".agents", ".claude", ".claude-plugin", "docs", "evals", "plugins", "rulesets", "site"];
  const findings = [];
  for (const relativeRoot of roots) {
    const absoluteRoot = path.join(root, relativeRoot);
    const files = await filesUnder(absoluteRoot).catch(() => []);
    for (const file of files) {
      const relativeFile = path.relative(root, file);
      if (relativeFile.includes("/node_modules/") || relativeFile.includes("/.next/")) continue;
      if (/\.(png|ico|woff2?)$/i.test(file)) continue;
      const value = await readFile(file, "utf8");
      if (/\/Users\/|\/var\/folders\/|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|gho_[A-Za-z0-9]+/.test(value)) {
        findings.push(relativeFile);
      }
    }
  }
  for (const relativeFile of ["AGENTS.md", "README.md", "THIRD_PARTY_NOTICES.md"]) {
    const value = await readFile(path.join(root, relativeFile), "utf8");
    if (/\/Users\/|\/var\/folders\/|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|gho_[A-Za-z0-9]+/.test(value)) {
      findings.push(relativeFile);
    }
  }
  assert.deepEqual(findings, []);
});
