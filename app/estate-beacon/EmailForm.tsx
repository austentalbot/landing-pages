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
      setMessage("Thanks for your interest! We're putting the finishing touches on Estate Beacon and will reach out shortly to get you started.");
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
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 px-5 py-4 rounded-xl border-2 border-white/20 bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-white focus:border-white/40 outline-none text-gray-900 placeholder-gray-500 shadow-lg transition-all duration-200 font-light"
          disabled={status === "loading" || status === "success"}
          required
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="group relative px-8 py-4 bg-white text-[#2f5952] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          <span className="relative z-10">
            {status === "loading" ? "Submitting..." : status === "success" ? "Received! ✓" : "Get Started"}
          </span>
        </button>
      </div>
      {message && (
        <p
          className={`mt-4 text-sm font-medium ${
            status === "success" ? "text-green-100" : "text-red-200"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
