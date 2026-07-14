'use client';

import { useMemo, useState } from 'react';
import {
  composePrompt,
  evaluatePromptBrief,
  type PromptBriefInput,
} from '@/features/labs/prompt-workbench/evaluate-prompt';

const emptyBrief: PromptBriefInput = {
  objective: '',
  audience: '',
  context: '',
  constraints: '',
  outputFormat: '',
  qualityChecks: '',
  privacyNotes: '',
};

const exampleBrief: PromptBriefInput = {
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

const fields: Array<{
  id: keyof PromptBriefInput;
  label: string;
  hint: string;
  placeholder: string;
}> = [
  {
    id: 'objective',
    label: 'Objective',
    hint: 'What exact result should the AI produce?',
    placeholder: 'Create a client-ready weekly update that…',
  },
  {
    id: 'audience',
    label: 'Audience',
    hint: 'Who will use the result, and what do they need?',
    placeholder: 'A busy client who knows the project but…',
  },
  {
    id: 'context',
    label: 'Context and source material',
    hint: 'What facts can the AI use? What should it understand?',
    placeholder: 'Use only the supplied synthetic project notes…',
  },
  {
    id: 'constraints',
    label: 'Constraints',
    hint: 'Define boundaries, exclusions, tone, length, or deadlines.',
    placeholder: 'Do not invent facts. Stay below 250 words…',
  },
  {
    id: 'outputFormat',
    label: 'Output format',
    hint: 'Specify sections, fields, order, or structure.',
    placeholder: 'Use four labeled sections with concise bullets…',
  },
  {
    id: 'qualityChecks',
    label: 'Quality checks',
    hint: 'How will you know the response is ready to deliver?',
    placeholder: 'Trace every claim to the notes and confirm…',
  },
  {
    id: 'privacyNotes',
    label: 'Privacy and safety',
    hint: 'State the data boundary and anything the AI must not reveal.',
    placeholder: 'Synthetic data only. Do not add private details…',
  },
];

export function PromptWorkbench() {
  const [brief, setBrief] = useState<PromptBriefInput>(emptyBrief);
  const [copied, setCopied] = useState(false);
  const evaluation = useMemo(() => evaluatePromptBrief(brief), [brief]);
  const composedPrompt = useMemo(() => composePrompt(brief), [brief]);

  function updateField(id: keyof PromptBriefInput, value: string) {
    setBrief((current) => ({ ...current, [id]: value }));
    setCopied(false);
  }

  async function copyPrompt() {
    await navigator.clipboard.writeText(composedPrompt);
    setCopied(true);
  }

  return (
    <div className="workbench">
      <section className="workbench__brief" aria-labelledby="brief-heading">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Step 1</p>
            <h2 id="brief-heading">Build the task brief</h2>
          </div>
          <div className="button-row">
            <button className="button button--small button--ghost" type="button" onClick={() => setBrief(emptyBrief)}>
              Clear
            </button>
            <button className="button button--small button--secondary" type="button" onClick={() => setBrief(exampleBrief)}>
              Load example
            </button>
          </div>
        </div>

        <div className="field-stack">
          {fields.map((field) => (
            <label className="field" key={field.id}>
              <span className="field__label">{field.label}</span>
              <span className="field__hint">{field.hint}</span>
              <textarea
                value={brief[field.id]}
                onChange={(event) => updateField(field.id, event.target.value)}
                placeholder={field.placeholder}
                rows={3}
              />
            </label>
          ))}
        </div>
      </section>

      <aside className="workbench__score" aria-labelledby="score-heading">
        <div className="score-card">
          <p className="eyebrow">Live readiness check</p>
          <div className="score-card__value">
            <strong>{evaluation.total}</strong>
            <span>/100</span>
          </div>
          <h2 id="score-heading">{evaluation.band}</h2>
          <div
            className="progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={evaluation.total}
            aria-label="Prompt readiness"
          >
            <span style={{ width: `${evaluation.total}%` }} />
          </div>
          <p>{evaluation.nextAction}</p>
        </div>

        <div className="criteria-list">
          {evaluation.criteria.map((criterion) => (
            <div className="criterion" key={criterion.id}>
              <div>
                <strong>{criterion.label}</strong>
                <span>{criterion.score}/{criterion.maxScore}</span>
              </div>
              <p>{criterion.feedback}</p>
            </div>
          ))}
        </div>
      </aside>

      <section className="workbench__output" aria-labelledby="output-heading">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Step 2</p>
            <h2 id="output-heading">Review the composed prompt</h2>
          </div>
          <button className="button button--small button--primary" type="button" onClick={copyPrompt}>
            {copied ? 'Copied' : 'Copy prompt'}
          </button>
        </div>
        <pre className="prompt-preview">{composedPrompt}</pre>
        <p className="workbench__note">
          This starter scores task structure only. Live model execution, credit metering, output evaluation, and saved runs enter through the documented AI gateway and lab contracts.
        </p>
      </section>
    </div>
  );
}

