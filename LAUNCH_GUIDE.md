# Landing Page Launch Guide

A practical guide for engineers new to validating business ideas through landing pages.

## Table of Contents

1. [Pre-Launch Setup](#pre-launch-setup)
2. [Analytics & Tracking](#analytics--tracking)
3. [Email Collection](#email-collection)
4. [Key Metrics to Track](#key-metrics-to-track)
5. [Legal & Compliance](#legal--compliance)
6. [Launch Checklist](#launch-checklist)
7. [Post-Launch Activities](#post-launch-activities)
8. [When to Pivot or Iterate](#when-to-pivot-or-iterate)

---

## Pre-Launch Setup

### 1. Domain & Hosting

**Vercel (Recommended for Next.js)**
- Deploy to Vercel: Connect your GitHub repo
- Custom domain: Add in Vercel project settings
- SSL: Automatic via Vercel
- Environment variables: Set in Vercel dashboard

**Alternative: Netlify, Railway, or your preferred platform**

### 2. Landing Page Essentials

Before launching, ensure your page has:

- [ ] Clear, compelling headline (5-second test: can visitors understand your value prop?)
- [ ] Email capture form (primary conversion goal)
- [ ] Call-to-action (CTA) - "Join waitlist", "Get early access", etc.
- [ ] Benefit-focused copy (focus on outcomes, not features)
- [ ] Social proof (if available: testimonials, user count, logos)
- [ ] Mobile responsive design
- [ ] Fast load time (<3 seconds)

### 3. SEO Basics

```tsx
// Minimum metadata for each landing page
export const metadata: Metadata = {
  title: "Product Name - Brief Value Prop",
  description: "Compelling 150-160 character description with keywords",
  openGraph: {
    title: "Product Name",
    description: "Social sharing description",
    images: [{ url: "/og-image.png" }], // 1200x630px
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Name",
    description: "Social sharing description",
    images: ["/og-image.png"],
  },
};
```

**Optional but helpful:**
- Favicon (32x32, 16x16)
- OG image for social sharing (1200x630px)
- robots.txt (allow indexing for organic traffic)

---

## Analytics & Tracking

### Recommended: Umami + Google Analytics (Estate Beacon Approach)

**Why:** Privacy-focused open-source analytics + detailed conversion tracking

Estate Beacon uses a dual-analytics approach that combines Umami's privacy-friendly tracking with Google Analytics' detailed conversion insights.

#### Setup Umami Analytics

```bash
npm i @umami/node
```

**1. Create Umami Account:**
- Visit https://umami.is (cloud) or self-host
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
const handleNext = async () => {
  await umami.track("Next Step", {
    step: currentStep,
    field: "state",
    value: selectedValue
  });
  // Continue with your logic
};

// Track form submissions
const handleSubmit = async () => {
  await umami.track("Submit", {
    source: "questionnaire",
    ...collectedData
  });
};
```

**Cost:** Free tier available, $20/mo for 100k events

### Recommended Stack for Validation

**Minimum (Free):**
- Umami (free tier) for privacy-focused event tracking
- Total cost: $0

**Better (if budget allows):**
- Umami ($20/mo for 100k events)
- Microsoft Clarity (free) for session recordings
- Total cost: $20/mo

---

## Email Collection

Your #1 validation metric is **email signups**. You need a place to send and store them.

### Service Options

#### 1. **MongoDB** (Recommended)
- **Why:** Full control, flexible schema, free tier, easy to query
- **Cost:** Free tier on MongoDB Atlas (512MB storage)
- **Use case:** Store all email signups with custom metadata

```bash
npm i mongodb
```

```tsx
// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
```

```tsx
// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { LANDING_PAGE_TYPES } from '@/lib/constants';

export async function POST(request: Request) {
  try {
    const { email, landingPageType, questionnaireData } = await request.json();

    const client = await clientPromise;
    const db = client.db('landing-pages');

    // Store email with landing page type
    await db.collection('emails').insertOne({
      email,
      type: landingPageType, // e.g., LANDING_PAGE_TYPES.ESTATE_BEACON
      questionnaireData,
      createdAt: new Date(),
      source: 'questionnaire',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
```

**Usage in components:**
```tsx
import { LANDING_PAGE_TYPES } from '@/lib/constants';

const handleSubmit = async () => {
  await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      landingPageType: LANDING_PAGE_TYPES.ESTATE_BEACON,
      questionnaireData: data,
    }),
  });
};
```

#### 2. **Loops** (Alternative for email marketing)
- **Why:** API-first, simple, built for developers
- **Cost:** Free up to 1,000 contacts
- **Use case:** Transactional emails, simple newsletters
- **Setup:** https://loops.so

```tsx
// Example API call
const response = await fetch("https://app.loops.so/api/v1/contacts/create", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.LOOPS_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: email,
    source: "landing-page-name"
  })
});
```

#### 2. **Resend** (Email sending)
- **Why:** Modern API, great DX, transactional focus
- **Cost:** Free up to 3,000 emails/month
- **Use case:** Send confirmation emails, updates
- **Setup:** https://resend.com

```bash
npm i resend
```

```tsx
// app/api/subscribe/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();

  // Send welcome email
  await resend.emails.send({
    from: 'onboarding@yourdomain.com',
    to: email,
    subject: 'Thanks for joining!',
    html: '<p>Welcome to the waitlist...</p>'
  });

  return Response.json({ success: true });
}
```

#### 3. **ConvertKit**
- **Why:** Built for creators, automations, landing pages
- **Cost:** Free up to 1,000 subscribers
- **Use case:** Email marketing, sequences, broadcasts

#### 4. **Mailchimp**
- **Why:** Popular, full-featured
- **Cost:** Free up to 500 contacts, 1,000 sends/month
- **Use case:** Traditional email marketing

#### 5. **Airtable** (Dead simple)
- **Why:** Spreadsheet as database, easy to view/export
- **Cost:** Free tier available
- **Use case:** Quick validation without email service

```tsx
// Example webhook to Airtable
await fetch("https://api.airtable.com/v0/YOUR_BASE/Emails", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    fields: {
      email: email,
      source: "landing-page-name",
      timestamp: new Date().toISOString()
    }
  })
});
```

#### 6. **Supabase** (Self-hosted data)
- **Why:** Free Postgres database, real-time, auth built-in
- **Cost:** Free tier: 500MB database, 2GB bandwidth
- **Use case:** Full control, can build admin dashboard

```bash
npm i @supabase/supabase-js
```

```tsx
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// app/api/subscribe/route.ts
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const { email } = await request.json();

  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email, source: 'hero', created_at: new Date() }])

  return Response.json({ success: !error });
}
```

### Recommended Email Stack

**Early validation (0-100 signups):**
- Loops (free) + Resend (free) for sending emails
- OR Airtable (dead simple to view submissions)

**Growth phase (100-1,000 signups):**
- ConvertKit or Loops for automation
- Resend for transactional emails

---

## Key Metrics to Track

### Primary Metrics (Must Track)

1. **Conversion Rate (Email Signups)**
   - Formula: (Email signups / Visitors) × 100
   - Benchmark: 2-5% is typical, 10%+ is excellent
   - Track by traffic source (social, ads, organic)

2. **Traffic Sources**
   - Where are visitors coming from?
   - Which sources convert best?
   - Double down on what works

3. **Bounce Rate**
   - Visitors who leave immediately
   - High bounce (>70%) = value prop unclear or wrong audience

### Secondary Metrics (Nice to Have)

4. **Time on Page**
   - Are people reading or bouncing?
   - <10s = not engaging, 30s+ = good interest

5. **Scroll Depth**
   - How far down the page do users scroll?
   - Tools: Hotjar, Microsoft Clarity

6. **Click Tracking**
   - Which CTAs are clicked most?
   - Where do users lose interest?

7. **Traffic by Device**
   - Mobile vs Desktop
   - Ensure mobile experience is solid (50%+ traffic is mobile)

### Setting Up Event Tracking

**Multi-Step Questionnaire Tracking:**

```tsx
// In your Questionnaire component
import umami from "@umami/node";

const handleNext = async (field: string, value: string) => {
  // Update state
  setData({ ...data, [field]: value });

  // Track with Umami (includes all context)
  await umami.track(`Next Step ${currentStep}`, {
    ...data,
    field,
    step: currentStep,
    value
  });

  // Move to next step
  setStep(currentStep + 1);
};

const handleBack = async () => {
  await umami.track("Back", { step: currentStep });
  setStep(Math.max(0, currentStep - 1));
};

const handleSubmit = async () => {
  // Track submission with Umami
  await umami.track("Submit", {
    source: "questionnaire",
    ...questionnaireData
  });
};
```

**Simple Button Tracking:**

```tsx
// Declarative tracking with data attributes (Umami auto-tracks)
<button data-umami-event="Get Started Button">
  Get Started →
</button>

<a href="#questionnaire" data-umami-event="CTA Click" data-umami-event-location="hero">
  Learn More
</a>
```

**Helper Function (Optional):**

```tsx
// lib/analytics.ts
import umami from "@umami/node";

export const trackEvent = async (
  eventName: string,
  properties?: Record<string, any>
) => {
  await umami.track(eventName, properties);
};

// Usage in components
import { trackEvent } from '@/lib/analytics';

<button onClick={async () => {
  await trackEvent('cta_click', {
    location: 'hero',
    text: 'Join Waitlist'
  });
  handleClick();
}}>
  Join Waitlist
</button>
```

### What "Good" Looks Like (Benchmarks)

| Metric | Poor | Average | Good | Excellent |
|--------|------|---------|------|-----------|
| Conversion Rate | <1% | 2-3% | 5-7% | 10%+ |
| Bounce Rate | >80% | 60-80% | 40-60% | <40% |
| Avg. Time on Page | <10s | 20-40s | 40-90s | 90s+ |
| Mobile Traffic | <30% | 40-60% | 60-70% | N/A |

---

## Legal & Compliance

### Must-Haves

1. **Privacy Policy**
   - Required if collecting emails
   - Use a generator: https://www.privacypolicygenerator.info/
   - Disclose: what data you collect, how you use it, who you share with
   - Link in footer

2. **Terms of Service** (Optional but recommended)
   - Protects you legally
   - Generator: https://www.termsofservicegenerator.net/

3. **GDPR Compliance** (If targeting EU)
   - Explicit consent checkbox for email
   - "I agree to receive emails" (cannot be pre-checked)
   - Easy unsubscribe option
   - Data deletion on request

```tsx
// Example GDPR-compliant form
const [consent, setConsent] = useState(false);

<form onSubmit={handleSubmit}>
  <input type="email" />

  <label>
    <input
      type="checkbox"
      checked={consent}
      onChange={(e) => setConsent(e.target.checked)}
      required
    />
    I agree to receive email updates (required)
  </label>

  <button type="submit" disabled={!consent}>
    Subscribe
  </button>
</form>
```

4. **CAN-SPAM Compliance** (US)
   - Include physical address in emails
   - Clear unsubscribe link
   - Honor opt-outs within 10 business days

### Quick Legal Stack

**Free options:**
- Privacy Policy: Use generator + host at `/privacy`
- Terms: Use generator + host at `/terms`
- GDPR: Add consent checkbox

**Paid (overkill for validation):**
- Termly ($10/mo) - Automated legal docs
- Iubenda ($27/mo) - Privacy & cookie compliance

---

## Launch Checklist

### Pre-Launch (1-2 hours before)

- [ ] **Test email form** - Submit and verify email arrives
- [ ] **Test analytics** - Verify events are tracking
- [ ] **Mobile test** - Check on real mobile device (not just DevTools)
- [ ] **Cross-browser test** - Chrome, Safari, Firefox
- [ ] **Typos & copy review** - Read everything out loud
- [ ] **Links work** - All CTAs, footer links, social links
- [ ] **Meta tags** - Share on Twitter/LinkedIn, check preview
- [ ] **Page speed** - Run Lighthouse (target: 90+ performance)
- [ ] **Legal pages** - Privacy policy linked in footer
- [ ] **404 page** - Nice error page (optional but professional)

### Launch Day

1. **Deploy to production**
   - Merge to main branch
   - Verify Vercel deployment succeeds
   - Test production URL

2. **Set up monitoring**
   - Vercel monitoring (automatic)
   - Optional: Sentry for error tracking

3. **Announce it!** (see Post-Launch section)

### Post-Deploy Verification

- [ ] Visit page in incognito mode
- [ ] Submit email (use real email to test welcome flow)
- [ ] Check analytics dashboard (should see your test visit)
- [ ] Test from mobile device

---

## Post-Launch Activities

### Week 1: Drive Initial Traffic

**Free/Organic Channels:**

1. **Social Media**
   - Twitter/X: Tweet with screenshot, ask for feedback
   - LinkedIn: Post to your network
   - Reddit: Relevant subreddits (read rules first!)
   - Hacker News: Show HN (if relevant to developers)
   - Product Hunt: Save for when you have traction
   - Indie Hackers: Share in relevant groups

2. **Communities**
   - Slack/Discord communities in your niche
   - Facebook groups (if applicable)
   - Don't spam - ask for feedback, be genuine

3. **Direct Outreach**
   - Email 10-20 people in target audience
   - Ask for honest feedback
   - Offer early access/discount for input

4. **Content**
   - Write a blog post about the problem
   - Record quick demo video
   - Build in public on Twitter

**Paid Channels (if budget allows):**

1. **Google Ads**
   - Target problem-related keywords
   - Budget: $10-50/day to start
   - Track conversion rate

2. **Facebook/Instagram Ads**
   - Highly targeted demographics
   - A/B test ad creative
   - Budget: $10-30/day

3. **Reddit Ads**
   - Target specific subreddits
   - Often cheaper than FB/Google

4. **Twitter Ads**
   - Promote high-performing organic tweets

### Week 2-4: Iterate Based on Data

**Review your data:**

1. **What's your conversion rate?**
   - <2%: Value prop unclear OR wrong audience
   - 2-5%: Okay, can improve
   - 5-10%: Good, optimize further
   - 10%+: Excellent, scale traffic

2. **Where are visitors dropping off?**
   - Use heatmaps (Hotjar/Clarity) to see where users stop scrolling
   - High bounce? Test different headlines

3. **Which traffic sources convert best?**
   - Double down on what works
   - Cut what doesn't

**A/B Testing Ideas:**

- Headlines (biggest impact)
- CTA button text ("Join Waitlist" vs "Get Early Access" vs "Notify Me")
- CTA button color
- Form placement (hero vs bottom)
- Social proof placement
- Pricing (if showing)

**Tools for A/B Testing:**
- Vercel Edge Middleware (free, code-based)
- Google Optimize (free, visual editor - being sunset, check alternatives)
- Optimizely (paid, enterprise)
- VWO (paid)

### Ongoing: Engage Your Waitlist

**Don't ghost your early signups!**

1. **Send welcome email** (within 1 hour of signup)
   - Thanks for joining
   - What to expect next
   - Ask: "What made you sign up?" (valuable feedback)

2. **Weekly/Bi-weekly updates**
   - Progress on building
   - Sneak peeks
   - Ask for feedback

3. **Survey your list**
   - What features do they want most?
   - What problem are they trying to solve?
   - How much would they pay?

Example update email schedule:
- Day 0: Welcome email
- Day 3: "Here's what we're building" (with mockups)
- Day 7: Quick survey (3-5 questions max)
- Day 14: Progress update
- Day 21: Beta invite (if ready)

---

## When to Pivot or Iterate

### Signals You're Onto Something (Keep Going)

- ✅ **10+ email signups in first week** with minimal traffic (<500 visitors)
- ✅ **5%+ conversion rate** consistently
- ✅ **Positive feedback** when you reach out to signups
- ✅ **People asking "when can I use this?"**
- ✅ **Organic shares/word-of-mouth** happening
- ✅ **Willing to pay** signals (if you ask about pricing)

**Next steps:**
- Build MVP or prototype
- Interview 5-10 signups in depth
- Consider pre-sales or paid beta

### Signals to Pivot or Kill the Idea

- 🚩 **<1% conversion rate** after testing different messages
- 🚩 **High traffic, low signups** = not solving real pain
- 🚩 **Signups don't respond** to follow-up emails
- 🚩 **Feedback is lukewarm** ("nice idea but...")
- 🚩 **No one will pay** when you mention pricing
- 🚩 **Can't clearly articulate** the value prop yourself

**Options:**
1. **Pivot the positioning**: Same product, different audience
2. **Change the problem**: Different angle on the solution
3. **Kill it & move on**: Validate another idea (fast failures are good!)

### The "Idea Validation Scorecard"

After 2-4 weeks, score your idea (0-10 each):

1. **Email signups**: Did you hit your goal? (100+ is good signal)
2. **Conversion rate**: 5%+ = 10/10, 2-5% = 5/10, <2% = 2/10
3. **Engagement**: Do people respond to emails? 8-10 = active convos
4. **Willingness to pay**: Did anyone offer money? 10 = yes, 0 = no
5. **Personal conviction**: Do YOU still believe in it?

**Total Score:**
- **40-50**: Strong signal - build it!
- **25-39**: Mixed - do more customer discovery
- **<25**: Pivot or move on

---

## Quick Reference: Recommended Stack

### Minimal (Free Tier)

**Landing Page:**
- Next.js on Vercel (free)

**Analytics:**
- Umami (free tier) - privacy-focused event tracking

**Email Collection:**
- MongoDB Atlas (free tier - 512MB)

**Email Sending (optional):**
- Resend (free up to 3k/month)

**Legal:**
- Privacy policy generator (free)

**Total monthly cost:** $0

### Better (Small Budget)

**Add:**
- Umami ($20/mo for 100k events) - upgraded plan
- Microsoft Clarity (free) - heatmaps and session recordings
- Loops or Resend ($20-50/mo) - email marketing automation
- Custom domain ($10-15/year)

**Total monthly cost:** ~$20-40/mo

### Advanced (Serious Validation)

**Add:**
- Dedicated email marketing platform like Loops ($50/mo) or ConvertKit ($29-50/mo)
- Typeform ($25/mo) - beautiful surveys
- Sentry ($0-26/mo) - error tracking

**Total monthly cost:** ~$50-100/mo

---

## Tools Cheat Sheet

### Analytics
- **Umami** ⭐ (Recommended): Free tier available, privacy-focused, open-source, simple event tracking

### Email Collection & Sending
- **MongoDB** ⭐ (Recommended): Free tier, full control, flexible schema
- **Loops**: Free-$50/mo, developer-friendly, email marketing
- **Resend**: Free-$20/mo, transactional emails
- **ConvertKit**: Free-$29/mo, email marketing
- **Mailchimp**: Free-$20/mo, traditional ESP
- **Airtable**: Free, spreadsheet database

### Heatmaps & Session Recording
- **Microsoft Clarity**: FREE, unlimited sessions
- **Hotjar**: $0-99/mo, heatmaps + recordings + surveys
- **FullStory**: $$$ enterprise

### A/B Testing
- **Vercel Edge Middleware**: Free, code-based
- **VWO**: $200+/mo, visual editor
- **Optimizely**: $$$ enterprise

### Forms & Surveys
- **Typeform**: $0-25/mo, beautiful forms
- **Tally**: Free, notion-style forms
- **Google Forms**: Free, basic but works

### Error Tracking
- **Sentry**: $0-26/mo, error monitoring
- **LogRocket**: $99+/mo, session replay + errors

---

## Final Tips

1. **Ship fast, iterate faster**: Don't spend weeks on the perfect landing page. Get v1 out in a day.

2. **Talk to your users**: Email signups are great, but conversations are better. Reply to every signup personally at first.

3. **Measure what matters**: Focus on conversion rate and user feedback, not vanity metrics.

4. **Set a decision date**: "I'll decide whether to build this in 30 days based on X signups and Y feedback."

5. **Kill bad ideas quickly**: Failed validation is success - you saved months of building something nobody wants.

6. **Build in public**: Share your metrics, learnings, and journey. People love transparency.

7. **Don't overthink analytics**: Start simple (Vercel Analytics + email list). Add complexity only when needed.

8. **Test one idea at a time**: Resist the urge to launch 5 landing pages at once. Focus.

---

## Example Timeline

**Day 1: Build & Deploy**
- Morning: Build landing page
- Afternoon: Set up analytics + email collection
- Evening: Deploy to Vercel, test everything

**Day 2-3: Initial Push**
- Post on social media
- Share in 3-5 relevant communities
- Email 10 people directly for feedback

**Week 1: Drive Traffic**
- Monitor analytics daily
- Respond to every signup
- Adjust copy based on feedback
- Target: 50-100 visitors, 3-10 signups

**Week 2-3: Iterate**
- A/B test headlines
- Add social proof (if you have it)
- Try different traffic sources
- Send first update to email list

**Week 4: Decide**
- Review metrics
- Score the idea (see Validation Scorecard)
- Make decision: build, pivot, or kill

**Repeat**: Move fast to the next idea if this one doesn't validate!

---

Good luck with your validation! Remember: most ideas fail validation, and that's the point. Each "no" gets you closer to a "yes."
