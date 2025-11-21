"use client";

import { useState, FormEvent } from "react";

export function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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
      // Options: Loops, Resend, ConvertKit, Mailchimp, Airtable, or Supabase

      // For now, simulate successful submission
      // When ready to connect, uncomment and configure:
      /*
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "estate-beacon",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }
      */

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus("success");
      setMessage("Thanks! We'll notify you when we launch.");
      setEmail("");

      // Track conversion event (when analytics are set up)
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          event_category: "email_signup",
          event_label: "estate_beacon",
        });
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      console.error("Email capture error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6b9688] focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
          disabled={status === "loading" || status === "success"}
          required
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-6 py-3 bg-white text-[#2f5952] font-semibold rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : status === "success" ? "Joined!" : "Join Waitlist"}
        </button>
      </div>
      {message && (
        <p
          className={`mt-3 text-sm font-medium ${
            status === "success" ? "text-green-100" : "text-red-200"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
