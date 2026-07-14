# Release Checklist

No release is complete because code exists. The operator must complete the real service checks.

## Scope and source

- Release title, source commit, environment, owner, and change summary recorded.
- Database and content migrations identified.
- Feature flags and rollback target recorded.
- User-facing copy and support notes approved.

## Code quality

- Typecheck passes.
- Lint passes.
- Unit and schema tests pass.
- Integration tests pass.
- Browser E2E critical paths pass.
- Production build succeeds.
- Dependency and secret scans pass.
- No skipped critical test or unexplained TODO in release scope.

## Data

- Migration reviewed and tested from current production version.
- Backward compatibility or maintenance window documented.
- Backup completed before destructive change.
- Restore drill remains within policy.
- Seed and fixture data contain no real private data.

## Security and privacy

- Authorization changes reviewed.
- Tenant-isolation suite passes.
- Payment signature and idempotency tests pass when commerce changes.
- Upload and provider-input controls pass when file or AI behavior changes.
- No credential exposed in bundle, log, source map, or screenshot.
- Content Security Policy and required domains reviewed.
- Retention and deletion impact reviewed.

## AI runtime

- Model configuration approved and effective.
- Frozen evaluation set passes.
- Cost and latency remain within threshold.
- Structured output and failure tests pass.
- Credits reserve and reconcile.
- Provider kill switch tested.
- Demo or degraded mode works.

## Curriculum and assessment

- Content versions published intentionally.
- Sources and reviewed dates present.
- Scenario and rubric versions immutable.
- Calibration complete when assessment behavior changes.
- Historical evidence still resolves.
- Reviewer instructions updated.

## UX

- Critical screens inspected at 390 and 1280 px.
- Keyboard critical path passes.
- Screen-reader landmarks, labels, status, and errors checked.
- Reduced motion works.
- No horizontal overflow.
- Empty, loading, failure, and degraded states checked.

## Services

- Production environment variables set and scoped.
- Database connection verified.
- Object storage read and write verified.
- Email send and delivery webhook verified.
- Payment test or controlled live verification completed.
- AI provider canary completed.
- Logging, error tracking, metrics, and alerts verified.
- Queue and scheduled jobs verified.

## Deployment

- Preview evidence reviewed.
- Production deployment initiated through approved workflow.
- Migration applied once.
- Smoke tests pass.
- Release marker and source maps recorded.
- Support channel and incident owner active.

## Rollback

- Application rollback command or workflow verified.
- Database rollback or forward-fix strategy explicit.
- Content and model configuration rollback identified.
- Payment and entitlement operations remain idempotent during rollback.
- Rollback does not restore deleted private content improperly.

## Post-release

- Watch errors, latency, payments, AI cost, queue, and activation funnel.
- Confirm first real account, lab save, and email.
- Record issues in `ERROR_LOG.md`.
- Update `PROJECT_STATE.yaml`, `CHANGELOG.md`, `BUILD_LOG.md`, and `TEST_LOG.md`.
- Conduct release review after the monitoring window.

