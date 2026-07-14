import type { Metadata } from 'next';
import Link from 'next/link';
import { offers } from '@/data/catalog';

export const metadata: Metadata = { title: 'Pricing' };

export default function PricingPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">Simple access</p>
            <h1>Pay for skills and practice, not mystery tokens.</h1>
          </div>
          <p>Every paid plan shows the learning access, live practice allowance, assessment limits, and support included before checkout.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell pricing-grid">
          {offers.map((offer) => (
            <article className={`price-card${offer.recommended ? ' price-card--recommended' : ''}`} key={offer.name}>
              {offer.recommended && <span className="price-card__flag">Best starting point</span>}
              <h2>{offer.name}</h2>
              <p className="price-card__price">{offer.price}</p>
              <p>{offer.description}</p>
              <ul>
                {offer.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link className={`button ${offer.recommended ? 'button--primary' : 'button--secondary'}`} href="/dashboard">
                {offer.price === 'Free' ? 'Start free' : 'Preview access'}
              </Link>
            </article>
          ))}
        </div>
        <p className="shell pricing-note">Prices are the launch validation model defined in the product plan. Checkout is not enabled in this scaffold.</p>
      </section>
    </main>
  );
}

