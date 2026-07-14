# Operator's Notebook Design System

## Direction

Dense, useful, and human. The product should feel like a field guide for people doing real work, not a speculative AI trading card.

## Personality

- Clear.
- Practical.
- Calm under pressure.
- Slightly technical without becoming cold.
- Philippine-rooted without relying on clichés.

## Color

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#F7F5EF` | Main background |
| Paper bright | `#FFFEFB` | Cards and work surfaces |
| Paper muted | `#EEECE4` | Section and app-shell contrast |
| Ink | `#161B22` | Primary text and dark surfaces |
| Ink soft | `#47505C` | Secondary text |
| Line | `#D8D6CE` | Default borders |
| Cobalt | `#2457D6` | Primary action and active state |
| Cobalt soft | `#E3EAFB` | Selection and instructional wash |
| Orange | `#DE6B35` | Warning, annotation, human review |
| Green | `#137044` | Verified and successful state |
| Red | `#A33535` | Error and destructive state |

Color is never the sole state indicator.

### Derived and support tokens

These tokens extend the core palette for surfaces, borders, and state washes. They are
derived, not new hues, and must not introduce colors outside the table above.

| Token | Value | Use |
| --- | --- | --- |
| Ink muted | `#727B86` | Tertiary text, captions, metadata |
| Line strong | `#A9ADB2` | Emphasis borders and dividers that need more weight |
| Cobalt dark | `#173C9C` | Primary action hover and active text on a soft wash |
| Cobalt soft | `#E3EAFB` | Selection, instructional wash, active surface |
| Orange soft | `#F8E5DC` | Warning and annotation wash |
| Green soft | `#DCEFE5` | Verified and success wash |
| Red soft | `#F4DDDD` | Error and destructive wash |

State washes use the soft tokens. Never fill a status surface with a raw core color.

## Typography

- Display and body: Space Grotesk when self-hosted assets are available.
- Data and metadata: JetBrains Mono.
- System fallbacks must preserve legibility and layout.
- Body starts at 16 px.
- Reading line height is at least 1.5.
- Long reading width stays near 70 characters.

## Spacing

Use a 4 px base. Approved steps: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, and 80 px.

Sibling spacing uses `gap`. Components do not introduce unexplained one-off margins.

## Radius and elevation

- Small control: 4 px.
- Card and button: 7 px.
- Large panel: 12 px.
- Full pills only for tags where the shape communicates a compact token.
- Default cards use border before shadow.
- Interactive lift is no more than 3 px.

## Components

### Buttons

- Primary: one per view when possible.
- Secondary: bordered.
- Ghost: quiet utility action.
- Minimum mobile height: 44 px.
- Button labels use actions: “Start diagnostic,” “Save revision,” “Submit assessment.”

### Cards

- Cards group one conceptual object.
- Do not nest cards.
- Use dividers, rows, and section headings inside a card.
- Interactive cards visibly change border and elevation.

### Inputs

- Label above field.
- Hint explains purpose.
- Placeholder is an example, not the only instruction.
- Validate on blur or submission, not every keypress unless the feedback is genuinely useful.
- Errors name the problem and the correction.

### Tables

- Numeric values align right.
- Row height stays compact on desktop.
- Mobile converts rows into labeled blocks.
- Sorting and filtering state is announced.

### Progress

- Always pair visual progress with exact text.
- Distinguish activity progress from competency mastery.
- Locked content explains the prerequisite.

### Status

Use stable labels such as Draft, Ready, Submitted, Evaluating, Revision required, Approved, Completed, Failed, or Retired.

Do not use vague labels such as “Processing stuff” or “Almost there.”

## Motion

- Hover and focus: 120 ms.
- Panel state: 220 ms.
- Use opacity and transform.
- Avoid bounce, elastic motion, and decorative looping.
- Respect reduced motion.

## Imagery

- Use real product screens and learner artifacts.
- Use diagrams for workflows and evidence.
- Avoid generic robots, glowing brains, floating prompts, neon grids, and stock-photo celebration teams.

## Anti-slop review

Redesign if the screen has:

- A decorative gradient with no information role.
- A giant centered slogan and six identical feature cards.
- Glass blur where a border would be clearer.
- Unexplained purple or neon styling because the product contains AI.
- Chat bubbles for a task that is not a conversation.
- A dashboard dominated by decorative charts.
- Icons from multiple families.
- More than one competing primary call to action.

## Voice

- Direct and plain-spoken.
- Professional, approachable, and specific.
- No inflated transformation claims.
- No promises of jobs, income, or error-free AI.
- Use light humor where it clarifies, not where it reduces trust.

