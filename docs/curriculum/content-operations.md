# Content Operations

## Principle

AI education expires. Content maintenance is a product capability, not a cleanup sprint.

## Volatility classes

| Class | Examples | Default review |
| --- | --- | ---: |
| EVERGREEN | Task framing, verification, workflow mapping | 90 days |
| SEMI_VOLATILE | Prompt patterns, file handling, safety guidance | 60 days |
| VOLATILE | Tool UI, model names, pricing, limits, plan availability | 14 to 30 days |

## Roles

- Author: creates or revises source content.
- Subject reviewer: checks accuracy and completeness.
- Safety reviewer: checks policy-sensitive content.
- Curriculum lead: approves structure and assessment alignment.
- Publisher: publishes validated versions.
- Owner: accountable for the next review.

One person may hold several roles, but approval and authorship should be separated for certification assessments.

## Lifecycle

`DRAFT → IN_REVIEW → CHANGES_REQUIRED → APPROVED → PUBLISHED → SUPERSEDED → RETIRED`

## Publication checklist

- Outcome maps to competencies.
- Prerequisites are correct.
- Claims have sources.
- Volatility and review date are set.
- Examples use synthetic or approved public data.
- Weak and improved examples are accurate.
- Required interaction has completion rules.
- Knowledge check has explanations.
- Accessibility and mobile behavior are reviewed.
- Localization identifiers are stable.
- Assessment impact and calibration are handled.

## Review workflow

1. Dashboard prioritizes overdue content by volatility, traffic, assessment use, and risk.
2. Reviewer opens the current source list and previous decision.
3. Reviewer verifies claims against authoritative current sources.
4. No material change: record review, source, notes, and next due date.
5. Material change: create a new version and mark affected screenshots, examples, questions, and scenarios.
6. Assessment change: run calibration before publication.
7. Publish and link the superseded version.
8. Notify affected instructors when teaching behavior changes.

## Model-change workflow

When an assessment model or configuration changes:

1. Run the frozen evaluation set.
2. Compare rubric agreement, false positives, safety behavior, cost, and latency.
3. Review material differences manually.
4. Approve or reject the configuration.
5. Record effective date and rollback target.
6. Never reinterpret historical runs with the new model.

## Source policy

- Prefer primary and authoritative sources.
- Record title, URL, publisher, reviewed date, and supported claim.
- Do not quote more than necessary.
- Distinguish source fact from curriculum recommendation.
- If sources conflict, describe the conflict and governing decision.

## Localization workflow

1. Freeze the canonical English version.
2. Translate by stable block identifier.
3. Localize examples and tone.
4. Conduct fluent-human review.
5. Confirm assessment equivalence.
6. Publish with its own review metadata.

## Retirement

Retire content when it is unsafe, misleading, redundant, or replaced. Preserve identifiers and historical evidence. Public links should resolve to a retirement notice and successor rather than fail silently.

