export const learningPaths = [
  {
    slug: 'foundations',
    eyebrow: 'Start here',
    title: 'Practical AI Foundations',
    description:
      'Learn task framing, prompting, context, verification, everyday work, workflow design, and responsible AI use.',
    audience: 'Everyone',
    hours: '10–12 hours',
    modules: 10,
    outcome: 'A reviewed foundation capstone and baseline Skills Passport.',
  },
  {
    slug: 'virtual-assistant',
    eyebrow: 'Career path',
    title: 'AI-Powered Virtual Assistant',
    description:
      'Use AI for client communication, research, reporting, spreadsheets, content operations, SOPs, and quality assurance.',
    audience: 'Virtual assistants',
    hours: '16–20 hours',
    modules: 8,
    outcome: 'A simulated client-week portfolio and delivery process.',
  },
  {
    slug: 'freelancer',
    eyebrow: 'Service path',
    title: 'AI Freelancer',
    description:
      'Package an outcome-based service, scope and price work, build a repeatable delivery system, and prove the result.',
    audience: 'Freelancers',
    hours: '14–18 hours',
    modules: 8,
    outcome: 'A complete service package, proposal, SOP, sample, and case study.',
  },
  {
    slug: 'business-owner',
    eyebrow: 'Leadership path',
    title: 'AI for Business Owners',
    description:
      'Find valuable use cases, redesign workflows, set team rules, run a safe pilot, and measure business impact.',
    audience: 'Owners and managers',
    hours: '12–16 hours',
    modules: 8,
    outcome: 'A prioritized opportunity map and 90-day adoption plan.',
  },
] as const;

export const labs = [
  {
    slug: 'prompt-workbench',
    number: '01',
    title: 'Prompt Workbench',
    description: 'Build a structured task brief, compare revisions, and test prompt readiness.',
    skill: 'Task framing',
    scenarios: 6,
    status: 'AVAILABLE',
    href: '/labs/prompt-workbench',
  },
  {
    slug: 'deliverable-studio',
    number: '02',
    title: 'Brief-to-Deliverable Studio',
    description: 'Turn messy requests into reviewed documents, emails, reports, plans, and content.',
    skill: 'Delivery',
    scenarios: 8,
    status: 'SPECIFIED',
    href: null,
  },
  {
    slug: 'research-verification',
    number: '03',
    title: 'Research and Verification',
    description: 'Plan research, judge sources, trace claims, and resolve contradictions.',
    skill: 'Verification',
    scenarios: 7,
    status: 'SPECIFIED',
    href: null,
  },
  {
    slug: 'output-qa',
    number: '04',
    title: 'Output QA Lab',
    description: 'Find factual, logical, formatting, tone, privacy, and instruction-fit defects.',
    skill: 'Quality assurance',
    scenarios: 8,
    status: 'SPECIFIED',
    href: null,
  },
  {
    slug: 'data-safety',
    number: '05',
    title: 'Data Safety Clinic',
    description: 'Classify data, redact sensitive details, and respond safely to risky requests.',
    skill: 'Data safety',
    scenarios: 6,
    status: 'SPECIFIED',
    href: null,
  },
  {
    slug: 'workflow-canvas',
    number: '06',
    title: 'Workflow Canvas',
    description: 'Map human, AI, and system steps with approvals, failures, and ownership.',
    skill: 'Workflow design',
    scenarios: 5,
    status: 'PLANNED',
    href: null,
  },
] as const;

export const offers = [
  {
    name: 'AI Ready Starter',
    price: 'Free',
    description: 'Get oriented, complete a first useful task, and see your starting skill level.',
    features: ['AI readiness diagnostic', '90-minute starter course', 'Demo labs', 'Starter Skills Passport'],
    recommended: false,
  },
  {
    name: 'Practical AI Foundations',
    price: '₱1,999',
    description: 'Build the core skills required to use AI safely and reliably for everyday work.',
    features: ['Full foundations path', 'Live practice credits', 'Seven guided labs', 'Verified foundation certificate'],
    recommended: true,
  },
  {
    name: 'Career Path Bundle',
    price: '₱5,999',
    description: 'Add the VA or freelancer specialization and build proof you can show clients.',
    features: ['Foundations included', 'One role specialization', 'Portfolio Builder', 'Capstone and Skills Passport'],
    recommended: false,
  },
  {
    name: 'Business Team',
    price: 'From ₱24,000/year',
    description: 'Give a small team structured training, assignments, policies, and adoption visibility.',
    features: ['Five seats', 'Business-owner path', 'Assignments and analytics', 'Pooled AI credits'],
    recommended: false,
  },
] as const;

export const dashboardStats = [
  { label: 'Path progress', value: '18%', detail: '5 of 27 lessons' },
  { label: 'Competencies', value: '3', detail: 'at Guided level' },
  { label: 'Lab runs', value: '4', detail: '2 revised' },
  { label: 'Practice credits', value: '92', detail: 'of 100 remaining' },
] as const;
