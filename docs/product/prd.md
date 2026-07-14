# Product Requirements Document

## 1. Purpose

Define the build and acceptance requirements for AI Ready PH from starter scaffold through public launch.

## 2. Goals

- Give a beginner a useful, reviewed AI-assisted artifact within 20 minutes.
- Teach transferable task framing, context, verification, quality, safety, and workflow skills.
- Personalize learning by role and goal without locking the learner into one path.
- Provide realistic practice without exposing real client or company data.
- Produce verifiable competency evidence and portfolio artifacts.
- Support sustainable AI usage costs and content maintenance.
- Support individual and workspace access without cross-tenant leakage.

## 3. Non-goals

- Building a general-purpose AI chat product.
- Automating live client accounts in the MVP.
- Supporting every model provider at launch.
- Replacing instructor judgment for certification.
- Hosting an unmoderated social feed.
- Building a native mobile application before mobile web proves insufficient.
- Adding semantic retrieval before a validated content use case requires it.

## 4. Roles

| Role | Capabilities |
| --- | --- |
| Visitor | Browse pages, take limited diagnostic, try demo lab, verify certificate |
| Learner | Enroll, learn, practice, submit, revise, build portfolio, manage privacy |
| Reviewer | Review capstones, score evidence, request revision, approve certification |
| Instructor | Manage classes, assignments, cohorts, and learner support |
| Workspace manager | Invite members, assign paths, view allowed team analytics, manage policy |
| Content editor | Draft and revise curriculum, scenarios, sources, and rubrics |
| Admin | Manage platform configuration, users, commerce, providers, costs, and audits |

## 5. Core requirements

### R1. Public experience

The product must provide landing, audience path, course, lab, pricing, trust, FAQ, sign-in, sign-up, and certificate verification pages.

Acceptance:

- A visitor can understand the target result, teaching method, and primary call to action without signing in.
- Each audience has a distinct page and capstone outcome.
- Core public pages work at 390 px without horizontal scrolling.
- No page implies affiliation or endorsement by an AI provider.

### R2. Authentication and account lifecycle

The product must support secure registration, email verification, sign-in, sign-out, password reset, session expiry, export, and deletion request.

Acceptance:

- No default admin credential exists.
- Session cookies are secure and inaccessible to client JavaScript.
- Authentication endpoints are rate-limited.
- Suspended and deleted users cannot access protected content.
- Account deletion follows the documented recovery and permanent-deletion states.

### R3. Diagnostic and path recommendation

The product must collect role, experience, goal, recurring tasks, tool confidence, data risk, and weekly time, then recommend a path and first-win lab.

Acceptance:

- The recommendation includes reasons.
- The learner can override it.
- Inputs and recommendation version are stored.
- Missing optional answers do not block completion.
- The first action fits the learner's stated weekly time.

### R4. Curriculum engine

The platform must render courses, modules, lessons, resources, checks, prerequisites, and progress from validated content data.

Acceptance:

- Content can be published without page-component changes.
- Lessons map to competencies and evidence opportunities.
- Progress survives sign-out and device change.
- A learner cannot bypass required prerequisites through a direct URL.
- Content versions preserve historical assessment evidence.

### R5. Lesson experience

Lessons must support reading, video, guided practice, reflection, quiz, and lab-launch blocks.

Acceptance:

- A lesson shows outcome, estimated time, competency, prerequisites, and reviewed date.
- Completion requires its defined action, not only scrolling.
- The learner can resume at the last meaningful block.
- Keyboard and screen-reader users can complete every required interaction.

### R6. Generic lab engine

The platform must run versioned scenarios through a shared lifecycle: start, save, review, submit, evaluate, revise, complete, or abandon.

Acceptance:

- Scenario, source pack, prompt, rubric, and model configuration versions are captured per run.
- Autosave does not advance assessment state.
- Invalid state transitions fail clearly and do not corrupt the run.
- A disconnected learner can recover the last confirmed saved version.
- Admins can publish a new scenario without changing runner mechanics.

### R7. AI execution

Live model calls must go through a server-side AI gateway.

Acceptance:

- UI and domain code never call providers directly.
- Credits are reserved before a call and reconciled after it.
- Timeouts, cancellation, retry limits, and provider errors have explicit states.
- Provider, model, configuration, tokens, estimated cost, latency, and safety decisions are recorded.
- Sensitive raw content is excluded from normal logs.

### R8. Evaluation and feedback

The platform must combine deterministic checks, rubric evaluation, revision history, and human moderation where required.

Acceptance:

- Every score links to criterion evidence and feedback.
- Rubrics are versioned.
- Automated evaluation stores confidence and policy flags.
- A failed evaluator does not silently produce a passing score.
- Certification capstones require human approval or a separately approved deterministic rule set.

### R9. Competencies and Skills Passport

The product must show eleven competencies across five mastery levels, backed by evidence.

Acceptance:

- Each mastery change cites one or more evidence records.
- Learners can keep the passport private, share selected evidence, or make it public.
- Revoked or superseded evidence is visibly marked.
- Public views never reveal raw private prompts, files, feedback, or workspace data.

### R10. Portfolio

Learners must be able to turn selected work into case studies.

Acceptance:

- A project includes problem, constraints, process, evidence, result, and reflection.
- Synthetic or anonymized status is explicit.
- Learners control public visibility per artifact.
- Portfolio exports preserve attribution and verification links.

### R11. Certification

Certificates must follow requirement rules and provide public verification.

Acceptance:

- Completion percentage alone cannot issue a certificate.
- The certificate records course version, requirements, evidence, reviewer, issue date, and status.
- Verification shows active, expired, or revoked status.
- Revocation requires a reason and audit event.

### R12. Commerce and entitlements

Products, prices, purchases, entitlements, credits, courses, and workspaces must be separate domain objects.

Acceptance:

- Payment success grants only the purchased entitlements.
- Duplicate webhook delivery is idempotent.
- PayMongo signatures are cryptographically verified.
- Refund and credit-consumption rules are deterministic and visible before purchase.
- Live credits cannot become negative under concurrent requests.

### R13. Workspaces

Business accounts must support members, invitations, roles, seat entitlements, assignments, policies, pooled credits, and allowed analytics.

Acceptance:

- Every workspace query verifies membership and role.
- Cross-workspace access tests cover reads, writes, exports, and public-share transitions.
- Managers see progress and assigned evidence, not private practice content unless policy and consent allow it.
- Removing a member revokes workspace access without deleting their personal account.

### R14. Admin

Admins need content, user, workspace, lab, rubric, model, cost, commerce, review, and freshness controls.

Acceptance:

- Every admin mutation creates an audit event.
- Tables support search, filter, pagination, and safe bulk actions.
- Content and scenario publication requires validation.
- Model configuration changes require a reason and calibration status.
- Overdue volatile content appears in a prioritized review queue.

### R15. Content freshness

Every factual tool or model claim must have source, owner, volatility, reviewed date, and due date.

Acceptance:

- Overdue volatile content cannot be promoted as current without explicit review.
- Revisions create versions.
- Retired content points to a successor when one exists.
- Assessment changes do not alter historical run interpretation.

## 6. Non-functional requirements

### Security

- OWASP-aligned authentication, authorization, upload, webhook, and session controls.
- Strict tenant isolation.
- No secrets or private data in code, fixtures, or normal logs.
- Human confirmation before future external side effects.

### Privacy

- Data classification before provider transmission.
- Clear consent and provider-processing notice.
- Raw practice content retained for 30 days by default.
- Export and deletion workflows.

### Performance

- Mobile LCP below 2.5 seconds on key non-AI pages under target conditions.
- Core UI interaction below 200 ms where no network operation is required.
- Lab autosave acknowledges confirmed persistence within two seconds under normal conditions.
- Long AI work uses durable jobs or resumable streaming boundaries.

### Reliability

- Idempotent payment, credit, job, email, and certificate operations.
- Daily database backup and regular restore drill.
- Explicit degraded mode during provider outage.
- No AI provider failure blocks access to paid static curriculum.

### Accessibility

- WCAG 2.2 AA target.
- Full keyboard operation.
- Visible focus.
- Reduced motion.
- Programmatic labels and errors.
- Responsive reflow to 320 px, designed and verified at 390 px.

### Localization

- English source content with translation-ready identifiers.
- Taglish and regional-language content can be added without duplicating mechanics.
- Dates, currency, and time zones use locale-aware formatting.

## 7. Release gates

- No open critical or high-severity security issue.
- Tenant isolation suite passes.
- Payment signature and idempotency tests pass before live checkout.
- Live provider canary and cost alarms pass.
- Backup and restore drill completed with real production-like services.
- Mobile and accessibility checks pass on critical flows.
- Beta metrics and support process are instrumented.

