# Delivery Roadmap

Every sprint uses tests first, the smallest passing implementation, observation, adjustment, and documented outcomes.

## Sprint 0: Product transfer and controls

- Establish the new repository and source-plan record.
- Create governance, workspace contract, source documents, threat model, and Definition of Done.
- Remove inherited Amazon-specific behavior and unsafe default credentials.
- Decide initial provider, beta audience, access, credit, and moderation policy.

Exit: approved scope, deterministic repository startup, no inherited blocker hidden by rebranding.

## Sprint 1: Public shell and vertical slice

- Build Operator's Notebook design tokens and responsive shell.
- Publish landing, paths, pricing, dashboard demo, and lab catalog.
- Implement Prompt Workbench domain scoring and interaction.
- Implement lab state-machine and scenario contract tests.

Exit: typecheck, lint, tests, build, and 390 px inspection pass.

## Sprint 2: Identity, data, tenancy, and entitlements

- PostgreSQL and Prisma.
- Auth and account lifecycle.
- First-admin setup.
- Workspaces and membership guards.
- Products, entitlements, seats, wallets, and audit log.

Exit: migrations, authorization, entitlement matrix, and tenant-isolation tests pass.

## Sprint 3: Diagnostic and first win

- Readiness diagnostic and recommendation engine.
- Learner profile.
- Free starter course.
- Role-specific first-win scenarios.

Exit: a new mobile learner saves a reviewed artifact within 20 minutes.

## Sprint 4: Curriculum and competency engine

- Course, module, lesson, resource, quiz, prerequisites, and progress.
- Competencies and evidence.
- Content authoring validation, versions, and review dates.

Exit: editors publish the foundation course without code changes.

## Sprint 5: AI gateway and usage ledger

- Primary provider adapter.
- Streaming, structured output, timeout, cancellation, retries, and failure states.
- Credit reservation and reconciliation.
- Secret and sensitive-data detection.
- Usage, cost, latency, safety, and error telemetry.

Exit: no live request bypasses safety, version, credit, or audit capture.

## Sprint 6: Generic lab engine

- Persistent scenarios, source packs, run steps, prompts, rubrics, evaluations, and revisions.
- Demo, practice, and assessment modes.
- Autosave, resume, conflict, and offline recovery behavior.
- Convert Prompt Workbench to the full engine.

Exit: an admin publishes a validated scenario without application-code changes.

## Sprint 7: Deliverable, research, and QA labs

- Brief-to-Deliverable Studio.
- Research and Verification Lab.
- Output QA Lab.
- Evidence-linked feedback and revision comparison.

Exit: frozen evaluation fixtures reproduce expected criterion ranges.

## Sprint 8: Safety and workflow labs

- Data Safety Clinic.
- Workflow Canvas.
- Automation and Agent Simulator.
- ROI and Opportunity Mapper.

Exit: failures, unsafe data, approvals, escalation, and rollback decisions are testable.

## Sprint 9: Role paths and portfolio

- Publish VA path.
- Publish freelancer path.
- Validate the business-owner beta subset.
- Capstones, assignments, submissions, portfolios, and Skills Passport.

Exit: one full path ends in shareable verified evidence.

## Sprint 10: Motivation and certification

- Mastery-aligned XP, badges, and streaks.
- Human review queue.
- Certificate requirements, issue, verify, revoke, and export.
- Live classes and recordings.

Exit: no certificate can issue through completion percentage or unreviewed model score alone.

## Sprint 11: Commerce, admin, and teams

- PayMongo checkout, verified webhooks, receipts, refunds, and discounts.
- Full content, scenario, model, cost, learner, review, and freshness admin.
- Workspace seats, policies, assignments, pooled credits, and analytics.

Exit: commerce and workspace state machines pass integration and E2E tests.

## Sprint 12: Hardening and launch

- Accessibility, mobile, performance, low-bandwidth, security, and privacy review.
- Abuse, upload, prompt-injection, tenant, payment, and rate-limit testing.
- Backups, restore drill, deployment, rollback, incidents, support, and alerts.
- Closed-beta instrumentation and launch assets.

Exit: every code and operator gate in `docs/operations/release-checklist.md` passes.

