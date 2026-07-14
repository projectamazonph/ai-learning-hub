# Security Threat Model

## Scope

Public web, learner app, workspaces, admin, curriculum, labs, uploads, AI gateway, commerce, email, object storage, jobs, analytics, and deployment.

## Assets

- Account and session credentials.
- Learner profile, progress, prompts, files, feedback, portfolio, and certificates.
- Workspace membership, policy, assignments, and analytics.
- Provider, payment, email, storage, database, and deployment credentials.
- AI usage credits and financial records.
- Assessment ground truth, rubrics, reviewer decisions, and certificate integrity.
- Curriculum and proprietary simulator content.

## Actors

- Anonymous visitor.
- Learner.
- Workspace manager.
- Reviewer, instructor, content editor, admin.
- Malicious account holder.
- External attacker.
- Compromised provider or dependency.
- Misconfigured internal operator.

## Trust boundaries

- Browser to application.
- Application to database and storage.
- Application to AI providers.
- Payment and email webhooks.
- Workspace-to-workspace separation.
- Learner private evidence to public portfolio.
- Content editor to published assessment.
- Preview or staging to production.

## Threats and controls

### Account takeover

Threats: credential stuffing, weak reset, session theft, verification abuse.

Controls:

- Strong password hashing or approved identity service.
- Email verification and short-lived reset token hashes.
- Secure, HttpOnly, SameSite cookies.
- Rate limits and risk logging.
- Session revoke and account-status checks.
- Optional multi-factor authentication for privileged roles.

### Broken authorization

Threats: direct-object access, role escalation, admin route exposure.

Controls:

- Server-side ownership and role checks on every read and mutation.
- Deny by default.
- Opaque identifiers are not authorization.
- Authorization integration and E2E tests.
- Audit privileged changes.

### Cross-tenant data leakage

Threats: missing workspace filter, export leakage, cache key collision, public share confusion.

Controls:

- Explicit workspace scope in repository and service APIs.
- Membership verification before query.
- Compound indexes and constraints supporting scoped access.
- Tenant-isolation tests for reads, writes, jobs, exports, storage, and search.
- No shared cache key without workspace identifier.

### Sensitive data sent to AI

Threats: learner pastes credentials, client records, regulated data, or hidden instructions.

Controls:

- Synthetic scenario data.
- Classification and secret detection before provider calls.
- Redaction and safe-alternative flow.
- Approved data-class policy per provider and purpose.
- Raw-content retention limit.
- No raw content in normal logs.

### Prompt injection and tool abuse

Threats: source content asks model to reveal secrets, change objective, or use unauthorized tool.

Controls:

- Treat uploaded and retrieved content as untrusted data.
- Separate instructions from source content.
- Tool allowlist and typed arguments.
- No external action in MVP.
- Future actions require authorization, explicit learner confirmation, idempotency, and rollback.
- Fault-injection evaluation suite.

### Payment fraud or webhook forgery

Threats: forged success, duplicate event, amount mismatch, return-URL trust.

Controls:

- Verify PayMongo signature on raw request body.
- Deduplicate provider event ID.
- Match expected product, price, currency, amount, and account.
- Grant entitlement only from server-confirmed payment.
- Idempotent payment state machine.

### Credit theft or cost abuse

Threats: concurrent overspend, replay, high-unit prompt, retry loop, shared key abuse.

Controls:

- Atomic reservation and immutable ledger.
- Per-user, workspace, route, and provider limits.
- Input and output caps.
- Bounded retry and cancellation.
- Cost alarms and global kill switch.

### Malicious upload

Threats: malware, parser exploit, oversized archive, content-type spoofing, public object exposure.

Controls:

- Allowlisted type, size, nesting, and count.
- Inspect content signature, not only extension.
- Malware scan and isolated parsing.
- Opaque private object keys and short-lived access.
- Parser version and timeout.
- Safe preview or text extraction.

### Assessment tampering

Threats: hidden ground truth leak, score manipulation, reviewer conflict, certificate forgery.

Controls:

- Separate learner source pack and hidden ground truth.
- Immutable submission, rubric, and evaluator versions.
- Privileged review authorization and audit.
- Certificate verification code and revocation state.
- No client-supplied score trust.

### Supply-chain compromise

Threats: malicious dependency, leaked CI secret, compromised build artifact.

Controls:

- Lockfile and dependency review.
- Secret scanning.
- Minimal workflow permissions.
- Protected production environment.
- Reproducible build record and source commit.
- Dependency update automation with test gates.

## Abuse cases to test

- Learner reads another learner's run by ID.
- Workspace manager reads private personal practice.
- Content editor publishes a rubric without calibration.
- Visitor forges a paid return URL.
- Same webhook arrives five times.
- Two live requests reserve the last credits concurrently.
- Uploaded text contains “ignore all previous instructions.”
- Model output includes unsupported citation.
- Cancel arrives while provider response completes.
- Admin deletes content referenced by an active certificate.

## Release blockers

- Unverified payment signature.
- Known default credential.
- Missing tenant-isolation coverage.
- Provider key exposed to browser or log.
- Live external action without confirmation and rollback.
- Public portfolio exposing blocked data.
- Certificate issuance without requirement transaction.

## Review cadence

- Threat model at every new external integration.
- Privileged role review quarterly.
- Dependency and secret checks in CI.
- Restore and incident drills before launch and at scheduled intervals.

