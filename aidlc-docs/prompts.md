# Prompts Log

## Prompt 1
We will work on building an application today. For every front end and backend component we will create a project folder. All documents will reside in the aidlc-docs folder. Throughout our session I'll ask you to plan your work ahead and create an md file for the plan. You may work only after I approve said plan. These plans will always be stored in aidlc-docs/plans folder. You will create many types of documents in the md format. Requirement, features changes documents will reside in aidlc-docs/requirements folder. User stories must be stored in the aidlc-docs/story-artifacts folder. Architecture and Design documents must be stored in the aidlc-docs/design-artifacts folder. All prompts in order must be stored in the aidlc-docs/prompts.md file. Confirm your understanding of this prompt. Create the necessary folders and files for storage, if they do not exist already.

## Prompt 2
Your Role: You are an expert product manager and are tasked with creating well defined user stories that becomes the contract for developing the system as mentioned in the Task section below. Plan for the work ahead and write your steps in a Markdown file: user_stories_plan.md with checkboxes for each step in the plan. List your Deliverables in the plan. If any step needs my clarification, add a note in the step to get my confirmation. Do not make critical decisions on your own. Upon completing the plan, ask for my review and approval. After my approval, you can go ahead to execute the same plan one step at a time. Once you finish each step, mark the checkboxes as done in the plan.

Your Task: Build user stories for the high level requirement as described here: A job application management site that allows:
- Applicants to search, view, and apply to job postings

Write the user stories to a user_stories.md file

## Prompt 3
Your Role: You are an experienced software architect. Before you start the task as mentioned below, please do the planning and write your steps in the units_plan.md file with checkboxes against each step in the plan. If any step needs my clarification, please add it to the step to interact with me and get my confirmation. Do not make critical decisions on your own. Once you produce the plan, ask for my review and approval. After my approval, you can go ahead to execute the same plan one step at a time. Once you finish each step, mark the checkboxes as done in the plan.

Your Task: Group these user stories in user_stories.md into multiple units that can be built independently. Each unit contains highly cohesive user stories that can be built by a single team. The units are loosely coupled with each other. For each unit, write the respective user stories and acceptance criteria in a units.md file.

## Prompt 4
Your Role: You are an experienced software architect and engineer. Before you start the task as mentioned below, please do the planning and write your steps in in a Markdown file named component_model_plan.md with checkboxes against each step in the plan. List your Deliverables in the plan file. If any step needs my clarification, please add it to the step to interact with me and get my confirmation. Do not make critical decisions on your own. Once you produce the plan, ask for my review and approval. After my approval, you can go ahead to execute the same plan one step at a time. Once you finish each step, mark the checkboxes as done in the plan.

Your Task: Refer to the user stories in the units.md file. Design the component model to implement all the user stories. This model shall contain all the components, the attributes, the behaviors and how the components interact to implement the user stories. The components should be at a business level, do not generate any codes yet. Write the component model into a Markdown file: component_model.md.

## Prompt 5
Your Role: You are an experienced software engineer. Before you start the task as mentioned below, please do the planning and write your steps in the markdown file react_app_plan.md file with checkboxes against each step in the plan. List your Deliverables in the plan file. If any step needs my clarification, please add it to the step to interact with me and get my confirmation. Do not make critical decisions on your own. Once you produce the plan, ask for my review and approval. After my approval, you can go ahead to execute the same plan one step at a time. Once you finish each step, mark the checkboxes as done in the plan.

Your Task: Refer to component design in the component_model.md file and the units.md file.
Generate a simple and intuitive React Vite web application for the Login and applicant view job listing component in an job-app folder
Use modern design styling for the UX with Bootstrap CDN: icons, color theme, responsive layout, intuitive visual hierarchy, CSS for hover effects
Choose a creative professional color theme avoiding default blue (e.g. green, blue, teal, gray, purple, orange, teal etc.)
Use simple mock authentication for now with authentication state persisting across all pages and components
Populate the page with some sample jobs (50+) for local testing.
Build the React application and attempt to resolve any errors. Install any tools you need.
Do not run the npm dev server, only use npm-install and npm-run-build. We will deploy the app separately

## Prompt 6
Your Role: You are an experienced Cloud Architect. Before you start the task as mentioned below, please do the planning and write your steps in the markdown file deployment_plan.md file with checkboxes against each step in the plan. List your Deliverables in the plan file. If any step needs my clarification, please add it to the step to interact with me and get my confirmation. Do not make critical decisions on your own. Once you produce the plan, ask for my review and approval. After my approval, you can go ahead to execute the same plan one step at a time. Once you finish each step, mark the checkboxes as done in the plan.

Your Task: Use the following steps to deploy the application code generated in the previous step job-app folder to AWS us-west-2 Region.

Step 1: Create and Deploy IaC for the React app — CDK with private S3 bucket (random prefix), CloudFront with OAC, bucket policy, CF outputs (Bucket, Distribution ID, CloudFront URL), valid IAM policies.
Step 2: Deploy infrastructure using CDK — validate template, deploy as react-job-app-stack, monitor status, retrieve outputs.
Step 3: Deploy React app — update app config for CloudFront URL, rebuild, sync to S3, curl to verify.

## Prompt 7
no this is fine log the progress until now and whats needed to be done next in a md file

## Prompt 8
log these too

## Prompt 9
no i mean undo the previous step and log these steps to run in a md file too:
Test Your Application — Verify the Build and Verify Deployment (after CDK deploy)

## Prompt 10
Your Role: You are an experienced DevOps engineer. Before you start the task as mentioned below, please do the planning and write your steps in an aidlc-docs/plans/github_push_plan.md file with checkboxes against each step in the plan. If any step needs my clarification, please add it to the step to interact with me and get my confirmation. Do not make critical decisions on your own. Once you produce the plan, ask for my review and approval. After my approval, you can go ahead to execute the same plan one step at a time. Once you finish each step, mark the checkboxes as done in the plan.

Task: Initialize a git repository for the JobVault project in /workshop. Create a proper .gitignore for Node.js/React projects. Create a README.md with project overview, setup instructions, and tech stack. Push the complete project (job-app/, aidlc-docs/) to a new GitHub repository.
