# Landing Page Template

This document provides a template and guidelines for quickly creating new landing pages for idea validation.

## Quick Start Prompt

Use this prompt when creating a new landing page:

```
Create a new landing page at /app/[route-name] for [brief idea description].

Requirements:
- Unique color scheme: [primary color], [secondary color], [accent color]
- Hero section with: [headline], [subheadline], [CTA]
- Email capture form
- Analytics tracking
- SEO metadata for: [title], [description]
- [Any additional sections: features, pricing, testimonials, FAQ, etc.]

Brand/Style preferences:
- Tone: [professional/playful/technical/minimal/etc.]
- Target audience: [describe target user]
- Key benefit/value prop: [main selling point]
```

## File Structure

Each landing page should be self-contained in its own route:

```
/app/[route-name]/
├── page.tsx              # Main landing page component
├── components/           # Page-specific components (optional)
│   ├── Hero.tsx
│   ├── EmailForm.tsx
│   ├── Features.tsx
│   └── ...
└── actions.ts           # Server actions for form submission (optional)
```

## 1. Page Component Template

```tsx
// app/[route-name]/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Idea Title | Landing Pages",
  description: "Compelling description of your idea for SEO",
  openGraph: {
    title: "Your Idea Title",
    description: "Compelling description for social sharing",
    type: "website",
  },
};

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#YOUR_COLOR_1] to-[#YOUR_COLOR_2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Your Compelling Headline
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Your subheadline that explains the value proposition
            </p>

            {/* Email Capture Form - Inline in Hero */}
            <EmailCaptureForm />
          </div>
        </div>
      </section>

      {/* Additional sections as needed */}
      {/* <FeaturesSection /> */}
      {/* <BenefitsSection /> */}
      {/* <PricingSection /> */}
      {/* <FAQSection /> */}
      {/* <CTASection /> */}
    </main>
  );
}
```

## 2. Email Capture Component Template

```tsx
// app/[route-name]/components/EmailForm.tsx (or inline in page.tsx)
"use client";

import { useState, FormEvent } from "react";
import { isValidEmail } from "@/lib/utils";

export function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      // TODO: Replace with your actual email capture service
      // Options: Mailchimp, ConvertKit, Loops, Resend, simple API route to database
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "[route-name]", // Track which landing page
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks! Check your inbox.");
        setEmail("");

        // Track conversion event
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            event_category: "email_capture",
            event_label: "[route-name]",
          });
        }
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#YOUR_ACCENT_COLOR] focus:border-transparent outline-none"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-white text-[#YOUR_PRIMARY_COLOR] font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Submitting..." : "Get Early Access"}
        </button>
      </div>
      {message && (
        <p className={`mt-3 text-sm ${status === "success" ? "text-green-100" : "text-red-100"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
```

## 3. Unique Color Schemes

Each landing page should have its own unique color palette. Use Tailwind's arbitrary values for flexibility:

### Option A: Inline Arbitrary Values (Recommended)
```tsx
// Direct color values in className
<div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]">
  <button className="bg-[#10b981] hover:bg-[#059669] text-white">
    Click me
  </button>
</div>
```

### Option B: CSS Variables (For more complex themes)
```tsx
// app/[route-name]/page.tsx
export default function LandingPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        "--color-primary": "#6366f1",
        "--color-secondary": "#8b5cf6",
        "--color-accent": "#10b981",
      } as React.CSSProperties}
    >
      {/* Use with arbitrary values */}
      <div className="bg-[var(--color-primary)]">Content</div>
    </div>
  );
}
```

### Color Palette Suggestions by Vibe

**Professional SaaS:**
- Primary: `#2563eb` (Blue)
- Secondary: `#1e40af` (Dark Blue)
- Accent: `#10b981` (Green)

**Playful/Creative:**
- Primary: `#ec4899` (Pink)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#f59e0b` (Amber)

**Tech/Developer:**
- Primary: `#6366f1` (Indigo)
- Secondary: `#06b6d4` (Cyan)
- Accent: `#a78bfa` (Light Purple)

**Minimal/Elegant:**
- Primary: `#0f172a` (Slate)
- Secondary: `#475569` (Gray)
- Accent: `#f97316` (Orange)

## 4. Analytics Setup with Umami

Use Umami for privacy-focused, open-source analytics tracking.

### Setup Umami Analytics

```bash
npm i @umami/node
```

**1. Create Umami Account:**
- Visit https://umami.is or self-host
- Create a new website in your Umami dashboard
- Get your Website ID

**2. Set up environment variables:**
```bash
# .env.local
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
```

**3. Track events in components:**

```tsx
import umami from "@umami/node";

// Simple declarative tracking with data attributes
<button data-umami-event="Get Started Button">
  Get Started →
</button>

// Programmatic tracking with custom properties
const handleNext = async (field: string, value: string) => {
  await umami.track("Next Step", {
    step: currentStep,
    field,
    value
  });
  // Continue with your logic
};

// Track form submissions
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  // Process form...

  // Track successful submission
  await umami.track("Submit", {
    source: "questionnaire",
    ...formData
  });
};
```

### Track Custom Events

```tsx
// 1. Simple button with data attribute (Umami auto-tracking)
<button data-umami-event="Get Started Button">
  Get Started
</button>

// 2. Link with additional context
<a
  href="#questionnaire"
  data-umami-event="CTA Click"
  data-umami-event-location="hero"
>
  Learn More
</a>

// 3. Programmatic tracking with context
<button onClick={async () => {
  await umami.track("Next Step", {
    step: currentStep,
    field: "state",
    value: selectedValue
  });
  handleNext();
}}>
  Continue
</button>

// 4. Track navigation between questionnaire steps
const handleBack = async () => {
  await umami.track("Back", { step: currentStep });
  setStep(Math.max(0, currentStep - 1));
};
```

## 5. Constants File Pattern

Keep configuration values in a separate constants file for maintainability:

```tsx
// app/[route-name]/constants.ts
/**
 * Pricing and configuration constants
 */

/**
 * Regular pricing
 */
export const REGULAR_PRICE = 499;

/**
 * Early access pricing
 * $100 discount off the regular price for early signups
 */
export const EARLY_ACCESS_PRICE = REGULAR_PRICE - 100;

// Other useful constants
export const MAX_SIGNUP_LIMIT = 1000;
export const LAUNCH_DATE = "2025-03-01";
```

**Usage in components:**
```tsx
import { EARLY_ACCESS_PRICE, REGULAR_PRICE } from './constants';

<p className="text-lg">
  Early access pricing: ${EARLY_ACCESS_PRICE} (Save ${REGULAR_PRICE - EARLY_ACCESS_PRICE})
</p>
```

## 6. Multi-Step Questionnaire Pattern

For better engagement and data collection, use a multi-step questionnaire instead of a simple email form:

### Questionnaire Component Template

```tsx
// app/[route-name]/Questionnaire.tsx
"use client";

import { useState, FormEvent } from "react";
import umami from "@umami/node";
import { EARLY_ACCESS_PRICE } from "./constants";

interface QuestionnaireData {
  field1: string;
  field2: string;
  field3: string;
}

export function Questionnaire() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<QuestionnaireData>>({});
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const totalSteps = 3;

  const handleNext = async (field: keyof QuestionnaireData, value: string) => {
    setData({ ...data, [field]: value });

    // Track progress through questionnaire
    await umami.track(`Next Step ${step}`, {
      ...data,
      field,
      step,
    });

    setStep(step + 1);
  };

  const handleBack = async () => {
    await umami.track(`Back`, { step });
    setStep(Math.max(0, step - 1));
  };

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setSubmitStatus("loading");

    try {
      // TODO: Send to your email service
      // await fetch("/api/subscribe", {
      //   method: "POST",
      //   body: JSON.stringify({ email, questionnaireData: data }),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      await umami.track("Submit", data);

      setSubmitStatus("success");
      setMessage("Thank you! We'll notify you when we launch.");
    } catch (error) {
      setSubmitStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <span className="text-4xl">✓</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">You're all set</h3>
        <p className="text-gray-600">{message}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      {step < totalSteps && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Question {step + 1} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round(((step + 1) / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4a8177] transition-all duration-300"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Step 0: First Question */}
      {step === 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Your first question here?
          </h3>
          <div className="space-y-3">
            {["Option 1", "Option 2", "Option 3"].map((option) => (
              <button
                key={option}
                onClick={() => handleNext("field1", option)}
                className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-[#4a8177] hover:bg-[#4a8177]/5 transition-all"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Second Question */}
      {step === 1 && (
        <div className="space-y-6">
          <button onClick={handleBack} className="text-sm text-gray-500 hover:text-gray-700">
            ← Back
          </button>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Your second question?
          </h3>
          {/* Add options similar to step 0 */}
        </div>
      )}

      {/* Final step: Summary + Email */}
      {step === totalSteps && (
        <div className="space-y-8">
          <button onClick={handleBack} className="text-sm text-gray-500 hover:text-gray-700">
            ← Back
          </button>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you for sharing
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Based on your answers, we'll customize your experience.
            </p>
          </div>

          {/* Summary of answers */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Your details</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Field 1: {data.field1}</p>
              <p>Field 2: {data.field2}</p>
            </div>
          </div>

          {/* Email capture */}
          <div className="bg-white border-2 border-[#4a8177]/20 rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Get notified when we launch
            </h4>
            <p className="text-gray-600 mb-6">
              Early access pricing: ${EARLY_ACCESS_PRICE}
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-[#4a8177] focus:border-[#4a8177] outline-none"
                disabled={submitStatus === "loading"}
                required
              />
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full px-8 py-4 bg-[#4a8177] text-white font-semibold rounded-xl hover:bg-[#3d7068] transition-all disabled:opacity-50"
              >
                {submitStatus === "loading" ? "Submitting..." : "Notify Me When Ready"}
              </button>
              {message && submitStatus === "error" && (
                <p className="text-sm text-red-600">{message}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
```

**Key Features:**
- Progress bar for visual feedback
- Back button for navigation
- Data collection at each step
- Analytics tracking on each interaction
- Summary view before email capture
- Success state after submission

## 7. Collapsible FAQ Component

```tsx
// app/[route-name]/CollapsibleFAQs.tsx
"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface CollapsibleFAQsProps {
  faqs: FAQ[];
}

export function CollapsibleFAQs({ faqs }: CollapsibleFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-gray-300"
        >
          <button
            onClick={() => toggleFAQ(i)}
            className="w-full text-left px-6 py-5 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between gap-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {faq.question}
            </h3>
            <svg
              className={`flex-shrink-0 w-6 h-6 text-gray-500 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-5 pt-2 bg-gray-50">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

**Usage:**
```tsx
const faqs = [
  {
    question: "How does this work?",
    answer: "Detailed explanation..."
  },
  // ... more FAQs
];

<CollapsibleFAQs faqs={faqs} />
```

## 8. Common Section Templates

### Features Section
```tsx
const features = [
  {
    title: "Feature 1",
    description: "Description of the feature and its benefit",
    icon: "🚀", // Or use an icon library
  },
  // ... more features
];

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-16">Features</h2>
    <div className="grid md:grid-cols-3 gap-12">
      {features.map((feature, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Social Proof / Testimonials
```tsx
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-16">What People Say</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <p className="text-gray-700 mb-4">"Testimonial quote here..."</p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div>
            <p className="font-semibold">Person Name</p>
            <p className="text-sm text-gray-600">Title, Company</p>
          </div>
        </div>
      </div>
      {/* More testimonials */}
    </div>
  </div>
</section>
```

### FAQ Section
```tsx
const faqs = [
  {
    question: "How does this work?",
    answer: "Detailed answer explaining the process...",
  },
  // ... more FAQs
];

<section className="py-24 bg-white">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-16">FAQ</h2>
    <div className="space-y-8">
      {faqs.map((faq, i) => (
        <div key={i}>
          <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### CTA Section (Bottom of Page)
```tsx
<section className="py-24 bg-gradient-to-r from-[#YOUR_COLOR] to-[#YOUR_COLOR_2]">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-6">
      Ready to Get Started?
    </h2>
    <p className="text-xl text-white/90 mb-8">
      Join the waitlist and be the first to know when we launch
    </p>
    <EmailCaptureForm />
  </div>
</section>
```

## 6. API Route for Email Capture (Optional)

If you want to handle email submissions server-side:

```tsx
// app/api/subscribe/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    // TODO: Add to your email service
    // Examples:
    // - Save to database
    // - Add to Mailchimp list
    // - Send to ConvertKit
    // - Use Resend to send welcome email

    // For now, just log it (replace with real implementation)
    console.log(`New signup from ${source}: ${email}`);

    // Example: Send to a webhook, Airtable, or Google Sheets
    // await fetch("YOUR_WEBHOOK_URL", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, source, timestamp: new Date() }),
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
```

## 7. SEO Checklist

For each landing page, ensure you have:

- ✅ Unique `<title>` and `description` in metadata
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML (`<main>`, `<section>`, `<h1>`, etc.)
- ✅ Alt text for images
- ✅ Mobile responsive design
- ✅ Fast loading time (optimize images, minimize JS)

## 8. Mobile Responsiveness

Always use Tailwind's responsive prefixes:

```tsx
<div className="px-4 sm:px-6 lg:px-8">        {/* Padding */}
<h1 className="text-4xl sm:text-5xl lg:text-6xl"> {/* Font size */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {/* Layout */}
```

Test on mobile early and often!

## 9. Example: Complete Minimal Landing Page

```tsx
// app/my-idea/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Awesome Idea | Landing Pages",
  description: "The best solution for your problem",
};

export default function MyIdea() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Solve Your Problem Fast
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-12">
            The easiest way to achieve your desired outcome
          </p>

          <EmailForm />

          <p className="text-sm text-white/70 mt-4">
            Join 100+ people on the waitlist
          </p>
        </div>
      </div>
    </main>
  );
}

function EmailForm() {
  // See email form template above
  return <form>{/* ... */}</form>;
}
```

## 10. Deployment Checklist

Before deploying:

- ✅ Test locally (`npm run dev`)
- ✅ Build successfully (`npm run build`)
- ✅ Set up environment variables in Vercel (if needed)
- ✅ Configure custom domain in Vercel settings
- ✅ Test email capture functionality
- ✅ Verify analytics tracking
- ✅ Test on mobile devices
- ✅ Run Lighthouse audit for performance

---

## Quick Reference: Creating a New Landing Page

1. **Create the route**: `mkdir -p app/[route-name]`
2. **Create page.tsx**: Use template above
3. **Define colors**: Choose 2-3 colors for your palette
4. **Add email capture**: Use EmailForm component template
5. **Set metadata**: Update SEO title and description
6. **Add analytics**: Ensure tracking is set up
7. **Test**: Run locally and verify form submission
8. **Deploy**: Push to Vercel

That's it! You now have a validated landing page ready to collect emails.
