# User Stories — Job Application Management Site (Applicant)

## Persona

**Name:** Applicant (Job Seeker)
**Description:** An individual actively looking for employment opportunities. They want to discover relevant job postings, understand role requirements, and submit applications efficiently.
**Goals:**
- Find jobs that match their skills, experience, and preferences
- Understand job details before deciding to apply
- Submit applications with minimal friction
- Track the status of submitted applications

---

## Epic 1: Applicant Account

### US-1.1 — Applicant Registration
**As an** Applicant, **I want to** create an account with my email and password, **so that** I can save my profile and apply to jobs.

**Priority:** Must Have

**Acceptance Criteria:**
- Applicant can register using a valid email address and a password
- Password must meet minimum security requirements (at least 8 characters, one uppercase, one number)
- System sends a verification email upon registration
- Duplicate email addresses are rejected with a clear error message
- After successful registration, the applicant is redirected to their profile page

---

### US-1.2 — Applicant Login
**As an** Applicant, **I want to** log in to my account, **so that** I can access my profile and applications.

**Priority:** Must Have

**Acceptance Criteria:**
- Applicant can log in with their registered email and password
- Invalid credentials display a clear error message without revealing which field is incorrect
- After successful login, the applicant is redirected to the job search page
- Session persists until the applicant logs out or the session expires

---

### US-1.3 — Applicant Logout
**As an** Applicant, **I want to** log out of my account, **so that** my account remains secure on shared devices.

**Priority:** Must Have

**Acceptance Criteria:**
- A logout option is accessible from any page when logged in
- After logout, the session is invalidated
- After logout, the applicant is redirected to the login page
- Accessing protected pages after logout redirects to login

---

### US-1.4 — Applicant Profile Management
**As an** Applicant, **I want to** create and update my profile (name, contact info, summary), **so that** my information is available when I apply to jobs.

**Priority:** Must Have

**Acceptance Criteria:**
- Applicant can enter/edit: full name, phone number, location, and professional summary
- All required fields are validated before saving
- Changes are saved and a confirmation message is displayed
- Profile information is pre-filled in job applications

---

### US-1.5 — Resume Upload
**As an** Applicant, **I want to** upload and manage my resume, **so that** I can attach it to job applications.

**Priority:** Must Have

**Acceptance Criteria:**
- Applicant can upload a resume in PDF or DOCX format
- Maximum file size is enforced (e.g., 5 MB) with a clear error if exceeded
- Applicant can view, replace, or delete their uploaded resume
- The most recent resume is available as a default attachment when applying

---

### US-1.6 — Password Reset
**As an** Applicant, **I want to** reset my password if I forget it, **so that** I can regain access to my account.

**Priority:** Should Have

**Acceptance Criteria:**
- A "Forgot Password" link is available on the login page
- Applicant enters their email and receives a password reset link
- The reset link expires after a set time period (e.g., 1 hour)
- After resetting, the applicant can log in with the new password

---

## Epic 2: Job Search

### US-2.1 — Search Jobs by Keyword
**As an** Applicant, **I want to** search for jobs using keywords, **so that** I can find positions matching my skills or interests.

**Priority:** Must Have

**Acceptance Criteria:**
- A search bar is prominently displayed on the job search page
- Search matches against job title, description, and company name
- Results are displayed as a list with job title, company, location, and posting date
- If no results are found, a clear "No jobs found" message is displayed
- Search executes on form submission (button click or Enter key)

---

### US-2.2 — Filter Jobs
**As an** Applicant, **I want to** filter job search results by location, job type, and experience level, **so that** I can narrow down relevant opportunities.

**Priority:** Must Have

**Acceptance Criteria:**
- Filter options are available for: location, job type (Full-time, Part-time, Contract, Remote), and experience level (Entry, Mid, Senior)
- Filters can be combined with keyword search
- Results update to reflect the active filters
- Active filters are clearly visible and can be individually removed
- A "Clear All Filters" option resets all filters

---

### US-2.3 — Sort Job Results
**As an** Applicant, **I want to** sort search results by date posted or relevance, **so that** I can see the most useful listings first.

**Priority:** Should Have

**Acceptance Criteria:**
- Sort options include: "Most Recent" and "Most Relevant"
- Default sort order is "Most Recent"
- Changing the sort order immediately re-orders the results
- The currently active sort option is visually indicated

---

### US-2.4 — Paginate Job Results
**As an** Applicant, **I want to** browse search results across multiple pages, **so that** I can explore all available listings without overwhelming load times.

**Priority:** Should Have

**Acceptance Criteria:**
- Results are paginated with a configurable number of results per page (default: 20)
- Pagination controls (Previous, Next, page numbers) are displayed below results
- Current page number is highlighted
- Navigating pages preserves the active search query and filters

---

## Epic 3: Job Viewing

### US-3.1 — View Job Details
**As an** Applicant, **I want to** view the full details of a job posting, **so that** I can understand the role, requirements, and how to apply.

**Priority:** Must Have

**Acceptance Criteria:**
- Clicking a job listing from search results opens the job detail page
- Job detail page displays: title, company name, location, job type, experience level, salary range (if available), full description, responsibilities, qualifications, and posting date
- An "Apply" button is prominently visible on the detail page
- A "Back to Results" link returns the applicant to the search results with state preserved

---

### US-3.2 — Save/Bookmark a Job
**As an** Applicant, **I want to** save a job posting to my bookmarks, **so that** I can revisit it later before deciding to apply.

**Priority:** Should Have

**Acceptance Criteria:**
- A "Save" or bookmark icon is available on the job listing card and detail page
- Clicking the icon toggles the saved state (save/unsave)
- Saved jobs are accessible from a "Saved Jobs" section in the applicant's account
- Saved jobs list shows title, company, location, and date saved
- If a saved job posting is removed by the employer, it is marked as "No longer available"

---

## Epic 4: Job Application

### US-4.1 — Apply to a Job
**As an** Applicant, **I want to** submit an application to a job posting, **so that** I can be considered for the position.

**Priority:** Must Have

**Acceptance Criteria:**
- The "Apply" button on the job detail page opens the application form
- The form pre-fills profile information (name, email, phone) from the applicant's account
- The applicant can attach their uploaded resume or upload a new one
- The applicant can include a cover letter (optional text field)
- Upon submission, a confirmation message is displayed
- The applicant cannot apply to the same job posting more than once

---

### US-4.2 — View Submitted Applications
**As an** Applicant, **I want to** see a list of all jobs I have applied to, **so that** I can track my applications.

**Priority:** Must Have

**Acceptance Criteria:**
- A "My Applications" page lists all submitted applications
- Each entry shows: job title, company name, date applied, and application status (e.g., Submitted, Under Review, Rejected, Accepted)
- Clicking an entry shows the application details (submitted info, resume, cover letter)
- The list is sorted by most recently applied by default

---

### US-4.3 — Withdraw an Application
**As an** Applicant, **I want to** withdraw a submitted application, **so that** I can remove myself from consideration if I change my mind.

**Priority:** Nice to Have

**Acceptance Criteria:**
- A "Withdraw" button is available on applications with status "Submitted" or "Under Review"
- A confirmation dialog is shown before withdrawing
- After withdrawal, the application status changes to "Withdrawn"
- The applicant can re-apply to the same job after withdrawing

---

## Summary

| Epic | Story Count | Must Have | Should Have | Nice to Have |
|------|-------------|-----------|-------------|--------------|
| Applicant Account | 6 | 5 | 1 | 0 |
| Job Search | 4 | 2 | 2 | 0 |
| Job Viewing | 2 | 1 | 1 | 0 |
| Job Application | 3 | 2 | 0 | 1 |
| **Total** | **15** | **10** | **4** | **1** |
