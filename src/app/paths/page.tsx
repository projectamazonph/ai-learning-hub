import type { Metadata } from 'next';
import Link from 'next/link';
import { PathCard } from '@/components/PathCard';
import { learningPaths } from '@/data/catalog';

export const metadata: Metadata = { title: 'Learning paths' };

export default function PathsPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">Learning paths</p>
            <h1>Build the AI skills your work actually needs.</h1>
          </div>
          <p>Every learner completes the shared foundation, then follows realistic tasks, labs, and a capstone matched to an outcome.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell path-grid path-grid--two">
          {learningPaths.map((path) => <PathCard key={path.slug} {...path} />)}
        </div>
      </section>
      <section className="section section--wash">
        <div className="shell diagnostic-strip">
          <div>
            <p className="eyebrow">Not sure where to start?</p>
            <h2>The readiness diagnostic maps your first route.</h2>
          </div>
          <p>Eight questions identify your current role, experience, weekly work, goals, risk level, and available learning time.</p>
          <Link className="button button--secondary" href="/dashboard">Preview the learner dashboard</Link>
        </div>
      </section>
    </main>
  );
}

