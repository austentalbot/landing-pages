"use client";

import React, { useState, useEffect } from "react";
import { trackAnalyticsEvent } from "./lib/analytics";

interface StickyButtonProps {
  onClick: () => void;
}

export default function StickyButton({ onClick }: StickyButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    trackAnalyticsEvent("Sticky Button Click", {
      category: "cta",
      label: "Sticky CTA",
    });
    onClick();
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <button
        onClick={handleClick}
        className="bg-brand-primary-cta text-surface-background px-6 py-3 rounded-full shadow-warm hover:translate-y-[-1px] transition-all duration-200 font-semibold text-lg"
      >
        Sign Up Now
      </button>
    </div>
  );
}
