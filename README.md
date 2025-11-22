# Landing Pages

A Next.js workspace for building and testing idea validation landing pages with sophisticated design and user engagement flows.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and auto-fix issues
- `npm run typecheck` - Run TypeScript type checking
- `npm run check` - Run both typecheck and lint

## Structure

- `/app` - Next.js App Router pages
  - `/app/page.tsx` - Main homepage (blank placeholder)
  - `/app/[idea-name]/` - Individual landing pages for each idea
- `/lib` - Shared utilities
- `/components` - Shared components (use sparingly)

## Landing Page Design Standards

### Required Sections

1. **Hero Section** with:

   - Rich, layered gradient backgrounds (not flat colors)
   - Radial blur effects and subtle patterns for depth
   - Logo + brand name + descriptive tagline badge
   - Large, bold headline (5xl-6xl) with clear value proposition
   - Supporting subheadline explaining the problem/solution
   - Single prominent CTA button
   - Floating product screenshots showing real UI

2. **Problem/Solution Section**:

   - Side-by-side layout with text and product screenshot
   - Clear articulation of user pain points
   - Simple checklist or progress visualization

3. **Product Screenshots Section**:

   - 3+ alternating left/right feature showcases
   - Browser window mockups with realistic UI elements
   - Category badges for each feature
   - Feature benefit lists with checkmarks
   - Descriptive text explaining the value

4. **Features Grid**:

   - 4-8 features in responsive grid (2-3 columns)
   - Emoji or icon + title + description
   - Hover effects (lift, shadow, scale)

5. **How It Works**:

   - 3-step numbered process
   - Visual step indicators with gradient backgrounds
   - Connecting lines between steps (on desktop)

6. **FAQ Section**:

   - Collapsible accordion-style FAQs
   - Address common objections and concerns
   - Price transparency if applicable

7. **Questionnaire/Email Capture**:

   - Multi-step questionnaire (3-5 questions)
   - Progress bar for user engagement
   - Collect relevant segmentation data
   - Summary of user's answers
   - Email capture with clear value proposition
   - Success state confirmation

8. **Footer**:
   - Dark background for contrast
   - Logo + copyright + basic links

### Design Patterns

- **Visual Hierarchy**: Use size, weight, and color to guide attention
- **Gradients**: Multi-layered, sophisticated gradients (not simple linear)
- **Typography**: Mix of bold headlines (font-bold) and light body text (font-light)
- **Spacing**: Generous padding and margins for breathing room
- **Mockups**: Browser window chrome for product screenshots
- **Colors**: Establish a primary brand color and use consistently
- **Animations**: Subtle hover states and transitions
- **Trust Signals**: Professional mockups, clear pricing, social proof

### Technical Requirements

- **Metadata**: SEO-optimized title, description, and Open Graph tags
- **Responsive**: Mobile-first design with breakpoints (sm, md, lg, xl)
- **Components**: Extract reusable components (Questionnaire, CollapsibleFAQs, EmailForm)
- **Analytics**: Umami event tracking with data attributes and programmatic calls
- **Database**: MongoDB for email collection with landing page type field
- **Constants**: Shared constants file for landing page identifiers
- **Loading States**: Handle form submissions with proper feedback
- **Validation**: Email validation and error handling

## Landing Pages

### Estate Beacon

- **Route:** `/estate-beacon`
- **Description:** State-specific guidance for estate executors. Provides customized checklists, contact tracking, and step-by-step guidance for estate settlement based on the user's state.
- **Features:** State-specific checklists, institution contact log, asset inventory tracker, document storage, beneficiary communication, deadline reminders
- **Tech Stack:** Umami analytics, MongoDB email collection, multi-step questionnaire pattern
- **Status:** ✅ Complete

## Documentation

- **[LANDING_PAGE_TEMPLATE.md](./LANDING_PAGE_TEMPLATE.md)** - Code templates and patterns for building new landing pages
- **[LAUNCH_GUIDE.md](./LAUNCH_GUIDE.md)** - Complete guide for launching and validating ideas (analytics, email collection, metrics, legal, etc.)

## Creating a New Landing Page

See `LANDING_PAGE_TEMPLATE.md` for detailed code templates and instructions on scaffolding a new landing page following the estate-beacon design patterns.

## Launching & Validating

See `LAUNCH_GUIDE.md` for a comprehensive guide on:

- Setting up analytics and tracking
- Email collection services and strategies
- Key metrics to measure
- Legal and compliance requirements
- Post-launch activities and when to pivot

## Deployment

This project is configured for Vercel deployment. Each route will be accessible at your custom domain.
