"use client";

import React from "react";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { MOCK_SCORECARD } from "./constants";

export default function ScorecardPreview() {
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
          <div className="flex-1 bg-white/60 rounded px-3 py-1 text-xs text-[#446B67] ml-2">
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
              <p className="text-[#446B67] text-lg">{MOCK_SCORECARD.position}</p>
              <p className="text-sm text-[#446B67] mt-1">
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
              {MOCK_SCORECARD.summary}
            </p>
          </div>

          {/* Level & Fit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-[#E5D8D0]">
              <h4 className="font-semibold text-[#3C2A2F] text-sm mb-2">Level Assessment</h4>
              <p className="text-[#446B67]">{MOCK_SCORECARD.level}</p>
              <p className="text-xs text-[#99C1B9] mt-1">({MOCK_SCORECARD.levelConfidence} confidence)</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#E5D8D0]">
              <h4 className="font-semibold text-[#3C2A2F] text-sm mb-2">Role Fit</h4>
              <p className="text-[#446B67]">{MOCK_SCORECARD.rolefit}</p>
            </div>
          </div>

          {/* Skills Assessment */}
          <div className="mb-6">
            <h3 className="font-bold text-[#3C2A2F] text-xl mb-4">Skills Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_SCORECARD.skillsAssessment.map((skill) => (
                <div key={skill.skill} className="bg-white rounded-lg p-4 border border-[#E5D8D0]">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-[#3C2A2F]">{skill.skill}</span>
                    <span className="text-sm text-[#446B67] bg-[#F1E3D3] px-2 py-1 rounded">
                      {skill.level}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="h-2 bg-[#F1E3D3] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#99C1B9] to-[#D88C9A] rounded-full transition-all duration-500"
                        style={{ width: `${skill.score}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-[#3C2A2F] mt-1 inline-block">
                      {skill.score}/100
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Green Flags */}
          <div className="mb-6">
            <h3 className="font-bold text-[#3C2A2F] text-xl mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#99C1B9]" />
              Green Flags
            </h3>
            <ul className="space-y-2">
              {MOCK_SCORECARD.greenFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-2 text-[#446B67]">
                  <span className="text-[#99C1B9] mt-1 flex-shrink-0">✓</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Red Flags */}
          <div className="mb-6">
            <h3 className="font-bold text-[#3C2A2F] text-xl mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D88C9A]" />
              Red Flags
            </h3>
            <ul className="space-y-2">
              {MOCK_SCORECARD.redFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded mt-0.5 ${
                    flag.severity === 'low' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {flag.severity.toUpperCase()}
                  </span>
                  <span className="text-[#446B67]">{flag.item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Alternative Role Suggestion */}
          {MOCK_SCORECARD.alternativeRole && (
            <div className="bg-gradient-to-r from-[#F1E3D3] to-[#F2D0A9] rounded-lg p-4 mb-6 border-l-4 border-[#D88C9A]">
              <h3 className="font-semibold text-[#3C2A2F] mb-2 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Alternative Role Suggestion
              </h3>
              <p className="text-[#446B67] text-sm">
                {MOCK_SCORECARD.alternativeRole}
              </p>
            </div>
          )}

          {/* Suggested Questions */}
          <div className="mb-6">
            <h3 className="font-bold text-[#3C2A2F] text-xl mb-3">Suggested Follow-Up Questions</h3>
            <ol className="list-decimal list-inside space-y-2 text-[#446B67]">
              {MOCK_SCORECARD.suggestedQuestions.map((question, i) => (
                <li key={i} className="pl-2">{question}</li>
              ))}
            </ol>
          </div>

          {/* Transcript Excerpt */}
          <div className="border-t border-[#E5D8D0] pt-6">
            <h3 className="font-bold text-[#3C2A2F] text-xl mb-3">Transcript Excerpt</h3>
            <div className="bg-[#F6F2EE] rounded-lg p-4 space-y-3 max-h-64 overflow-y-auto">
              {MOCK_SCORECARD.transcriptExcerpt.map((line, i) => (
                <div key={i}>
                  <span className="font-semibold text-[#3C2A2F]">{line.speaker}:</span>{' '}
                  <span className="text-[#446B67]">{line.text}</span>
                </div>
              ))}
              <p className="text-xs text-[#446B67] italic pt-2">
                ... and 28 more exchanges (full transcript available)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
