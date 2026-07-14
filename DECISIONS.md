# Decision Log

## ADR-001: Build a sibling product, not a text-replaced AMPH clone

**Decision:** Reuse proven learning-platform concepts while creating a separate repository and domain model.

**Reason:** AI labs, usage costs, content freshness, workspaces, and model governance create different product boundaries.

## ADR-002: Launch VA-first

**Decision:** The platform supports four audiences, but the closed beta and primary public message focus on beginner Filipino VAs and adjacent freelancers.

**Reason:** This matches the founder's authority, distribution, and clearest urgent outcome.

## ADR-003: Separate mechanics from content

**Decision:** Lab runners consume validated, versioned scenario definitions. Course and scenario content must not be hard-coded into page components.

**Reason:** New paths, tools, languages, and scenario packs should be publishable without rebuilding mechanics.

## ADR-004: Provider-neutral AI gateway

**Decision:** UI and domain code cannot call provider SDKs directly.

**Reason:** Model availability, cost, and behavior change. Assessments require pinned, auditable configuration.

## ADR-005: Evidence-based certification

**Decision:** Certificates require competency evidence and moderated capstones.

**Reason:** Page completion and model-generated grades do not prove operational skill.

## ADR-006: Workspace tenancy from the data-model stage

**Decision:** Team data uses explicit workspace membership and tenant-scoped queries.

**Reason:** Business accounts are a planned audience. Adding tenant isolation late creates avoidable security debt.

## ADR-007: No live external actions in the MVP

**Decision:** Agent and automation labs simulate tools and failures with synthetic data.

**Reason:** Beginners need safe practice. Real connectors require approval, scope, rollback, and incident controls.

## ADR-008: Operator's Notebook design system

**Decision:** Use warm surfaces, deep cobalt, clear typography, compact application views, and restrained motion.

**Reason:** The product should feel practical and credible, not like a generic AI template.

