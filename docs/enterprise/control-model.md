# Normkontor control model

`standard/KERNEL.md` is the normative owner for this model. Linear is the
single execution ledger; Git, CI, IAM, and host controls remain external
enforcement owners. Normkontor forbids and detects authority drift, but an
instruction cannot technically prevent an action.

## Stages

1. **Stage 0.5 — Contract:** scope, owner, acceptance, exclusions, evidence,
   risk, rollback, and human gate are complete enough to execute.
2. **Stage 0.65 — Readiness:** environment, data class, capability, budget,
   stop conditions, and reporting are actually usable.
3. **Worker:** the agent works only inside the frozen contract and reports
   changed artifacts, commands, results, and residual gaps.
4. **CAO / independent audit owner:** reviews evidence and returns PASS,
   REJECT, or PARK without building the change or marking it released.
5. **Controller:** integrates findings, preserves disagreement, and routes the
   package to the correct decision authority.
6. **Decision Owner:** a verified human with a valid Decision Receipt decides
   authority verbs that policy does not delegate.

## Mandatory assurance classification

The company classifies materiality. Once a package is classified as material,
the cross-family assurance gate is mandatory when it concerns cross-component
architecture, inference/model/provider routing, an eval or grader, CAO or
equivalent audit, or another audit package. It is not required for every small
code change and it is never a ceremonial second answer.

Primary and two additional reviewer arms must be blind, author-independent,
qualified for the decision class, and separated across three resolved model
families and developers. Failure, identity uncertainty, family collapse, or
incomplete output blocks assurance PASS. The integrator resolves findings but
does not average verdicts.

## Authority boundary

Authority is role, runtime, resolved model, capability, verified identity, and
separately issued authority. No field implies another. Worker, reviewer, CAO,
controller, and model do not create their own authority. A clean report is
evidence, not permission to merge, deploy, publish, spend, change production,
or expand future autonomy. Only the verified human Decision Owner with a valid
Decision Receipt may set Done; agents provide evidence and a close proposal.
