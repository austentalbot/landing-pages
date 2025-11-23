import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect direct access to form step URLs back to the main landing page
  // This prevents users from skipping steps or accessing incomplete forms
  if (
    pathname.match(/^\/estate-beacon\/step-[1-4]$/) ||
    pathname === "/estate-beacon/thank-you"
  ) {
    // Check if this is a direct navigation (not from pushState/router.push)
    // Router.push and pushState don't trigger middleware, so this catches direct access
    return NextResponse.redirect(new URL("/estate-beacon", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/estate-beacon/step-:step",
    "/estate-beacon/thank-you",
    // Add other landing pages here as they adopt this pattern
    // "/call-clerk/step-:step",
    // "/call-clerk/thank-you",
  ],
};
