# Workspace Contract

## Root

The repository root is the directory containing this file, `AGENTS.md`, and `package.json`.

Agents must not search outside this root for code, configuration, credentials, or documentation.

## Commands

| Intent | Command |
| --- | --- |
| Install | `npm install` |
| Develop | `npm run dev` |
| Typecheck | `npm run typecheck` |
| Lint | `npm run lint` |
| Test once | `npm run test` |
| Test in watch mode | `npm run test:watch` |
| Production build | `npm run build` |
| Full verification | `npm run verify` |

## Environment

- Variable names and descriptions are in `.env.example`.
- Local values belong in `.env.local` and must never be committed.
- Production values belong in the deployment platform.
- GitHub workflow secrets belong in repository settings.
- No other secret location is supported.

## Important paths

| Concern | Path |
| --- | --- |
| Routes | `src/app/` |
| Components | `src/components/` |
| Catalog data | `src/data/` |
| Lab domain | `src/features/labs/` |
| Product docs | `docs/product/` |
| Curriculum docs | `docs/curriculum/` |
| Simulator specs | `docs/simulators/` |
| Architecture docs | `docs/architecture/` |
| UX docs | `docs/ux/` |
| Marketing copy | `docs/marketing/` |
| Operations | `docs/operations/` |
| Coder prompts | `prompts/` |

## Workflow

1. Read the story and linked source documents.
2. Work only in the files required by the story.
3. Test the smallest unit first.
4. Update logs only with verified facts.
5. Stop at external-operator boundaries and report the exact required action.

