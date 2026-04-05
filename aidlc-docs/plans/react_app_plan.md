# React App Plan — Login & Job Listing

## Objective
Build a React Vite web application in `/workshop/job-app` implementing the Login (US-1.2, US-1.3) and Job Listing (US-2.1, US-2.2, US-2.3, US-2.4, US-3.1) components from the component model. Mock authentication with persistent state. Bootstrap CDN for styling. 50+ sample jobs.

---

## Plan

### Step 1: Install Node.js
- [x] Install Node.js and npm via dnf on Amazon Linux 2023. (v18.20.8 / npm 10.8.2)

### Step 2: Scaffold React Vite Project
- [x] Manually scaffolded Vite 5 + React project in `/workshop/job-app` (Node 18 compatible).
- [x] Installed vite@5, @vitejs/plugin-react, react, react-dom, react-router-dom.

### Step 3: Set Up Project Structure
- [x] Create folder structure:
  ```
  src/
    components/       # Reusable UI components (Navbar, JobCard, Pagination, etc.)
    pages/            # LoginPage, JobListingPage, JobDetailPage
    data/             # mockJobs.js (50+ sample jobs), mockUsers.js
    context/          # AuthContext.jsx (mock auth with localStorage persistence)
    App.jsx           # Router setup
    App.css           # Custom theme styles
    main.jsx          # Entry point
  index.html          # Bootstrap CDN links
  ```

### Step 4: Implement Mock Data
- [x] Create `mockUsers.js` with test credentials.
- [x] Create `mockJobs.js` with 50+ sample job postings matching the Job Posting component model attributes (title, company, location, jobType, experienceLevel, salaryRange, description, responsibilities, qualifications, postedAt, isActive).

### Step 5: Implement Auth Context
- [x] Create `AuthContext.jsx` with login/logout using localStorage for session persistence.
- [x] Wrap app in AuthProvider.

### Step 6: Implement Pages & Components
- [x] **LoginPage** — email/password form, error handling, redirect to job listing on success.
- [x] **Navbar** — app branding, auth-aware (shows logout when logged in, login when not).
- [x] **JobListingPage** — search bar, filters (location, job type, experience level), sort, pagination, job cards grid.
- [x] **JobCard** — summary card with title, company, location, type, posted date, hover effect.
- [x] **JobDetailPage** — full job details view with back-to-results navigation.
- [x] **Pagination** — page controls preserving search/filter state.

### Step 7: Apply Styling & Theme
- [x] Add Bootstrap CSS + Icons CDN to `index.html`.
- [x] Choose a **teal/emerald** professional color theme.
- [x] Write custom CSS: hover effects, color overrides, responsive layout, visual hierarchy.

> **Decided:** Teal/emerald color theme approved.

### Step 8: Configure Routing
- [x] Install `react-router-dom`.
- [x] Set up routes: `/login`, `/jobs` (listing), `/jobs/:id` (detail).
- [x] Redirect unauthenticated users to login for protected routes.

### Step 9: Build & Fix Errors
- [x] Run `npm run build`. — Built successfully in 2.62s (no errors).
- [x] Resolve any build errors until successful. — No errors encountered.

---

## Deliverables

| # | Deliverable | Location |
|---|-------------|----------|
| 1 | React App Plan (this file) | `aidlc-docs/plans/react_app_plan.md` |
| 2 | React Vite Application | `/workshop/job-app` |
| 3 | Successful production build | `/workshop/job-app/dist` |

---

## Status: COMPLETE
