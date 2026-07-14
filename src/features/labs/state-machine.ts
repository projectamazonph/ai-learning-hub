import type { LabRunEvent, LabRunState } from './types';

const transitions: Record<LabRunState, Partial<Record<LabRunEvent, LabRunState>>> = {
  NOT_STARTED: { START: 'IN_PROGRESS', ABANDON: 'ABANDONED' },
  IN_PROGRESS: {
    SAVE: 'IN_PROGRESS',
    REQUEST_REVIEW: 'READY_FOR_REVIEW',
    ABANDON: 'ABANDONED',
  },
  READY_FOR_REVIEW: {
    SAVE: 'READY_FOR_REVIEW',
    SUBMIT: 'SUBMITTED',
    REVISE: 'IN_PROGRESS',
    ABANDON: 'ABANDONED',
  },
  SUBMITTED: { BEGIN_EVALUATION: 'EVALUATING' },
  EVALUATING: { GRADE_PASS: 'GRADED', GRADE_REVISE: 'REVISION_REQUIRED' },
  GRADED: { COMPLETE: 'COMPLETED', REVISE: 'IN_PROGRESS' },
  REVISION_REQUIRED: { REVISE: 'IN_PROGRESS', ABANDON: 'ABANDONED' },
  COMPLETED: {},
  ABANDONED: { START: 'IN_PROGRESS' },
};

export class InvalidLabTransitionError extends Error {
  constructor(state: LabRunState, event: LabRunEvent) {
    super(`Cannot apply ${event} while lab run is ${state}.`);
    this.name = 'InvalidLabTransitionError';
  }
}

export function transitionLabRun(state: LabRunState, event: LabRunEvent): LabRunState {
  const nextState = transitions[state][event];

  if (!nextState) {
    throw new InvalidLabTransitionError(state, event);
  }

  return nextState;
}

export function allowedLabRunEvents(state: LabRunState): LabRunEvent[] {
  return Object.keys(transitions[state]) as LabRunEvent[];
}

