# Units Grouping Plan — Job Application Management Site

## Objective
Group the 15 user stories from `user_stories.md` into independently buildable, loosely coupled units with high internal cohesion. Each unit should be assignable to a single team.

---

## Plan

### Step 1: Analyze Dependencies Between Stories
- [x] Map out dependencies and data flows between all 15 user stories to understand coupling.

### Step 2: Define Units and Assign Stories
- [x] Group stories into units based on cohesion and coupling analysis. Proposed grouping:

  **Unit 1 — Identity & Profile Management**
  Core user identity, authentication, and profile data. No dependency on other units.
  - US-1.1 Applicant Registration
  - US-1.2 Applicant Login
  - US-1.3 Applicant Logout
  - US-1.4 Applicant Profile Management
  - US-1.5 Resume Upload
  - US-1.6 Password Reset

  **Unit 2 — Job Search & Discovery**
  Browsing, searching, filtering, and viewing jobs. Depends on Unit 1 only for the bookmark feature (authenticated user). Core search/view works independently.
  - US-2.1 Search Jobs by Keyword
  - US-2.2 Filter Jobs
  - US-2.3 Sort Job Results
  - US-2.4 Paginate Job Results
  - US-3.1 View Job Details
  - US-3.2 Save/Bookmark a Job

  **Unit 3 — Job Application & Tracking**
  Submitting and managing applications. Depends on Unit 1 (profile/resume data) and Unit 2 (job details) via interfaces.
  - US-4.1 Apply to a Job
  - US-4.2 View Submitted Applications
  - US-4.3 Withdraw an Application

> **Decided:** 3-unit grouping approved as proposed.

### Step 3: Document Inter-Unit Dependencies
- [x] For each unit, document the interfaces/contracts it exposes and consumes from other units, keeping coupling loose.

### Step 4: Write Units Document
- [x] Write the final `units.md` file in `aidlc-docs/story-artifacts/` containing each unit's stories, acceptance criteria, and dependency notes.

### Step 5: Present for Review
- [x] Share the completed units document for review.

---

## Deliverables

| # | Deliverable | Location |
|---|-------------|----------|
| 1 | Units Plan (this file) | `aidlc-docs/plans/units_plan.md` |
| 2 | Units Document | `aidlc-docs/story-artifacts/units.md` |

---

## Status: COMPLETE
