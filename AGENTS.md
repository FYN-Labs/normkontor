# Normkontor repository rules

Normkontor is the public FYN Labs product owner for reusable AI-engineering
rulesets, their installable agent plugins, evidence contracts, and the public
enterprise documentation around them.

The canonical behavior of 3A COD3X lives only in:

- plugins/3a-cod3x/skills/3a-cod3x/SKILL.md
- plugins/3a-cod3x/skills/3a-cod3x-review/SKILL.md

Host manifests and catalog pages are adapters. They may describe the ruleset,
but must not fork its normative behavior.

Before changing code or doctrine, apply the 3A ladder: need, existing owner,
native capability, installed capability, deletion or configuration, vetted
upstream, then the smallest complete new code. At a material phase or package
boundary, run one bounded simplicity review. Do not add continuous governance,
hooks, MCP, daemons, telemetry, stores, or model routing to an instruction-only
plugin without a separately proven product requirement.

This repository is public. Never add credentials, customer data, raw chats,
personal records, local machine paths, or private operating evidence. Preserve
unrelated work and keep shared manifest and lockfile writes serialized.

Before a commit, run npm test and the site checks documented in README.md.
Before a release, run the native Codex, Agent Skills, and Claude validators and
create evidence for the exact frozen commit. A source, unit, package, runtime,
assurance, or release PASS proves only its own layer.

3A COD3X is an independent Normkontor ruleset by FYN Labs. Do not use OpenAI or
Anthropic logos, imply endorsement, or describe it as an official plugin.
