# Scenario and Rubric Contracts

## Scenario rules

- Published versions are immutable.
- Required scenarios use synthetic data.
- A scenario states the learner role, goal, constraints, success criteria, tasks, estimated time, competencies, mode, rubric, and data boundary.
- Every factual source asset has provenance.
- Difficulty comes from ambiguity, volume, tradeoffs, and exception handling, not trick wording.
- Scenario variables stay within calibrated bounds.

## Scenario contract

```ts
interface LabScenario {
  id: string;
  slug: string;
  version: number;
  labSlug: string;
  title: string;
  summary: string;
  audiences: Array<'BEGINNER' | 'VIRTUAL_ASSISTANT' | 'FREELANCER' | 'BUSINESS_OWNER'>;
  difficulty: 'FOUNDATION' | 'PRACTITIONER' | 'ADVANCED';
  estimatedMinutes: number;
  syntheticDataOnly: true;
  brief: {
    role: string;
    goal: string;
    constraints: string[];
    successCriteria: string[];
  };
  tasks: Array<{
    id: string;
    instruction: string;
    required: boolean;
  }>;
  rubricVersion: string;
  status: 'DRAFT' | 'PUBLISHED' | 'RETIRED';
}
```

The runnable schema is in `src/features/labs/scenario-schema.ts`. A portable JSON Schema is in `schemas/lab-scenario.schema.json`.

## Source pack

```ts
interface SourcePack {
  id: string;
  version: number;
  title: string;
  synthetic: true;
  assets: SourceAsset[];
  manifest: {
    learnerVisibleNotes: string;
    hiddenGroundTruthId: string;
    prohibitedClaims: string[];
  };
}

interface SourceAsset {
  id: string;
  type: 'TEXT' | 'EMAIL' | 'TABLE' | 'DOCUMENT' | 'IMAGE' | 'TRANSCRIPT';
  title: string;
  mimeType: string;
  storageRef: string;
  checksum: string;
  dataClass: 'SYNTHETIC_PUBLIC';
}
```

Ground truth is not sent to the learner or producer model when doing so reveals the answer. Evaluators receive only the minimum required reference.

## Rubric contract

```ts
interface RubricVersion {
  id: string;
  version: number;
  title: string;
  totalPoints: 100;
  passThreshold: number;
  criteria: RubricCriterion[];
  requiresHumanReview: boolean;
  calibrationSetId: string;
}

interface RubricCriterion {
  id: string;
  title: string;
  description: string;
  weight: number;
  evidenceTypes: string[];
  levels: Array<{
    score: number;
    observableBehavior: string;
  }>;
  blockingRules: string[];
}
```

## Blocking rules

A weighted total cannot override a blocking failure such as:

- Fabricated source or citation.
- Disclosure of prohibited sensitive data.
- Missing required approval.
- Deceptive claim of work performed.
- Unsafe external action.
- Empty or unrelated required artifact.

Blocking rules create criterion feedback and a reviewable state. They are not hidden score penalties.

## Authoring workflow

1. Define competency and observable task.
2. Write ground truth and failure taxonomy.
3. Write rubric before learner instructions.
4. Build synthetic source pack.
5. Create novice, borderline, passing, and excellent reference submissions.
6. Run deterministic validation.
7. Calibrate automated evaluation.
8. Conduct mobile and accessibility review.
9. Publish immutable version.

## Scenario quality checklist

- A real job outcome exists.
- Instructions do not reveal the answer.
- Success criteria are observable.
- Required data is present.
- Irrelevant data is intentional and calibrated.
- There is at least one meaningful judgment decision.
- Ground truth does not depend on subjective taste alone.
- Mobile completion is possible or desktop requirement is explicit.
- No real person, client, credential, or proprietary source appears.

