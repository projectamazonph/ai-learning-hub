import type { Metadata } from 'next';
import { PromptWorkbench } from '@/components/PromptWorkbench';

export const metadata: Metadata = { title: 'Prompt Workbench' };

export default function PromptWorkbenchPage() {
  return (
    <main id="main-content">
      <section className="lab-hero">
        <div className="shell">
          <div className="lab-hero__meta">
            <span className="mono">LAB 01</span>
            <span>Foundation</span>
            <span>10–20 minutes</span>
            <span>Synthetic data</span>
          </div>
          <h1>Prompt Workbench</h1>
          <p>Build a complete task brief before asking AI to do the work. The readiness check shows what is strong, what is missing, and what to improve next.</p>
        </div>
      </section>
      <section className="section section--compact">
        <div className="shell">
          <PromptWorkbench />
        </div>
      </section>
    </main>
  );
}

