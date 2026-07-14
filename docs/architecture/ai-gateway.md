# AI Gateway

## Responsibility

The AI gateway is the only production path to a model provider. It owns policy, configuration, safety, usage, cost, reliability, and audit metadata.

## Provider adapter

```ts
interface AIProviderAdapter {
  generate(request: ProviderGenerateRequest): Promise<ProviderGenerateResult>;
  stream(request: ProviderGenerateRequest): AsyncIterable<ProviderStreamEvent>;
  cancel?(providerRequestId: string): Promise<void>;
  health(): Promise<ProviderHealth>;
  estimateCost(usage: ProviderUsage, priceVersion: string): Money;
}
```

Provider SDK types do not cross this boundary.

## Gateway request

```ts
interface AIGatewayRequest<TSchema> {
  actorId: string;
  workspaceId?: string;
  purpose: 'PRACTICE_GENERATION' | 'ASSESSMENT_EVALUATION' | 'CONTENT_ASSIST';
  modelConfigurationId: string;
  promptTemplateVersionId: string;
  scenarioVersionId?: string;
  rubricVersionId?: string;
  input: unknown;
  outputSchema: TSchema;
  dataClass: 'SYNTHETIC' | 'PUBLIC' | 'INTERNAL_APPROVED';
  maxInputUnits: number;
  maxOutputUnits: number;
  timeoutMs: number;
  idempotencyKey: string;
  creditReservationId: string;
  correlationId: string;
}
```

## Pipeline

1. Validate request schema.
2. Verify actor, entitlement, purpose, and model configuration status.
3. Confirm credit reservation.
4. Classify input and scan for prohibited content.
5. Apply redaction or block according to policy.
6. Render versioned prompt.
7. Enforce unit and file limits.
8. Call provider with timeout and cancellation.
9. Retry only retry-safe failures within limit.
10. Validate structured output.
11. Persist safe result and metadata.
12. Reconcile usage and credits.
13. Emit product and operational events.

## Model registry

Each configuration records:

- Provider and exact provider model identifier.
- Intended purpose.
- Effective and retirement dates.
- Input modalities.
- Structured output capability.
- Unit limits.
- Parameters.
- Price version.
- Allowed data classes and regions.
- Calibration status.
- Fallback eligibility.

Assessment configuration changes require evaluation regression approval.

## Prompt registry

Prompts are immutable versions containing:

- Purpose and owner.
- Template body.
- Input schema.
- Output schema.
- Safety instruction version.
- Examples.
- Scenario and rubric compatibility.
- Reviewed date.

Prompts do not contain provider credentials, learner secrets, or hidden undocumented scoring logic.

## Credit flow

1. Estimate upper expected usage.
2. Atomically reserve credits.
3. Submit provider request.
4. Record provider usage.
5. Calculate cost using recorded price version.
6. Settle actual credit transaction.
7. Release unused reservation.
8. Flag unresolved usage for reconciliation job.

## Retry matrix

| Failure | Retry? | Rule |
| --- | --- | --- |
| Client validation | No | Correct input |
| Safety block | No | Redact or choose safe alternative |
| Rate limit | Yes | Bounded backoff when deadline allows |
| Provider 5xx | Yes | Bounded retry and circuit tracking |
| Timeout before response | Sometimes | Retry only when request idempotency is safe |
| Output schema invalid | Once | Repair or regenerate under strict bound |
| Insufficient credits | No | Refill or use demo mode |
| Cancellation | No | Reconcile actual usage |

## Fallback

The MVP can degrade to demo mode. Automatic provider fallback is deferred until:

- Second provider passes contract and safety tests.
- Data-region policy allows it.
- Assessment comparability is calibrated.
- Learner pricing and consent cover it.

Never silently change the assessment model.

## Safety

- Secret and sensitive-data pattern detection.
- File and source provenance.
- Prompt-injection detection as a signal plus policy instructions.
- Approved tool and action allowlist.
- No external side effects in MVP.
- Output schema and length limits.
- Blocking and escalation rules.

## Logging

Safe metadata:

- Request and correlation IDs.
- Actor and workspace opaque IDs.
- Purpose and configuration IDs.
- State, units, cost, latency, retry, finish reason.
- Safety category and action.

Excluded from general logs:

- Raw prompt.
- Raw learner output.
- Uploaded file content.
- Credentials.
- Sensitive personal data.

## Cost alarms

- Daily provider spend.
- Spend per active learner.
- Spend per completed lab.
- Usage outside entitlement expectation.
- Repeated retry cost.
- Evaluator cost regression.
- Workspace pooled-wallet depletion.

The kill switch disables new live requests without disabling static learning, saved work, or demo mode.

