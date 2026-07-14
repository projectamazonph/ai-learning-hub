# Backup and Restore Runbook

## Scope

- PostgreSQL database.
- Object storage manifests and critical versioned assets.
- Deployment and configuration references.
- Encryption key references and recovery process, not plaintext keys.

## Backup policy

- Automated daily database backup.
- Point-in-time recovery when supported.
- Versioned object storage or protected replication for critical assets.
- Encrypted backup at rest and in transit.
- Backup account separated from ordinary application access.
- Retention schedule and expiry documented.
- Failure alert reaches an active operator.

## Restore drill

1. Select a recent backup according to drill policy.
2. Create an isolated recovery environment.
3. Restore database without connecting application traffic.
4. Verify schema version and migration history.
5. Verify record counts for users, content, runs, payments, evidence, and audit.
6. Verify referential integrity and required indexes.
7. Restore or reconnect object manifests.
8. Sample content, scenario, portfolio, and certificate objects by checksum.
9. Start application with non-production external services.
10. Run read-only smoke and selected integrity tests.
11. Record recovery point, recovery time, failures, and operator steps.
12. Destroy isolated recovery data under policy.

## Production recovery

- Incident commander approves the recovery point.
- Pause writes or route to maintenance state.
- Take a final forensic snapshot when safe.
- Restore to a new target where possible.
- Validate before switching traffic.
- Reconcile payments, credit reservations, jobs, and provider requests after the recovery point.
- Communicate data window and affected actions.

## Integrity queries

Verify:

- No payment without purchase relationship.
- No active entitlement without valid source or admin audit.
- No negative settled credit wallet.
- No completed run without passing evaluation and evidence transaction.
- No certificate without requirements and evidence.
- No workspace-scoped record missing its workspace.
- No published content reference to missing version.

## Evidence

The drill record includes date, source backup, target environment, operator, source commit, recovery point, recovery time, checks, issues, and corrective action. Never include credentials.

