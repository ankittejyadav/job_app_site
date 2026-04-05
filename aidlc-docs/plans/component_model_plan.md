# Component Model Plan — Job Application Management Site

## Objective
Design a business-level component model that covers all 15 user stories across the 3 units defined in `units.md`. The model will define components, their attributes, behaviors, and interactions — without generating code.

---

## Plan

### Step 1: Identify Business Components
- [x] Extract business components from the user stories. Proposed components:
  1. **Applicant** — the user entity (registration, authentication, profile)
  2. **Credential** — email/password and session management
  3. **Profile** — applicant's personal/professional information
  4. **Resume** — uploaded resume file management
  5. **Job Posting** — job listing with details (title, company, description, etc.)
  6. **Job Search** — search, filter, sort, and paginate job results
  7. **Bookmark** — saved/bookmarked jobs per applicant
  8. **Application** — a submitted job application linking applicant to job

> **Decided:** No external connections for now. Email verification and password reset emails will be modeled as internal placeholder behaviors (e.g., simulated/logged locally). External email service may be added later.

### Step 2: Define Attributes for Each Component
- [x] Document the key attributes (data fields) each component holds, derived from the acceptance criteria.

### Step 3: Define Behaviors for Each Component
- [x] Document the operations/behaviors each component supports, mapped to specific user stories.

### Step 4: Define Component Interactions
- [x] Map out how components interact to fulfill each user story (which component calls which, data flow direction).
- [x] Document these interactions organized by unit.

### Step 5: Map Components to Units
- [x] Create a traceability matrix showing which components belong to which unit, and which user stories each component supports.

### Step 6: Write Component Model Document
- [x] Compile all outputs into `aidlc-docs/design-artifacts/component_model.md`.

### Step 7: Present for Review
- [x] Share the completed component model for review.

---

## Deliverables

| # | Deliverable | Location |
|---|-------------|----------|
| 1 | Component Model Plan (this file) | `aidlc-docs/plans/component_model_plan.md` |
| 2 | Component Model Document | `aidlc-docs/design-artifacts/component_model.md` |

---

## Status: COMPLETE
