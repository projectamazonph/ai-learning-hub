# Testing Strategy

## Principle

Tests lead implementation and protect behavior that matters. A green suite is evidence, not decoration.

## TDD loop

1. Define the user outcome and failure path.
2. Write the smallest failing test.
3. Implement the smallest passing change.
4. Run the focused test.
5. Inspect behavior in the real interface or boundary.
6. Adjust and refactor while green.
7. Run proportional verification.

## Test layers

### Domain unit tests

- Lab state transitions.
- Prompt and rubric scoring.
- Prerequisites.
- Entitlement resolution.
- Credit reservation and reconciliation.
- Payment and refund state machines.
- Content freshness priority.
- Data classification and redaction decisions.

Pure domain tests do not require Next.js, database, or network.

### Schema and contract tests

- Scenario, rubric, content, API, event, and provider payloads.
- Invalid enum, missing field, oversized input, unexpected field.
- Backward compatibility of versioned events.

### Database integration tests

- Migrations from empty and previous schema.
- Unique and foreign-key constraints.
- Transaction rollback.
- Concurrent credit reservation.
- Idempotent webhook and job handling.
- Tenant-scoped repository methods.

### Application integration tests

- Authorization and ownership.
- Enrollment and progress.
- Lab save, conflict, submit, evaluation, revision, and completion.
- Evidence and certificate issue.
- Payment-to-entitlement flow.
- Workspace seat and assignment behavior.

### Provider contract tests

- Request mapping.
- Streaming event mapping.
- Structured output validation.
- Timeout, cancellation, rate limit, 5xx, and schema failure.
- Usage and cost extraction.
- Sanitized fixtures only.

### Browser E2E

- Visitor to first artifact.
- Purchase to entitlement.
- Learner path to capstone and certificate.
- Data safety block and recovery.
- Provider outage degraded mode.
- Workspace invitation, assignment, and manager view.
- Admin content publish and audit.

### Security tests

- Cross-user and cross-workspace reads and writes.
- Privilege escalation.
- Webhook signature and replay.
- Upload type, size, nesting, and malicious content.
- Rate limits.
- Prompt injection and tool allowlist.
- Public portfolio privacy projection.

### Accessibility and visual tests

- Automated semantics and contrast.
- Keyboard and screen reader critical paths.
- 320, 390, 768, 1024, and 1280 px.
- Reduced motion and zoom.
- Screenshot regression for stable screens.

## Testing AI behavior

### CI

- Recorded and synthetic provider fixtures.
- Assert schema, evidence, policy, and score range.
- Never require exact prose.
- No live provider key for ordinary pull requests.

### Scheduled canary

- Small approved live set.
- Fixed model configurations.
- Quality, safety, cost, latency, and schema metrics.
- Alert on regression.

### Calibration

- Human-scored gold set.
- Criterion agreement.
- Pass/fail agreement.
- Critical false positives and negatives.
- Reviewer adjustment rate.

## Coverage

Coverage is a floor, not the target behavior. Initial domain thresholds:

- Lines: 80%.
- Statements: 80%.
- Functions: 80%.
- Branches: 75%.

Critical state machines, credits, payments, authorization, and certificate rules require explicit behavior matrices beyond percentage.

## Test data

- Synthetic only.
- Stable factory identifiers.
- No production export.
- No real person, employer, client, credential, or proprietary source.
- Dates and amounts chosen to exercise boundaries.

## Release suite

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

Production release later adds migration, integration, E2E, accessibility, security, smoke, backup, and live-service operator checks.

## Test log

Record date, source commit, command, result, environment, and meaningful limitation in `TEST_LOG.md`. Never mark pending checks as passing.

