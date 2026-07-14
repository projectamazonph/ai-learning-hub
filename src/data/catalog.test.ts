import { describe, expect, it } from 'vitest';
import { dashboardStats, labs, learningPaths, offers } from './catalog';

// Data-contract guards for the catalog consumed by the landing, paths,
// labs, pricing, and dashboard pages. A malformed or link-broken catalog
// would render empty sections or dead navigation; these tests catch that
// before build or at unit time.

const URL_SAFE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const LAB_STATUS = ['AVAILABLE', 'SPECIFIED', 'PLANNED'] as const;

describe('learning paths catalog', () => {
  it('has unique, url-safe slugs and required content', () => {
    const slugs = learningPaths.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const path of learningPaths) {
      expect(path.slug).toMatch(URL_SAFE);
      expect(path.title.trim().length).toBeGreaterThan(0);
      expect(path.description.trim().length).toBeGreaterThan(0);
      expect(path.modules).toBeGreaterThan(0);
    }
  });
});

describe('labs catalog', () => {
  it('exposes only valid statuses and two-digit numbers', () => {
    for (const lab of labs) {
      expect(LAB_STATUS.includes(lab.status)).toBe(true);
      expect(lab.number).toMatch(/^\d{2}$/);
      expect(lab.scenarios).toBeGreaterThan(0);
      expect(lab.title.trim().length).toBeGreaterThan(0);
    }
  });

  it('links only built labs and keeps every slug unique', () => {
    const slugs = labs.map((l) => l.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const lab of labs) {
      // A lab is reachable only when it is available; availability implies a link.
      expect(lab.status === 'AVAILABLE').toBe(lab.href !== null);
      if (lab.href !== null) {
        expect(lab.href.startsWith('/')).toBe(true);
      }
    }
  });
});

describe('offers catalog', () => {
  it('has a free tier and exactly one recommended offer', () => {
    const hasFree = offers.some((o) => o.price.trim().toLowerCase() === 'free');
    expect(hasFree).toBe(true);
    const recommended = offers.filter((o) => o.recommended);
    expect(recommended.length).toBe(1);
    for (const offer of offers) {
      expect(offer.name.trim().length).toBeGreaterThan(0);
      expect(offer.features.length).toBeGreaterThan(0);
    }
  });
});

describe('dashboard stats catalog', () => {
  it('provides complete stat rows', () => {
    expect(dashboardStats.length).toBeGreaterThan(0);
    for (const stat of dashboardStats) {
      expect(stat.label.trim().length).toBeGreaterThan(0);
      expect(stat.value.trim().length).toBeGreaterThan(0);
      expect(stat.detail.trim().length).toBeGreaterThan(0);
    }
  });
});
