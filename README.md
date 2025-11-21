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

## Creating a New Landing Page

See `LANDING_PAGE_TEMPLATE.md` for detailed instructions on scaffolding a new landing page.

## Deployment

This project is configured for Vercel deployment. Each route will be accessible at your custom domain.
