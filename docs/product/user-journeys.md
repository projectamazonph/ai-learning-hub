# User Journeys

## Journey A: Visitor to first useful artifact

1. Visitor lands on the VA outcome page.
2. Visitor sees proof-oriented positioning and chooses “Start the free diagnostic.”
3. Visitor answers eight questions.
4. System recommends Practical AI Foundations plus the VA path and explains why.
5. Visitor creates an account to save the result.
6. Dashboard shows one next action: the weekly client update Prompt Workbench scenario.
7. Learner loads synthetic notes and builds the task brief.
8. Readiness evaluation identifies missing quality checks and data boundaries.
9. Learner revises to the Ready band.
10. The composed prompt and rubric result become the first evidence record.
11. Dashboard recommends the next foundation lesson.

Target: complete within 20 minutes on a phone.

## Journey B: Paid path completion

1. Learner reviews the path outcome, curriculum, labs, access period, credits, and certificate rules.
2. Learner completes PayMongo checkout.
3. Verified webhook creates payment, purchase, entitlement, receipt, and enrollment once.
4. Learner follows module prerequisites and completes checks.
5. Labs save run state and evidence.
6. Learner sees competency progress tied to artifacts.
7. Capstone unlocks after requirements are met.
8. Learner submits the capstone.
9. Automated checks prepare a reviewer packet.
10. Reviewer approves, requests revision, or rejects with criterion feedback.
11. Approved evidence updates the Skills Passport and issues a certificate.

## Journey C: Failed live AI run

1. Learner confirms a live run and sees the estimated credit range.
2. System reserves credits.
3. Provider times out.
4. Gateway retries only when the failure is retry-safe.
5. If unsuccessful, the run enters `FAILED_RETRYABLE` or `FAILED_FINAL`.
6. Reservation is reconciled to actual provider usage.
7. Learner sees a plain-language status and can retry, use demo mode, or continue editing.
8. Static paid curriculum remains available.

## Journey D: Risky data detected

1. Learner adds a source file or text.
2. Boundary validation detects a likely credential, government identifier, or sensitive customer detail.
3. Provider transmission is blocked.
4. Learner sees the data category, why it is risky, and a redaction action.
5. Learner edits or replaces the content.
6. A safety event records category and decision without copying the secret into logs.

## Journey E: Business manager assigns training

1. Manager buys five seats and creates a workspace.
2. Manager accepts the workspace data policy and invites members.
3. Members retain personal accounts and join the workspace.
4. Manager assigns Practical AI Foundations and a due window.
5. Members see personal and assigned learning separately.
6. Manager sees enrollment, activity, completion, and competency summaries allowed by policy.
7. Private prompts and practice files remain private.
8. Pooled credit usage is visible by aggregate and member allowance.

## Journey F: Content becomes stale

1. A volatile tool lesson reaches its review date.
2. Admin review queue prioritizes it.
3. Editor checks the authoritative source and records the review.
4. If behavior changed, editor creates a new lesson version and updates volatile captures.
5. If an assessment changed, calibration runs before publication.
6. Historical learner evidence remains tied to the original version.
7. Retired content points learners to the successor.

