# Normkontor ruleset catalog

Normkontor publishes durable, reusable operating rules for agentic systems.
The catalog is intentionally small. A ruleset is admitted only when it has an
observed problem, one canonical owner, a bounded scope, realistic eval cases,
an evidence contract, and a clear deletion or replacement path.

## Current catalog

### Normkontor 3A / 3A COD3X

- Status: public source candidate
- Plugin: plugins/3a-cod3x
- Skills: 3a-cod3x and 3a-cod3x-review
- Scope: native-owner-first implementation and phase-bound simplicity review
- Runtime: none
- Authority: none beyond the host and user permissions already in force
- Evidence: static source/package gates; runtime and assurance remain separate

## Admission gate

Every future ruleset must state:

1. the repeated failure it corrects;
2. why an existing Normkontor rule cannot own the correction;
3. its exact host and authority boundaries;
4. positive and negative behavioral cases;
5. evidence layers and explicit non-claims;
6. version, provenance, maintainer, and rollback or removal path.

Do not add empty catalogs, speculative agents, or duplicate doctrine merely to
make Normkontor look larger. One proven ruleset is stronger than ten names.
