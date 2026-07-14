import { describe, expect, it } from 'vitest';
import { evaluatePromptBrief, type PromptBriefInput } from './evaluate-prompt';

// Boundary guards for the Prompt Workbench readiness scoring.
// These pin the band thresholds and the total ceiling so a future
// refactor of the rubric cannot silently move the goalposts.

const fullBrief: PromptBriefInput = {
  objective: 'A'.repeat(60),
  audience: 'B'.repeat(30),
  context: 'C'.repeat(80),
  constraints: 'D'.repeat(60),
  outputFormat: 'E'.repeat(50),
  qualityChecks: 'F'.repeat(60),
  privacyNotes: 'G'.repeat(40),
};

function briefWith(overrides: Partial<PromptBriefInput>): PromptBriefInput {
  return { ...fullBrief, ...overrides };
}

describe('prompt brief scoring boundaries', () => {
  it('caps the total at 100 for overlong input', () => {
    const result = evaluatePromptBrief(briefWith({ objective: 'A'.repeat(500) }));
    expect(result.total).toBe(100);
    expect(result.band).toBe('Ready');
  });

  it('grades a half-specified brief as needing structure', () => {
    const half = briefWith({
      objective: 'A'.repeat(20),
      audience: 'B'.repeat(10),
      context: 'C'.repeat(30),
      constraints: 'D'.repeat(20),
      outputFormat: 'E'.repeat(20),
      qualityChecks: 'F'.repeat(20),
      privacyNotes: 'G'.repeat(10),
    });
    const result = evaluatePromptBrief(half);
    expect(result.total).toBe(52);
    expect(result.band).toBe('Needs structure');
  });

  it('drops to usable when the objective is empty (total 80)', () => {
    const result = evaluatePromptBrief(briefWith({ objective: '' }));
    expect(result.total).toBe(80);
    expect(result.band).toBe('Usable');
  });

  it('stays ready at exactly the 85 threshold (context removed)', () => {
    const result = evaluatePromptBrief(briefWith({ context: '' }));
    expect(result.total).toBe(85);
    expect(result.band).toBe('Ready');
  });

  it('rates a mix of full and empty fields as usable (total 65)', () => {
    const result = evaluatePromptBrief(
      briefWith({ audience: '', qualityChecks: '', privacyNotes: '' }),
    );
    expect(result.total).toBe(65);
    expect(result.band).toBe('Usable');
  });

  it('never returns a negative or over-cap score per criterion', () => {
    const result = evaluatePromptBrief(briefWith({ objective: '' }));
    for (const c of result.criteria) {
      expect(c.score).toBeGreaterThanOrEqual(0);
      expect(c.score).toBeLessThanOrEqual(c.maxScore);
      expect(c.maxScore).toBeGreaterThan(0);
    }
  });
});
