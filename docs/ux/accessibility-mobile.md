# Accessibility, Mobile, and Low-Bandwidth Standard

## Target

WCAG 2.2 AA with full completion of core learner flows by keyboard, screen reader, touch, and 390 px viewport.

## Structure

- One page-level heading.
- Logical heading order.
- Landmarks for header, navigation, main, complementary, and footer.
- Skip link.
- Descriptive page titles.
- Current navigation state.

## Keyboard

- Every action works without a pointer.
- Focus order follows visual order.
- Focus is never trapped except inside a correctly managed modal.
- Escape closes dismissible overlays.
- Drag interactions have button or list alternatives.
- Workflow Canvas provides ordered-step editing.

## Forms

- Persistent labels.
- Hints associated programmatically.
- Required fields identified in text and markup.
- Error summary plus inline error.
- Invalid data remains present for correction.
- No timeout while actively editing without warning and extension.

## Live AI status

- Status changes use an appropriate live region.
- Streaming output does not announce every token.
- A concise completion or failure message is announced.
- Cancel action remains reachable.
- Progress and credit estimates have text equivalents.

## Color and contrast

- Normal text meets 4.5:1.
- Large text meets 3:1.
- Controls and focus indicators meet 3:1 against adjacent colors.
- Status includes label or icon with accessible text.

## Motion

- Respect `prefers-reduced-motion`.
- No required information depends on animation.
- Auto-playing media is off by default.
- Time-sensitive assessments warn before expiration.

## Mobile at 390 px

- No horizontal page scroll.
- Tap targets are at least 44 by 44 px where practical.
- Sticky actions respect safe-area insets.
- Tables become labeled blocks.
- Sidebars become drawers or ordered sections.
- Split comparisons become sequential first/second views.
- Long outputs can collapse by section and jump to feedback.
- Autosave survives navigation and connection loss.

## Low-bandwidth mode

- Defer nonessential images and video.
- Provide transcripts and downloadable text.
- Use precomputed demo responses without live provider calls.
- Ask before large upload or live generation.
- Compress assets and avoid decorative animation.
- Show confirmed save state and last sync time.
- Queue safe local edits for retry when possible.

## Media

- Captions for video.
- Transcript for audio and video.
- Meaningful alt text for informative images.
- Empty alt for decorative images.
- Diagrams include a text explanation.

## Test matrix

- Keyboard-only critical flows.
- Screen reader on one mobile and one desktop combination.
- 200% and 400% zoom reflow.
- 320, 390, 768, 1024, and 1280 px.
- Reduced motion.
- High contrast or forced colors.
- Slow network and interrupted autosave.
- Touch and pointer input.

No critical path can be marked done from automated checks alone.
