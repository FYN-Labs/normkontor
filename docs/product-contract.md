# Normkontor 3A product contract

Status: source candidate for plugin version 0.4.0.

## Canonical owners

The product has exactly two behavioral owners:

- plugins/3a-cod3x/skills/3a-cod3x/SKILL.md owns implementation guidance.
- plugins/3a-cod3x/skills/3a-cod3x-review/SKILL.md owns the bounded phase review.

Codex and Claude manifests, marketplace files, eval cases, documentation, and
the website may route to or describe these owners. They must not redefine the
decision ladder, assurance trigger, authority boundary, or verdict mapping.

## Product boundary

3A COD3X is an instruction-only plugin. The accepted plugin topology contains
two host manifests, two skills, and two OpenAI UI metadata files. It contains:

- no executable plugin code;
- no hook, daemon, background call, MCP server, or model router;
- no telemetry, state store, receipt database, or approval system;
- no credentials, provider configuration, or authority grant.

The planned Normkontor Review service is a separate future product. Its
architecture cannot be smuggled into this plugin merely because the review
skill describes the contract it would need to satisfy.

## Behavioral contract

The implementation skill orders decisions as need, reuse, native capability,
already available capability, reduction, vetted upstream, then the smallest
complete new code. It protects security, validation, data-loss handling,
accessibility, privacy, explicit requirements, and proportionate tests.

The review skill runs at material phase or package boundaries, or when scope,
production code, owners, state, or repair loops grow. It is read-only by
default and never substitutes for correctness, security, performance, or
release review.

For meaningful diffs, the review also records structural concept growth:
branches, flags, modes, optionality or casts, silent fallbacks, wrappers,
avoidable sequencing, and partial-update windows. It prefers a corrected owner,
invariant, boundary, or default path that deletes concepts. File size is a stop
signal, not an automatic split rule; extraction is justified only when it
creates a clearer responsibility boundary and reduces total conceptual load.

## Assurance trigger and verdict

The owning project decides whether a package is material. If it is material
and concerns cross-component architecture, inference/model/provider routing,
an eval or grader, CAO or equivalent audit, or another audit package, the
adversarial assurance gate is required.

A valid gate has one primary and two additional blind, author-independent arms
against the same frozen subject. Primary and arms must resolve to three
distinct, project-qualified model families from distinct developers. Each arm
records relationship, configured route, resolved model, model family,
developer, execution host, dated qualification reference, frozen subject,
completion evidence, individual verdict, and report reference.

Verdict mapping:

- accepted material finding or unresolved P0/P1: REVISE;
- required assurance blocked or unverified: STOP_AND_REFRAME;
- assurance not required and no material finding: NOT_REQUIRED may PASS;
- required assurance satisfied and no material finding: SATISFIED may PASS.

No verdict grants model access, credentials, private-data transfer, merge,
deploy, publish, spend, release, or future autonomy.

## Evidence layers

Evidence is classified independently:

1. source: files and static contract;
2. unit: isolated executable logic;
3. integration: cooperating components;
4. runtime: real host discovery, invocation, and behavior;
5. package: installable host artifact;
6. assurance: qualified independent arms on a frozen subject;
7. release: exact tagged bytes plus release-authority decision.

One green layer never implies another. The public YAML corpus specifies
behavioral cases; it becomes runtime evidence only when a host records exact
skill selection and output against those cases.

## Compatibility and independence

3A COD3X targets Codex, Claude Code, Hermes Agent, and compatible Agent Skills
hosts through their native skill surfaces. It is independently published by
Normkontor/FYN Labs and is not official, affiliated, sponsored, or endorsed by
those host vendors.
