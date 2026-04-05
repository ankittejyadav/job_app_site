# Component Model — Job Application Management Site

## Overview

This document defines the business-level component model for the Job Application Management Site. It covers all 15 user stories across 3 units, describing each component's attributes, behaviors, and interactions.

**Design constraint:** No external service connections. Email-related behaviors (verification, password reset) are internal placeholders.

---

## Components

### 1. Applicant

**Description:** Represents the registered user (job seeker) in the system. Serves as the identity anchor that owns all other user-related components.

**Unit:** Unit 1 — Identity & Profile Management

**Attributes:**
| Attribute | Type | Description |
|-----------|------|-------------|
| applicantId | Identifier | Unique system-generated ID |
| email | String | Registered email address (unique) |
| isVerified | Boolean | Whether email has been verified |
| createdAt | Timestamp | Account creation date |

**Behaviors:**
| Behavior | Description | User Story |
|----------|-------------|------------|
| register(email, password) | Creates a new applicant account; triggers verification placeholder | US-1.1 |
| verifyEmail(token) | Marks the account as verified | US-1.1 |

---

### 2. Credential

**Description:** Manages authentication concerns — password storage, session lifecycle, and password reset. Separated from Applicant to isolate security logic.

**Unit:** Unit 1 — Identity & Profile Management

**Attributes:**
| Attribute | Type | Description |
|-----------|------|-------------|
| applicantId | Identifier | Reference to owning Applicant |
| passwordHash | String | Securely hashed password |
| sessionToken | String | Active session token (nullable) |
| sessionExpiry | Timestamp | Session expiration time |
| resetToken | String | Password reset token (nullable) |
| resetTokenExpiry | Timestamp | Reset token expiration time |

**Behaviors:**
| Behavior | Description | User Story |
|----------|-------------|------------|
| login(email, password) | Validates credentials, creates session token | US-1.2 |
| logout(sessionToken) | Invalidates the active session | US-1.3 |
| validateSession(sessionToken) | Checks if session is valid and not expired | US-1.2, US-1.3 |
| requestPasswordReset(email) | Generates reset token; logs reset link internally (placeholder) | US-1.6 |
| resetPassword(resetToken, newPassword) | Validates token, updates password hash | US-1.6 |

---

### 3. Profile

**Description:** Stores the applicant's personal and professional information used for display and pre-filling applications.

**Unit:** Unit 1 — Identity & Profile Management

**Attributes:**
| Attribute | Type | Description |
|-----------|------|-------------|
| applicantId | Identifier | Reference to owning Applicant |
| fullName | String | Applicant's full name |
| phoneNumber | String | Contact phone number |
| location | String | City/region |
| professionalSummary | Text | Brief professional summary |
| updatedAt | Timestamp | Last profile update |

**Behaviors:**
| Behavior | Description | User Story |
|----------|-------------|------------|
| createProfile(applicantId, data) | Initializes profile after registration | US-1.4 |
| updateProfile(applicantId, data) | Updates profile fields with validation | US-1.4 |
| getProfile(applicantId) | Returns profile data (used by Application component for pre-fill) | US-1.4, US-4.1 |

---

### 4. Resume

**Description:** Manages the applicant's uploaded resume file. Handles storage, retrieval, replacement, and deletion.

**Unit:** Unit 1 — Identity & Profile Management

**Attributes:**
| Attribute | Type | Description |
|-----------|------|-------------|
| resumeId | Identifier | Unique resume ID |
| applicantId | Identifier | Reference to owning Applicant |
| fileName | String | Original file name |
| fileType | String | MIME type (PDF or DOCX) |
| fileSize | Integer | File size in bytes |
| filePath | String | Internal storage path |
| uploadedAt | Timestamp | Upload timestamp |

**Behaviors:**
| Behavior | Description | User Story |
|----------|-------------|------------|
| upload(applicantId, file) | Validates type/size, stores file | US-1.5 |
| replace(resumeId, file) | Replaces existing resume with a new file | US-1.5 |
| delete(resumeId) | Removes resume from storage | US-1.5 |
| getResume(applicantId) | Returns the most recent resume (used by Application for attachment) | US-1.5, US-4.1 |

---

### 5. Job Posting

**Description:** Represents a job listing with all its details. This is the core data entity for Unit 2. (Job postings are assumed to exist in the system; creation/management by employers is out of scope for this phase.)

**Unit:** Unit 2 — Job Search & Discovery

**Attributes:**
| Attribute | Type | Description |
|-----------|------|-------------|
| jobId | Identifier | Unique job posting ID |
| title | String | Job title |
| companyName | String | Hiring company name |
| location | String | Job location |
| jobType | Enum | Full-time, Part-time, Contract, Remote |
| experienceLevel | Enum | Entry, Mid, Senior |
| salaryRange | String | Salary range (optional) |
| description | Text | Full job description |
| responsibilities | Text | Role responsibilities |
| qualifications | Text | Required qualifications |
| postedAt | Timestamp | Date posted |
| isActive | Boolean | Whether the posting is still open |

**Behaviors:**
| Behavior | Description | User Story |
|----------|-------------|------------|
| getJobById(jobId) | Returns full job details | US-3.1, US-4.1 |
| getJobSummary(jobId) | Returns summary fields (title, company, location, date) | US-4.2 |

---

### 6. Job Search

**Description:** Handles querying, filtering, sorting, and paginating job postings. Acts as the query engine over Job Posting data.

**Unit:** Unit 2 — Job Search & Discovery

**Attributes:**
| Attribute | Type | Description |
|-----------|------|-------------|
| keyword | String | Search keyword(s) |
| locationFilter | String | Filter by location |
| jobTypeFilter | Enum | Filter by job type |
| experienceLevelFilter | Enum | Filter by experience level |
| sortBy | Enum | "Most Recent" or "Most Relevant" |
| page | Integer | Current page number |
| pageSize | Integer | Results per page (default: 20) |

**Behaviors:**
| Behavior | Description | User Story |
|----------|-------------|------------|
| search(keyword) | Matches keyword against title, description, company name; returns results list | US-2.1 |
| applyFilters(filters) | Narrows results by location, job type, experience level | US-2.2 |
| clearFilters() | Resets all active filters | US-2.2 |
| sort(sortBy) | Orders results by date posted or relevance | US-2.3 |
| paginate(page, pageSize) | Returns a specific page of results with pagination metadata | US-2.4 |

---

### 7. Bookmark

**Description:** Represents a saved/bookmarked job posting for an authenticated applicant. Links an Applicant to a Job Posting.

**Unit:** Unit 2 — Job Search & Discovery

**Attributes:**
| Attribute | Type | Description |
|-----------|------|-------------|
| bookmarkId | Identifier | Unique bookmark ID |
| applicantId | Identifier | Reference to Applicant (from Unit 1) |
| jobId | Identifier | Reference to Job Posting |
| savedAt | Timestamp | Date bookmarked |

**Behaviors:**
| Behavior | Description | User Story |
|----------|-------------|------------|
| saveJob(applicantId, jobId) | Creates a bookmark | US-3.2 |
| unsaveJob(applicantId, jobId) | Removes a bookmark | US-3.2 |
| getSavedJobs(applicantId) | Returns all bookmarked jobs with availability status | US-3.2 |
| isBookmarked(applicantId, jobId) | Checks if a job is bookmarked (for toggle state) | US-3.2 |

---

### 8. Application

**Description:** Represents a job application submitted by an applicant for a specific job posting. Manages the full application lifecycle: submission, tracking, and withdrawal.

**Unit:** Unit 3 — Job Application & Tracking

**Attributes:**
| Attribute | Type | Description |
|-----------|------|-------------|
| applicationId | Identifier | Unique application ID |
| applicantId | Identifier | Reference to Applicant (from Unit 1) |
| jobId | Identifier | Reference to Job Posting (from Unit 2) |
| applicantName | String | Snapshot of name at time of application |
| applicantEmail | String | Snapshot of email at time of application |
| applicantPhone | String | Snapshot of phone at time of application |
| resumeFilePath | String | Path to the attached resume |
| coverLetter | Text | Optional cover letter text |
| status | Enum | Submitted, Under Review, Rejected, Accepted, Withdrawn |
| appliedAt | Timestamp | Date of submission |
| updatedAt | Timestamp | Last status change |

**Behaviors:**
| Behavior | Description | User Story |
|----------|-------------|------------|
| submit(applicantId, jobId, data) | Creates application; pre-fills from Profile; attaches Resume; enforces one-application-per-job rule | US-4.1 |
| getApplications(applicantId) | Returns all applications for the applicant, sorted by most recent | US-4.2 |
| getApplicationDetail(applicationId) | Returns full application details (submitted info, resume, cover letter) | US-4.2 |
| withdraw(applicationId) | Changes status to "Withdrawn" if currently Submitted or Under Review | US-4.3 |
| hasApplied(applicantId, jobId) | Checks if applicant already applied to a job (prevents duplicates) | US-4.1 |
| canReapply(applicantId, jobId) | Checks if applicant can re-apply after withdrawal | US-4.3 |

---

## Component Interactions by Unit

### Unit 1 Interactions — Identity & Profile Management

```
US-1.1 (Registration):
  Applicant.register() → Credential.create(passwordHash) → Profile.createProfile()

US-1.2 (Login):
  Credential.login() → validates password → creates session → returns Applicant context

US-1.3 (Logout):
  Credential.logout() → invalidates session

US-1.4 (Profile Management):
  Profile.updateProfile() ← Applicant provides data

US-1.5 (Resume Upload):
  Resume.upload() / Resume.replace() / Resume.delete() ← Applicant manages files

US-1.6 (Password Reset):
  Credential.requestPasswordReset() → generates token (logged internally)
  Credential.resetPassword() → validates token → updates hash
```

### Unit 2 Interactions — Job Search & Discovery

```
US-2.1 (Search):
  JobSearch.search(keyword) → queries JobPosting data → returns result list

US-2.2 (Filter):
  JobSearch.applyFilters(filters) → narrows JobPosting query → returns filtered results

US-2.3 (Sort):
  JobSearch.sort(sortBy) → re-orders current result set

US-2.4 (Paginate):
  JobSearch.paginate(page, pageSize) → returns page slice of results

US-3.1 (View Details):
  JobPosting.getJobById(jobId) → returns full job details

US-3.2 (Bookmark):
  Bookmark.saveJob() / Bookmark.unsaveJob() ← requires Applicant session (from Unit 1)
  Bookmark.getSavedJobs() → retrieves JobPosting data for each bookmark
```

### Unit 3 Interactions — Job Application & Tracking

```
US-4.1 (Apply):
  Application.hasApplied(applicantId, jobId) → checks for duplicate
  Profile.getProfile(applicantId) → pre-fills form (from Unit 1)
  Resume.getResume(applicantId) → attaches resume (from Unit 1)
  JobPosting.getJobById(jobId) → displays job context (from Unit 2)
  Application.submit() → creates application record

US-4.2 (View Applications):
  Application.getApplications(applicantId) → returns list
  JobPosting.getJobSummary(jobId) → enriches each entry with job info (from Unit 2)
  Application.getApplicationDetail(applicationId) → returns full detail

US-4.3 (Withdraw):
  Application.withdraw(applicationId) → updates status to Withdrawn
  Application.canReapply(applicantId, jobId) → enables re-application
```

---

## Component-to-Unit Traceability Matrix

| Component | Unit | User Stories |
|-----------|------|-------------|
| Applicant | Unit 1 | US-1.1 |
| Credential | Unit 1 | US-1.1, US-1.2, US-1.3, US-1.6 |
| Profile | Unit 1 | US-1.4, US-4.1 (consumed by Unit 3) |
| Resume | Unit 1 | US-1.5, US-4.1 (consumed by Unit 3) |
| Job Posting | Unit 2 | US-2.1, US-2.2, US-3.1, US-4.1, US-4.2 (consumed by Unit 3) |
| Job Search | Unit 2 | US-2.1, US-2.2, US-2.3, US-2.4 |
| Bookmark | Unit 2 | US-3.2 |
| Application | Unit 3 | US-4.1, US-4.2, US-4.3 |

---

## Component Dependency Diagram

```
┌─────────────────────────────────────────────────┐
│                  Unit 1                          │
│  ┌───────────┐  ┌────────────┐  ┌───────────┐  │
│  │ Applicant │──│ Credential │  │  Resume    │  │
│  └─────┬─────┘  └────────────┘  └─────┬─────┘  │
│        │                               │        │
│        └───────┐  ┌────────────┐       │        │
│                └──│  Profile   │       │        │
│                   └─────┬──────┘       │        │
└─────────────────────────┼──────────────┼────────┘
                          │              │
              ┌───────────┼──────────────┼────────┐
              │           ▼    Unit 3    ▼        │
              │      ┌──────────────────────┐     │
              │      │    Application       │     │
              │      └──────────┬───────────┘     │
              └─────────────────┼─────────────────┘
                                │
              ┌─────────────────┼─────────────────┐
              │           Unit 2 ▼                 │
              │  ┌─────────────────────┐           │
              │  │    Job Posting      │           │
              │  └──────────┬──────────┘           │
              │             │                      │
              │  ┌──────────┴──────────┐           │
              │  │    Job Search       │           │
              │  └─────────────────────┘           │
              │  ┌─────────────────────┐           │
              │  │    Bookmark         │───────────┤
              │  └─────────────────────┘  (reads   │
              │                          Applicant │
              │                          session)  │
              └────────────────────────────────────┘
```
