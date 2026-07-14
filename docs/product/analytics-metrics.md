# Analytics and Metrics

## North star

**Weekly verified work artifacts produced by active learners.**

An artifact qualifies when it is tied to a versioned task, has required checks, and reaches reviewed, graded, or moderated status.

## Funnel

1. Public visitor.
2. Diagnostic started.
3. Diagnostic completed.
4. Account created.
5. First lab started.
6. First artifact reviewed.
7. Paid offer viewed.
8. Checkout started.
9. Purchase completed.
10. Path activated.
11. Capstone started.
12. Evidence approved.
13. Certificate issued.

## Learning metrics

- Baseline and current competency level.
- Time to first artifact.
- Lesson and lab completion.
- Revision rate.
- Rubric improvement from first to final submission.
- Hint use and common failure categories.
- Capstone submission, revision, and approval.
- Certificate verification views.

## Engagement metrics

- Activated learners per week.
- Week-one and week-two return.
- Meaningful learning days, not raw login streak.
- Last meaningful action.
- Mobile versus desktop completion.
- Low-bandwidth mode use.

## AI operations metrics

- Requests and successful runs.
- Provider, model, and configuration.
- Input and output units.
- Estimated and reconciled cost.
- Latency percentiles.
- Retry, timeout, cancellation, and failure.
- Safety block and learner resolution.
- Demo-to-live conversion.
- Cost per active learner and completed lab.

## Commercial metrics

- Diagnostic-to-registration conversion.
- Free-to-paid conversion.
- Revenue by offer and channel.
- Payment-method mix.
- Refund rate and reason.
- Gross margin after AI and human-review costs.
- Workspace seat activation and utilization.
- Annual renewal and expansion.

## Initial targets

| Metric | Target |
| --- | ---: |
| Registration to diagnostic completion | 60% or higher |
| First lab completed in first session | 50% or higher |
| Median time to first artifact | Under 20 minutes |
| Week-two return | 35% or higher |
| Paid path completion | 45% or higher |
| Capstone starter to portfolio artifact | 70% or higher |
| AI inference cost as recognized revenue | 5% or lower |
| Live AI run failure after safe retry | Below 1% |

## Event requirements

Each event includes:

- Event name and version.
- Timestamp and request correlation ID.
- Anonymous or authorized user identifier.
- Workspace identifier when relevant.
- Course, lesson, lab, scenario, and version identifiers when relevant.
- Device class and locale.
- No raw private prompt, file content, credential, or sensitive personal data.

## Core event names

- `diagnostic_started_v1`.
- `diagnostic_completed_v1`.
- `path_recommended_v1`.
- `lesson_completed_v1`.
- `lab_run_started_v1`.
- `lab_run_saved_v1`.
- `lab_run_submitted_v1`.
- `lab_run_evaluated_v1`.
- `lab_revision_completed_v1`.
- `portfolio_artifact_published_v1`.
- `checkout_started_v1`.
- `purchase_completed_v1`.
- `certificate_issued_v1`.
- `safety_input_blocked_v1`.

Event naming changes require a version instead of silent semantic drift.
