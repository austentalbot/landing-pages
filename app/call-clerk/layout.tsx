import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call Clerk - Never Miss Another $1,000 Job",
  description:
    "24/7 AI receptionist that answers every call, books jobs, and captures leads for home service businesses. Never miss a call again, even when you're on the jobsite.",
  openGraph: {
    title: "Call Clerk - Never Miss Another $1,000 Job",
    description:
      "24/7 AI receptionist for home service professionals. Answers calls, books appointments, and captures leads automatically.",
    type: "website",
  },
};

export default function CallClerkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
