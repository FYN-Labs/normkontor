# Normkontor control model

Normkontor adds a decision chain to the client's existing issue tracker, Git,
CI, identity, security, and GRC systems. It does not replace those native
owners with a second platform.

## Stages

1. **Stage 0.5 — Contract:** scope, owner, acceptance, exclusions, evidence,
   risk, rollback, and human gate are complete enough to execute.
2. **Stage 0.65 — Runtime readiness:** environment, data class, capability,
   provider route, budget, stop conditions, and reporting are actually usable.
3. **Worker:** the agent works only inside the frozen contract and reports
   changed artifacts, commands, results, and residual gaps.
4. **CAO / independent audit owner:** reviews evidence and returns PASS,
   REJECT, or PARK without building the change or marking it released.
5. **Controller:** integrates findings, preserves disagreement, and routes the
   package to the correct decision authority.
6. **Human gate:** the named company role decides actions that policy does not
   delegate.

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

Worker, reviewer, CAO, controller, and model do not create their own authority.
A clean report is evidence, not permission to merge, deploy, publish, spend,
change production, or expand future autonomy.
