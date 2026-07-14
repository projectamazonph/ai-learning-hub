# API and Application Contracts

## Boundary policy

- Server actions: authenticated application mutations.
- Route handlers: streaming, uploads, webhooks, public verification, health.
- Server components: authorized reads through application services.
- Durable jobs: long or retryable work.

## Result envelope

```ts
type ActionResult<T> =
  | { ok: true; data: T; requestId: string }
  | {
      ok: false;
      error: {
        code: string;
        message: string;
        fieldErrors?: Record<string, string[]>;
        retryable: boolean;
      };
      requestId: string;
    };
```

Messages are safe for the user. Internal stack, provider response, secret, and SQL detail stay in protected telemetry.

## Error codes

- `AUTH_REQUIRED`.
- `AUTH_FORBIDDEN`.
- `ACCOUNT_SUSPENDED`.
- `VALIDATION_FAILED`.
- `RESOURCE_NOT_FOUND`.
- `ENTITLEMENT_REQUIRED`.
- `WORKSPACE_MEMBERSHIP_REQUIRED`.
- `RUN_STATE_INVALID`.
- `RUN_REVISION_CONFLICT`.
- `ATTEMPT_LIMIT_REACHED`.
- `CREDIT_INSUFFICIENT`.
- `SAFETY_INPUT_BLOCKED`.
- `PROVIDER_UNAVAILABLE`.
- `PROVIDER_TIMEOUT`.
- `OUTPUT_SCHEMA_INVALID`.
- `PAYMENT_SIGNATURE_INVALID`.
- `PAYMENT_STATE_INVALID`.
- `RATE_LIMITED`.
- `INTERNAL_ERROR`.

## Server actions

### Diagnostic

- `startDiagnostic(questionSetVersion)`.
- `saveDiagnosticResponse(attemptId, questionId, answer, expectedRevision)`.
- `completeDiagnostic(attemptId, expectedRevision)`.
- `overrideRecommendedPath(attemptId, pathId, reason)`.

### Learning

- `enrollInFreeCourse(courseId)`.
- `saveLessonProgress(lessonVersionId, blockId, state)`.
- `submitQuizAttempt(quizVersionId, answers, idempotencyKey)`.
- `acknowledgeResource(resourceVersionId)`.

### Labs

- `startLabRun(scenarioVersionId, mode, idempotencyKey)`.
- `saveLabStep(runId, expectedRevision, taskId, payload)`.
- `requestLabReview(runId, expectedRevision)`.
- `submitLabRun(runId, expectedRevision, idempotencyKey)`.
- `startLabRevision(runId, evaluationId)`.
- `abandonLabRun(runId, reason)`.

### Evidence

- `createPortfolioProject(sourceEvidenceIds)`.
- `updatePortfolioProject(projectId, expectedRevision, payload)`.
- `publishPortfolioArtifact(artifactId, visibility, expectedRevision)`.
- `updateSkillsPassportVisibility(payload)`.

### Workspace

- `inviteWorkspaceMember(workspaceId, email, role)`.
- `acceptWorkspaceInvitation(token)`.
- `removeWorkspaceMember(workspaceId, membershipId, reason)`.
- `createWorkspaceAssignment(workspaceId, payload)`.
- `acknowledgeWorkspacePolicy(workspaceId, policyVersionId)`.

### Admin

- Content, scenario, rubric, model, review, product, refund, and certificate mutations each require role, validation, expected version, reason when material, and audit event.

## Route handlers

### `POST /api/ai/runs`

Starts or resumes a live practice generation.

Request:

```json
{
  "labRunId": "run_id",
  "taskId": "task-generate",
  "expectedRevision": 7,
  "promptVersion": 3,
  "idempotencyKey": "run_id:task-generate:3"
}
```

Response streams named events:

- `accepted` with reservation and request identifiers.
- `status` with safe progress.
- `content` with validated text chunks when allowed.
- `usage` with finalized credits.
- `completed` with saved output reference.
- `failed` with typed safe error.

### `POST /api/ai/runs/[requestId]/cancel`

Cancels when provider and state allow. Reconciles actual usage.

### `POST /api/uploads`

Accepts authorized upload initialization, validates metadata, and returns a constrained upload target. Completion triggers scan and parsing job.

### `POST /api/webhooks/paymongo`

- Reads raw request body.
- Verifies cryptographic signature before parsing business event.
- Deduplicates provider event.
- Applies idempotent payment transition.
- Returns success only after durable event handling or accepted queue.

### `POST /api/webhooks/email`

Verifies provider signature and records delivery transition idempotently.

### `GET /api/verify/certificates/[code]`

Returns the public-safe certificate projection.

### `GET /api/health/live`

Process liveness only.

### `GET /api/health/ready`

Checks required production dependencies without exposing credentials or internal topology.

## Job contracts

### Evaluation job

Input: submission ID, evaluator version, idempotency key.  
Output: evaluation ID and final operational status.

### File processing job

Input: upload ID, expected checksum, parser version.  
Output: safe parsed-asset reference or typed failure.

### Certificate job

Input: certificate ID and version.  
Output: checksum and object reference.

### Usage reconciliation job

Input: unsettled request ID.  
Output: immutable credit transaction or flagged incident.

## Idempotency

The caller supplies a stable key for an intended operation. The server stores scope, actor, input checksum, state, and result reference. Reuse with different input is rejected.

## Pagination

Use opaque cursor pagination for large learner and audit lists. Admin exports use durable jobs, authorization snapshot, and expiring object links.

