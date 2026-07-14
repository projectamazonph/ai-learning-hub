# Test Log

## 2026-07-14: Initial scaffold

| Check | Status | Evidence |
| --- | --- | --- |
| Dependency install | Passed | `npm install --cache /tmp/npm-cache` installed 384 packages |
| Typecheck | Passed | `npm run typecheck` exited 0 |
| ESLint | Passed | `npm run lint` exited 0 |
| Unit tests | Passed | `npm run test` passed 3 files and 11 tests |
| Production build | Passed | `npm run build` compiled and prerendered 7 application routes |
| Route smoke test | Passed | Home, paths, labs, Prompt Workbench, pricing, and dashboard returned HTTP 200 from the production server |
| Dependency audit | Passed | `npm audit --audit-level=moderate` found 0 vulnerabilities after applying the PostCSS override |

Do not change a status to passing without running the command in the current repository state.

## 2026-07-14: Sprint 1 verification gate

| Check | Status | Evidence |
| --- | --- | --- |
| Typecheck | Passed | CI run 8 and 9, tsc --noEmit exited 0 |
| ESLint | Passed | CI run 8 and 9, eslint . exited 0 |
| Unit tests | Passed | CI run 9, 5 test files / 22 tests green (vitest run) |
| Production build | Passed | CI run 8 and 9, next build prerendered shell routes |

### Open verification gap (honest disclosure)
- Automated responsive inspection (390px and 1280px) was NOT performed. CI has no
  browser and this terminal has no Next.js toolchain. The mobile-first claim is an
  intended design property verified by code review, not a rendered-viewport check.
  Schedule a manual npm run dev inspection at 390px and 1280px before public launch.
- All passed statuses above reflect GitHub Actions CI runs, not a local toolchain.
