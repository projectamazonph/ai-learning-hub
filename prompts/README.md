# Prompt Pack

These prompts are designed for coding and content agents working inside this repository. They already include the project context and operating constraints.

## Use order

1. Start a long-running coding session with `system/coding-agent.md`.
2. Use `system/orchestrator.md` only when coordinating several ordered stories.
3. Use the matching role prompt for specialist work.
4. Use a workflow prompt for implementation, debugging, review, or release.
5. Use `sprints/sprint-0-to-12.md` to create or execute the planned backlog.

## Files

### System

- `system/coding-agent.md`: default repository coding agent.
- `system/orchestrator.md`: scope and dependency controller.

### Roles

- `roles/simulator-builder.md`.
- `roles/frontend-builder.md`.
- `roles/data-backend-builder.md`.
- `roles/curriculum-author.md`.
- `roles/test-reviewer.md`.
- `roles/security-reviewer.md`.
- `roles/docs-maintainer.md`.

### Workflows

- `workflows/implement-story.md`.
- `workflows/fix-bug.md`.
- `workflows/review-change.md`.
- `workflows/release-candidate.md`.

### Sprints

- `sprints/sprint-0-to-12.md`: complete delivery prompts and exit gates.

## Prompt rule

Do not paste the whole pack into one context. Use the smallest prompt that governs the task, and let repository files supply the rest. Context dumping is not architecture.

