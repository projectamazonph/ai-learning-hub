export interface PromptBriefInput {
  objective: string;
  audience: string;
  context: string;
  constraints: string;
  outputFormat: string;
  qualityChecks: string;
  privacyNotes: string;
}

export interface PromptCriterionResult {
  id: keyof PromptBriefInput;
  label: string;
  score: number;
  maxScore: number;
  feedback: string;
}

export interface PromptEvaluation {
  total: number;
  band: 'Needs structure' | 'Usable' | 'Ready';
  criteria: PromptCriterionResult[];
  nextAction: string;
}

interface CriterionDefinition {
  id: keyof PromptBriefInput;
  label: string;
  maxScore: number;
  usefulLength: number;
  missingFeedback: string;
  partialFeedback: string;
  completeFeedback: string;
}

const criterionDefinitions: CriterionDefinition[] = [
  {
    id: 'objective',
    label: 'Clear objective',
    maxScore: 20,
    usefulLength: 45,
    missingFeedback: 'State the exact result the AI should produce.',
    partialFeedback: 'Make the result more specific and observable.',
    completeFeedback: 'The desired result is specific enough to guide the work.',
  },
  {
    id: 'audience',
    label: 'Audience',
    maxScore: 10,
    usefulLength: 20,
    missingFeedback: 'Name who will use or read the result.',
    partialFeedback: 'Add what the audience knows, needs, or expects.',
    completeFeedback: 'The audience gives the model a useful communication target.',
  },
  {
    id: 'context',
    label: 'Relevant context',
    maxScore: 15,
    usefulLength: 60,
    missingFeedback: 'Provide the facts and source material needed for the task.',
    partialFeedback: 'Add the information needed to avoid assumptions.',
    completeFeedback: 'The context is substantial enough to reduce guessing.',
  },
  {
    id: 'constraints',
    label: 'Constraints',
    maxScore: 15,
    usefulLength: 40,
    missingFeedback: 'Define boundaries, exclusions, length, tone, or deadlines.',
    partialFeedback: 'Add at least one hard boundary or exclusion.',
    completeFeedback: 'The constraints establish useful boundaries.',
  },
  {
    id: 'outputFormat',
    label: 'Output format',
    maxScore: 15,
    usefulLength: 35,
    missingFeedback: 'Describe the required structure of the response.',
    partialFeedback: 'Specify sections, fields, order, or length.',
    completeFeedback: 'The expected response structure is clear.',
  },
  {
    id: 'qualityChecks',
    label: 'Quality checks',
    maxScore: 15,
    usefulLength: 45,
    missingFeedback: 'Explain how the result will be checked before delivery.',
    partialFeedback: 'Add checks for accuracy, completeness, and instruction fit.',
    completeFeedback: 'The task includes an explicit definition of acceptable quality.',
  },
  {
    id: 'privacyNotes',
    label: 'Privacy and safety',
    maxScore: 10,
    usefulLength: 30,
    missingFeedback: 'State whether the inputs are synthetic, public, or approved.',
    partialFeedback: 'Clarify what must not be exposed or invented.',
    completeFeedback: 'The data boundary and safety expectation are explicit.',
  },
];

function scoreCriterion(value: string, definition: CriterionDefinition): PromptCriterionResult {
  const normalizedLength = value.trim().length;

  if (normalizedLength === 0) {
    return {
      id: definition.id,
      label: definition.label,
      score: 0,
      maxScore: definition.maxScore,
      feedback: definition.missingFeedback,
    };
  }

  if (normalizedLength < definition.usefulLength) {
    return {
      id: definition.id,
      label: definition.label,
      score: Math.ceil(definition.maxScore * 0.5),
      maxScore: definition.maxScore,
      feedback: definition.partialFeedback,
    };
  }

  return {
    id: definition.id,
    label: definition.label,
    score: definition.maxScore,
    maxScore: definition.maxScore,
    feedback: definition.completeFeedback,
  };
}

export function evaluatePromptBrief(input: PromptBriefInput): PromptEvaluation {
  const criteria = criterionDefinitions.map((definition) =>
    scoreCriterion(input[definition.id], definition),
  );
  const total = criteria.reduce((sum, criterion) => sum + criterion.score, 0);
  const weakest = [...criteria].sort(
    (left, right) => left.score / left.maxScore - right.score / right.maxScore,
  )[0];

  if (total >= 85) {
    return {
      total,
      band: 'Ready',
      criteria,
      nextAction: 'Run the prompt with synthetic data, then verify the result against your checks.',
    };
  }

  if (total >= 60) {
    return {
      total,
      band: 'Usable',
      criteria,
      nextAction: `Improve ${weakest.label.toLowerCase()} before using this for important work.`,
    };
  }

  return {
    total,
    band: 'Needs structure',
    criteria,
    nextAction: `Start with ${weakest.label.toLowerCase()}. Add one concrete sentence, then score again.`,
  };
}

export function composePrompt(input: PromptBriefInput): string {
  return [
    `OBJECTIVE\n${input.objective.trim() || '[Not defined]'}`,
    `AUDIENCE\n${input.audience.trim() || '[Not defined]'}`,
    `CONTEXT\n${input.context.trim() || '[Not defined]'}`,
    `CONSTRAINTS\n${input.constraints.trim() || '[Not defined]'}`,
    `OUTPUT FORMAT\n${input.outputFormat.trim() || '[Not defined]'}`,
    `QUALITY CHECKS\n${input.qualityChecks.trim() || '[Not defined]'}`,
    `PRIVACY AND SAFETY\n${input.privacyNotes.trim() || '[Not defined]'}`,
  ].join('\n\n');
}

