# Data Model

## Modeling rules

- CUID or UUID identifiers, chosen once and used consistently.
- UTC timestamps.
- Immutable financial, usage, evidence, evaluation, and audit ledgers.
- Soft delete only where restoration or historical linkage requires it.
- Hard delete or content erasure for privacy-sensitive bodies under retention policy.
- Explicit state values with database constraints.
- Workspace scope appears on every tenant-owned record.
- Published content and assessment versions are immutable.

## Identity

### User

`id`, `email`, `emailVerifiedAt`, `displayName`, `passwordHash`, `platformRole`, `status`, `locale`, `timezone`, `createdAt`, `updatedAt`, `deletedAt`.

Indexes: unique active email; status; created date.

### Session

Secure session token hash, user, expiry, last used, device metadata, revoke time.

### LearnerProfile

Role goal, AI experience, weekly time, preferred categories, current path, privacy defaults, onboarding state.

### DiagnosticAttempt

Question-set version, responses, score dimensions, recommendation version, recommended path, reasons, override.

## Workspace

### Workspace

Name, slug, status, owner, billing identity, default policy, credit wallet.

### WorkspaceMembership

Unique workspace and user, role, seat state, joined and removed times.

### WorkspaceInvitation

Workspace, invited email, role, token hash, expiry, accepted user, state.

### WorkspacePolicy

Versioned approved tools, prohibited data, manager visibility, external-action rule, acknowledgement requirement.

### WorkspaceAssignment

Target path or course, assignee, due window, required evidence, status.

## Curriculum

### LearningPath and LearningPathCourse

Path identity, audience, outcome, status, ordered course relationship.

### Course

Stable slug, title, description, difficulty, outcome, estimated hours, status.

### CourseVersion

Immutable published title, description, requirement version, release and retirement dates.

### Module and ModuleVersion

Ordered course unit, outcome, prerequisites, estimated minutes, status.

### Lesson and LessonVersion

Stable lesson identity plus immutable published metadata and block payload.

### ContentSource

Title, URL, publisher, supported claim, checked date, owner.

### ContentReview

Content version, volatility, due date, reviewer, decision, notes, next date.

### Resource

Versioned object reference, type, checksum, accessibility metadata, visibility.

## Learning

### Enrollment

User, course, course version, entitlement, status, enrolled, completed, revoked.

Unique active enrollment per user and course version according to product rule.

### LessonProgress

User, lesson version, status, last block, time spent, completion evidence, timestamps.

### ModuleProgress

Derived or recorded status, score, completed date. Derivation rules must not contradict lesson state.

### Quiz, QuizVersion, Question, QuizAttempt

Versioned assessment bank and immutable submitted attempt snapshot.

### PrerequisiteRule

Target resource, rule type, required object, threshold, and version.

## Practice

### LabDefinition and LabVersion

Stable lab identity and immutable runner configuration.

### LabScenario and ScenarioVersion

Stable scenario identity, immutable brief, tasks, audiences, difficulty, mode, versions, and status.

### SourcePack and SourceAsset

Versioned synthetic pack, object references, checksums, learner notes, hidden ground truth.

### LabRun

User, workspace when assigned, enrollment, lab version, scenario version, mode, state, server revision, attempt number, timestamps.

Hot indexes:

- User, state, updated time.
- Workspace, assignment, state.
- Scenario version, state.
- Enrollment, lab definition.

### LabRunStep

Run, task identifier, revision, validated payload reference or encrypted body, completion state, timestamps.

### Submission

Immutable snapshot, content checksum, submitter, submitted time, idempotency key.

## Evaluation and evidence

### Rubric and RubricVersion

Stable rubric plus immutable criteria, weights, levels, blocking rules, calibration set.

### Evaluation

Submission, evaluator type and version, status, total, pass, confidence, model request, timestamps.

### CriterionScore

Evaluation, rubric criterion, score, evidence references, feedback, confidence.

### HumanReview

Submission, reviewer, decision, reason, criterion adjustments, timestamps.

### Competency and LessonCompetency

Competency definition and content mapping.

### CompetencyEvidence

User, competency, source type, source ID, proposed level, approved level, status, reviewer, issue and revoke times.

### LearnerCompetency

Current level summary with calculation version and strongest evidence. This is a projection; evidence is the source of truth.

### Portfolio, PortfolioProject, PortfolioArtifact, ArtifactVersion

Learner-owned case-study structure, visibility, provenance, evidence links, and safe public version.

### Certificate, CertificateRequirement, CertificateEvidence

Certificate identity, verification code, course version, requirement version, status, evidence links, issue and revoke history.

## AI runtime

### Provider

Provider identity, status, region policy, secret reference, health state.

### ModelDefinition

Provider, provider model ID, capability, input types, lifecycle, current availability.

### ModelConfiguration

Model definition, purpose, parameters, limits, structured output schema, effective dates, calibration state.

### AIRequest

Actor, run or evaluation, configuration, prompt version, input hash, data class, status, correlation, timestamps.

### AIUsage

Request, provider units, estimated and reconciled cost, latency, cache, retry, finish reason.

### SafetyEvent

Request or upload, category, policy version, action, resolution, redacted evidence reference.

### ProviderIncident

Provider, start, end, severity, affected capabilities, response, post-incident reference.

## Commerce

### Product, Price, Offer

Sellable package, time-bounded price, presentation, eligibility, and campaign.

### Purchase and Payment

Buyer, product, price snapshot, currency, provider IDs, state, amount, tax, timestamps.

### Entitlement

Owner user or workspace, permission type, resource, start, expiry, status, source purchase.

### CreditWallet, CreditReservation, CreditTransaction

Wallet balance projection plus immutable transaction ledger and expiring reservations.

### RefundRequest and Refund

Request reason, eligibility snapshot, reviewer, provider refund, entitlement effect, audit state.

### Receipt

Immutable purchase and tax snapshot plus generated object reference.

## Operations

### AuditEvent

Actor, action, resource type and ID, workspace, before and after metadata, request, reason, timestamp. Sensitive bodies excluded.

### ProductEvent

Versioned analytics event with privacy-safe properties.

### JobRecord

Job type, idempotency key, resource version, state, attempts, timestamps, error code.

### EmailEvent

Template version, recipient hash or authorized reference, provider ID, delivery state.

## Critical constraints

- Unique workspace membership.
- Unique provider event ID.
- Unique idempotency key per operation scope.
- Credit wallet cannot settle below zero.
- Criterion weights total 100 for published rubric.
- Published scenario and rubric versions cannot mutate.
- Public portfolio version cannot reference blocked data class.
- Certificate issue requires eligible evidence transaction.
- Workspace-scoped record cannot have a null workspace when tenant ownership applies.

## Retention

Raw prompt, answer, and upload bodies use separate encrypted storage or protected columns with expiry. Usage, financial, audit, and evidence metadata should not require raw content to remain indefinitely.

