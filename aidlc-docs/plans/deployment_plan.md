# Deployment Plan — React Job App to AWS (us-west-2)

## Objective
Deploy the JobVault React application from `/workshop/job-app` to AWS using S3 + CloudFront, provisioned via AWS CDK.

---

## Plan

### Step 1: Install CDK & Bootstrap
- [x] Install AWS CDK CLI globally via npm. (v2.1117.0)
- [ ] Bootstrap CDK in us-west-2 — BLOCKED on IAM permissions.

### Step 2: Create CDK Infrastructure Project
- [ ] Create a CDK app (TypeScript) in `/workshop/job-app-infra`.
- [ ] Define the stack (`react-job-app-stack`) with:
  - Private S3 bucket with a random prefix: `<prefix>-agent-workshop-react-app-bucket`
  - CloudFront distribution with Origin Access Control (OAC) pointing to the S3 origin
  - S3 bucket policy granting CloudFront OAC read access
  - All IAM policy documents with `Version: '2012-10-17'` (quoted) and proper resource ARNs (`arn:aws:s3:::bucket/*`)
  - CloudFormation Outputs: Bucket Name, Distribution ID, CloudFront URL

> **Decided:** Short random hex prefix (6 chars) approved.

### Step 3: Validate & Deploy CDK Stack
- [ ] Run `cdk synth` and validate the CloudFormation template using `aws cloudformation validate-template`.
- [ ] Fix any validation errors.
- [ ] Deploy using `cdk deploy --stack react-job-app-stack` in us-west-2.
- [ ] Monitor deployment status and report progress.
- [ ] Retrieve stack outputs (Bucket Name, Distribution ID, CloudFront URL).

### Step 4: Update & Rebuild React App
- [ ] Update Vite config / React Router with the correct base path (root `/` since we're serving at the CloudFront domain root).
- [ ] Rebuild the React application (`npm run build`).

### Step 5: Deploy React Assets to S3
- [ ] Sync the `dist/` folder to the S3 bucket using `aws s3 sync`.
- [ ] Create a CloudFront invalidation to clear cache.

### Step 6: Verify Deployment
- [ ] `curl` the CloudFront URL to verify the app is accessible.
- [ ] Report the live URL.

---

## Deliverables

| # | Deliverable | Location |
|---|-------------|----------|
| 1 | Deployment Plan (this file) | `aidlc-docs/plans/deployment_plan.md` |
| 2 | CDK Infrastructure Project | `/workshop/job-app-infra` |
| 3 | Deployed CloudFormation Stack | `react-job-app-stack` (us-west-2) |
| 4 | Live CloudFront URL | Retrieved from stack outputs |

---

## Status: BLOCKED — Insufficient IAM permissions (ReadOnlyAccess only). Need CloudFormation, S3, CloudFront write permissions.
