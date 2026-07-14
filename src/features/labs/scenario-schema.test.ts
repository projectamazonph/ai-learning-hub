import { describe, expect, it } from 'vitest';
import { promptWorkbenchScenario } from './scenarios';
import { labScenarioSchema } from './scenario-schema';

describe('lab scenario contract', () => {
  it('accepts the starter Prompt Workbench scenario', () => {
    expect(labScenarioSchema.parse(promptWorkbenchScenario).status).toBe('PUBLISHED');
  });

  it('rejects scenarios that permit real private data', () => {
    const result = labScenarioSchema.safeParse({
      ...promptWorkbenchScenario,
      syntheticDataOnly: false,
    });

    expect(result.success).toBe(false);
  });

  it('rejects an empty task list', () => {
    const result = labScenarioSchema.safeParse({ ...promptWorkbenchScenario, tasks: [] });

    expect(result.success).toBe(false);
  });
});

