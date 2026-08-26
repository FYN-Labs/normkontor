# Releasing a Normkontor ruleset

This playbook is fail-closed. A source publication is not a release PASS.

The release process is subordinate to `standard/KERNEL.md`. Release evidence
does not grant authority. Publication or Done requires the verified human
Decision Owner and a valid Decision Receipt within host and organization
constraints.

## 1. Freeze the candidate

1. Update the plugin version in both host manifests, both skills, and UI
   metadata where applicable.
2. Run the dependency-free repository tests.
3. Run both Agent Skills validators, the Codex plugin validator, and Claude
   strict validation for plugin and marketplace.
4. Run isolated install, discovery, invocation, and behavioral cases for each
   claimed host. Record unavailable stages as BLOCKED or UNVERIFIED.
5. Commit the complete candidate and record its 40-character commit SHA.

## 2. Tag exact bytes

Create an annotated tag only after the intended candidate is frozen. The tag
name is ruleset-scoped once more than one plugin ships; until then v0.4.0 is
accepted for 3A COD3X.

Do not copy or rename AAA Code v0.2.1 or v0.3.0 receipts. They remain provenance
in the legacy repository and do not prove the renamed product.

## 3. Generate release evidence from the tag

The receipt is generated after the tag and must include:

- schema: normkontor-ruleset-release-evidence/v1;
- ruleset and release version;
- frozen_ref, frozen_commit, and annotated tag object;
- every claimed subject path and its SHA-256 from git show frozen_ref:path;
- validator identity, source digest, command, date, output digest, and status;
- exact host/version and acceptance stage reached;
- exact selected skill-id set per behavioral case;
- claims derived from passed gates and an explicit not_claimed list;
- residual gaps and authority_granted: none.

CI must fetch full tag history. Receipt validation resolves the tag, verifies
the commit, and hashes tag bytes rather than the current checkout.

## 4. Assurance receipt

When required, primary and both reviewer arms record:

- relationship;
- configured route and resolved model;
- model family and developer;
- execution host;
- dated decision-class qualification reference;
- frozen subject/hash;
- completion evidence;
- individual verdict and report reference/digest.

The aggregate records blind_until_both_complete, family separation,
disagreements, integrator resolution, residual gaps, and authority_granted:
none. Invalid or missing arms cannot be represented as executed evidence.

## 5. Publish without widening claims

Only claims derived from passed gates are published. Source tests do not prove
runtime selection; runtime selection does not prove better code; simplicity
review does not certify security or compliance; assurance does not itself
authorize release.

Stable Hermes raw URLs are published only after the tag and receipt exist.
