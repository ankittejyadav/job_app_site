const companies = [
  'Greenleaf Technologies', 'Apex Dynamics', 'Nimbus Cloud Inc.', 'Coral Systems',
  'Ironforge Labs', 'Velvet Software', 'Summit Analytics', 'BrightPath Health',
  'Quantum Edge', 'Mosaic Digital', 'TerraVista Corp', 'LunarByte',
  'SilverLine Consulting', 'HarborView Financial', 'PineRidge Solutions',
];

const locations = [
  'New York, NY', 'San Francisco, CA', 'Austin, TX', 'Seattle, WA',
  'Chicago, IL', 'Denver, CO', 'Boston, MA', 'Portland, OR',
  'Atlanta, GA', 'Remote',
];

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'];
const experienceLevels = ['Entry', 'Mid', 'Senior'];

const jobTemplates = [
  { title: 'Frontend Developer', field: 'engineering' },
  { title: 'Backend Engineer', field: 'engineering' },
  { title: 'Full Stack Developer', field: 'engineering' },
  { title: 'DevOps Engineer', field: 'engineering' },
  { title: 'Data Analyst', field: 'data' },
  { title: 'Data Scientist', field: 'data' },
  { title: 'Machine Learning Engineer', field: 'data' },
  { title: 'Product Manager', field: 'product' },
  { title: 'UX Designer', field: 'design' },
  { title: 'UI Developer', field: 'design' },
  { title: 'QA Engineer', field: 'engineering' },
  { title: 'Mobile Developer', field: 'engineering' },
  { title: 'Cloud Architect', field: 'engineering' },
  { title: 'Security Analyst', field: 'security' },
  { title: 'Technical Writer', field: 'content' },
  { title: 'Scrum Master', field: 'product' },
  { title: 'Business Analyst', field: 'product' },
  { title: 'Systems Administrator', field: 'engineering' },
  { title: 'Database Administrator', field: 'engineering' },
  { title: 'Solutions Architect', field: 'engineering' },
  { title: 'Software Engineer', field: 'engineering' },
  { title: 'Site Reliability Engineer', field: 'engineering' },
  { title: 'IT Support Specialist', field: 'support' },
  { title: 'Project Coordinator', field: 'product' },
  { title: 'Marketing Analyst', field: 'marketing' },
];

const salaryRanges = [
  '$50,000 - $70,000', '$60,000 - $85,000', '$70,000 - $95,000',
  '$80,000 - $110,000', '$90,000 - $120,000', '$100,000 - $140,000',
  '$120,000 - $160,000', '$130,000 - $180,000', '$150,000 - $200,000',
  null,
];

const descriptions = {
  engineering: 'Join our engineering team to build scalable, high-performance systems that serve millions of users. You will collaborate with cross-functional teams to design, implement, and maintain software solutions.',
  data: 'Work with large datasets to uncover insights and drive data-informed decisions. You will build analytical pipelines, create visualizations, and develop predictive models.',
  product: 'Drive product strategy and execution from ideation to launch. You will work closely with engineering, design, and stakeholders to deliver value to our users.',
  design: 'Create intuitive and beautiful user experiences that delight our customers. You will conduct user research, create wireframes, and work with developers to ship polished interfaces.',
  security: 'Protect our systems and data by identifying vulnerabilities, implementing security controls, and responding to incidents. You will work with engineering to build secure-by-default systems.',
  content: 'Create clear, concise technical documentation that helps users and developers understand our products. You will work with subject matter experts to produce guides, API docs, and tutorials.',
  support: 'Provide world-class technical support to internal teams and customers. You will troubleshoot issues, document solutions, and collaborate with engineering on recurring problems.',
  marketing: 'Analyze marketing performance data to optimize campaigns and improve ROI. You will create dashboards, run A/B tests, and provide actionable recommendations.',
};

const responsibilities = {
  engineering: '- Design and implement features for production systems\n- Write clean, tested, and maintainable code\n- Participate in code reviews and architectural discussions\n- Collaborate with product and design teams\n- Monitor and improve application performance',
  data: '- Build and maintain data pipelines\n- Create dashboards and reports for stakeholders\n- Develop statistical models and ML algorithms\n- Ensure data quality and integrity\n- Present findings to technical and non-technical audiences',
  product: '- Define product roadmap and prioritize features\n- Write user stories and acceptance criteria\n- Coordinate cross-functional teams\n- Analyze metrics and user feedback\n- Facilitate agile ceremonies',
  design: '- Conduct user research and usability testing\n- Create wireframes, prototypes, and high-fidelity designs\n- Maintain and evolve the design system\n- Collaborate with engineers on implementation\n- Advocate for user-centered design practices',
  security: '- Conduct security assessments and penetration testing\n- Monitor systems for security threats\n- Develop and enforce security policies\n- Respond to security incidents\n- Train teams on security best practices',
  content: '- Write and maintain technical documentation\n- Create API references and developer guides\n- Collaborate with engineers to understand features\n- Improve documentation tooling and processes\n- Review and edit content for accuracy',
  support: '- Respond to support tickets and resolve issues\n- Document troubleshooting procedures\n- Escalate complex issues to engineering\n- Improve support processes and tools\n- Train team members on new features',
  marketing: '- Analyze campaign performance across channels\n- Build and maintain marketing dashboards\n- Run A/B tests and report results\n- Develop attribution models\n- Collaborate with marketing team on strategy',
};

const qualifications = {
  engineering: '- Bachelor\'s degree in Computer Science or related field\n- Proficiency in at least one programming language\n- Experience with version control (Git)\n- Strong problem-solving skills\n- Good communication and teamwork abilities',
  data: '- Bachelor\'s degree in Statistics, Mathematics, or related field\n- Proficiency in SQL and Python/R\n- Experience with data visualization tools\n- Strong analytical and statistical skills\n- Ability to communicate findings clearly',
  product: '- Bachelor\'s degree in Business, Technology, or related field\n- Experience with agile methodologies\n- Strong analytical and communication skills\n- Ability to prioritize and manage stakeholders\n- Technical understanding of software development',
  design: '- Bachelor\'s degree in Design, HCI, or related field\n- Proficiency in Figma, Sketch, or similar tools\n- Portfolio demonstrating UX/UI work\n- Understanding of accessibility standards\n- Strong visual design skills',
  security: '- Bachelor\'s degree in Cybersecurity or related field\n- Knowledge of security frameworks (OWASP, NIST)\n- Experience with security tools and testing\n- Relevant certifications preferred (CISSP, CEH)\n- Strong analytical skills',
  content: '- Bachelor\'s degree in English, Communications, or related field\n- Excellent writing and editing skills\n- Experience with docs-as-code workflows\n- Ability to understand technical concepts\n- Familiarity with API documentation',
  support: '- Associate\'s degree or equivalent experience\n- Strong troubleshooting and diagnostic skills\n- Excellent customer communication\n- Familiarity with ticketing systems\n- Willingness to learn new technologies',
  marketing: '- Bachelor\'s degree in Marketing, Analytics, or related field\n- Proficiency in Google Analytics and Excel\n- Experience with marketing automation platforms\n- Strong analytical mindset\n- Good presentation skills',
};

function generateDate(daysAgo) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
}

function generateJobs() {
  const jobs = [];
  let id = 1;

  for (let i = 0; i < jobTemplates.length; i++) {
    const variants = i < 10 ? 3 : 2;
    for (let v = 0; v < variants; v++) {
      const template = jobTemplates[i];
      const company = companies[(i + v * 3) % companies.length];
      const location = locations[(i + v * 2) % locations.length];
      const jobType = jobTypes[(i + v) % jobTypes.length];
      const level = experienceLevels[(i + v) % experienceLevels.length];
      const salary = salaryRanges[(i + v * 2) % salaryRanges.length];
      const daysAgo = ((i * 3 + v * 7) % 60) + 1;

      jobs.push({
        jobId: `j${id}`,
        title: v > 0 ? `${level} ${template.title}` : template.title,
        companyName: company,
        location,
        jobType,
        experienceLevel: level,
        salaryRange: salary,
        description: descriptions[template.field],
        responsibilities: responsibilities[template.field],
        qualifications: qualifications[template.field],
        postedAt: generateDate(daysAgo),
        isActive: id % 12 !== 0,
      });
      id++;
    }
  }

  return jobs;
}

const mockJobs = generateJobs();

export default mockJobs;
