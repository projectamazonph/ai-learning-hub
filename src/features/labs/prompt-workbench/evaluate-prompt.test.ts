import { describe, expect, it } from 'vitest';
import { composePrompt, evaluatePromptBrief, type PromptBriefInput } from './evaluate-prompt';

const completeBrief: PromptBriefInput = {
  objective:
    'Create a client-ready weekly status update that reports completed work, next actions, blockers, and decisions needed.',
  audience:
    'A busy small-business client who understands the project but does not need implementation detail.',
  context:
    'Use only the supplied synthetic project notes. They contain task status, owners, due dates, blockers, and open client questions.',
  constraints:
    'Do not invent progress, dates, owners, or results. Use a calm professional tone and stay below 250 words.',
  outputFormat:
    'Use four labeled sections: Completed, Next, Blockers, and Decisions Needed. Use concise bullets.',
  qualityChecks:
    'Check every claim against the notes, confirm all four sections exist, remove repetition, and flag every unknown.',
  privacyNotes:
    'The exercise uses synthetic data only. Do not add names, credentials, private information, or unsupported facts.',
};

describe('Prompt Workbench evaluation', () => {
  it('scores a complete task brief as ready', () => {
    const result = evaluatePromptBrief(completeBrief);

    expect(result.total).toBe(100);
    expect(result.band).toBe('Ready');
  });

  it('identifies an empty brief as needing structure', () => {
    const empty = Object.fromEntries(
      Object.keys(completeBrief).map((key) => [key, '']),
    ) as unknown as PromptBriefInput;

    const result = evaluatePromptBrief(empty);

    expect(result.total).toBe(0);
    expect(result.band).toBe('Needs structure');
    expect(result.criteria.every((criterion) => criterion.score === 0)).toBe(true);
  });

  it('awards partial credit to a brief with short but present fields', () => {
    const partial = Object.fromEntries(
      Object.keys(completeBrief).map((key) => [key, 'Short note']),
    ) as unknown as PromptBriefInput;

    const result = evaluatePromptBrief(partial);

    expect(result.total).toBeGreaterThan(0);
    expect(result.total).toBeLessThan(60);
  });

  it('composes a stable, labeled prompt', () => {
    const prompt = composePrompt(completeBrief);

    expect(prompt).toContain('OBJECTIVE');
    expect(prompt).toContain('QUALITY CHECKS');
    expect(prompt).toContain('synthetic data only');
  });
});

