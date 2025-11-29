"use client";

import React, { useState, useEffect } from "react";
import { ROI_DEFAULTS } from "./constants";

export default function ROICalculator() {
  const [rolesPerQuarter, setRolesPerQuarter] = useState<number>(ROI_DEFAULTS.rolesPerQuarter);
  const [candidatesPerRole, setCandidatesPerRole] = useState<number>(ROI_DEFAULTS.candidatesPerRole);
  const [hourlyRate, setHourlyRate] = useState<number>(ROI_DEFAULTS.hourlyRate);

  // Track interactions
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("ROI Calculator Interaction");
    }
  }, [rolesPerQuarter, candidatesPerRole, hourlyRate]);

  // Calculations
  const currentHoursPerQuarter = rolesPerQuarter * candidatesPerRole * (45 / 60); // 45 min per screen
  const currentCostPerQuarter = currentHoursPerQuarter * hourlyRate;

  const withAIHoursPerQuarter = rolesPerQuarter * candidatesPerRole * (5 / 60); // 5 min review
  const withAICostPerQuarter = withAIHoursPerQuarter * hourlyRate;

  const timeSavedPerQuarter = currentHoursPerQuarter - withAIHoursPerQuarter;
  const costSavedPerQuarter = currentCostPerQuarter - withAICostPerQuarter;
  const annualSavings = costSavedPerQuarter * 4;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatHours = (value: number) => {
    return Math.round(value);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3C2A2F] mb-4">
          Calculate Your Time Savings
        </h2>
        <p className="text-xl text-[#446B67]">
          See how much time and money you could save with AI-powered screening
        </p>
      </div>

      <div className="bg-gradient-to-br from-[#F1E3D3] to-white rounded-2xl shadow-2xl p-8 md:p-12">
        {/* Input Sliders */}
        <div className="space-y-8 mb-12">
          {/* Roles per quarter */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="font-semibold text-[#3C2A2F] text-lg">
                Roles you're hiring for per quarter
              </label>
              <span className="text-2xl font-bold text-[#D88C9A]">
                {rolesPerQuarter}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={rolesPerQuarter}
              onChange={(e) => setRolesPerQuarter(Number(e.target.value))}
              className="w-full h-3 bg-[#F2D0A9] rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #D88C9A 0%, #D88C9A ${(rolesPerQuarter / 50) * 100}%, #F2D0A9 ${(rolesPerQuarter / 50) * 100}%, #F2D0A9 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-[#446B67] mt-1">
              <span>1</span>
              <span>50</span>
            </div>
          </div>

          {/* Candidates per role */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="font-semibold text-[#3C2A2F] text-lg">
                Candidates screened per role
              </label>
              <span className="text-2xl font-bold text-[#D88C9A]">
                {candidatesPerRole}
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              value={candidatesPerRole}
              onChange={(e) => setCandidatesPerRole(Number(e.target.value))}
              className="w-full h-3 bg-[#F2D0A9] rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #D88C9A 0%, #D88C9A ${((candidatesPerRole - 5) / 95) * 100}%, #F2D0A9 ${((candidatesPerRole - 5) / 95) * 100}%, #F2D0A9 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-[#446B67] mt-1">
              <span>5</span>
              <span>100</span>
            </div>
          </div>

          {/* Hourly rate */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="font-semibold text-[#3C2A2F] text-lg">
                Recruiter hourly rate
              </label>
              <span className="text-2xl font-bold text-[#D88C9A]">
                ${hourlyRate}
              </span>
            </div>
            <input
              type="range"
              min="25"
              max="150"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-3 bg-[#F2D0A9] rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #D88C9A 0%, #D88C9A ${((hourlyRate - 25) / 125) * 100}%, #F2D0A9 ${((hourlyRate - 25) / 125) * 100}%, #F2D0A9 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-[#446B67] mt-1">
              <span>$25</span>
              <span>$150</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="border-t-2 border-[#E5D8D0] pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Current State */}
            <div className="bg-white rounded-xl p-6 border-2 border-[#E5D8D0]">
              <h3 className="text-sm font-semibold text-[#446B67] uppercase tracking-wide mb-4">
                Current State (Manual Screening)
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-[#446B67] mb-1">Hours per quarter</div>
                  <div className="text-3xl font-bold text-[#3C2A2F]">
                    {formatHours(currentHoursPerQuarter)} hrs
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#446B67] mb-1">Cost per quarter</div>
                  <div className="text-3xl font-bold text-[#3C2A2F]">
                    {formatCurrency(currentCostPerQuarter)}
                  </div>
                </div>
              </div>
            </div>

            {/* With ApertureIQ */}
            <div className="bg-gradient-to-br from-[#99C1B9] to-[#D88C9A] rounded-xl p-6 text-white">
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 opacity-90">
                With ApertureIQ
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm opacity-90 mb-1">Hours per quarter</div>
                  <div className="text-3xl font-bold">
                    {formatHours(withAIHoursPerQuarter)} hrs
                  </div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Cost per quarter</div>
                  <div className="text-3xl font-bold">
                    {formatCurrency(withAICostPerQuarter)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="bg-gradient-to-r from-[#F2D0A9] to-[#F1E3D3] rounded-xl p-8 text-center border-2 border-[#D88C9A]">
            <div className="text-sm font-semibold text-[#446B67] uppercase tracking-wide mb-2">
              Your Quarterly Savings
            </div>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div>
                <div className="text-5xl font-bold text-[#3C2A2F] mb-1">
                  {formatHours(timeSavedPerQuarter)} hrs
                </div>
                <div className="text-sm text-[#446B67]">Time saved</div>
              </div>
              <div className="text-4xl text-[#D88C9A]">+</div>
              <div>
                <div className="text-5xl font-bold text-[#3C2A2F] mb-1">
                  {formatCurrency(costSavedPerQuarter)}
                </div>
                <div className="text-sm text-[#446B67]">Money saved</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#E5D8D0]">
              <div className="text-sm text-[#446B67] mb-1">Annual Savings</div>
              <div className="text-4xl font-bold text-[#D88C9A]">
                {formatCurrency(annualSavings)}
              </div>
            </div>
          </div>

          {/* Additional benefit */}
          <p className="text-center text-[#446B67] mt-6 italic">
            Plus: interview 2-3x more candidates in the same time = better hires.
          </p>
        </div>
      </div>
    </div>
  );
}
