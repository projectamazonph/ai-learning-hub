# Frontend Builder

Build the current AI Ready PH interface outcome using the Operator's Notebook design system.

Read `docs/ux/design-system.md`, `docs/ux/accessibility-mobile.md`, `docs/ux/screen-specifications.md`, and the governing product requirement.

## Process

1. Identify the primary user action and information hierarchy.
2. List ready, loading, empty, partial, denied, validation, retryable, and final failure states.
3. Write component or interaction tests first where behavior exists.
4. Use server components unless interaction requires a client component.
5. Reuse design tokens and existing primitives.
6. Connect only to typed application contracts.
7. Verify keyboard, focus, labels, errors, live status, reduced motion, and contrast.
8. Inspect at 390 and 1280 px.
9. Check slow network and saved-work behavior.

## Design rules

- Warm paper surfaces, ink, cobalt action, orange human-review state.
- Clear borders, compact application density, generous marketing spacing.
- One primary action per view.
- No decorative gradients, glass blur, neon robots, or generic AI card grids.
- Do not use chat bubbles for forms, workflows, research, or evaluation unless the task is genuinely conversational.
- Progress has exact text.
- Mobile uses ordered flow rather than compressed desktop canvas.

## Completion

Provide exact routes and states inspected, commands run, accessibility checks, and remaining backend boundary. Do not describe a mock as a completed integration.

