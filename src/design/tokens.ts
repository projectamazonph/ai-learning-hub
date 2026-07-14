/*
 * Design tokens — read-only TypeScript mirror.
 *
 * GOVERNANCE (decision B2): `src/app/globals.css` is the authoritative source
 * of these values. This module is a typed, read-only mirror for TS/JS
 * consumers (components, utilities) so logic never hardcodes a hex value or
 * magic spacing number.
 *
 * Do NOT edit values here to change the design. Edit `globals.css`, then mirror
 * the change here by hand. No generator or sync script is wired (intentionally,
 * by decision B2) to keep the token pipeline low-risk.
 */

export const tokens = {
  color: {
    paper: "#f7f5ef",
    paperBright: "#fffefb",
    paperMuted: "#eeece4",
    ink: "#161b22",
    inkSoft: "#47505c",
    inkMuted: "#727b86",
    line: "#d8d6ce",
    lineStrong: "#a9adb2",
    cobalt: "#2457d6",
    cobaltDark: "#173c9c",
    cobaltSoft: "#e3eafb",
    orange: "#de6b35",
    orangeSoft: "#f8e5dc",
    green: "#137044",
    greenSoft: "#dcefe5",
    red: "#a33535",
    redSoft: "#f4dddd",
  },
  // 4px base scale. Keys are the CSS --space-N step.
  space: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
  },
  radius: {
    sm: "4px",
    md: "7px",
    lg: "12px",
  },
  text: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.375rem",
    "2xl": "1.75rem",
    "3xl": "clamp(2.2rem, 6vw, 4.6rem)",
  },
  font: {
    display: '"Space Grotesk", "Aptos Display", "Segoe UI", sans-serif',
    body: '"Space Grotesk", "Aptos", "Segoe UI", sans-serif',
    mono: '"JetBrains Mono", "SFMono-Regular", Consolas, monospace',
  },
  layout: {
    shadowSm: "0 1px 2px rgb(22 27 34 / 0.06)",
    shadowMd: "0 12px 28px rgb(22 27 34 / 0.09)",
    maxWidth: "1200px",
    readingWidth: "760px",
  },
  // Motion durations sourced from docs/ux/design-system.md.
  // globals.css currently applies 120ms to component transitions;
  // 220ms is the documented panel-state duration.
  motion: {
    hoverFocusMs: 120,
    panelMs: 220,
  },
} as const;

export type Tokens = typeof tokens;
