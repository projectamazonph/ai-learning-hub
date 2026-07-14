# Incident Response

## Severity

### SEV-1

- Confirmed cross-tenant or public private-data exposure.
- Credential compromise.
- Forged payment entitlement.
- Unsafe external action.
- Widespread account takeover.
- Destructive production data loss.

Immediate response. Disable affected capability and involve the owner.

### SEV-2

- Major login, payment, AI, upload, or learning outage.
- Incorrect widespread assessment or certificate issue.
- Significant cost runaway.
- Backup failure during elevated risk.

Urgent response with active monitoring and communication.

### SEV-3

- Partial degradation with workaround.
- Limited learner data inconsistency without exposure.
- Delayed email or evaluation.

Business-hours response under service target.

### SEV-4

- Cosmetic or low-impact defect.
- Documentation mismatch without immediate user harm.

Normal backlog.

## Response flow

1. **Detect:** alert, report, or operator observation.
2. **Acknowledge:** assign incident commander and severity.
3. **Contain:** disable feature, revoke key, block route, isolate tenant, or stop job.
4. **Preserve:** retain safe logs, request IDs, source commit, and relevant metadata.
5. **Diagnose:** reproduce safely and identify affected data and users.
6. **Remediate:** apply smallest safe fix or rollback.
7. **Verify:** run regression, smoke, and data checks.
8. **Communicate:** plain-language status to affected people.
9. **Recover:** restore normal service gradually.
10. **Review:** root cause, control failure, action owner, due date, and learning.

## Incident roles

- Incident commander: decisions and timeline.
- Technical lead: containment and remediation.
- Communications lead: learner and stakeholder updates.
- Security or privacy owner: exposure assessment.
- Scribe: factual timeline and decisions.

One person may hold several roles in a small team, but each responsibility remains explicit.

## Immediate containment menu

- Disable live AI through kill switch.
- Revoke provider, database, payment, email, or deployment credential.
- Suspend affected account or workspace.
- Disable public portfolio sharing.
- Pause payments or entitlement grant.
- Stop queue consumer.
- Roll back application or configuration.
- Block upload type or route.

## Communications

Initial status includes:

- What capability is affected.
- What users should do.
- What is known and not known.
- Whether saved work or private data is affected.
- When the next update will occur.

Do not speculate, minimize, blame a provider, or expose attack detail that worsens risk.

## Post-incident review

- Summary and impact.
- Detection and containment timeline.
- Root cause.
- Why existing controls did not prevent or detect sooner.
- Data and user impact.
- Corrective actions with owner and date.
- Regression tests.
- Runbook, alert, architecture, and training changes.

The review focuses on system improvement, not theatrical blame.

