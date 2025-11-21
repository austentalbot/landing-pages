"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface CollapsibleFAQsProps {
  faqs: FAQ[];
}

export function CollapsibleFAQs({ faqs }: CollapsibleFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300"
        >
          <button
            onClick={() => toggleFAQ(i)}
            className="w-full text-left px-6 py-5 bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between gap-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">
              {faq.question}
            </h3>
            <svg
              className={`flex-shrink-0 w-6 h-6 text-gray-500 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-5 pt-2 bg-gray-50">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
