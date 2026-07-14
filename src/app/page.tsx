import Link from 'next/link';
import { LabCard } from '@/components/LabCard';
import { PathCard } from '@/components/PathCard';
import { labs, learningPaths } from '@/data/catalog';

const outcomes = [
  ['01', 'Frame the work', 'Turn vague requests into clear objectives, inputs, constraints, and success checks.'],
  ['02', 'Use AI with judgment', 'Choose the right role for AI, provide useful context, and keep human control.'],
  ['03', 'Verify before delivery', 'Trace claims, inspect sources, catch defects, and revise weak output.'],
  ['04', 'Prove the skill', 'Save strong work to a portfolio and earn evidence-backed credentials.'],
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Practical AI education for real work</p>
            <h1>Stop collecting prompts. Start building useful work.</h1>
            <p className="hero__lede">
              Learn AI through guided tasks, realistic simulations, quality feedback, and portfolio evidence. Built for beginners, virtual assistants, freelancers, and business owners.
            </p>
            <div className="button-row hero__actions">
              <Link className="button button--primary" href="/labs/prompt-workbench">Try the Prompt Workbench</Link>
              <Link className="button button--secondary" href="/paths">Explore learning paths</Link>
            </div>
            <div className="hero__proof">
              <span>Mobile-first</span>
              <span>Synthetic practice data</span>
              <span>Verified skills</span>
            </div>
          </div>
          <aside className="hero__manual" aria-label="Learning loop preview">
            <div className="manual__header">
              <span className="mono">FIELD NOTE 001</span>
              <span>FOUNDATION</span>
            </div>
            <h2>The AI work loop</h2>
            <ol>
              <li><span>1</span><div><strong>Frame</strong><p>Define the result and boundaries.</p></div></li>
              <li><span>2</span><div><strong>Generate</strong><p>Use the right context and method.</p></div></li>
              <li><span>3</span><div><strong>Verify</strong><p>Check claims, quality, and safety.</p></div></li>
              <li><span>4</span><div><strong>Improve</strong><p>Revise the work and the process.</p></div></li>
            </ol>
            <div className="manual__stamp">HUMAN REVIEW REQUIRED</div>
          </aside>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell">
          <div className="section-heading section-heading--inverse">
            <p className="eyebrow eyebrow--inverse">The learning standard</p>
            <h2>AI skill is not measured in prompts sent.</h2>
            <p>It is measured in work you can explain, verify, improve, and safely deliver.</p>
          </div>
          <div className="outcome-grid">
            {outcomes.map(([number, title, description]) => (
              <article key={number}>
                <span className="mono">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Choose an outcome</p>
            <h2>One foundation. Three ways to use it.</h2>
            <p>Start with the same core judgment, then practice the work that fits your role.</p>
          </div>
          <div className="path-grid">
            {learningPaths.slice(1).map((path) => <PathCard key={path.slug} {...path} />)}
          </div>
          <div className="section-cta">
            <Link className="text-link" href="/paths">See the complete curriculum <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Practice laboratory</p>
              <h2>Learn inside the work.</h2>
            </div>
            <p>Each lab gives you a realistic brief, synthetic source pack, review checks, and evidence you can keep.</p>
          </div>
          <div className="lab-grid">
            {labs.slice(0, 3).map((lab) => <LabCard key={lab.slug} {...lab} />)}
          </div>
          <div className="section-cta">
            <Link className="text-link" href="/labs">View all practice labs <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell callout">
          <div>
            <p className="eyebrow">Your first useful result</p>
            <h2>Build a stronger AI task brief in ten minutes.</h2>
            <p>Try the working Prompt Workbench. No account, provider key, or client data required.</p>
          </div>
          <Link className="button button--primary" href="/labs/prompt-workbench">Open the workbench</Link>
        </div>
      </section>
    </main>
  );
}

