# AGENTS.md

> Operational context for AI coding agents working on this repository.

## Project Identity

- **Product:** AI Ready PH Learning Hub
- **Repository:** `projectamazonph/ai-learning-hub`
- **Purpose:** Practice-first AI learning platform for Filipino VAs, freelancers, and business owners
- **Core promise:** Learn AI by completing real work, receiving evidence-based feedback, and building proof of competence

## Architecture Principles

1. **Server-component-first** — Minimize client components. Fetch on the server.
2. **Practice over lecture** — Every concept ends in a task that produces evidence.
3. **Competency-based progression** — Track 11 competencies at 5 mastery levels. Completion percentage is insufficient.
4. **Mobile-first classroom** — Core flows work at 390px. Desktop-only tasks are explicitly labeled.
5. **Auditable AI** — Every AI run stores model, prompt, rubric version, cost, and timestamp. Raw bodies have short retention.
6. **Safe by default** — Synthetic client data, PII detection, prompt-injection warnings, confirm-before-action for any external effect.

## Tech Stack

- **Framework:** Next.js with TypeScript strict mode
- **Database:** PostgreSQL + Prisma
- **Styling:** CSS Modules + design tokens (Field Manual / Operator's Notebook design system)
- **Auth:** Secure cookie-based sessions
- **Payments:** PayMongo (GCash, Maya, bank transfer)
- **Email:** Resend
- **Storage:** Object storage for resources, portfolios, certificates
- **Observability:** Sentry, structured logs, request correlation
- **Testing:** Vitest, Playwright, Lighthouse
- **CI:** GitHub Actions, gitleaks
- **Deployment:** Vercel-compatible

## AI Platform Layer

All AI interactions pass through an internal **AI Gateway** that owns:

- Provider adapters and model registry
- Streaming + structured output validation
- Timeouts, retries, fallbacks, circuit breakers
- Usage metering and credit reservation
- PII/secret detection before provider submission
- Prompt-injection warnings and policy enforcement
- Cost, latency, and failure telemetry

## Key Models

| Entity | Purpose |
|---|---|
| `User`, `Session` | Auth |
| `LearnerProfile`, `DiagnosticAttempt` | Onboarding |
| `LearningPath`, `PathEnrollment` | Outcome paths |
| `Competency`, `LearnerCompetency` | Skill tracking |
| `LabDefinition`, `LabScenario`, `LabRun` | Practice labs |
| `Rubric`, `RubricCriterion`, `Evaluation` | Assessment |
| `AIRequest`, `UsageLedger`, `CreditWallet` | AI cost |
| `Portfolio`, `PortfolioArtifact` | Evidence |
| `Workspace`, `WorkspaceMembership` | Business accounts |
| `ContentReview` | Content freshness |

## Directory Structure (Expected)

```
src/
  app/          — Next.js App Router pages
  components/   — Reusable UI components
  lib/          — Shared utilities, db client, ai gateway
  server/       — Server actions, API routes
  styles/       — CSS Modules, design tokens
prisma/
  schema.prisma
  seeds/
docs/
  design-brief.md
  architecture.md
tests/
  unit/
  e2e/
public/
.github/
  workflows/
```

## Data Rules

- No known default admin credentials — generate one-time setup token or require env-provided credentials.
- PayMongo webhook must have verified HMAC signature before processing live payments.
- Every tenant-scoped query requires `workspaceId` + verified membership.
- Content has `volatilityLevel` (EVERGREEN, SEMI_VOLATILE, VOLATILE) and `reviewDueAt` for freshness.

## Commit Convention

```
feat:     new feature
fix:      bug fix
docs:     documentation
test:     testing
chore:    maintenance, config
refactor: code restructuring without behaviour change
curriculum: lesson, lab, or rubric content changes
```

## Agent Rules

1. **No hardcoded AI provider keys** — use env variables or a secrets manager.
2. **No silent side effects** — announce any mutation before executing. Tier-1 actions require user confirmation.
3. **No AI-evaluated certificates** — a model should never be the sole judge of a high-stakes certificate produced by another model. Certification capstones require deterministic validation or human moderation.
4. **Keep raw prompt/output retention short** — configurable. Prefer hashes, metrics, and redacted evidence for long-lived records.
5. **Never expose provider credentials to the browser.**
6. **When in doubt, ask.**
