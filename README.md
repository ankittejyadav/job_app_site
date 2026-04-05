# JobVault — Job Application Management Site

A modern React web application that allows applicants to search, view, and apply to job postings.

## Project Structure

```
job-app/              # React Vite frontend application
  src/
    components/       # Navbar, JobCard, Pagination, ProtectedRoute
    pages/            # LoginPage, JobListingPage, JobDetailPage
    data/             # Mock jobs (55 listings) and mock users
    context/          # AuthContext (localStorage-persisted auth)
  dist/               # Production build output
aidlc-docs/           # Project documentation
  plans/              # Step-by-step plans for each phase
  story-artifacts/    # User stories and units
  design-artifacts/   # Component model
  requirements/       # Requirements and feature docs
  prompts.md          # Prompt log
```

## Tech Stack

- **Frontend:** React 19, Vite 5
- **Routing:** React Router v6
- **Styling:** Bootstrap 5.3 (CDN) + Bootstrap Icons + custom teal/emerald theme
- **Auth:** Mock authentication with localStorage session persistence

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Setup & Build

```bash
cd job-app
npm install
npm run build
```

The production build outputs to `job-app/dist/`.

### Local Development

```bash
cd job-app
npm run dev
```

## Demo Credentials

| Email | Password |
|---|---|
| `demo@jobvault.com` | `Demo1234` |
| `alice@example.com` | `Password1` |
| `bob@example.com` | `Password1` |

## Features

- **Login** — Email/password authentication with error handling and session persistence
- **Job Search** — Keyword search across titles, companies, and descriptions
- **Filters** — Filter by location, job type (Full-time/Part-time/Contract/Remote), and experience level
- **Sort & Paginate** — Sort by date or relevance, paginated results (12 per page)
- **Job Details** — Full posting view with description, responsibilities, and qualifications
- **Responsive Design** — Mobile-friendly layout with Bootstrap grid
