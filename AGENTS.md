# Normkontor repository rules

Normkontor is the public FYN Labs product owner for reusable AI-engineering
rulesets, their installable agent plugins, and evidence contracts.

The normative owner is `standard/KERNEL.md`. It defines precedence, authority,
Linear, evidence, claims, memory, and adapter limits. `standard/contract.json`
is its machine-readable index, not a second doctrine.

The canonical behavior of 3A COD3X lives only in:

- plugins/3a-cod3x/skills/3a-cod3x/SKILL.md
- plugins/3a-cod3x/skills/3a-cod3x-review/SKILL.md

Host manifests, catalog pages, and `adapters/` are projections. They may
describe or map the ruleset, but must not fork the Kernel or 3A behavior.

Before changing code or doctrine, apply the 3A ladder: need, existing owner,
native capability, installed capability, deletion or configuration, vetted
upstream, then the smallest complete new code. At a material phase or package
boundary, run one bounded simplicity review. Do not add continuous governance,
hooks, MCP, daemons, telemetry, stores, or model routing to an instruction-only
plugin without a separately proven product requirement.

This repository is public. Its tracked tree is limited to the approved public
surface enforced by `tests/normkontor-contract.test.mjs`; every unknown tracked
path blocks the package. Never add credentials, customer data, raw chats,
personal records, local machine paths, private operating evidence, enterprise
delivery material, internal architecture, or website source. Preserve unrelated
work and keep shared manifest and lockfile writes serialized.

Before a commit, run `npm test`.
Before a release, run the native Codex, Agent Skills, and Claude validators and
create evidence for the exact frozen commit. A source, unit, package, runtime,
assurance, or release PASS proves only its own layer.

3A COD3X is an independent Normkontor ruleset by FYN Labs. Do not use OpenAI or
Anthropic logos, imply endorsement, or describe it as an official plugin.
