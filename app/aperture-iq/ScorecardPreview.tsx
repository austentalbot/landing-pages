"use client";

import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { MOCK_SCORECARD } from "./constants";

export default function ScorecardPreview() {
  const summarySentence = `${MOCK_SCORECARD.summary.split(".")[0]}.`;
  const transcriptPreview = MOCK_SCORECARD.transcriptExcerpt.slice(0, 2);

  return (
    <div className="bg-gradient-to-br from-[#F6F2EE] to-white p-8 rounded-2xl shadow-2xl">
      {/* Browser Chrome Mockup */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-[#E5D8D0]">
        {/* Browser Header */}
        <div className="bg-gradient-to-r from-[#F1E3D3] to-[#F2D0A9] px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#D88C9A]"></div>
            <div className="w-3 h-3 rounded-full bg-[#F2D0A9]"></div>
            <div className="w-3 h-3 rounded-full bg-[#99C1B9]"></div>
          </div>
          <div className="flex-1 bg-white/60 rounded px-3 py-1 text-xs text-text-secondary ml-2">
            app.apertureiq.com/scorecards/{MOCK_SCORECARD.candidateName.toLowerCase().replace(' ', '-')}
          </div>
        </div>

        {/* Scorecard Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#3C2A2F] mb-1">
                {MOCK_SCORECARD.candidateName}
              </h2>
              <p className="text-text-secondary text-lg">{MOCK_SCORECARD.position}</p>
              <p className="text-sm text-text-secondary mt-1">
                Interviewed: {MOCK_SCORECARD.interviewDate} • Applied: {MOCK_SCORECARD.appliedDate}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#99C1B9] to-[#D88C9A] text-white rounded-2xl p-6 text-center min-w-[120px]">
              <div className="text-5xl font-bold mb-1">{MOCK_SCORECARD.overallScore}</div>
              <div className="text-sm opacity-90">Overall Score</div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#F6F2EE] rounded-lg p-4 mb-6 border-l-4 border-[#99C1B9]">
            <h3 className="font-semibold text-[#3C2A2F] mb-2">Summary</h3>
            <p className="text-[#446B67] text-sm leading-relaxed">
              {summarySentence}
            </p>
          </div>

          {/* Level & Fit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-[#E5D8D0]">
              <h4 className="font-semibold text-[#3C2A2F] text-sm mb-2">Level Assessment</h4>
              <p className="text-[#446B67]">{MOCK_SCORECARD.level}</p>
              <p className="text-xs text-text-secondary mt-1">({MOCK_SCORECARD.levelConfidence} confidence)</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#E5D8D0]">
              <h4 className="font-semibold text-[#3C2A2F] text-sm mb-2">Role Fit</h4>
              <p className="text-[#446B67]">{MOCK_SCORECARD.rolefit}</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h3 className="font-bold text-[#3C2A2F] text-xl mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#99C1B9]" />
              What stands out
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-[#446B67]">
                <span className="text-[#99C1B9] mt-1 flex-shrink-0">✓</span>
                <span>Evidence-backed scoring with transcript quotes for each competency.</span>
              </li>
              <li className="flex items-start gap-2 text-[#446B67]">
                <span className="text-[#99C1B9] mt-1 flex-shrink-0">✓</span>
                <span>{MOCK_SCORECARD.rolefit}</span>
              </li>
              {MOCK_SCORECARD.alternativeRole && (
                <li className="flex items-start gap-2 text-[#446B67]">
                  <span className="text-[#99C1B9] mt-1 flex-shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span>{MOCK_SCORECARD.alternativeRole}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Transcript Excerpt */}
          <div className="border-t border-[#E5D8D0] pt-6">
            <h3 className="font-bold text-[#3C2A2F] text-xl mb-3">Transcript Excerpt</h3>
            <div className="bg-[#F6F2EE] rounded-lg p-4 space-y-3">
              {transcriptPreview.map((line, i) => (
                <div key={i}>
                  <span className="font-semibold text-[#3C2A2F]">{line.speaker}:</span>{" "}
                  <span className="text-[#446B67]">{line.text}</span>
                </div>
              ))}
              <p className="text-xs text-[#446B67] italic pt-2">
                Full transcript captured for every interview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
