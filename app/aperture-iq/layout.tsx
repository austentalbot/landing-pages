import type { Metadata } from "next";
import { Inter_Tight, Fraunces } from "next/font/google";
import "./theme.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

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
  icons: {
    icon: [
      {
        url: "/aperture-iq/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function ApertureIQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${interTight.className} ${fraunces.variable} aperture-iq-theme`}
    >
      {children}
    </div>
  );
}
