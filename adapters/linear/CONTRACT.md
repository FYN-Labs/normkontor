# Normkontor Linear adapter

Version: `1.0.0`.
Requires Kernel: `1.0.0`.

Import `../../standard/KERNEL.md`. The Kernel prevails over this adapter.

Linear is the one execution ledger. Each work item carries one role label from
the Kernel contract, a verified assignee mapping, and evidence references.

Never fork the Kernel, store policy, memory, or self-issued authority in
Linear. Never mark Done from a worker, reviewer, audit, or controller role.
Done requires the verified human Decision Owner and valid host- and
organization-scoped receipt required by the Kernel.
