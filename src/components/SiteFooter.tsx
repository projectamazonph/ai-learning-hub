import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <p className="eyebrow eyebrow--inverse">AI Ready PH</p>
          <h2>Useful work beats AI theater.</h2>
          <p>
            Learn the judgment, process, and quality controls that make AI valuable in real work.
          </p>
        </div>
        <div className="site-footer__links">
          <Link href="/paths">Learning paths</Link>
          <Link href="/labs">Practice labs</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/dashboard">Product demo</Link>
        </div>
      </div>
      <div className="shell site-footer__legal">
        <span>© 2026 Ryan Roland Dabao. All rights reserved.</span>
        <span>Independent education product. No AI provider affiliation or endorsement.</span>
      </div>
    </footer>
  );
}

