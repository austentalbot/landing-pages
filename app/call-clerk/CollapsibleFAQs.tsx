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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-orange-100"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-orange-50 transition-colors duration-200"
          >
            <span className="font-semibold text-gray-900 text-lg">
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-[#f97316] flex-shrink-0 ml-4" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#f97316] flex-shrink-0 ml-4" />
            )}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-6 py-4 text-gray-700 leading-relaxed border-t border-orange-100">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
