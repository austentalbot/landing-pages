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
      "20+ screens per role turn into calendar ping-pong, and great candidates cool off.",
    icon: "clock",
  },
  {
    title: "Inconsistent Evaluation",
    description:
      "Signals vary by interviewer; the hiring bar moves depending on who asks the questions.",
    icon: "trending-down",
  },
  {
    title: "Surface-Level Screens",
    description:
      "Rehearsed answers slip through, and you can't tell ownership from participation.",
    icon: "target",
  },
] as const;

export const SOLUTION_BENEFITS = [
  {
    title: "Recruiter Screen (20 min)",
    description: "Rapid filter for fit, clarity, and motivation",
    icon: "clipboard-check",
    bullets: [
      "Validate resume claims with quick probes",
      "Capture collaboration and communication patterns",
      "Consistent yes/no before engineer time",
    ],
  },
  {
    title: "Hiring Manager Screen (30 min)",
    description:
      "Technical judgment, system design, and ownership depth",
    icon: "search",
    bullets: [
      "Extract trade-offs and decision paths",
      "Separate individual contribution from team outcome",
      "Push past surface answers with adaptive follow-ups",
    ],
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Send Link",
    description:
      "Generate a role-specific link and share it. No scheduling.",
    icon: "send",
  },
  {
    step: 2,
    title: "AI Conducts Interview",
    description:
      "Adaptive voice conversation that digs into specifics and ownership.",
    icon: "mic",
  },
  {
    step: 3,
    title: "Review Scorecard",
    description:
      "Evidence-backed scorecard appears instantly. Compare and decide.",
    icon: "file-text",
  },
] as const;

export const FEATURE_SECTIONS = [
  {
    id: "adaptive-interviewing",
    title: "Adaptive Interviewing",
    icon: "message-square",
    shortDescription:
      "Challenges surface answers in real-time and pulls for technical specifics.",
    detailedContent: {
      description:
        "No two interviews are identical. The AI keeps asking until it reaches depth and clear ownership.",
      bullets: [
        "Real-time probes on claims and trade-offs",
        "Asks for your role, not just the team's outcome",
      ],
    },
  },
  {
    id: "engineered-evaluation",
    title: "Engineered Evaluation",
    icon: "bar-chart-3",
    shortDescription:
      "Competency-based scoring for IC engineering roles with evidence attached.",
    detailedContent: {
      description:
        "Questions adapt to your role and bar; scores stay consistent across candidates.",
      bullets: [
        "5 competency scores with justification",
        "Direct transcript quotes for every rating",
        "Level and role-fit recommendations",
      ],
    },
  },
  {
    id: "candidate-experience",
    title: "Candidate Experience",
    icon: "users",
    shortDescription:
      "Natural voice experience with clear prep, practice, and on-demand scheduling.",
    detailedContent: {
      description:
        "Polished, fair, voice-only conversation that lets candidates show what they know.",
      bullets: [
        "Prep guide and practice question before the interview",
        "Interview anytime—no time zone juggling or cameras",
        "Clear expectations and respectful flow",
      ],
    },
  },
  {
    id: "seamless-workflow",
    title: "Seamless Workflow",
    icon: "workflow",
    shortDescription:
      "Fits your existing recruiting workflow and keeps scorecards in one place.",
    detailedContent: {
      description:
        "Centralized review and sharing without changing your process.",
      bullets: [
        "Side-by-side candidate comparison",
        "Exportable scorecards and transcripts",
        "Notes and flags for hiring managers",
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
    question: "What about bias and fairness?",
    answer:
      "We evaluate the content and reasoning of answers—technical decision-making, ownership examples, collaboration patterns—not speech characteristics. Our methodology is designed to comply with EEOC guidelines. Every scorecard shows the evidence (transcript quotes), so you can audit for bias yourself.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Under 10 minutes. Create account → upload job description → send first interview link. That's it.",
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
