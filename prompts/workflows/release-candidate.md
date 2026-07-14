# Validate a Release Candidate

Validate the current AI Ready PH source as a release candidate. Do not deploy unless explicitly authorized.

1. Read `docs/operations/release-checklist.md` and every runbook affected by the release.
2. Resolve source commit, release scope, migrations, content versions, model configurations, flags, and rollback target.
3. Run the full code, test, build, security, migration, E2E, accessibility, and performance suite available in the repository.
4. Verify tenant isolation, payment signatures, credit reconciliation, provider failure, saved work, public privacy projections, and certificate rules when affected.
5. Confirm real operator checks that cannot be simulated and mark them pending until executed.
6. Produce a release evidence table.

Do not mark pending operator checks as passing. Do not deploy, migrate production, send email, process payment, or change provider configuration without explicit authorization.

Return release scope, source, pass and fail evidence, blockers, warnings, rollback readiness, operator checklist, and final go or no-go recommendation.

