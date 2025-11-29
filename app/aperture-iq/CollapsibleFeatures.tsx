"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageSquare, BarChart3, Users, Workflow } from "lucide-react";
import { FEATURE_SECTIONS } from "./constants";

const iconMap = {
  "message-square": MessageSquare,
  "bar-chart-3": BarChart3,
  "users": Users,
  "workflow": Workflow,
};

export default function CollapsibleFeatures() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First section open by default

  const toggleFeature = (index: number) => {
    // Track with Umami if available
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("Feature Section Opened", { section: FEATURE_SECTIONS[index].title });
    }
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {FEATURE_SECTIONS.map((feature, index) => {
        const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

        return (
          <div
            key={feature.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-[#E5D8D0] hover:border-[#D88C9A] transition-all duration-200"
          >
            <button
              onClick={() => toggleFeature(index)}
              className="w-full px-6 py-5 text-left flex items-center gap-4 hover:bg-[#F1E3D3] transition-colors duration-200"
            >
              <div className="bg-gradient-to-br from-[#99C1B9] to-[#D88C9A] p-3 rounded-lg flex-shrink-0">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#3C2A2F] text-xl mb-1">
                  {feature.title}
                </h3>
                <p className="text-[#446B67] text-sm">
                  {feature.shortDescription}
                </p>
              </div>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-[#D88C9A] flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#D88C9A] flex-shrink-0" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-[800px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-6 py-6 border-t border-[#E5D8D0] bg-[#F6F2EE]">
                <p className="text-[#446B67] leading-relaxed mb-4">
                  {feature.detailedContent.description}
                </p>

                {/* Example dialogue for Adaptive Interviewing */}
                {'example' in feature.detailedContent && feature.detailedContent.example && (
                  <div className="bg-white rounded-lg p-4 mb-4 border border-[#E5D8D0]">
                    <h4 className="font-semibold text-[#3C2A2F] mb-3 text-sm uppercase tracking-wide">
                      Example Conversation:
                    </h4>
                    <div className="space-y-2">
                      {feature.detailedContent.example.lines.map((line, i) => (
                        <div key={i} className={`text-sm ${line.speaker === 'AI' ? 'text-[#446B67]' : 'text-[#3C2A2F]'}`}>
                          <span className="font-semibold">{line.speaker}:</span> "{line.text}"
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dimensions for Engineered Evaluation */}
                {'dimensions' in feature.detailedContent && feature.detailedContent.dimensions && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#3C2A2F] mb-3">
                      5 Core Dimensions:
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-[#446B67]">
                      {feature.detailedContent.dimensions.map((dim, i) => (
                        <li key={i}>{dim}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Bullets */}
                {'bullets' in feature.detailedContent && feature.detailedContent.bullets && (
                  <ul className="space-y-2">
                    {feature.detailedContent.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#446B67]">
                        <span className="text-[#99C1B9] mt-1">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
