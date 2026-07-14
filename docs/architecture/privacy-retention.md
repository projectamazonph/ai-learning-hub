# Privacy and Retention

## Principles

- Collect only what supports learning, operations, safety, or legal obligations.
- Tell the learner what is sent to an AI provider before it happens.
- Keep private practice private by default.
- Separate long-lived evidence from short-lived raw content.
- Support export, correction, and deletion.
- Do not train platform models on learner content without a separate explicit agreement.

## Data classes

| Class | Examples | Default AI rule |
| --- | --- | --- |
| Synthetic public | Required lab source packs | Allowed |
| Public | Published website or public report | Allowed with source and purpose |
| Internal | Personal notes without sensitive data | Allowed only under approved purpose and notice |
| Confidential | Client strategy, internal financial detail | Block unless an explicit organization policy and provider agreement allow it |
| Sensitive personal | Government ID, health, precise financial or account data | Block in learner practice |
| Credential or secret | Password, API key, access token | Always block and redact |
| Restricted | Contract or law prohibits processing | Always block |

## Retention schedule

| Data | Default retention |
| --- | --- |
| Raw practice prompt and model output | 30 days |
| Unsynced local draft | Until sync, clear, or browser policy removal |
| Submitted assessment body | While review and certificate evidence require it, then minimize according to policy |
| Structured criterion scores and evidence metadata | While account or certificate remains active |
| Portfolio artifact | Until learner deletes or account policy applies |
| AI usage metadata without raw content | Financial and abuse-analysis period |
| Payment, receipt, and refund records | Applicable financial retention period |
| Audit events | Security and compliance period |
| Backups | Rolling schedule with expiry and deletion propagation process |
| Deleted account recovery state | Documented short recovery window, then permanent deletion queue |

Exact production periods beyond the 30-day raw practice default require legal and operational review before launch.

## Consent and notice

Before a live call, show:

- Which content will be sent.
- Which approved provider category processes it.
- Why it is needed.
- Whether it is stored and for how long.
- Estimated credit use.
- Demo or no-send alternative when available.

Do not bury this information only in terms.

## Public sharing

- Portfolio and Skills Passport are private by default.
- Learner chooses public, unlisted, or private per artifact.
- Public version is a distinct safe projection.
- Raw prompt, source file, private feedback, payment, and workspace data are excluded.
- Changing to public runs data-class validation.

## Workspace visibility

- Managers can see assignment and competency summaries defined by policy.
- Private personal practice is not exposed by default.
- Workspace-owned submissions require clear ownership before work starts.
- Policy version and learner acknowledgement are recorded.

## Export

Learner export includes:

- Profile and preferences.
- Enrollment and progress.
- Lab run and evidence metadata.
- Learner-owned submitted content.
- Portfolio and certificate records.
- AI usage summary.

Export is a durable job with current authorization snapshot and an expiring download.

## Deletion

1. Verify user and re-authenticate.
2. Explain immediate loss and retained legal records.
3. Revoke sessions and future processing.
4. Enter recoverable deleted state when policy allows.
5. Permanently delete or anonymize private content at expiry.
6. Propagate deletion to object storage and provider-supported systems.
7. Record completion without retaining deleted content.

Certificates may become revoked or anonymized according to published policy. Financial records may remain where legally required.

## Logging

Never log:

- Password or reset token.
- Session token.
- API key.
- Raw payment data.
- Raw prompt or file body.
- Sensitive personal data.

Use opaque identifiers, classifications, counts, hashes, safe error codes, and correlation IDs.

