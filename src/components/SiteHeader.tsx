import Link from 'next/link';

const navigation = [
  { href: '/paths', label: 'Learning paths' },
  { href: '/labs', label: 'Practice labs' },
  { href: '/pricing', label: 'Pricing' },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand" aria-label="AI Ready PH home">
          <span className="brand__mark" aria-hidden="true">AR</span>
          <span>
            <strong>AI Ready PH</strong>
            <small>Learning Hub</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button--small button--primary header-cta" href="/dashboard">
          Open demo
        </Link>
      </div>
    </header>
  );
}

