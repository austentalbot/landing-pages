"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface CollapsibleFAQsProps {
  faqs: readonly FAQ[];
}

export default function CollapsibleFAQs({ faqs }: CollapsibleFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // Track with Umami if available
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("FAQ Opened", { question: faqs[index].question });
    }
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-[#E5D8D0]"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#F1E3D3] transition-colors duration-200"
          >
            <span className="font-semibold text-[#3C2A2F] text-lg">
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-[#D88C9A] flex-shrink-0 ml-4" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#D88C9A] flex-shrink-0 ml-4" />
            )}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-6 py-4 text-[#446B67] leading-relaxed border-t border-[#E5D8D0]">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
