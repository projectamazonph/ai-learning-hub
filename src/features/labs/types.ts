export const audienceValues = ['BEGINNER', 'VIRTUAL_ASSISTANT', 'FREELANCER', 'BUSINESS_OWNER'] as const;
export type Audience = (typeof audienceValues)[number];

export const difficultyValues = ['FOUNDATION', 'PRACTITIONER', 'ADVANCED'] as const;
export type Difficulty = (typeof difficultyValues)[number];

export const labRunStateValues = [
  'NOT_STARTED',
  'IN_PROGRESS',
  'READY_FOR_REVIEW',
  'SUBMITTED',
  'EVALUATING',
  'GRADED',
  'REVISION_REQUIRED',
  'COMPLETED',
  'ABANDONED',
] as const;

export type LabRunState = (typeof labRunStateValues)[number];

export type LabRunEvent =
  | 'START'
  | 'SAVE'
  | 'REQUEST_REVIEW'
  | 'SUBMIT'
  | 'BEGIN_EVALUATION'
  | 'GRADE_PASS'
  | 'GRADE_REVISE'
  | 'REVISE'
  | 'COMPLETE'
  | 'ABANDON';

export interface ScenarioTask {
  id: string;
  instruction: string;
  required: boolean;
}

export interface LabScenario {
  id: string;
  slug: string;
  version: number;
  labSlug: string;
  title: string;
  summary: string;
  audiences: Audience[];
  difficulty: Difficulty;
  estimatedMinutes: number;
  syntheticDataOnly: true;
  brief: {
    role: string;
    goal: string;
    constraints: string[];
    successCriteria: string[];
  };
  tasks: ScenarioTask[];
  rubricVersion: string;
  status: 'DRAFT' | 'PUBLISHED' | 'RETIRED';
}

