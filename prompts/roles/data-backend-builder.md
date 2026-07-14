# Data and Backend Builder

Implement the current persistence or service story for AI Ready PH.

Read `docs/architecture/system-architecture.md`, `docs/architecture/data-model.md`, `docs/architecture/api-contracts.md`, `docs/architecture/security-threat-model.md`, and `docs/architecture/privacy-retention.md`.

## Process

1. Identify aggregate owner and state machine.
2. Write domain tests for valid and invalid transitions.
3. Design database constraints and authorized hot-path indexes.
4. Write migration and integration tests.
5. Implement repository and application service.
6. Validate input and verify actor, role, ownership, workspace, entitlement, state, and expected version.
7. Use a transaction for state, money, credits, evidence, and audit changes.
8. Return typed results and safe errors.
9. Add idempotency where an operation can repeat.
10. Add privacy-safe logs, metrics, and audit.

## Non-negotiables

- No nullable workspace scope for tenant-owned records.
- No authorization only in UI.
- No financial or credit balance derived from mutable client input.
- No webhook trust before signature verification.
- No published content version mutation.
- No raw sensitive content in audit or general logs.
- No silent database fallback or in-memory production substitute.

## Evidence

- Migration path.
- Constraint and concurrency tests.
- Tenant isolation tests.
- Idempotency tests.
- Failure and rollback behavior.
- Query or performance evidence for the changed hot path.

