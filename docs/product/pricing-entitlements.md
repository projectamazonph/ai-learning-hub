# Pricing and Entitlements

## Commercial principle

Curriculum, products, prices, access, live AI usage, reviews, and team seats are separate. This avoids encoding business changes into course records.

## Launch offers

| Offer | Price | Access | Live AI allowance | Proof and support |
| --- | ---: | --- | --- | --- |
| AI Ready Starter | Free | Starter course and demos | No live cost required | Starter Skills Passport |
| Practical AI Foundations | ₱1,999 | 12 months | Fixed launch credit wallet | Foundation assessment and certificate |
| Career Path Bundle | ₱5,999 | 12 months | Larger credit wallet | One role path, portfolio, capstone, Skills Passport |
| Guided Cohort | ₱9,999 | Cohort term plus 12-month content access | Cohort allowance | Live sessions, moderated capstone, priority support |
| Business Team | From ₱24,000 per year for five seats | Annual | Pooled workspace credits | Business path, assignments, analytics, policies |

## Domain objects

- `Product`: sellable package.
- `Price`: currency, amount, effective dates, and tax behavior.
- `Offer`: campaign-specific presentation and eligibility.
- `Purchase`: buyer and payment relationship.
- `Entitlement`: permission to a path, course, lab, live class, review, workspace, or export.
- `CreditWallet`: live AI usage capacity.
- `CreditReservation`: temporary hold for a requested run.
- `CreditTransaction`: immutable adjustment or finalized charge.
- `SeatEntitlement`: workspace member capacity.

## Credit rules

1. Demo mode uses precomputed results and no live credits.
2. Practice mode displays an estimated range before confirmation.
3. The gateway reserves the upper expected amount.
4. Final usage reconciles the reservation.
5. Failed calls charge only confirmed provider cost when applicable.
6. Wallet balance cannot be negative.
7. Concurrent reservations use an atomic database transaction.
8. Admin adjustments require reason and audit event.
9. Credit expiry and refill dates are visible.
10. Assessment attempts and open practice can have separate limits.

## Refund rules

- Refund eligibility is evaluated against purchase date, product policy, consumed live usage, completed reviews, and applicable law.
- The checkout page displays the policy before payment.
- Refund approval does not delete learning records.
- Revoked entitlements block future access while preserving receipts and audit evidence.
- Webhook, refund, and entitlement operations are idempotent.

## Business seat rules

- A seat is consumed by an active workspace membership with a seat entitlement.
- Removing a member frees the seat after policy-defined processing.
- Personal evidence remains with the learner unless the artifact is workspace-owned by explicit agreement.
- Pooled credits can have per-member caps.
- Managers cannot silently convert private practice artifacts into workspace-visible content.

## Pricing validation questions

- Does the free experience reach a meaningful result without live cost?
- Does the foundations price support content review and AI usage?
- Which role path creates the highest willingness to pay?
- How much live practice do learners actually consume?
- Does human capstone review fit the guided price?
- Which team analytics are valuable enough to support annual renewal?

