# Lab Specifications

## 1. Prompt Workbench

### Learning outcome

Build a complete task brief and improve it based on readiness feedback.

### Inputs

- Objective.
- Audience.
- Context and source description.
- Constraints and exclusions.
- Output format.
- Quality checks.
- Privacy and safety boundary.

### Interaction

1. Read scenario.
2. Complete seven brief fields.
3. Receive deterministic criterion feedback.
4. Review composed prompt.
5. Optionally run against synthetic source data.
6. Compare output to checks.
7. Revise and submit.

### Deterministic checks

- Required fields present.
- Minimum useful specificity.
- Output format and quality checks exist.
- Data boundary exists.
- Conflicting constraints detected through rule patterns.
- Required scenario conditions referenced.

### AI use

- Optional producer run.
- Optional critique of ambiguity and conflict.
- Structured evaluator output.

### Evidence

- First and final brief.
- Prompt version diff.
- Readiness criteria.
- Learner explanation of the most important revision.

### MVP acceptance

- Works without a live model.
- Complete example reaches 100 under deterministic starter rubric.
- Empty brief reaches zero.
- Mobile fields, score, and output remain usable at 390 px.

## 2. Brief-to-Deliverable Studio

### Learning outcome

Convert an ambiguous work request into a reviewed, client-ready artifact.

### Scenario packs

- Client email update.
- Executive summary.
- Meeting action plan.
- Content brief.
- SOP draft.
- Presentation outline.
- Spreadsheet analysis memo.

### Inputs

- Request messages.
- Synthetic source pack.
- Audience and brand guidance.
- Delivery format and deadline.
- Known missing information.

### Interaction

1. Triage the request.
2. Ask or select clarifying questions.
3. Build the task brief.
4. Choose a staged workflow.
5. Generate or draft.
6. Annotate source support.
7. Run QA and revise.
8. Write delivery note.

### Deterministic checks

- Required sections and format.
- Word, row, or slide limits.
- Required facts present.
- Prohibited unsupported claims absent.
- Unknowns labeled.
- Delivery note included.

### AI use

- Producer model generates structured draft.
- Evaluator checks instruction fit and evidence using ground truth.
- Human review for capstone scenarios.

### Edge cases

- Contradictory request messages.
- Missing source asset.
- Deadline impossible under constraints.
- Client asks to fabricate a result.
- Output format not supported on the current device.

## 3. Research and Verification Lab

### Learning outcome

Plan research, judge source quality, trace claims, and communicate uncertainty.

### Inputs

- Research question.
- Mixed source pack.
- Source metadata.
- Hidden claim ground truth.
- Stakeholder decision.

### Interaction

1. Break the question into subquestions.
2. Rank sources before reading summaries.
3. Extract claims and evidence.
4. Link each material claim to a source.
5. Mark fact, inference, recommendation, or unknown.
6. Resolve or report contradictions.
7. Produce a concise brief.

### Deterministic checks

- Every material claim has evidence or uncertainty label.
- Fabricated source identifiers fail.
- Source date and authority requirements.
- Contradictions addressed.
- Required decision summary exists.

### Scoring emphasis

- Evidence and verification: 30.
- Task correctness: 20.
- Completeness: 15.
- Source judgment: 15.
- Communication: 10.
- Safety: 10.

### Edge cases

- Two authoritative sources disagree.
- Strong source is older than weak source.
- Source title supports a claim but body does not.
- AI summary invents a citation.
- Evidence is insufficient for a requested recommendation.

## 4. Output QA Lab

### Learning outcome

Find, prioritize, and correct defects in AI-assisted output.

### Defect taxonomy

- Factual.
- Evidence.
- Logical.
- Completeness.
- Instruction fit.
- Format.
- Tone and audience.
- Accessibility.
- Privacy and safety.
- Unsupported certainty.

### Inputs

- Task brief.
- Source pack.
- Deliberately flawed output.
- Hidden defect manifest.

### Interaction

1. Read task and sources.
2. Highlight defective spans or cells.
3. Classify defect type and severity.
4. Explain the evidence.
5. Prioritize fixes.
6. Revise the output.
7. Run final delivery checklist.

### Deterministic checks

- Required critical defects found.
- False-positive annotations counted.
- Severity ordering.
- Revised artifact removes defects without adding unsupported claims.

### Scoring

- Critical defect recall.
- Precision of annotations.
- Quality of evidence.
- Revision correctness.
- Final QA completeness.

### Edge cases

- Stylistic preference disguised as factual defect.
- Correct claim with weak citation.
- Fix removes useful nuance.
- One revision creates a new contradiction.

## 5. Workflow Canvas

### Learning outcome

Design a repeatable workflow with owners, inputs, outputs, approvals, failures, and recovery.

### Node types

- Human task.
- AI task.
- System action.
- Decision.
- Approval.
- Data store.
- Notification.
- End state.

### Edge types

- Success.
- Failure.
- Revision.
- Escalation.
- Timeout.
- Rejection.

### Interaction

- Desktop visual canvas.
- Mobile ordered-step editor.
- Property panel for owner, inputs, outputs, evidence, duration, and risk.
- Simulation plays a scenario through the graph.

### Validation

- Single clear start.
- At least one valid end.
- No unreachable required node.
- Every AI external action has approval in eligible scenarios.
- Failure path for critical steps.
- Inputs and outputs connect.
- No infinite loop without attempt limit.

### Evidence

- Workflow version.
- Validation report.
- Failure simulation result.
- Time and risk comparison.

## 6. Automation and Agent Simulator

### Learning outcome

Choose tools, memory, permissions, and approval checkpoints for an agentic workflow, then handle failures safely.

### Simulation only

The MVP does not execute live connectors. Tool calls use synthetic adapters and deterministic side-effect logs.

### Agent definition

- Role and objective.
- Allowed tools.
- Disallowed actions.
- Input and output schemas.
- Memory scope.
- Budget and attempt limits.
- Approval conditions.
- Stop and escalation rules.

### Fault injection

- Tool unavailable.
- Malformed response.
- Prompt injection in source content.
- Duplicate event.
- Permission denied.
- Cost limit reached.
- Ambiguous request.
- Partial external failure.

### Scoring

- Goal completion.
- Correct tool selection.
- Permission compliance.
- Approval behavior.
- Failure recovery.
- Cost and attempt discipline.
- Audit completeness.

### Blocking failures

- Unapproved external action.
- Use of disallowed tool.
- Secret disclosure.
- Infinite retry.
- False claim of completion after tool failure.

## 7. Data Safety Clinic

### Learning outcome

Classify data, identify risk, redact appropriately, and choose a safe alternative.

### Data classes

- Synthetic public.
- Public.
- Internal.
- Confidential.
- Sensitive personal.
- Credential or secret.
- Regulated or contract-restricted.

### Interaction

1. Inspect text, table, or file manifest.
2. Classify highlighted data.
3. Decide allow, redact, aggregate, replace, seek approval, or prohibit.
4. Apply redaction.
5. Explain the decision.
6. Respond to an embedded malicious instruction when present.

### Deterministic checks

- Critical secrets identified.
- Required redactions applied.
- Benign data not over-redacted beyond scenario tolerance.
- Prompt injection rejected.
- Safe alternative provided.

### Edge cases

- Public name combined with private account data.
- Synthetic identifier that resembles a real secret.
- Manager approval conflicts with policy.
- Source document instructs the model to ignore rules.

## 8. ROI and Opportunity Mapper

### Learning outcome

Prioritize AI opportunities using business value, feasibility, risk, and adoption effort.

### Inputs

- Workflow inventory.
- Frequency.
- Human time and cost.
- Error and rework rate.
- Revenue or service impact.
- Data class.
- Integration need.
- Change readiness.

### Calculation

```text
value score = frequency × time saved × loaded hourly cost
quality value = avoidable rework + expected service impact
risk adjustment = data risk + decision risk + failure impact
readiness adjustment = process clarity + data quality + owner + adoption capacity
priority = normalized value + quality value - risk - implementation effort + readiness
```

The interface shows the assumptions. It never presents an ROI number as fact without inputs.

### Outputs

- Assist, automate, delegate, or leave unchanged.
- Prioritized backlog.
- Pilot candidate.
- Baseline metrics.
- Risk and dependency list.

## 9. Portfolio Builder

### Learning outcome

Turn evidence into a clear case study without exposing private or proprietary information.

### Required sections

- Problem.
- Audience and constraints.
- Process.
- Human and AI responsibilities.
- Evidence and verification.
- Result.
- Reflection and next improvement.
- Synthetic, anonymized, or approved-public label.

### Privacy controls

- Public, unlisted, private.
- Artifact-level visibility.
- Redaction preview.
- Raw prompt and source exclusion by default.
- Workspace ownership and consent check.

### Validation

- No unsupported business impact.
- No invented client, employer, certification, or result.
- Verification links resolve.
- Public view contains no blocked data class.
- Claims are tied to approved evidence.

