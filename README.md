# Landing Pages

A Next.js workspace for building and testing idea validation landing pages.

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

## Landing Pages

### Estate Beacon
- **Route:** `/estate-beacon`
- **Description:** State-specific guidance for estate executors. Provides customized checklists, contact tracking, and step-by-step guidance for estate settlement based on the user's state.
- **Features:** State-specific checklists, institution contact log, asset inventory tracker, document storage, beneficiary communication, deadline reminders

## Documentation

- **[LANDING_PAGE_TEMPLATE.md](./LANDING_PAGE_TEMPLATE.md)** - Code templates and patterns for building new landing pages
- **[LAUNCH_GUIDE.md](./LAUNCH_GUIDE.md)** - Complete guide for launching and validating ideas (analytics, email collection, metrics, legal, etc.)

## Creating a New Landing Page

See `LANDING_PAGE_TEMPLATE.md` for detailed code templates and instructions on scaffolding a new landing page.

## Launching & Validating

See `LAUNCH_GUIDE.md` for a comprehensive guide on:
- Setting up analytics and tracking
- Email collection services and strategies
- Key metrics to measure
- Legal and compliance requirements
- Post-launch activities and when to pivot

## Deployment

This project is configured for Vercel deployment. Each route will be accessible at your custom domain.
