/**
 * Constants for Call Clerk landing page
 */

export const PRICING_PLANS = {
  starter: {
    name: "Starter",
    price: 199,
    minutes: 200,
    features: [
      "Up to 200 call minutes",
      "24/7 call answering",
      "Appointment booking",
      "SMS confirmations",
      "Call summaries",
    ],
    cta: "Start 14-Day Trial",
  },
  pro: {
    name: "Pro",
    price: 399,
    minutes: 600,
    badge: "Most Popular",
    features: [
      "Up to 600 call minutes",
      "Everything in Starter",
      "Priority routing",
      "Custom scripts per service type",
      "Emergency call handling",
      "Advanced reporting",
    ],
    cta: "Start 14-Day Trial",
  },
} as const;

export const FAQS = [
  {
    question: "How does it integrate with my calendar?",
    answer:
      "Call Clerk integrates with Google Calendar, Outlook, and most popular scheduling tools. Once set up, appointments are automatically added to your calendar with all customer details, and you'll receive instant notifications.",
  },
  {
    question: "Does it sound like a robot?",
    answer:
      "No! Our AI uses advanced natural language processing to sound completely human. Customers consistently report they had no idea they were speaking with an AI. You can hear sample calls in our demo.",
  },
  {
    question: "What if I get an emergency call?",
    answer:
      "You can configure emergency routing rules. For urgent situations, Call Clerk can immediately send you a text, call your personal number, or route to your emergency line - all while keeping the customer on the line.",
  },
  {
    question: "Can I customize what it says?",
    answer:
      "Absolutely. You provide details about your services, pricing, availability, and business policies. Our Pro plan includes custom scripts for different service types (e.g., emergency plumbing vs routine maintenance).",
  },
  {
    question: "What happens to my current phone number?",
    answer:
      "Your number stays exactly the same. We handle the technical setup to route calls through Call Clerk while keeping your existing business number. No need to update your marketing materials or tell customers anything changed.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most businesses are up and running in 15 minutes. After signing up, you'll complete a brief onboarding questionnaire about your services and availability. We handle all the technical configuration - no IT expertise needed.",
  },
  {
    question: "What if a call is too complex?",
    answer:
      "Call Clerk knows when to escalate. If a customer has a question outside the configured scope, it will collect their information and let them know you'll call back. You'll get a detailed message with their inquiry and contact info.",
  },
] as const;

export const FEATURES = [
  {
    title: "Answers in under a second, 24/7",
    description: "Never miss a call, even at 2am or when you're on a ladder",
    icon: "zap",
  },
  {
    title: "Books appointments directly",
    description: "Syncs with your calendar and sends confirmations automatically",
    icon: "calendar",
  },
  {
    title: "Sounds completely human",
    description: "Advanced AI that has natural conversations, not robotic scripts",
    icon: "messages-square",
  },
  {
    title: "SMS confirmations",
    description: "Customers get instant text confirmations with all details",
    icon: "message-circle",
  },
  {
    title: "Instant call summaries",
    description: "Get a text with customer info, issue, and booked time after every call",
    icon: "file-text",
  },
  {
    title: "Emergency routing",
    description: "Configure urgent call handling to reach you immediately",
    icon: "phone-forwarded",
  },
  {
    title: "Service-specific scripts",
    description: "Customized responses for different services and pricing",
    icon: "settings",
  },
  {
    title: "Keep your number",
    description: "Works seamlessly with your existing business phone number",
    icon: "phone",
  },
] as const;

export const PROBLEM_POINTS = [
  {
    text: "Stuck on a job site when the phone rings",
    icon: "wrench",
  },
  {
    text: "After-hours calls go straight to voicemail",
    icon: "moon",
  },
  {
    text: "Can't afford a full-time receptionist ($35K+/year)",
    icon: "dollar-sign",
  },
  {
    text: "Every missed call = $500-$2,000 in lost revenue",
    icon: "trending-down",
  },
  {
    text: '"They never answered" reviews hurt your reputation',
    icon: "star-off",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Customer calls",
    description: "Your existing business number",
    icon: "phone-incoming",
  },
  {
    step: 2,
    title: "AI answers instantly",
    description: "Collects details, answers questions, books appointment",
    icon: "bot",
  },
  {
    step: 3,
    title: "You stay focused",
    description: "Get SMS summary, calendar automatically updated",
    icon: "check-circle",
  },
] as const;

export const BUSINESS_TYPES = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Landscaping",
  "Cleaning",
  "Painting",
  "Handyman",
  "Other",
] as const;

export const REVENUE_RANGES = [
  "Less than $20K/month",
  "$20K - $50K/month",
  "$50K - $100K/month",
  "$100K+/month",
] as const;

export const MISSED_CALLS_RANGES = [
  "0-5 calls/week",
  "5-10 calls/week",
  "10-20 calls/week",
  "20+ calls/week",
] as const;
