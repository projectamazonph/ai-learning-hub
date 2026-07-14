# Handoff — AI Ready PH Learning Hub

**Date:** 2026-07-14
**Session type:** Coding-agent session (`system/coding-agent.md`) — Sprint 0 + design foundation
**Operated by:** Dusk (AI assistant) for `projectamazonph` (Ryan Roland Dabao)

---

## 1. Current State

| Item | Value |
|---|---|
| **Authoritative source** | GitHub `projectamazonph/ai-learning-hub`, branch `main` |
| **HEAD commit** | `2c469edbb803d01fc32d6776557689a0637a9f38` (`80a05dd..2c469ed`, pushed 2026-07-14) |
| **Local `/sdcard` working copy** | **BROKEN partial** — only a stale `node_modules` remains. Do NOT use. |
| **Local `/tmp/aihub_clean`** | Holds the committed tree (ephemeral; lost on reboot) |

The push made GitHub the source of truth and sidestepped the `/sdcard` limitation
(sticky-bit blocks new git object shards on the overlay FS).

---

## 2. What Was Done This Session

### Sprint 0 — Foundation transfer
- Transferred the validated starter scaffold from `AI-Ready-PH-Learning-Hub-Starter-v0.1.0.zip`
  into the repo: `docs/`, `src/`, `prompts/`, `AGENTS.md`, `AI_CONTEXT.md`,
  `PROJECT_STATE.yaml`, `WORKSPACE.md`, `package.json`, configs, and CI.
- **Preserved the owner's feature-focused `README.md`** (explicit instruction: features, not tech stack).

### Design foundation (pre-Sprint-1) — *Operator's Notebook* system
- **(A) Spec ↔ CSS reconciliation** — documented the 7 derived soft/shade tokens
  (`ink-muted`, `line-strong`, `cobalt-dark`, `cobalt-soft`, `orange-soft`, `green-soft`,
  `red-soft`) in `docs/ux/design-system.md`; retired the unused `--amber` token from
  `src/app/globals.css` (verified unused via `grep`).
- **(B2) Typed token mirror** — added `src/design/tokens.ts`, a typed, read-only mirror of the
  CSS tokens (`as const` + exported `Tokens` type). **Governance decision B2:**
  `globals.css` remains authoritative; no generator/sync script.
- **(C) Status vocabulary** — expanded `.status--*` in `src/app/globals.css` to the full 9-label
  set from the spec (Draft, Ready, Submitted, Evaluating, Revision required, Approved, Completed,
  Failed, Retired), each using a soft-wash token. The 3 pre-existing dashboard variants
  (`available`, `specified`, `planned`) were preserved.

---

## 3. Key Decisions

| Decision | Choice | Rationale |
|---|---|---|
| README | Owner's feature-focused version | Explicit user instruction |
| Token governance | **B2** — CSS authoritative, TS mirror | Lowest risk; no sync tooling |
| Amber token | Retired | Undocumented + unused (grep-verified) |
| Local commit on `/sdcard` | Not possible | Sticky-bit blocks new git object shards |
| Push to remote | Authorized | Makes GitHub the source of truth; avoids `/sdcard` limit |

---

## 4. Open Items / Caveats

- ⚠️ **Verification gap:** `npm run typecheck/lint/test/build` were **NOT executed**. The Next.js
  dependency tree could not install over this environment's network (`tsc: not found`).
  `src/design/tokens.ts` has zero imports and is a plain `as const` literal (low-risk) but remains
  **unverified** until a machine with the toolchain runs the sprint gate. This caveat is recorded
  in the commit message.
- ⚠️ The `/sdcard/gh-repos/ai-learning-hub` working copy is broken. Clean up its stale
  `node_modules` separately (the `/sdcard` overlay is very slow at large-tree unlink; a file
  manager or reboot may be needed).

---

## 5. Next Session

1. Clone fresh on a writable filesystem → `npm install` → `npm run typecheck` to **close the
   verification gap**.
2. Sprint 1 (via `prompts/workflows/implement-story.md`, TDD, one story at a time): landing page,
   paths catalog, pricing page, and the Prompt Workbench vertical slice. The design-tokens
   foundation is ready for it.
3. Protocol recap (from `prompts/README.md`):
   - Start a long-running coding session with `system/coding-agent.md`
   - Use `system/orchestrator.md` **only** when coordinating several ordered stories
   - Use a matching role prompt for specialist work
   - Use a workflow prompt for implementation / debugging / review / release
   - Use `sprints/sprint-0-to-12.md` to create or execute the planned backlog

---

## 6. Repo Layout (post-Sprint-0)

```
ai-learning-hub/
├── src/app/            Next.js routes (landing, paths, pricing, labs, dashboard)
├── src/components/     SiteHeader, SiteFooter, PathCard, LabCard, PromptWorkbench
├── src/data/           catalog.ts (starter catalog)
├── src/design/tokens.ts   Typed read-only mirror of CSS tokens (NEW)
├── src/features/labs/  prompt-workbench, scenario-schema, state-machine (+ tests)
├── docs/               product, curriculum, ux, simulators, architecture, marketing, operations
├── prompts/            system, roles, workflows, sprints
├── AGENTS.md           Non-negotiable agent rules (starter version)
├── AI_CONTEXT.md       Compact project briefing
├── WORKSPACE.md        Deterministic workspace + command map
├── PROJECT_STATE.yaml  Machine-readable project state
└── README.md           Owner's feature-focused version (preserved)
```
