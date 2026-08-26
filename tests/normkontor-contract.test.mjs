import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const execFileAsync = promisify(execFile);
const kernelPath = "standard/KERNEL.md";
const adapters = [
  "adapters/codex/AGENTS.md",
  "adapters/claude-code/CLAUDE.md",
  "adapters/command-eve/POLICY.md",
  "adapters/linear/CONTRACT.md",
];
const binaryExtension = /\.(?:png|jpe?g|gif|ico|woff2?|pdf|zip)$/i;
const gitInventoryArgs = ["ls-files", "--cached", "--others", "--exclude-standard", "-z"];
const trackedInventoryArgs = ["ls-files", "--cached", "-z"];
const expectedTrackedPaths = [
  ".agents/plugins/marketplace.json",
  ".claude-plugin/marketplace.json",
  ".github/workflows/validate.yml",
  ".gitignore",
  "AGENTS.md",
  "LICENSE",
  "README.md",
  "THIRD_PARTY_NOTICES.md",
  "adapters/claude-code/CLAUDE.md",
  "adapters/codex/AGENTS.md",
  "adapters/command-eve/POLICY.md",
  "adapters/linear/CONTRACT.md",
  "docs/product-contract.md",
  "docs/releasing.md",
  "evals/3a-cod3x/adversarial-assurance-gate/case.yaml",
  "evals/3a-cod3x/assurance-family-collapse/case.yaml",
  "evals/3a-cod3x/capability-gap/case.yaml",
  "evals/3a-cod3x/concurrent-work/case.yaml",
  "evals/3a-cod3x/existing-owner/case.yaml",
  "evals/3a-cod3x/growing-architecture/case.yaml",
  "evals/3a-cod3x/ordinary-review-no-assurance/case.yaml",
  "evals/3a-cod3x/security-release-boundary/case.yaml",
  "evals/3a-cod3x/self-review-boundary/case.yaml",
  "evals/3a-cod3x/trivial-edit/case.yaml",
  "evals/3a-cod3x/unrelated-doc-summary/case.yaml",
  "package.json",
  "plugins/3a-cod3x/.claude-plugin/plugin.json",
  "plugins/3a-cod3x/.codex-plugin/plugin.json",
  "plugins/3a-cod3x/skills/3a-cod3x-review/SKILL.md",
  "plugins/3a-cod3x/skills/3a-cod3x-review/agents/openai.yaml",
  "plugins/3a-cod3x/skills/3a-cod3x/SKILL.md",
  "plugins/3a-cod3x/skills/3a-cod3x/agents/openai.yaml",
  "rulesets/README.md",
  "standard/KERNEL.md",
  "standard/contract.json",
  "tests/eval-contract.test.mjs",
  "tests/normkontor-contract.test.mjs",
  "tests/package-contract.test.mjs",
];

async function text(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

async function json(relativePath) {
  return JSON.parse(await text(relativePath));
}

async function publicPaths() {
  const { stdout } = await execFileAsync(
    "git",
    gitInventoryArgs,
    { cwd: root, encoding: "utf8" },
  );
  return stdout.split("\0").filter(Boolean).sort();
}

async function trackedPaths() {
  const { stdout } = await execFileAsync(
    "git",
    trackedInventoryArgs,
    { cwd: root, encoding: "utf8" },
  );
  return stdout.split("\0").filter(Boolean).sort();
}

async function publicTextFiles() {
  return (await publicPaths()).filter((file) => !binaryExtension.test(file));
}

function objectKeys(value, keys = []) {
  if (Array.isArray(value)) {
    for (const item of value) objectKeys(item, keys);
  } else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      keys.push(key);
      objectKeys(child, keys);
    }
  }
  return keys;
}

function forbiddenPublicFindings(value) {
  const findings = [];
  const genericLedgerPattern = /\bissue[\s_-]+trackers?\b/i;
  if (genericLedgerPattern.test(value)) findings.push("generic_ledger");
  return findings;
}

test("tracked public source matches the approved repository boundary", async () => {
  assert.deepEqual(await trackedPaths(), expectedTrackedPaths);
});

test("the Kernel is the unique normative owner", async () => {
  const contract = await json("standard/contract.json");
  const kernel = await text(kernelPath);

  assert.equal(contract.kernel_path, kernelPath);
  assert.equal(contract.owner_map.normative_governance, kernelPath);
  assert.equal(contract.execution_ledger, "Linear");
  assert.ok(kernel.split("\n").length <= contract.limits.kernel_max_lines);
  assert.deepEqual(Object.keys(contract.owner_map).sort(), [
    "bounded_review_method",
    "implementation_method",
    "normative_governance",
  ]);
  assert.equal(
    Object.values(contract.owner_map).filter((owner) => owner === kernelPath).length,
    1,
  );
  assert.equal(
    contract.owner_map.implementation_method,
    "plugins/3a-cod3x/skills/3a-cod3x/SKILL.md",
  );
  assert.equal(
    contract.owner_map.bounded_review_method,
    "plugins/3a-cod3x/skills/3a-cod3x-review/SKILL.md",
  );
  assert.equal(new Set(Object.values(contract.owner_map)).size, 3);
  await Promise.all(Object.values(contract.owner_map).map(text));
  assert.deepEqual(contract.roles, ["worker", "reviewer", "audit", "controller", "decision_owner"]);
  assert.match(kernel, /sole normative owner/);

  const expectedRuleIds = Array.from({ length: 7 }, (_, index) => `NK-00${index + 1}`);
  const declaredRuleIds = [...kernel.matchAll(/^## (NK-\d{3})\b/gm)].map((match) => match[1]);
  assert.deepEqual(declaredRuleIds, expectedRuleIds);

  for (const relativePath of await publicTextFiles()) {
    if (relativePath === kernelPath) continue;
    assert.doesNotMatch(await text(relativePath), /^## NK-\d{3}\b/m, relativePath);
  }
});

test("machine contract indexes owners, receipts, limits, and adapters", async () => {
  const contract = await json("standard/contract.json");
  assert.deepEqual(Object.keys(contract).sort(), [
    "adapter_paths", "adapter_version", "authority_verbs",
    "decision_receipt_required_fields", "decision_receipt_validity_checks",
    "evidence_precedence", "execution_ledger", "kernel_path", "limits",
    "normative_precedence", "owner_map", "roles", "schema", "version",
  ]);
  assert.deepEqual(contract.adapter_paths, adapters);
  assert.equal(contract.adapter_version, "1.0.0");
  assert.deepEqual(contract.normative_precedence, [
    "host_constraints",
    "organization_policy",
    "kernel_and_root_policy",
    "nested_tightening",
    "decision_receipt_scope",
    "user_intent",
    "runtime_adapter",
    "selected_skills",
  ]);
  assert.deepEqual(contract.evidence_precedence, [
    "observed_host_state",
    "valid_decision_receipt",
    "linear_evidence",
    "exact_repository_artifact",
    "memory",
    "model_knowledge",
  ]);
  assert.deepEqual(contract.decision_receipt_required_fields, [
    "receipt_id", "issuer", "host_scope", "organization_scope",
    "authority_verb", "subject_scope", "issued_at", "expires_at", "evidence_ref",
  ]);
  assert.deepEqual(contract.decision_receipt_validity_checks, [
    "verified_human_decision_owner",
    "matched_host_scope",
    "matched_organization_scope",
    "recognized_authority_verb",
    "exact_subject_scope",
    "active_time_window",
    "immutable_evidence_ref",
    "not_revoked_or_superseded",
    "host_and_organization_constraints",
  ]);
  assert.deepEqual(contract.authority_verbs, [
    "merge", "deploy", "publish", "spend", "production", "done",
  ]);
  assert.equal(contract.limits.kernel_max_lines, 100);
  assert.equal(contract.limits.adapter_max_lines, 35);
  assert.equal("model_aliases" in contract, false);
});

test("adapters are bounded projections of the Kernel", async () => {
  const contract = await json("standard/contract.json");
  for (const relativePath of adapters) {
    const value = await text(relativePath);
    assert.ok(value.split("\n").length <= contract.limits.adapter_max_lines, relativePath);
    assert.match(value, new RegExp(`Version: \`${contract.adapter_version.replaceAll(".", "\\.")}\``));
    assert.match(value, new RegExp(`Requires Kernel: \`${contract.version.replaceAll(".", "\\.")}\``));
    assert.match(value, /Import `\.\.\/\.\.\/standard\/KERNEL\.md`/);
    assert.match(value, /Never fork the Kernel/i);
    assert.match(value, /verified human\s+Decision Owner/i);
    assert.match(value, /valid host- and\s+organization-scoped receipt/i);

    const positiveRuntimeInstruction = /^\s*(?:[-*]\s*)?(?:enable|install|add|configure|ship|start|run|create|write|use)\b[^\n]{0,100}\b(?:hooks?|mcp|routers?|daemons?|telemetry|credentials?|(?:approval|state)\s+stores?)\b/im;
    const positiveRuntimeClaim = /^\s*(?:the\s+)?(?:adapter|normkontor|host)\s+(?:enables|installs|adds|configures|ships|starts|runs|creates|writes|uses)\b[^\n]{0,100}\b(?:hooks?|mcp|routers?|daemons?|telemetry|credentials?|(?:approval|state)\s+stores?)\b/im;
    assert.doesNotMatch(value, positiveRuntimeInstruction, relativePath);
    assert.doesNotMatch(value, positiveRuntimeClaim, relativePath);
  }
  assert.match(await text("adapters/linear/CONTRACT.md"), /one execution ledger/i);
  assert.match(await text("adapters/linear/CONTRACT.md"), /one role label/i);
  assert.match(await text("adapters/linear/CONTRACT.md"), /verified assignee mapping/i);
  assert.match(await text("adapters/linear/CONTRACT.md"), /Never mark Done/i);
});

test("public governance documents retain the authority and memory boundaries", async () => {
  const kernel = await text(kernelPath);
  assert.match(kernel, /No field implies another/);
  assert.match(kernel, /A valid receipt is required for an authority\s+verb/i);
  assert.match(kernel, /must not grant themselves/);
  assert.match(kernel, /Linear is the sole execution ledger/);
  assert.match(kernel, /Evidence may establish what is known\. It never grants authority/);
  assert.match(kernel, /Raw turn capture is default deny/);
  assert.match(kernel, /public repository contains no hot\s+memory/i);
  assert.match(kernel, /instruction alone cannot make an agent\s+technically unable/i);
  assert.match(kernel, /host verifies `issuer` as the human Decision\s+Owner for the exact scope/i);
  assert.match(kernel, /observation occurs from\s+`issued_at`\s+through `expires_at`/i);
  assert.match(kernel, /neither revoked nor superseded/i);
  assert.match(kernel, /`host_scope` and `organization_scope` match the\s+executing context/i);
  assert.match(kernel, /No lower rank may widen a higher one/i);
  assert.match(kernel, /any other unresolved conflict stops and names this\s+rule/i);
  assert.match(kernel, /static conformance checks flag the\s+specified textual forms/i);
  assert.match(kernel, /They do\s+not observe runtime behavior or prove absence/i);
  assert.match(kernel, /No compliance, customer, certification, or release\s+claim is valid without its separately applicable evidence and human authority/i);

  const publicFiles = await publicTextFiles();
  const corpus = await Promise.all(publicFiles.map(text));
  const joined = corpus.join("\n");

  assert.deepEqual(forbiddenPublicFindings(joined), []);

  const localHome = ["/Us", "ers/"].join("");
  const localTemp = ["/var/", "folders/"].join("");
  const githubToken = ["gh", "o_", "[A-Za-z0-9]+"].join("");
  assert.doesNotMatch(
    joined,
    new RegExp(`${localHome}|${localTemp}|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|${githubToken}`),
  );

});

test("the public scanner has positive and negative counterexamples", () => {
  assert.deepEqual(gitInventoryArgs, [
    "ls-files", "--cached", "--others", "--exclude-standard", "-z",
  ]);

  assert.deepEqual(forbiddenPublicFindings(["issue", "tracker"].join("\n")), ["generic_ledger"]);
  assert.deepEqual(forbiddenPublicFindings(["issue", "tracker"].join("-")), ["generic_ledger"]);
  assert.deepEqual(forbiddenPublicFindings(["issue", "tracker"].join("_")), ["generic_ledger"]);
  assert.deepEqual(forbiddenPublicFindings("airplane and gravity"), []);
});

test("active governance tree is documentation and contract data only", async () => {
  const paths = await publicPaths();
  assert.deepEqual(paths.filter((file) => file.startsWith("standard/")), [
    "standard/KERNEL.md",
    "standard/contract.json",
  ]);
  assert.deepEqual(paths.filter((file) => file.startsWith("adapters/")), [...adapters].sort());

  const files = ["standard/KERNEL.md", "standard/contract.json", ...adapters];
  const joined = (await Promise.all(files.map(text))).join("\n");
  assert.match(joined, /no capture hooks|Never write host settings or hooks/i);

  const forbiddenTopLevel = new Set([
    "credential", "credentials", "daemon", "daemons", "hook", "hooks", "mcp",
    "router", "runtime", "state", "store", "stores", "telemetry",
  ]);
  const forbiddenPaths = paths.filter((file) => forbiddenTopLevel.has(file.split("/")[0].toLowerCase()));
  assert.deepEqual(forbiddenPaths, []);

  const contract = await json("standard/contract.json");
  const forbiddenConfigurationKeys = new Set([
    "approvalstore", "command", "commands", "credential", "credentials", "daemon",
    "daemons", "hook", "hooks", "mcp", "mcpserver", "mcpservers", "modelprovider",
    "modelproviders", "router", "runtime", "script", "scripts", "statestore", "store",
    "telemetry",
  ]);
  const findings = objectKeys(contract)
    .map((key) => key.toLowerCase().replaceAll(/[_-]/g, ""))
    .filter((key) => forbiddenConfigurationKeys.has(key));
  assert.deepEqual(findings, []);
});
