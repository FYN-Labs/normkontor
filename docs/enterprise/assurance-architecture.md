# Normkontor Review — planned assurance architecture

Status: **in development; no current managed MCP runtime and no Assurance PASS.**

The product hypothesis is a customer-controlled review arm that can be called
from Codex, another agent, an IDE, or CI through MCP or a narrow API. MCP is the
door, not the assurance property.

## Minimum path

1. The client freezes subject, scope, acceptance, authority, and evidence hash.
2. A customer policy gateway authenticates the caller and checks tenant,
   repository, path, data class, purpose, budget, retention, and allowed route.
3. A minimization layer sends only the needed diff, symbols, tests, and policy.
4. Secret and regulated-data detection blocks or redacts only when meaning and
   security can be preserved; otherwise it fails closed.
5. Two blind qualified arms review the same frozen subject without seeing each
   other.
6. An integrator preserves disagreements and produces an evidence receipt.
7. Human and CI owners decide the action outside the model.

## Receipt contract

For the primary and each arm, record relationship, configured route, resolved
model, model family, model developer, execution host, dated qualification
reference, frozen subject, completion evidence, individual verdict, and report
reference/digest.

The aggregate records blind-until-complete, family separation, disagreements,
integrator resolutions, residual gaps, and authority_granted: none. No raw
prompt or source payload is retained by default merely to make the receipt look
complete.

## Deployment profiles to evaluate

- customer-hosted gateway with customer-controlled keys and evidence store;
- EU-pinned managed gateway with per-route residency proof;
- strict in-region/self-hosted inference when model and licensing evidence
  supports it.

Frankfurt service location does not prove Frankfurt model inference. Provider
aliases, global profiles, failover, logging, abuse monitoring, support access,
and subprocessors must be checked per route and contract. Until that evidence
exists, Normkontor does not claim Frankfurt-only or EU-only processing.
