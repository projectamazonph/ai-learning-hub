# Evaluation System

## Principle

Evaluation is a pipeline, not a single model opinion.

## Layers

### 1. Contract validation

- Submission schema.
- Required files and fields.
- Size and format limits.
- Scenario and run versions.
- Authorization and entitlement.

Failure stops the pipeline and returns a correctable validation result.

### 2. Deterministic checks

- Required sections.
- Exact facts and values.
- Word, row, or node limits.
- Prohibited claims.
- Claim-to-source coverage.
- Workflow graph validity.
- Sensitive data patterns.

Deterministic checks are preferred when the requirement is objectively computable.

### 3. Model-assisted rubric evaluation

Used for meaning, relevance, explanation quality, tone, prioritization, and judgment.

Requirements:

- Structured output schema.
- Rubric and evidence supplied explicitly.
- Evaluator does not see a desired final score.
- Temperature and model configuration pinned for assessments.
- Criterion evidence required.
- Confidence and ambiguity flags required.

### 4. Policy and integrity review

- Sensitive data.
- Prompt injection.
- Fabricated source.
- Unsupported experience or result.
- Duplicate pattern signal.
- Unsafe action.

### 5. Human moderation

Required for launch capstones, appeals, low-confidence results, policy flags, and configuration calibration samples.

## Score behavior

- Total score is the sum of criterion scores.
- Blocking rules override a passing total.
- A criterion score must cite evidence.
- A model output validation failure produces evaluation failure, not zero or pass.
- Reviewer adjustment requires reason and original score remains visible in audit history.

## Calibration set

Each assessment rubric has:

- Novice failures.
- Borderline failures.
- Minimum passing work.
- Strong work.
- Excellent but stylistically different work.
- Adversarial and policy cases.

Reference submissions are human-scored by at least two qualified reviewers. Disagreement is resolved before the set governs a production assessment.

## Model regression gate

Compare candidate configuration against current configuration on:

- Criterion agreement with human scores.
- Pass and fail agreement.
- Critical false negative.
- Critical false positive.
- Evidence citation validity.
- Policy flag precision and recall.
- Cost per evaluation.
- Latency.
- Schema failure rate.

A candidate does not become default when it materially worsens a critical measure, even if it is cheaper or newer.

## Feedback format

Feedback has three layers:

1. **Status:** passed, revision required, or review required.
2. **Priority:** the one to three changes that matter most.
3. **Criteria:** score, evidence, issue, and specific improvement.

Avoid generic praise. Do not rewrite the entire artifact when teaching value comes from learner revision.

## Evaluation output

```ts
interface EvaluationOutput {
  rubricVersion: string;
  totalScore: number;
  pass: boolean;
  blockingFailures: Array<{
    ruleId: string;
    evidenceRef: string;
    explanation: string;
  }>;
  criteria: Array<{
    criterionId: string;
    score: number;
    maxScore: number;
    evidenceRefs: string[];
    feedback: string;
    confidence: number;
  }>;
  priorities: string[];
  requiresHumanReview: boolean;
  reviewReasons: string[];
}
```

## Observability

Record evaluator version, model configuration, schema validation, cost, latency, retry, criterion distribution, reviewer adjustment, and final decision. Do not put raw private submissions in general telemetry.

