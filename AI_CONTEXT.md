# AI Context

## Mission

Build AI Ready PH, a mobile-first learning and simulation platform that helps beginners, virtual assistants, freelancers, and business owners use AI safely and effectively in real work.

## Current phase

Sprint 0 and Sprint 1 starter package. The public experience and Prompt Workbench vertical slice are runnable. Production services remain intentionally behind documented interfaces.

## Product spine

- Shared Practical AI Foundations.
- Role paths for VAs, freelancers, and business owners.
- Realistic synthetic scenarios.
- Guided labs with save, resume, submit, grade, and revise states.
- Competency evidence, portfolios, Skills Passport, and verified certificates.
- Content freshness and model-version controls.

## MVP labs

1. Prompt Workbench.
2. Brief-to-Deliverable Studio.
3. Research and Verification Lab.
4. Output QA Lab.
5. Data Safety Clinic.

Workflow Canvas, Agent Simulator, ROI Mapper, and Portfolio Builder follow when the generic lab engine is stable.

## Stack

- Next.js 16, React 19, TypeScript strict.
- Zod for boundary validation.
- Vitest for domain tests.
- PostgreSQL and Prisma planned in Sprint 2.
- Provider-neutral AI gateway planned in Sprint 5.
- PayMongo, Resend, object storage, Sentry, structured logs, and durable jobs in later sprints.

## Non-negotiables

- Test first.
- Preserve content.
- No placeholders in delivered scope.
- No secret searching.
- No unrequested GitHub or deployment actions.
- No real private data in scenarios.
- No model-only capstone certification.
- Mobile-first and accessible.
- AI usage must be metered, auditable, and cost-capped.

## Sources of truth

- Product: `docs/product/prd.md`.
- Curriculum: `docs/curriculum/curriculum-map.md`.
- Simulators: `docs/simulators/simulator-platform.md`.
- Architecture: `docs/architecture/system-architecture.md`.
- UX: `docs/ux/design-system.md`.
- Delivery: `docs/product/roadmap.md` and `PROJECT_STATE.yaml`.
- Agent behavior: `AGENTS.md`.

