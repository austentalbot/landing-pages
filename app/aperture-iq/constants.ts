/**
 * Constants for ApertureIQ landing page
 */

export const COLORS = {
  mutedRose: '#D88C9A',
  warmPeach: '#F2D0A9',
  softCream: '#F1E3D3',
  mutedTeal: '#99C1B9',
  primaryText: '#3C2A2F',
  secondaryText: '#446B67',
  disabledText: '#D8B8BC',
  border: '#E5D8D0',
  background: '#F6F2EE',
} as const;

export const PROBLEM_POINTS = [
  {
    title: 'Scheduling Bottleneck',
    description: 'Coordinating calendars for 20 initial screens per role wastes 10+ hours. Candidates wait days just to talk to someone.',
    icon: 'clock',
  },
  {
    title: 'Inconsistent Bar',
    description: 'Different recruiters ask different questions. Your hiring standards fluctuate based on who\'s available and how their day is going.',
    icon: 'trending-down',
  },
  {
    title: 'Shallow Signal',
    description: 'Junior recruiters don\'t know how to probe. They miss red flags and let great answers slip by without follow-up.',
    icon: 'target',
  },
] as const;

export const SOLUTION_BENEFITS = [
  {
    title: 'Recruiter Screen (20 min)',
    description: 'Initial fit and communication check',
    icon: 'clipboard-check',
    bullets: [
      'Resume verification and motivation',
      'Basic collaboration examples',
      'Fast filter before hiring manager time',
    ],
  },
  {
    title: 'Hiring Manager Screen (30 min)',
    description: 'Deep project deep-dives',
    icon: 'search',
    bullets: [
      'Technical judgment and decision-making',
      'Ownership and leadership signals',
      'Replaces or supplements HM screen',
    ],
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Send Link',
    description: 'Generate interview link → send to candidate via email or ATS. They interview whenever they want (no scheduling).',
    icon: 'send',
  },
  {
    step: 2,
    title: 'AI Conducts Interview',
    description: 'Natural voice conversation with adaptive follow-ups. AI drills into vague answers and extracts specific examples.',
    icon: 'mic',
  },
  {
    step: 3,
    title: 'Review Scorecard',
    description: 'Structured scorecard in your dashboard within seconds. 3-minute review replaces 30-minute screen.',
    icon: 'file-text',
  },
] as const;

export const FEATURE_SECTIONS = [
  {
    id: 'adaptive-interviewing',
    title: 'Adaptive Interviewing',
    icon: 'message-square',
    shortDescription: 'Our AI doesn\'t just ask pre-written questions. It listens, understands, and probes deeper—just like your best interviewers.',
    detailedContent: {
      description: 'Candidates can\'t game the interview with rehearsed answers. We adapt in real-time.',
      example: {
        lines: [
          { speaker: 'AI', text: 'Tell me about a time you had to make a technical trade-off.' },
          { speaker: 'Candidate', text: 'We decided to use microservices for our platform.' },
          { speaker: 'AI', text: 'What specifically led to that decision? What were the alternatives you considered?' },
          { speaker: 'Candidate', text: 'Well, our monolith was getting slow…' },
          { speaker: 'AI', text: 'Can you walk me through your role in that decision versus the team\'s?' },
        ],
      },
    },
  },
  {
    id: 'engineered-evaluation',
    title: 'Engineered Evaluation',
    icon: 'bar-chart-3',
    shortDescription: 'Every candidate scored on the same 5 dimensions that matter for IC engineers.',
    detailedContent: {
      description: 'Upload your job description and company values. We tailor questions and fit assessment to your bar.',
      dimensions: [
        'Communication Clarity',
        'Technical Depth & Judgment',
        'Ownership & Initiative',
        'Collaboration & Teamwork',
        'Growth Trajectory & Learning Agility',
      ],
      bullets: [
        '1-5 rating with justification',
        'Direct quotes from transcript',
        'Green flags, red flags, and follow-up topics',
        'Level assessment (Junior/Mid/Senior/Staff+)',
        'Alternative role suggestions when relevant',
      ],
    },
  },
  {
    id: 'candidate-experience',
    title: 'Candidate Experience',
    icon: 'users',
    shortDescription: 'We help candidates put their best foot forward. Better signal for you, fairer experience for them.',
    detailedContent: {
      description: 'Created from hundreds of interviews and coaching sessions with top tech candidates—helping you put your best foot forward.',
      bullets: [
        'Preparation guide (what to expect, how to succeed)',
        'Practice question to test audio and get comfortable',
        'On-demand scheduling (interview anytime, anywhere)',
        'No awkward video—just natural voice conversation',
      ],
    },
  },
  {
    id: 'seamless-workflow',
    title: 'Seamless Workflow',
    icon: 'workflow',
    shortDescription: 'Better insights. No new process to learn.',
    detailedContent: {
      description: 'Your recruiters don\'t need to change how they work—they just get better data, faster.',
      bullets: [
        'Side-by-side candidate comparison',
        'Exportable scorecards (PDF or CSV)',
        'Full transcript searchable and timestamped',
        'Team collaboration: add notes, flag for follow-up',
        'Quick, self-contained dashboard for all interviews',
      ],
    },
  },
] as const;

export const MOCK_SCORECARD = {
  candidateName: 'Jane Doe',
  position: 'Senior Backend Engineer',
  appliedDate: '2024-11-20',
  interviewDate: '2024-11-22',
  overallScore: 87,
  level: 'Senior Engineer',
  levelConfidence: 'High',
  rolefit: 'Strong fit for Backend Engineer role',
  alternativeRole: 'Consider for DevOps Engineer—strong infrastructure experience',
  summary: 'Strong senior-level candidate with excellent communication and deep technical experience. Demonstrated clear ownership of complex distributed systems projects. Shows good judgment in technical trade-offs and strong collaboration skills. Minor concerns about scale of previous systems, but overall a highly promising candidate.',
  skillsAssessment: [
    { skill: 'Communication Clarity', score: 92, level: 'Expert' },
    { skill: 'Technical Depth & Judgment', score: 88, level: 'Advanced' },
    { skill: 'Ownership & Initiative', score: 85, level: 'Advanced' },
    { skill: 'Collaboration & Teamwork', score: 84, level: 'Advanced' },
    { skill: 'Growth Trajectory & Learning', score: 86, level: 'Advanced' },
  ],
  greenFlags: [
    'Led migration of monolith to microservices, reduced deployment time from 2 hours to 15 minutes',
    'Proactively identified and fixed critical performance bottleneck before it impacted users',
    'Strong examples of mentoring junior engineers and establishing team best practices',
  ],
  redFlags: [
    { severity: 'low', item: 'Previous systems handled ~10K RPS, may need to learn new patterns for higher scale' },
    { severity: 'low', item: 'Limited experience with Kubernetes (used Docker Swarm previously)' },
  ],
  suggestedQuestions: [
    'Can you walk through how you\'d approach designing our real-time notification system?',
    'Tell me about your experience debugging production incidents under pressure',
    'How do you approach code reviews and ensuring code quality across a team?',
  ],
  transcriptExcerpt: [
    { speaker: 'AI', text: 'Tell me about a time you had to make a difficult technical trade-off.' },
    { speaker: 'Jane', text: 'At my last company, we were deciding whether to migrate our monolith to microservices. The monolith had become a deployment bottleneck - every deploy took 2 hours and required coordinating across teams.' },
    { speaker: 'AI', text: 'What alternatives did you consider?' },
    { speaker: 'Jane', text: 'We looked at three options: keeping the monolith but improving the deployment pipeline, splitting into a few large services, or going full microservices. I advocated for a hybrid approach...' },
  ],
} as const;

export const ROI_DEFAULTS = {
  rolesPerQuarter: 10,
  candidatesPerRole: 20,
  hourlyRate: 50,
} as const;

export const PRICING_PLANS = {
  recruiter: {
    name: 'Recruiter Screen',
    price: 20,
    duration: '20-minute interview',
    features: [
      'Full scorecard + transcript',
      'AI-generated behavioral questions',
      'On-demand scheduling',
      'Searchable transcript',
    ],
    cta: 'Start Interview',
  },
  hiring: {
    name: 'Hiring Manager Screen',
    price: 40,
    duration: '30-minute interview',
    features: [
      'Full scorecard + transcript',
      'Tailored for technical / senior-level assessment',
      'Side-by-side candidate comparison',
      'Searchable transcript',
    ],
    cta: 'Start Interview',
    badge: 'Most Thorough',
  },
} as const;

export const FAQS = [
  {
    question: 'How will candidates feel about being interviewed by AI?',
    answer: 'We\'ve designed the experience to feel natural and conversational. Candidates appreciate the flexibility to interview anytime and the clear preparation guidance. The voice interface is meant to feel human, not robotic.',
  },
  {
    question: 'How accurate is the AI\'s evaluation?',
    answer: 'The AI evaluates responses against a standardized rubric and surfaces supporting evidence from the transcript. Its consistent approach helps reduce variability between interviews, while you verify insights and make decisions.',
  },
  {
    question: 'What if the AI misunderstands an answer?',
    answer: 'The full transcript is always available. If something seems off, you can read the exact exchange and make your own judgment. We also flag "low confidence" assessments when the AI is uncertain.',
  },
  {
    question: 'Does this replace hiring managers?',
    answer: 'No. This handles the initial screening bottleneck. Your hiring managers still conduct deep technical, cultural, and final-round interviews. We just make sure they\'re only talking to candidates worth their time.',
  },
  {
    question: 'Can I customize the evaluation criteria?',
    answer: 'The 5 dimensions are fixed (they\'re engineered specifically for IC engineers), but you upload your job description and company values. The AI tailors questions, adjusts for seniority, and assesses fit against your specific requirements.',
  },
  {
    question: 'What about bias and fairness?',
    answer: 'We evaluate content of answers, not accents or speech patterns. Our methodology is designed to comply with EEOC guidelines. Every scorecard shows the evidence (transcript quotes), so you can audit for bias yourself.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Under 10 minutes. Create account → upload job description → send first interview link. That\'s it.',
  },
  {
    question: 'What if a candidate is a better fit for a different role?',
    answer: 'The AI will flag this in the scorecard: "Consider for Frontend Engineer—strong UI/UX skills despite applying for Backend." You decide whether to redirect them.',
  },
] as const;

export const TEAM_SIZE_OPTIONS = [
  '1-10',
  '11-25',
  '26-50',
  '50+',
] as const;

export const ROLES_PER_QUARTER_OPTIONS = [
  '1-10',
  '11-25',
  '26-50',
  '50+',
] as const;

export const ROLE_OPTIONS = [
  'Recruiter',
  'Hiring Manager',
  'Engineering Leader',
  'Founder / CEO',
  'Other',
] as const;
