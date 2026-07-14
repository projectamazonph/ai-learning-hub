# Diagnose and Fix the Current Bug

Fix the current reproduced AI Ready PH defect without widening scope.

1. Read the governing project and domain documents.
2. Reproduce the defect from the reported inputs and environment.
3. Record the minimal reproduction and expected versus actual behavior in `ERROR_LOG.md`.
4. Trace the root cause. Do not patch the visible symptom first.
5. Write a regression test that fails for the reproduced defect.
6. Apply the smallest root-cause fix.
7. Run the regression test and adjacent suite.
8. Check whether the same cause affects authorization, tenant scope, payments, credits, assessments, privacy, or saved work.
9. Inspect the real interface or boundary.
10. Update `ERROR_LOG.md`, `TEST_LOG.md`, `CHANGELOG.md`, and project state with verified facts.

Do not silence exceptions, loosen validation, delete failing tests, add arbitrary retries, or replace durable behavior with in-memory state.

Report reproduction, root cause, fix, regression test, commands and results, and residual risk.

