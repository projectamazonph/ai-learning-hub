import type { Metadata } from 'next';
import Link from 'next/link';
import { dashboardStats } from '@/data/catalog';

export const metadata: Metadata = { title: 'Learner dashboard' };

const competencyRows = [
  ['Task framing', 'Guided', '62%'],
  ['Prompt design', 'Guided', '54%'],
  ['Verification', 'Aware', '31%'],
  ['Data safety', 'Guided', '58%'],
] as const;

export default function DashboardPage() {
  return (
    <main id="main-content" className="app-surface">
      <div className="shell dashboard">
        <header className="dashboard__header">
          <div>
            <p className="eyebrow">Tuesday, 14 July</p>
            <h1>Continue building useful work.</h1>
            <p>Your recommended next action takes about 20 minutes.</p>
          </div>
          <div className="level-chip"><span>LEVEL 2</span><strong>240 XP</strong></div>
        </header>

        <section className="dashboard-stats" aria-label="Learning summary">
          {dashboardStats.map((stat) => (
            <article key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <small>{stat.detail}</small>
            </article>
          ))}
        </section>

        <section className="next-action">
          <div className="next-action__number mono">NEXT / 01</div>
          <div>
            <p className="eyebrow">Practical AI Foundations · Module 2</p>
            <h2>Turn a vague request into a task brief.</h2>
            <p>Practice objective, audience, context, constraints, format, checks, and data boundaries.</p>
            <div className="next-action__meta"><span>20 min</span><span>Task framing</span><span>Portfolio eligible</span></div>
          </div>
          <Link className="button button--primary" href="/labs/prompt-workbench">Continue lab</Link>
        </section>

        <div className="dashboard__grid">
          <section className="dashboard-panel">
            <div className="panel-heading"><div><p className="eyebrow">Skills Passport</p><h2>Competency progress</h2></div><span className="mono">4 / 11</span></div>
            <div className="competency-table">
              {competencyRows.map(([name, level, progress]) => (
                <div key={name}>
                  <span>{name}</span>
                  <span>{level}</span>
                  <div className="mini-progress" aria-label={`${name} ${progress}`}><span style={{ width: progress }} /></div>
                  <strong>{progress}</strong>
                </div>
              ))}
            </div>
          </section>
          <aside className="dashboard-panel">
            <div className="panel-heading"><div><p className="eyebrow">Recent evidence</p><h2>Your work</h2></div></div>
            <div className="evidence-list">
              <article><span className="status status--available">REVISED</span><h3>Client update task brief</h3><p>Prompt Workbench · 88/100</p></article>
              <article><span className="status status--specified">REVIEWED</span><h3>Source quality checklist</h3><p>Research Lab · 74/100</p></article>
              <article><span className="status status--planned">DRAFT</span><h3>AI use policy</h3><p>Data Safety · Not submitted</p></article>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

