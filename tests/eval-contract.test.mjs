import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const evalRoot = path.join(root, "evals", "3a-cod3x");
const expectedCases = [
  "adversarial-assurance-gate",
  "assurance-family-collapse",
  "capability-gap",
  "concurrent-work",
  "existing-owner",
  "growing-architecture",
  "ordinary-review-no-assurance",
  "security-release-boundary",
  "self-review-boundary",
  "trivial-edit",
  "unrelated-doc-summary",
];

function promptFrom(caseYaml) {
  const match = caseYaml.match(/^  prompt: \|\n([\s\S]*?)^  max_turns:/m);
  assert.ok(match, "case.yaml must contain an execution.prompt block");
  return match[1].replace(/^    /gm, "").trim();
}

test("the public corpus covers positive, negative, and assurance behavior", async () => {
  const caseIds = (await readdir(evalRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  assert.deepEqual(caseIds, expectedCases);

  for (const caseId of caseIds) {
    const yaml = await readFile(path.join(evalRoot, caseId, "case.yaml"), "utf8");
    const prompt = promptFrom(yaml);
    assert.match(yaml, /schema_version: "1\.1"/);
    assert.match(yaml, new RegExp(`name: ${caseId}`));
    assert.match(yaml, /plugins:\n  - \.\.\/\.\.\/\.\.\/plugins\/3a-cod3x/);
    assert.match(yaml, /allowed_tools: \[Skill\]/);
    assert.match(yaml, /runs: 1/);
    assert.match(yaml, /graders:/);
    assert.doesNotMatch(prompt, /3A COD3X|3a-cod3x|\$3a-cod3x/i);
  }
});

test("implementation and review cases use anchored selection contracts", async () => {
  const expected = new Map([
    ["capability-gap", "3a-cod3x"],
    ["concurrent-work", "3a-cod3x"],
    ["existing-owner", "3a-cod3x"],
    ["adversarial-assurance-gate", "3a-cod3x-review"],
    ["assurance-family-collapse", "3a-cod3x-review"],
    ["growing-architecture", "3a-cod3x-review"],
    ["ordinary-review-no-assurance", "3a-cod3x-review"],
    ["security-release-boundary", "3a-cod3x-review"],
    ["self-review-boundary", "3a-cod3x-review"],
  ]);

  for (const [caseId, skillId] of expected) {
    const yaml = await readFile(path.join(evalRoot, caseId, "case.yaml"), "utf8");
    assert.ok(yaml.includes(`input_match: '^${skillId}$'`));
  }
});

test("ordinary review explicitly accepts NOT_REQUIRED without widening authority", async () => {
  const yaml = await readFile(path.join(evalRoot, "ordinary-review-no-assurance", "case.yaml"), "utf8");
  assert.match(yaml, /Assurance status NOT_REQUIRED/);
  assert.match(yaml, /overall PASS/);
  assert.match(yaml, /grants no merge, deploy, publish,\s+spend, or release authority/);
});
