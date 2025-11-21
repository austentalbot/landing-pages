/**
 * Shared constants for landing pages
 */

/**
 * Landing page type identifiers for MongoDB email collection
 * These are used to track which landing page the email came from
 */
export const LANDING_PAGE_TYPES = {
  ESTATE_BEACON: "estate-beacon",
  // Add more landing page types as you create them
  // EXAMPLE: "example-landing-page",
} as const;

export type LandingPageType =
  (typeof LANDING_PAGE_TYPES)[keyof typeof LANDING_PAGE_TYPES];
