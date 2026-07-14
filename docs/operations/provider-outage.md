# AI Provider Outage Runbook

## Trigger

- Provider error or timeout exceeds alert threshold.
- Schema failure spikes after a model change.
- Provider reports an incident.
- Daily cost or safety kill switch activates.

## Diagnose

1. Check application overhead versus provider latency.
2. Check affected model configuration and capability.
3. Confirm credentials and account limits without logging secrets.
4. Review provider status through the approved source.
5. Run one capped synthetic canary.
6. Determine full outage, partial outage, or configuration regression.

## Contain

- Stop new live calls for affected configuration.
- Preserve in-progress run state.
- Cancel safe outstanding requests when useful.
- Reconcile credit reservations.
- Switch eligible practice to demo mode.
- Do not change assessment provider automatically.

## Learner message

**Live AI is temporarily unavailable. Your draft is saved. You can continue editing, use demo mode, or return later. No new live credits will be used while the service is paused.**

## Assessment behavior

- Submitted work remains submitted.
- Evaluation status becomes retryable failure or waiting.
- Attempt is not consumed again for a provider failure.
- No zero score or pass is generated.
- Reviewer queue can proceed with deterministic and human portions when policy allows.

## Recovery

1. Provider health and capped canary succeed.
2. Circuit enters limited half-open mode.
3. Resume a small percentage of practice traffic.
4. Watch error, schema, latency, and cost.
5. Resume assessment only after approved canary and configuration check.
6. Requeue eligible failed jobs idempotently.
7. Confirm credit reconciliation.
8. Close learner notice.

## Post-outage

- Record incident window and affected requests.
- Verify no duplicated charge or attempt.
- Review retry and alert behavior.
- Update provider scorecard and fallback decision.

