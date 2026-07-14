import { describe, expect, it } from 'vitest';
import {
  allowedLabRunEvents,
  InvalidLabTransitionError,
  transitionLabRun,
} from './state-machine';

describe('lab run state machine', () => {
  it('supports the passing assessment path', () => {
    const events = [
      'START',
      'REQUEST_REVIEW',
      'SUBMIT',
      'BEGIN_EVALUATION',
      'GRADE_PASS',
      'COMPLETE',
    ] as const;

    const finalState = events.reduce(transitionLabRun, 'NOT_STARTED');

    expect(finalState).toBe('COMPLETED');
  });

  it('returns a revision-required run to active work', () => {
    expect(transitionLabRun('REVISION_REQUIRED', 'REVISE')).toBe('IN_PROGRESS');
  });

  it('rejects skipping evaluation', () => {
    expect(() => transitionLabRun('SUBMITTED', 'GRADE_PASS')).toThrow(InvalidLabTransitionError);
  });

  it('exposes only valid events for terminal completion', () => {
    expect(allowedLabRunEvents('COMPLETED')).toEqual([]);
  });
});

