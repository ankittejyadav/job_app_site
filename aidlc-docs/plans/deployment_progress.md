# Deployment Progress — React Job App to AWS (us-west-2)

## Completed

### Step 1: Install CDK & Bootstrap
- [x] Installed AWS CDK CLI globally (v2.1117.0)
- [ ] CDK Bootstrap — **BLOCKED**: IAM role `code-editor-CodeEditorInstanceBootstrapRole-Ubsbjd4NEBul` has `ReadOnlyAccess` only. Cannot execute `cdk bootstrap`.

### Environment Verified
- **AWS Account:** 731291616585
- **Region:** us-west-2
- **Node.js:** v18.20.8
- **CDK CLI:** v2.1117.0
- **AWS CLI:** v2.34.24
- **React app built:** `/workshop/job-app/dist` (ready to deploy)

---

## What's Needed Next

### Prerequisites (IAM Permissions)
The instance role needs write permissions added before deployment can proceed. Required policies:

| Service | Permissions Needed |
|---|---|
| **CloudFormation** | CreateStack, CreateChangeSet, DescribeStacks, DescribeStackEvents, DeleteStack, ExecuteChangeSet |
| **S3** | CreateBucket, PutObject, DeleteObject, PutBucketPolicy, GetBucketPolicy |
| **CloudFront** | CreateDistribution, CreateOriginAccessControl, GetDistribution, CreateInvalidation |
| **IAM** | CreateRole, PutRolePolicy, PassRole (for CDK bootstrap and OAC) |
| **SSM** | PutParameter (CDK bootstrap stores version info) |

Alternatively, an admin can run `cdk bootstrap aws://731291616585/us-west-2` from an authorized context.

### Remaining Steps (once permissions are granted)

**1. Bootstrap CDK**
```bash
cdk bootstrap aws://731291616585/us-west-2
```

**2. Create CDK Infrastructure Project**
- Create `/workshop/job-app-infra` CDK app (TypeScript)
- Define stack `react-job-app-stack` with:
  - Private S3 bucket: `<6-char-hex>-agent-workshop-react-app-bucket`
  - CloudFront distribution with OAC → S3 origin
  - Bucket policy allowing CloudFront OAC read access
  - IAM policies with `Version: '2012-10-17'` and proper ARNs
  - Outputs: Bucket Name, Distribution ID, CloudFront URL

**3. Validate & Deploy Stack**
```bash
cdk synth
aws cloudformation validate-template --template-body file://cdk.out/react-job-app-stack.template.json --region us-west-2
cdk deploy react-job-app-stack --region us-west-2 --require-approval never
```

**4. Update & Rebuild React App**
- Confirm Vite `base` is `/` (already set for root path serving)
- Rebuild: `cd /workshop/job-app && npm run build`

**5. Deploy Assets to S3**
```bash
aws s3 sync /workshop/job-app/dist/ s3://<bucket-name>/ --region us-west-2 --delete
aws cloudfront create-invalidation --distribution-id <dist-id> --paths "/*" --region us-west-2
```

**6. Verify**
```bash
curl -I https://<distribution>.cloudfront.net/
```

---

## Test & Verification Steps

### Verify the Build
```bash
cd /workshop/job-app
npm install
npm run build
```

### Verify Deployment (after CDK deploy)
```bash
# Get the CloudFront URL from CDK stack outputs
aws cloudformation describe-stacks --stack-name react-job-app-stack --region us-west-2 \
  --query "Stacks[0].Outputs" --output table
```

Open the CloudFront URL in a browser and verify:
- [ ] Login page loads (test credentials: `demo@jobvault.com` / `Demo1234`)
- [ ] Job listings display with search and filter functionality
- [ ] Job detail view works when clicking a job card
- [ ] Application form displays from the detail page

---

## Current Status: BLOCKED on IAM permissions
