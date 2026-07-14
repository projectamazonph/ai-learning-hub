# Information Architecture

## Navigation model

The product has four surfaces with distinct permissions and density:

1. Public marketing and trust.
2. Personal learner application.
3. Business workspace.
4. Platform administration.

## Public routes

```text
/
├── /start
├── /paths
│   ├── /paths/virtual-assistant
│   ├── /paths/freelancer
│   └── /paths/business-owner
├── /courses/[courseSlug]
├── /labs
├── /pricing
├── /stories
├── /about
├── /faq
├── /verify/[certificateCode]
├── /sign-in
├── /sign-up
└── /forgot-password
```

Primary public call to action: start the free diagnostic or first-win lab.

## Learner application

```text
/app
├── /app/path
├── /app/courses/[courseSlug]
│   └── /app/lessons/[lessonSlug]
├── /app/labs
│   └── /app/labs/[labSlug]/[scenarioSlug]
├── /app/runs/[runId]
├── /app/assignments
├── /app/projects
├── /app/portfolio
│   └── /app/portfolio/[projectId]
├── /app/skills
├── /app/certificates
├── /app/live
├── /app/resources
├── /app/billing
└── /app/settings
    ├── /app/settings/profile
    ├── /app/settings/privacy
    ├── /app/settings/ai-usage
    └── /app/settings/export-delete
```

Mobile primary navigation:

- Today.
- Learn.
- Labs.
- Evidence.
- More.

## Workspace application

```text
/workspace/[workspaceSlug]
├── /overview
├── /members
├── /assignments
├── /paths
├── /skills
├── /analytics
├── /policies
├── /credits
└── /billing
```

Workspace navigation appears only with verified membership. Personal and workspace contexts remain visually distinct.

## Admin application

```text
/admin
├── /users
├── /workspaces
├── /courses
├── /paths
├── /competencies
├── /content
│   ├── /review-queue
│   └── /sources
├── /labs
│   ├── /scenarios
│   ├── /source-packs
│   └── /rubrics
├── /reviews
├── /models
├── /usage
├── /products
├── /payments
├── /refunds
├── /certificates
├── /live-classes
├── /analytics
├── /audit
└── /settings
```

## Content hierarchy

```text
Learning Path
└── Path Course
    └── Course
        └── Module
            ├── Lesson
            │   ├── Content Block
            │   ├── Knowledge Check
            │   └── Lab Launch
            ├── Resource
            └── Module Assessment
```

## Practice hierarchy

```text
Lab Definition
└── Lab Version
    └── Scenario Version
        ├── Source Pack
        ├── Tasks
        ├── Rubric Version
        └── Allowed Model Configuration
```

## Evidence hierarchy

```text
Lab Run or Submission
└── Evaluation
    └── Criterion Scores
        └── Competency Evidence
            ├── Skills Passport
            ├── Portfolio Artifact
            └── Certificate Requirement
```

## Findability rules

- The dashboard always shows one primary next action.
- Course pages show current position, prerequisites, outcomes, and evidence target.
- Labs can be discovered by role, skill, difficulty, time, and mode.
- Search results identify content type and reviewed date.
- Deprecated content points to a successor.
- Public verification remains accessible without account creation.

