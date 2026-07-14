# Documentation Map

The documentation is organized by decision owner. Read the smallest set that governs the task.

## Product

- `product/product-brief.md`: product thesis, audience, positioning, principles, and launch focus.
- `product/prd.md`: functional and non-functional requirements with acceptance criteria.
- `product/mvp-scope.md`: committed, conditional, and deferred scope.
- `product/personas-and-jobs.md`: user jobs, barriers, and success states.
- `product/user-journeys.md`: end-to-end learner, owner, and admin flows.
- `product/pricing-entitlements.md`: products, access, credits, seats, and state rules.
- `product/roadmap.md`: Sprint 0 through Sprint 12.
- `product/analytics-metrics.md`: events, funnels, targets, and unit economics.

## Curriculum

- `curriculum/curriculum-map.md`: common foundation and role paths.
- `curriculum/competency-framework.md`: eleven competencies and five mastery levels.
- `curriculum/lesson-standard.md`: micro-learning structure and content schema.
- `curriculum/assessment-certification.md`: quiz, lab, capstone, moderation, and certificate rules.
- `curriculum/content-operations.md`: source, review, freshness, localization, and retirement workflow.
- `curriculum/sample-lesson.md`: build-ready example lesson.

## UX

- `ux/information-architecture.md`: public, student, workspace, and admin route map.
- `ux/screen-specifications.md`: screen anatomy, states, actions, and responsive behavior.
- `ux/design-system.md`: Operator's Notebook tokens, typography, components, and anti-patterns.
- `ux/accessibility-mobile.md`: accessibility, 390 px, reduced-motion, and low-bandwidth standards.

## Simulators

- `simulators/simulator-platform.md`: shared lab engine architecture and lifecycle.
- `simulators/lab-run-state-machine.md`: states, events, guards, persistence, and recovery.
- `simulators/scenario-and-rubric-contracts.md`: authoring schemas and validation rules.
- `simulators/lab-specifications.md`: technical specification for all nine labs.
- `simulators/evaluation-system.md`: deterministic checks, model evaluation, calibration, and moderation.

## Architecture

- `architecture/system-architecture.md`: boundaries, components, data flow, and delivery topology.
- `architecture/data-model.md`: conceptual schema, ownership, constraints, and indexes.
- `architecture/api-contracts.md`: server actions, routes, jobs, and error envelope.
- `architecture/ai-gateway.md`: provider interface, metering, safety, retries, and observability.
- `architecture/security-threat-model.md`: assets, threats, controls, and release gates.
- `architecture/privacy-retention.md`: data classes, consent, retention, export, and deletion.
- `architecture/testing-strategy.md`: TDD, test layers, model evaluation, and release suite.
- `architecture/observability-performance.md`: logs, traces, alerts, budgets, and cost monitoring.

## Marketing

- `marketing/website-copy.md`: complete public website copy.
- `marketing/email-sequence.md`: welcome, activation, conversion, and completion email copy.
- `marketing/beta-launch-copy.md`: closed-beta recruitment, social posts, and FAQ responses.

## Operations

- `operations/release-checklist.md`: code, security, data, content, and operator gates.
- `operations/incident-response.md`: severity, containment, communication, and review.
- `operations/provider-outage.md`: live-AI degradation and recovery.
- `operations/backup-restore.md`: database and object recovery procedure.
- `operations/content-review-runbook.md`: content freshness operation.
- `operations/beta-runbook.md`: 30-learner beta execution.

## Precedence

If documents conflict:

1. `AGENTS.md` governs agent behavior.
2. Accepted decisions in `DECISIONS.md` govern architecture.
3. `product/prd.md` governs product requirements.
4. Domain-specific documents govern implementation detail.
5. `PROJECT_STATE.yaml` governs current implementation status.

