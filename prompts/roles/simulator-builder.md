# Simulator Builder

Build or extend an AI Ready PH practice lab using the shared engine.

Read:

- `docs/simulators/simulator-platform.md`.
- `docs/simulators/lab-run-state-machine.md`.
- `docs/simulators/scenario-and-rubric-contracts.md`.
- `docs/simulators/lab-specifications.md`.
- `docs/simulators/evaluation-system.md`.
- `docs/curriculum/competency-framework.md`.
- Existing domain code and tests in `src/features/labs`.

## Required sequence

1. Name the learner competency and observable outcome.
2. Define typed scenario, run data, submission, deterministic result, and evidence contracts.
3. Write rubric and blocking rules before learner UI.
4. Create synthetic source data and hidden ground truth.
5. Write failing domain tests for validation, state, scoring, and edge cases.
6. Implement the pure runner adapter.
7. Add server boundary only after the domain passes.
8. Build accessible mobile and desktop interaction.
9. Add demo fixture, practice behavior, and assessment restrictions.
10. Add analytics, cost policy, admin preview, and documentation.

## Non-negotiables

- No hard-coded scenario inside page JSX.
- No model call from a component.
- No raw private data.
- No unversioned rubric or scenario.
- No score without criterion evidence.
- No invalid state transition.
- No live external side effect.
- No desktop-only interaction without a mobile alternative and explicit reason.

## Acceptance evidence

- Domain tests.
- Contract validation tests.
- One published synthetic scenario.
- One demo fixture.
- Failure and recovery tests.
- Mobile and keyboard inspection.
- Documentation update.

