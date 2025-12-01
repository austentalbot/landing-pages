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
            className="bg-surface-background rounded-xl shadow-warm overflow-hidden border-2 border-border-primary hover:border-brand-primary-cta transition-all duration-200"
          >
            <button
              onClick={() => toggleFeature(index)}
              className="w-full px-6 py-5 text-left flex items-center gap-4 hover-bg-surface-background-80 transition-colors duration-200"
            >
              <div className="bg-brand-primary p-3 rounded-lg flex-shrink-0">
                <IconComponent className="w-6 h-6 text-text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-text-primary text-xl mb-1">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {feature.shortDescription}
                </p>
              </div>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-brand-primary-cta flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-brand-primary-cta flex-shrink-0" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-[800px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-6 py-6 border-t border-border-primary bg-surface-background">
                <p className="text-text-secondary leading-relaxed mb-4">
                  {feature.detailedContent.description}
                </p>

                {/* Example dialogue for Adaptive Interviewing */}
                {feature.detailedContent.example && (
                  <div className="bg-surface-background rounded-lg p-4 mb-4 border border-border-primary">
                    <h4 className="font-semibold text-text-primary mb-3 text-sm uppercase tracking-wide">
                      Example Conversation:
                    </h4>
                    <div className="space-y-2">
                      {feature.detailedContent.example.lines.map((line, i) => (
                        <div key={i} className={`text-sm ${line.speaker === 'AI' ? 'text-text-secondary' : 'text-text-primary'}`}>
                          <span className="font-semibold">{line.speaker}:</span> "{line.text}"
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dimensions for Engineered Evaluation */}
                {feature.detailedContent.dimensions && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-text-primary mb-3">
                      5 Core Dimensions:
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-text-secondary">
                      {feature.detailedContent.dimensions.map((dim, i) => (
                        <li key={i}>{dim}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Bullets */}
                {feature.detailedContent.bullets && (
                  <ul className="space-y-2">
                    {feature.detailedContent.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary">
                        <span className="text-brand-primary mt-1">✓</span>
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
