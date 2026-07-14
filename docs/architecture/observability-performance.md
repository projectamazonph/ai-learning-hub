# Observability, Performance, and Cost

## Observability goals

- Detect learner-impacting failures quickly.
- Trace one request across web, job, provider, payment, and email boundaries.
- Measure AI cost and quality together.
- Avoid leaking private content.

## Correlation

Every request and job has a correlation ID. Propagate it through:

- Server action or route.
- Application service.
- Database transaction metadata.
- Durable job.
- AI request.
- Provider request metadata when supported.
- Audit and safe error event.

## Structured logs

Required fields:

- Timestamp.
- Level.
- Service and environment.
- Event name.
- Request or job ID.
- Opaque actor and workspace IDs when relevant.
- Resource type and ID.
- State and safe error code.
- Duration.

Redact secret-like field names and never serialize arbitrary request bodies.

## Traces

Trace:

- Page and server-action latency.
- Database spans.
- Object storage.
- Job queue wait and execution.
- AI gateway preprocessing, provider, validation, and reconciliation.
- Payment webhook processing.

## Metrics

### Web

- Request rate and error rate.
- Server response percentiles.
- Core Web Vitals.
- Action failure by code.

### Database

- Query latency.
- Connection pool.
- Deadlock and retry.
- Slow authorized hot path.

### Jobs

- Queue depth.
- Oldest job age.
- Attempts and dead-letter count.
- Completion latency.

### AI

- Request success.
- Provider and model.
- Unit and cost.
- Latency.
- Timeout, retry, cancellation, schema failure.
- Safety block and resolution.
- Evaluation agreement and reviewer adjustment.

### Commerce

- Checkout creation.
- Webhook verification failure.
- Payment transition failure.
- Entitlement lag.
- Refund failure.

## Alerts

Immediate:

- Authentication or authorization anomaly.
- Cross-tenant test or runtime guard failure.
- Payment signature failure spike.
- AI daily cost cap reached.
- Provider failure above threshold.
- Job dead-letter growth.
- Backup failure.

Business-hours review:

- Content freshness backlog.
- Completion funnel drop.
- Evaluation disagreement rise.
- Cost per completed lab regression.

## Performance budgets

### Public and static learning pages

- Mobile LCP below 2.5 seconds target.
- CLS below 0.1.
- INP below 200 ms target.
- Avoid unnecessary client JavaScript.

### Application interaction

- Local field feedback under 100 ms.
- Non-network navigation feedback immediate.
- Confirmed autosave under two seconds in normal conditions.
- Paginated admin reads under one second target at expected scale.

### AI

- Accepted event after reservation and validation within one second target.
- Visible safe progress for work beyond two seconds.
- Cancellation reachable while running.
- Provider latency tracked separately from application overhead.

## Cost controls

- Daily and monthly provider caps.
- Per-user and workspace wallets.
- Per-run input and output limits.
- Demo-mode caching.
- Retry cost tracking.
- Small model or deterministic rule for simple tasks where validated.
- Human review cost included in product margin.

## Degraded modes

- AI provider down: demo mode and editing remain.
- Email down: queue and in-app confirmation remain.
- Payment provider down: preserve cart intent, do not grant access.
- Analytics down: core product continues; events buffer within limits.
- Object storage down: block new uploads, preserve text learning and saved metadata.

## Dashboard views

- Learner experience health.
- Provider health and cost.
- Payment and entitlement health.
- Job and email health.
- Content freshness.
- Security and safety events.

Each dashboard links to a runbook, not just a red number.
