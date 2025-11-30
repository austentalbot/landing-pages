/**
 * Constants for ApertureIQ landing page
 */

export const COLORS = {
  mutedRose: "#D88C9A",
  warmPeach: "#F2D0A9",
  softCream: "#F1E3D3",
  mutedTeal: "#99C1B9",
  primaryText: "#3C2A2F",
  secondaryText: "#446B67",
  disabledText: "#D8B8BC",
  border: "#E5D8D0",
  background: "#F6F2EE",
} as const;

export const PROBLEM_POINTS = [
  {
    title: "Scheduling Bottleneck",
    description:
      "Coordinating calendars across time zones for 20+ technical screens per role. Candidates wait days for a 30-minute conversation, and your pipeline goes cold.",
    icon: "clock",
  },
  {
    title: "Inconsistent Evaluation",
    description:
      "One recruiter asks about tech stack. Another focuses on team dynamics. Your hiring bar fluctuates based on who's available and how deep they can probe on distributed systems.",
    icon: "trending-down",
  },
  {
    title: "Surface-Level Screens",
    description:
      'Candidates rehearse answers about "leading a migration." Without follow-up questions, you can\'t tell real ownership from title inflation or team success from individual contribution.',
    icon: "target",
  },
] as const;

export const SOLUTION_BENEFITS = [
  {
    title: "Recruiter Screen (20 min)",
    description: "Engineering fit, communication clarity, and role motivation",
    icon: "clipboard-check",
    bullets: [
      "Verify resume claims with behavioral probing",
      "Surface collaboration and communication patterns",
      "Fast, consistent filter before engineer time",
    ],
  },
  {
    title: "Hiring Manager Screen (30 min)",
    description:
      "Technical judgment, system design thinking, and ownership depth",
    icon: "search",
    bullets: [
      "Extract technical decision-making and trade-off reasoning",
      "Distinguish individual contribution from team success",
      "Challenge surface-level answers with adaptive follow-ups",
    ],
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Send Link",
    description:
      "Generate a role-specific interview link from your dashboard. Send via email or ATS. Candidates interview on their schedule—no calendar coordination required.",
    icon: "send",
  },
  {
    step: 2,
    title: "AI Conducts Interview",
    description:
      "Voice-based conversation with real-time adaptive probing. Challenges vague answers, asks for specifics, distinguishes ownership from participation—just like a seasoned engineering interviewer.",
    icon: "mic",
  },
  {
    step: 3,
    title: "Review Scorecard",
    description:
      "Competency-based scorecard with transcript quotes, level assessment, and follow-up questions appears in your dashboard. Review the evidence, compare candidates, make informed decisions.",
    icon: "file-text",
  },
] as const;

export const FEATURE_SECTIONS = [
  {
    id: "adaptive-interviewing",
    title: "Adaptive Interviewing",
    icon: "message-square",
    shortDescription:
      "Challenges surface-level answers in real-time. Asks for technical specifics, distinguishes ownership from team success, and extracts decision-making reasoning—similar to how your most experienced engineering interviewers conduct deep technical conversations.",
    detailedContent: {
      description:
        "Every candidate gets different follow-up questions based on their answers. No two interviews are identical. Rehearsed responses get probed until real depth emerges.",
      example: {
        lines: [
          {
            speaker: "AI",
            text: "Tell me about a time you had to make a technical trade-off.",
          },
          {
            speaker: "Candidate",
            text: "We decided to use microservices for our platform.",
          },
          {
            speaker: "AI",
            text: "What specifically led to that decision? What were the alternatives you considered?",
          },
          {
            speaker: "Candidate",
            text: "Well, our monolith was getting slow…",
          },
          {
            speaker: "AI",
            text: "Can you walk me through your role in that decision versus the team's?",
          },
        ],
      },
    },
  },
  {
    id: "engineered-evaluation",
    title: "Engineered Evaluation",
    icon: "bar-chart-3",
    shortDescription:
      "Competency-based scoring engineered specifically for IC engineering roles. Five dimensions with 1-5 ratings, direct transcript evidence, and level assessment from Junior to Staff+.",
    detailedContent: {
      description:
        "Provide your job description and engineering values. The interview adapts question depth, adjusts technical focus by role (Backend, Frontend, DevOps, ML), and calibrates scoring to your bar.",
      dimensions: [
        "Communication Clarity",
        "Technical Depth & Judgment",
        "Ownership & Initiative",
        "Collaboration & Teamwork",
        "Growth Trajectory & Learning Agility",
      ],
      bullets: [
        "1-5 competency rating with detailed justification",
        "Direct quotes from transcript as supporting evidence",
        "Green flags and red flags with severity assessment",
        "Level assessment: Junior / Mid / Senior / Staff+",
        'Alternative role suggestions when skills don\'t match (e.g., "Strong for DevOps despite applying for Backend")',
      ],
    },
  },
  {
    id: "candidate-experience",
    title: "Candidate Experience",
    icon: "users",
    shortDescription:
      "Natural voice conversation designed for clarity and fairness. Candidates get preparation guidance, practice questions, and on-demand scheduling—a polished experience that helps them showcase their real capabilities.",
    detailedContent: {
      description:
        "Candidates deserve a professional, respectful screening experience. We provide clear expectations, technical preparation support, and natural conversation flow—removing anxiety while maintaining rigorous evaluation.",
      bullets: [
        "Detailed preparation guide: what to expect, how to prepare, sample question formats",
        "Practice question with audio test to build comfort before the real interview",
        "Interview anytime, anywhere—no calendar coordination or time zone juggling",
        "Voice-only format: natural conversation without the awkwardness of being on camera",
        "Clear, respectful communication throughout the process",
      ],
    },
  },
  {
    id: "seamless-workflow",
    title: "Seamless Workflow",
    icon: "workflow",
    shortDescription:
      "Integrates into your existing recruiting workflow. Dashboard for scorecard review, side-by-side candidate comparison, exportable reports, and team collaboration—without changing how your team operates.",
    detailedContent: {
      description:
        "Built for recruiting teams who need better signal without process disruption. Review scorecards, compare candidates, share insights with hiring managers, and export reports—all from a centralized dashboard.",
      bullets: [
        "Side-by-side candidate comparison across all competencies",
        "Export scorecards as PDF or CSV for hiring manager review",
        "Full transcript: searchable, timestamped, with highlight capability",
        "Team collaboration: add notes, flag candidates, tag for follow-up",
        "Standalone dashboard—no complex integrations required",
      ],
    },
  },
] as const;

export const MOCK_SCORECARD = {
  candidateName: "Jane Doe",
  position: "Senior Backend Engineer",
  appliedDate: "2024-11-20",
  interviewDate: "2024-11-22",
  overallScore: 87,
  level: "Senior Engineer",
  levelConfidence: "High",
  rolefit: "Strong fit for Backend Engineer role",
  alternativeRole:
    "Consider for DevOps Engineer—strong infrastructure experience",
  summary:
    "Strong senior-level candidate with excellent communication and deep technical experience. Demonstrated clear ownership of complex distributed systems projects. Shows good judgment in technical trade-offs and strong collaboration skills. Minor concerns about scale of previous systems, but overall a highly promising candidate.",
  skillsAssessment: [
    { skill: "Communication Clarity", score: 92, level: "Expert" },
    { skill: "Technical Depth & Judgment", score: 88, level: "Advanced" },
    { skill: "Ownership & Initiative", score: 85, level: "Advanced" },
    { skill: "Collaboration & Teamwork", score: 84, level: "Advanced" },
    { skill: "Growth Trajectory & Learning", score: 86, level: "Advanced" },
  ],
  greenFlags: [
    "Led migration of monolith to microservices, reduced deployment time from 2 hours to 15 minutes",
    "Proactively identified and fixed critical performance bottleneck before it impacted users",
    "Strong examples of mentoring junior engineers and establishing team best practices",
  ],
  redFlags: [
    {
      severity: "low",
      item: "Previous systems handled ~1K RPS, may need to learn new patterns for higher scale",
    },
    { severity: "low", item: "Limited experience with Kubernetes" },
  ],
  suggestedQuestions: [
    "Can you walk through how you'd approach designing our real-time notification system?",
    "Tell me about your experience debugging production incidents under pressure",
    "How do you approach code reviews and ensuring code quality across a team?",
  ],
  transcriptExcerpt: [
    {
      speaker: "AI",
      text: "Tell me about a time you had to make a difficult technical trade-off.",
    },
    {
      speaker: "Jane",
      text: "At my last company, we were deciding whether to migrate our monolith to microservices. The monolith had become a deployment bottleneck - every deploy took 2 hours and required coordinating across teams.",
    },
    { speaker: "AI", text: "What alternatives did you consider?" },
    {
      speaker: "Jane",
      text: "We looked at three options: keeping the monolith but improving the deployment pipeline, splitting into a few large services, or going full microservices. I advocated for a hybrid approach...",
    },
  ],
} as const;

export const ROI_DEFAULTS = {
  rolesPerQuarter: 10,
  candidatesPerRole: 20,
  hourlyRate: 50,
} as const;

export const PRICING_PLANS = {
  recruiter: {
    name: "Recruiter Screen",
    price: 20,
    duration: "20-minute interview",
    features: [
      "Complete scorecard with transcript and evidence",
      "Behavioral and communication assessment",
      "On-demand scheduling—no calendar required",
      "Searchable, timestamped transcript",
    ],
    cta: "Start Interview",
  },
  hiring: {
    name: "Hiring Manager Screen",
    price: 40,
    duration: "30-minute interview",
    features: [
      "Complete scorecard with transcript and evidence",
      "Technical and decision-making assessment",
      "Side-by-side candidate comparison",
      "Level calibration and role-fit analysis",
    ],
    cta: "Start Interview",
    badge: "Most Thorough",
  },
} as const;

export const FAQS = [
  {
    question: "How will candidates feel about being interviewed by AI?",
    answer:
      "The voice-based format is designed to feel like a natural conversation, not a chatbot. Candidates get clear preparation guidance, practice questions, and the flexibility to interview on their schedule. The format removes the stress of being on camera while maintaining rigorous evaluation.",
  },
  {
    question: "How accurate is the AI's evaluation?",
    answer:
      "Every scorecard shows direct transcript quotes as evidence for each competency rating. You review the supporting evidence and make the hiring decision. The structured approach ensures consistent evaluation across all candidates—eliminating the variability of different interviewers asking different questions.",
  },
  {
    question: "What if the AI misunderstands an answer?",
    answer:
      'The full transcript is always available. If something seems off, you can read the exact exchange and make your own judgment. We also flag "low confidence" assessments when the AI is uncertain.',
  },
  {
    question: "Does this replace hiring managers?",
    answer:
      "No. This handles the initial screening bottleneck. Your hiring managers still conduct deep technical, cultural, and final-round interviews. We just make sure they're only talking to candidates worth their time.",
  },
  {
    question: "Can I customize the evaluation criteria?",
    answer:
      "The five core competencies are standardized for IC engineering roles—Communication Clarity, Technical Depth & Judgment, Ownership & Initiative, Collaboration & Teamwork, and Growth Trajectory. You customize by uploading your job description and engineering values, which tailors question focus, technical depth, and role-fit assessment to your specific bar.",
  },
  {
    question: "What about bias and fairness?",
    answer:
      "We evaluate the content and reasoning of answers—technical decision-making, ownership examples, collaboration patterns—not speech characteristics. Our methodology is designed to comply with EEOC guidelines. Every scorecard shows the evidence (transcript quotes), so you can audit for bias yourself.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Under 10 minutes. Create account → upload job description → send first interview link. That's it.",
  },
  {
    question: "What if a candidate is a better fit for a different role?",
    answer:
      'The AI will flag this in the scorecard: "Consider for Frontend Engineer—strong UI/UX skills despite applying for Backend." You decide whether to redirect them.',
  },
] as const;

export const TEAM_SIZE_OPTIONS = ["1-10", "11-25", "26-50", "50+"] as const;

export const ROLES_PER_QUARTER_OPTIONS = [
  "1-10",
  "11-25",
  "26-50",
  "50+",
] as const;

export const ROLE_OPTIONS = [
  "Recruiter",
  "Hiring Manager",
  "Engineering Leader",
  "Founder / CEO",
  "Other",
] as const;
