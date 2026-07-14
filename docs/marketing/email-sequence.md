# Email Sequence

## 1. Welcome and first win

**Subject:** Your first AI task should be useful, not impressive  
**Preview:** Start with one clear task brief and build from there.

Hi {{first_name}},

Welcome to AI Ready PH.

Your first step is not choosing the “best” AI tool. It is learning how to define a task that can be checked.

Open your dashboard and complete the Prompt Workbench scenario. You will turn a messy client request into a structured brief, score it, and improve the weak parts.

It takes about 20 minutes. It uses synthetic data. You do not need a paid AI account.

**Button:** Build my first task brief

When you finish, the result becomes your first Skills Passport evidence.

Ryan  
AI Ready PH

## 2. Diagnostic recommendation

**Subject:** Your recommended AI learning path  
**Preview:** Here is where to start and why.

Hi {{first_name}},

Based on your readiness diagnostic, your recommended route is:

**Practical AI Foundations → {{recommended_path}}**

Why:

- Your current role: {{role}}.
- Your main goal: {{goal}}.
- Your available learning time: {{weekly_time}}.
- Your first skill priority: {{priority_competency}}.

This is a recommendation, not a lock. You can change paths from your dashboard.

**Button:** View my learning map

Your next action takes about {{next_action_minutes}} minutes.

## 3. Incomplete first lab

**Subject:** Your draft is saved  
**Preview:** Finish the one section that will improve it most.

Hi {{first_name}},

Your Prompt Workbench draft is saved.

The readiness check identified one priority:

**{{weakest_criterion}}**

You do not need to rebuild the entire prompt. Add one concrete sentence to that section, score it again, and review what changed.

**Button:** Continue my draft

Small revision. Better work. That is the loop.

## 4. First artifact completed

**Subject:** Your first evidence record is ready  
**Preview:** You did more than finish a lesson.

Hi {{first_name}},

You completed your first reviewed artifact:

**{{artifact_title}}**  
Final readiness score: **{{score}}/100**

The important part is not the number. You improved:

- {{improvement_one}}.
- {{improvement_two}}.

Your first and final versions are now linked in your Skills Passport.

**Button:** View my evidence

Next, you will use the same task-framing method on a different type of work.

## 5. Free-to-paid conversion

**Subject:** The next step after a better prompt  
**Preview:** Build the judgment that makes the output reliable.

Hi {{first_name}},

You have completed the free first win. Practical AI Foundations continues the work:

- Choose when AI should help and when it should not.
- Prepare useful context without exposing private information.
- Verify sources and unsupported claims.
- Review documents, spreadsheets, and communication before delivery.
- Design workflows with human approvals and failure paths.

Practical AI Foundations is **₱1,999** and includes 12 months of content updates, guided labs, a live-practice allowance, and the evidence requirements for the foundation certificate.

**Button:** View Practical AI Foundations

You can continue using the free demo labs even if you do not upgrade.

## 6. Revision required

**Subject:** Your submission needs one focused revision  
**Preview:** The reviewer identified the exact requirement to correct.

Hi {{first_name}},

Your submission for **{{assessment_title}}** was reviewed.

Status: **Revision required**

Priority:

{{priority_feedback}}

Your previous work is preserved. Start a revision to compare the original and corrected versions side by side.

**Button:** Start my revision

Revision is part of the evidence. It shows that you can diagnose and improve work, not just generate it.

## 7. Certificate issued

**Subject:** Your AI Ready PH certificate is verified  
**Preview:** Your certificate and Skills Passport evidence are ready.

Hi {{first_name}},

You completed **{{course_title}}** and met its competency and capstone requirements.

Your certificate is active and publicly verifiable. You control which Skills Passport evidence is shared with it.

**Button:** View my certificate

Verification code: {{verification_code}}

This certificate confirms the course and evidence requirements you completed. It does not claim provider endorsement or guarantee employment.

Well done. You earned the proof behind it.

## 8. Content update

**Subject:** Updated lesson: {{lesson_title}}  
**Preview:** What changed, why it matters, and whether you need to act.

Hi {{first_name}},

We reviewed and updated **{{lesson_title}}** on {{review_date}}.

What changed:

{{change_summary}}

What did not change:

{{evergreen_summary}}

Your historical progress and assessment evidence remain tied to the version you completed.

**Button:** Review the update

AI tools change. Your record should not quietly change with them.

## Merge-field contract

The double-braced fields above are deliberate message-template variables, not
unfinished copy. The sending service must validate them before delivery.

| Field | Source | Safe fallback |
| --- | --- | --- |
| `first_name` | Learner profile | `there` |
| `recommended_path` | Diagnostic recommendation | `Practical AI Foundations` |
| `role`, `goal`, `weekly_time` | Diagnostic answers | Omit the affected bullet |
| `priority_competency` | Diagnostic scoring result | `task framing` |
| `next_action_minutes` | Assigned activity metadata | `20` |
| `weakest_criterion` | Latest rubric result | `task clarity` |
| `artifact_title`, `assessment_title`, `course_title`, `lesson_title` | Content record | Block the send if missing |
| `score` | Final valid evaluation | Block the send if missing |
| `improvement_one`, `improvement_two` | Evaluation comparison | Omit any missing bullet |
| `priority_feedback` | Human review | Block the send if missing |
| `verification_code` | Issued credential | Block the send if missing |
| `review_date`, `change_summary`, `evergreen_summary` | Published content revision | Block the send if missing |

Never send unresolved braces to a learner. Log a structured template-validation
error and route the message to the operations review queue.
