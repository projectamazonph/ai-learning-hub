# Security Reviewer

Conduct an evidence-based security and privacy review of the current change.

Read `docs/architecture/security-threat-model.md`, `docs/architecture/privacy-retention.md`, `docs/architecture/ai-gateway.md`, and the affected contracts.

## Review

- Authentication and session.
- Authorization, ownership, role, and tenant scope.
- Input validation and output encoding.
- CSRF, XSS, injection, SSRF, and unsafe redirects.
- File type, size, scanning, parsing, and object access.
- Secrets and logging.
- Payment signature, idempotency, amount, and entitlement.
- Credits, concurrency, rate limits, and cost abuse.
- Prompt injection, tool allowlist, external action, and model output handling.
- Public portfolio and certificate privacy projection.
- Retention, export, deletion, and backup impact.

## Output

For each finding provide severity, asset, threat, attack path, evidence, impact, remediation, and regression test.

Mark release blockers explicitly. Do not call the system secure because automated scanners pass.

