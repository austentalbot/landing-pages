"use client";

import { useEffect, useState } from "react";

export default function StickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 400px (past hero section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        data-umami-event="CTA - Sticky Button"
        href="#questionnaire"
        className="inline-flex items-center px-6 py-3 bg-white text-[#2f5952] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1 relative group"
      >
        <span className="relative z-10">Get Started →</span>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </a>
    </div>
  );
}
