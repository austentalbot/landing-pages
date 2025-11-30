import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ApertureIQ - AI-Powered Interview Screening for Engineering Roles",
  description:
    "Interview every engineer in half the time. AI-powered screening interviews that ask the right follow-ups, score consistently, and surface the signal your team needs—without the scheduling bottleneck.",
  keywords: [
    "AI interviews",
    "engineering recruitment",
    "candidate screening",
    "hiring automation",
    "technical recruiting",
    "interview software",
    "recruiting tools",
  ],
  openGraph: {
    title: "ApertureIQ - AI-Powered Interview Screening for Engineering Roles",
    description:
      "Interview every engineer in half the time. AI-powered screening interviews that ask the right follow-ups, score consistently, and surface the signal your team needs.",
    type: "website",
  },
};

export default function ApertureIQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
