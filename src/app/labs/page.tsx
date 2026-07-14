import type { Metadata } from 'next';
import { LabCard } from '@/components/LabCard';
import { labs } from '@/data/catalog';

export const metadata: Metadata = { title: 'Practice labs' };

export default function LabsPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">Practice labs</p>
            <h1>Safe rehearsal for work that matters.</h1>
          </div>
          <p>Practice with synthetic data, visible success criteria, versioned rubrics, revision feedback, and no risk to a real client account.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell lab-grid lab-grid--two">
          {labs.map((lab) => <LabCard key={lab.slug} {...lab} />)}
        </div>
      </section>
    </main>
  );
}

