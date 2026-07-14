# Sample Lesson: Define an Observable Result

## Metadata

- Course: Practical AI Foundations.
- Module: Task framing.
- Estimated time: 12 minutes.
- Competency: Task framing.
- Mastery target: Guided.
- Related lab: Prompt Workbench.
- Volatility: Evergreen.
- Reviewed: 2026-07-14.

## Outcome

By the end of this lesson, you can replace a vague request with a result that another person can inspect and approve.

## Why it matters

AI does not fix an unclear task. It usually makes the confusion faster and more polished.

If a client says, “Make me a report,” the model must guess:

- Which decision the report supports.
- Who will read it.
- Which facts matter.
- How long it should be.
- What “good” means.

The first job is not writing a clever prompt. The first job is defining the result.

## Weak attempt

> Analyze these notes and make a good report.

## Diagnosis

“Analyze” does not say what decision the analysis should support. “Good” has no observable meaning. “Report” does not define structure, audience, or length.

The model can produce something fluent. You still cannot tell whether it solved the task.

## Improved method

Use this sentence:

> Produce **[artifact]** for **[audience]** so they can **[decision or action]**. The result must include **[required evidence or sections]** and exclude **[important boundary]**.

Example:

> Produce a one-page weekly project update for the client so they can confirm next priorities. Include completed work, next actions, blockers, and decisions needed. Use only the supplied notes and do not invent owners or dates.

## Guided practice

Rewrite this request:

> Look at our customer comments and tell me what you think.

Your result statement must identify:

- Artifact.
- Audience.
- Decision or action.
- Required evidence.
- One exclusion.

## Example answer

> Produce a one-page customer-feedback brief for the operations manager so she can choose the top three service improvements for next month. Group the supplied comments by theme, show the number of comments supporting each theme, include two representative excerpts, and separate observations from recommendations. Do not infer customer demographics that are not present in the data.

## Verification checklist

- Can another person point to the final artifact?
- Is the audience named?
- Is the decision or action clear?
- Are required sections or evidence stated?
- Is at least one important boundary explicit?
- Can you judge pass or fail without guessing what “good” means?

## Transfer

The same method works for emails, research, spreadsheets, presentations, SOPs, content, and workflow design.

## Reflection

Which part of your current work is most often left vague: the artifact, the audience, the decision, the evidence, or the boundary?

## Next action

Open Prompt Workbench and build the objective for the weekly client update scenario.
