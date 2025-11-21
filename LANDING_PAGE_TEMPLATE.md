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

## 4. Analytics Setup

### Option A: Google Analytics (Simple)

Add to `app/layout.tsx` or individual landing pages:

```tsx
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <html>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Option B: Vercel Analytics (Easiest)

```bash
npm i @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Track Custom Events

```tsx
// Track button clicks, form submissions, etc.
const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, properties);
  }
};

// Usage
<button onClick={() => trackEvent("cta_click", { location: "hero" })}>
  Click Me
</button>
```

## 5. Common Section Templates

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
