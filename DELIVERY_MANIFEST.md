# Delivery Manifest

## Package

**Product:** AI Ready PH Learning Hub  
**Version:** 0.1.0  
**Prepared:** 2026-07-14  
**Status:** validated starter vertical slice

This package is a GitHub-ready foundation for a hands-on AI learning platform
serving beginners, Filipino virtual assistants, freelancers, and business
owners. It combines an executable web scaffold with the product decisions,
simulator contracts, content system, marketing copy, and implementation prompts
needed to continue delivery without reconstructing the strategy.

## Included deliverables

| Area | Delivered |
| --- | --- |
| Product | Brief, PRD, MVP boundary, personas, journeys, pricing, roadmap, metrics |
| Curriculum | Path map, competencies, lesson standard, assessment rules, sample lesson, content operations |
| UX | Information architecture, screen specifications, design system, mobile and accessibility rules |
| Simulators | Shared platform, run state machine, scenario/rubric contracts, nine lab specifications, evaluation system |
| Architecture | System and data models, API and AI gateway contracts, security, privacy, testing, observability |
| Marketing | Complete website copy, lifecycle emails, closed-beta campaign and survey |
| Operations | Release, incident, provider outage, backup, content review, and beta runbooks |
| Agent delivery | Governance, coding prompts, role prompts, workflow prompts, and Sprint 0–12 prompts |
| Web scaffold | Next.js shell, public pages, demo dashboard, lab catalog, interactive Prompt Workbench |
| Quality | CI, strict typing, linting, unit tests, production build, route smoke checks, dependency audit |

## Working routes

- `/`
- `/paths`
- `/labs`
- `/labs/prompt-workbench`
- `/pricing`
- `/dashboard`

## Verified evidence

- `npm run verify` passed.
- 3 test files and 11 unit tests passed.
- The production build prerendered all seven application routes, including the
  framework not-found route.
- Six product routes returned HTTP 200 from the production server.
- `npm audit --audit-level=moderate` reported zero vulnerabilities.

## Intentional boundaries

Authentication, database persistence, payments, live model calls, object
storage, email delivery, and credential verification are specified but not
misrepresented as implemented. Their delivery sequence and acceptance gates are
defined in the roadmap and Sprint prompts.

## Start here

1. Read `README.md`.
2. Read `AGENTS.md` before assigning coding work.
3. Choose the relevant source document through `docs/README.md`.
4. Use the smallest applicable prompt from `prompts/README.md`.
5. Run `npm install` and `npm run verify` before changing the scaffold.
