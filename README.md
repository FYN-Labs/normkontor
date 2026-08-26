# Normkontor

**Kontrollierte KI-Arbeit. Nachweisbar.**

Normkontor is the public ruleset and assurance brand of FYN Labs. Its
Normkontor Standard Kernel defines the common governance boundary; 3A COD3X is
the first implementation and bounded-review method under that boundary.

## Product map

| Module | Status | Purpose |
| --- | --- | --- |
| Normkontor 3A / 3A COD3X | Open source | Smallest complete native change, bounded autonomy, real evidence |
| Normkontor Rollout | Pilot on request | Scope, operating model, controls, pilot evidence, 90-day plan |
| Normkontor Academy | Pilot on request | Executive, practitioner, and internal assurance training |
| Normkontor Review | In development | Independent review-arm and evidence-receipt product concept |

3A COD3X means **Aligned. Autonomous. Auditable.** It is the technical plugin
name for the first Normkontor ruleset. “Normkontor Standard” names the
governance kernel; “3A COD3X” names the two behavioral skills. Neither name
substitutes for the other.

## Install 3A COD3X

### Codex

    codex plugin marketplace add FYN-Labs/normkontor
    codex plugin add 3a-cod3x@normkontor

Start a new Codex task after installation so the skill catalog refreshes.

### Claude Code

    claude plugin marketplace add FYN-Labs/normkontor
    claude plugin install 3a-cod3x@normkontor

Restart Claude Code after installation or update.

### Hermes Agent

Hermes already owns skill installation. Until a version tag is cut, review the
source on GitHub and install only from a frozen commit. Stable tag-pinned
commands will be published with the first release evidence receipt.

### Other skill-aware agents

Install the two folders below from a frozen revision:

- plugins/3a-cod3x/skills/3a-cod3x
- plugins/3a-cod3x/skills/3a-cod3x-review

The plugin is instruction-only: no hooks, runtime, background calls, MCP
server, model router, telemetry, approval store, or persistent mode.

## Governance boundary

[`standard/KERNEL.md`](standard/KERNEL.md) is the sole normative owner.
It makes Linear the only execution ledger, separates evidence from authority,
and requires a verified human Decision Owner with a valid Decision Receipt for
Done. The two 3A skills remain the only owners of implementation guidance and
bounded review. Host and organization controls enforce actions externally;
instructions forbid drift, and static repository checks flag specified textual
violations. Neither can make an agent technically unable to act.

## What the ruleset does

Before new code or machinery is added, 3A COD3X asks in order:

1. Does the behavior need to exist?
2. Can the existing owner be repaired or extended?
3. Can the framework, runtime, agent, platform, or configuration do it?
4. Can the standard library or an installed dependency do it?
5. Can deletion, configuration, or one targeted change solve it?
6. Can a vetted maintained upstream close a proven gap with less ownership?
7. Otherwise, what is the smallest complete new path and its proof?

At material phase boundaries, a separate read-only review checks original
problem fit, native ownership, mechanism growth, and the evidence layer
actually exercised. At material architecture, inference-routing, eval, CAO,
or audit gates, the host policy may classify a cross-family assurance gate as
required. If required, the primary and two additional blind reviewer arms must
resolve to three distinct qualified model families and preserve disagreement.

## Evidence boundary

    npm test
    npm --prefix site ci
    npm --prefix site run lint
    npm --prefix site run build
    npm --prefix site audit --audit-level=high

These commands prove the source and package contracts plus the static website
build. They do not prove runtime skill selection, measured code improvement,
security, regulatory compliance, a multi-model assurance PASS, or release
authority. Release evidence must bind the exact tag and commit bytes.

## Catalog and enterprise material

- rulesets/README.md defines admission and status rules for future rulesets.
- docs/product-contract.md defines the product boundary and Kernel mapping.
- docs/enterprise/ contains the rollout, Academy, privacy, and planned review
  architecture without presenting planned capabilities as current runtime.
- site/ is the public Normkontor website deployed independently from the
  instruction-only plugin package.

## Independence notice

3A COD3X is an independent Normkontor ruleset by FYN Labs. It is not affiliated
with or endorsed by OpenAI, Anthropic, or Nous Research. Codex is a trademark
of OpenAI. Claude is a trademark of Anthropic. Compatibility references are
descriptive only; no third-party logos or partnership claims are used.

## License

MIT © 2026 FYN Labs / Mathias Heinke.
