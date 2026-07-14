import type { LabScenario } from './types';

export const promptWorkbenchScenario: LabScenario = {
  id: 'scenario-pw-001',
  slug: 'weekly-client-update',
  version: 1,
  labSlug: 'prompt-workbench',
  title: 'Turn messy notes into a client update',
  summary:
    'Create a reusable task brief that converts scattered project notes into a concise, accurate weekly client update.',
  audiences: ['BEGINNER', 'VIRTUAL_ASSISTANT', 'FREELANCER'],
  difficulty: 'FOUNDATION',
  estimatedMinutes: 20,
  syntheticDataOnly: true,
  brief: {
    role: 'You are a virtual assistant supporting a small design agency.',
    goal: 'Prepare a client-ready weekly status update from synthetic project notes.',
    constraints: [
      'Do not invent dates, completed work, owners, or results.',
      'Clearly label blockers and decisions needed from the client.',
      'Keep the final update below 250 words.',
    ],
    successCriteria: [
      'The update separates completed work, next actions, blockers, and client decisions.',
      'Every claim can be traced to the supplied notes.',
      'The tone is direct, professional, and calm.',
    ],
  },
  tasks: [
    {
      id: 'task-1',
      instruction: 'Write the objective, audience, context, constraints, output format, and quality checks.',
      required: true,
    },
    {
      id: 'task-2',
      instruction: 'Generate the composed prompt and review the readiness feedback.',
      required: true,
    },
    {
      id: 'task-3',
      instruction: 'Revise weak sections until the brief reaches the Ready band.',
      required: true,
    },
  ],
  rubricVersion: 'prompt-readiness-v1',
  status: 'PUBLISHED',
};

