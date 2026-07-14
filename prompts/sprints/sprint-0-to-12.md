# Sprint Execution Prompts

Each prompt is complete for its sprint. Execute stories one at a time through the coding-agent and story workflow. Do not ask one agent to implement an entire sprint in one unreviewed change.

## Sprint 0: Product transfer and controls

Create the AI Ready PH repository foundation from the approved product plan. Establish `AGENTS.md`, deterministic workspace instructions, machine-readable project state, product and architecture source documents, threat model, curriculum standard, simulator standard, logs, templates, and CI. Record the reference architecture without copying Amazon-specific behavior, default credentials, unverified payment security, stale generated documentation, course-coupled pricing, or the old zero-AI rule. Write validation scripts or tests for any machine-readable source. Run typecheck, lint, tests, and build when code exists. Do not create or mutate a remote repository unless explicitly authorized.

Exit evidence: repository map, source documents, verified commands, open operator decisions, and no hidden inherited blocker.

## Sprint 1: Public shell and Prompt Workbench

Build the Operator's Notebook design tokens, accessible responsive shell, landing page, path catalog, lab catalog, pricing page, learner dashboard demo, and Prompt Workbench vertical slice. Implement pure prompt-brief scoring, composed prompt output, generic lab states, and scenario validation using tests first. Inspect 390 and 1280 px. Label unconnected production services honestly.

Exit evidence: working routes, unit tests, typecheck, lint, production build, mobile inspection, and exact deferred integration boundaries.

## Sprint 2: Identity, data, tenancy, and entitlements

Implement PostgreSQL and Prisma for identity, workspaces, curriculum identity, products, prices, purchases, entitlements, seats, credit wallets, and audit events. Add secure account lifecycle and first-admin setup without fallback password. Every workspace repository method requires workspace scope and membership. Write migrations, constraints, concurrency, authorization, entitlement, and tenant-isolation tests before services and UI.

Exit evidence: clean migration from empty database, rollback or forward-fix plan, tenant test matrix, entitlement matrix, and no client-side authorization dependency.

## Sprint 3: Diagnostic and first win

Implement the versioned eight-question readiness diagnostic, explainable recommendation engine, learner override, profile, dashboard next action, free AI Ready in 90 Minutes course, and role-specific first-win scenarios. Tests cover missing optional answers, versioning, override, time-fit recommendation, mobile resume, and privacy. A new mobile user must save a reviewed artifact within 20 minutes in a moderated usability run.

Exit evidence: diagnostic events, recommendation reasons, first artifact, usability timing, and observed friction.

## Sprint 4: Curriculum and competency engine

Implement versioned learning paths, courses, modules, lessons, content blocks, resources, prerequisites, quizzes, progress, competencies, evidence, and content review metadata. Content must publish through validated source data without page changes. Completion uses defined actions, not scrolling. Write content-schema, prerequisite, progress, version, and accessibility tests first.

Exit evidence: full foundation content import, validation report, source and freshness coverage, and course completion flow.

## Sprint 5: AI gateway and credits

Implement one provider-neutral AI gateway and one approved provider adapter. Add model and prompt registries, input classification, secret detection, version capture, streaming, structured output validation, timeout, cancellation, bounded retry, credit reservation, usage reconciliation, privacy-safe logs, cost alarms, provider kill switch, and demo degraded mode. CI uses fixtures. Live canary is separately gated.

Exit evidence: provider contract suite, concurrency-safe wallet, cost reconciliation, safety blocks, cancellation behavior, degraded mode, and no provider SDK outside the gateway.

## Sprint 6: Generic lab engine

Implement LabDefinition, LabVersion, ScenarioVersion, SourcePack, LabRun, LabRunStep, Submission, RubricVersion, Evaluation, and revision history. Support demo, practice, and assessment. Add optimistic concurrency, autosave confirmation, offline recovery, idempotent submit, operational evaluation failure, and admin scenario preview. Migrate Prompt Workbench to this engine without changing its learner outcome.

Exit evidence: state and recovery tests, published scenario without code change, mobile runner, admin validation, and historical version resolution.

## Sprint 7: Deliverable, research, and QA labs

Implement Brief-to-Deliverable Studio, Research and Verification Lab, and Output QA Lab through the shared engine. Start from rubrics, ground truth, and calibrated reference submissions. Add deterministic claim, format, defect, and evidence checks. Model evaluation must use structured criterion evidence and route low confidence or policy cases to human review.

Exit evidence: scenario packs, runner tests, evaluation fixtures, rubric calibration report, mobile inspection, and no model-only capstone pass.

## Sprint 8: Safety, workflow, and agent simulation

Implement Data Safety Clinic, Workflow Canvas, Automation and Agent Simulator, and ROI Mapper. The agent simulator uses synthetic tools and an immutable side-effect log. Add prompt-injection, permission, approval, retry, timeout, cost, and rollback fault injection. Workflow Canvas has a mobile ordered-step editor. ROI outputs expose assumptions and never present estimates as facts.

Exit evidence: validation and fault suite, mobile alternative, safety and cost review, and zero live external side effect.

## Sprint 9: Role paths, capstones, and portfolio

Publish the AI-Powered VA path first, then the freelancer path, and the validated business-owner subset. Implement assignments, capstone submissions, Portfolio Builder, privacy projections, Skills Passport, and selected evidence sharing. Block invented client, employer, certification, experience, or business results. Tests cover public/private transitions and workspace ownership.

Exit evidence: complete VA path, simulated client-week capstone, shareable safe portfolio, Skills Passport evidence, and privacy tests.

## Sprint 10: Motivation and certification

Implement mastery-aligned XP, meaningful streaks, badges, reviewer queue, live classes, certificate requirements, issue, PDF generation, verification, expiry, and revocation. Do not reward empty clicks. Certificate transaction requires eligible evidence and review. Test direct URL bypass, duplicate issue, revocation, public projection, and appeal history.

Exit evidence: approved capstone to verified certificate flow, audit trail, accessible PDF, and no completion-percentage shortcut.

## Sprint 11: Commerce, admin, and teams

Implement PayMongo checkout, raw-body signature verification, idempotent webhooks, amount and currency matching, receipt, discount, refund, and entitlement effects. Complete admin for content, scenarios, rubrics, models, costs, reviews, freshness, commerce, and audit. Enable workspace seats, invitations, assignments, policies, pooled credits, and privacy-safe analytics only after tenant tests pass.

Exit evidence: payment state suite, duplicate webhook test, refund test, admin audit coverage, team isolation, and successful test-mode operator flow.

## Sprint 12: Hardening and launch

Complete accessibility, 390 px, performance, low-bandwidth, abuse, upload, authorization, tenant, prompt-injection, payment, provider, backup, restore, deployment, rollback, support, incident, and observability gates. Run the 30-learner founding beta using the beta runbook. Instrument the first-artifact funnel and AI unit economics. Do not claim launch readiness until real restore, payment, email, provider canary, alert, and rollback checks are executed.

Exit evidence: release checklist, operator evidence, beta results, unresolved risks, source commit, rollback target, and factual go or no-go decision.
