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
        <h2 className="text-4xl font-bold text-text-primary mb-4">
          Understand Your Screening Capacity
        </h2>
        <p className="text-xl text-text-secondary">
          On-demand interviewing removes calendar constraints. See how many more candidates you could evaluate.
        </p>
      </div>

      <div className="bg-surface-background rounded-2xl shadow-warm p-8 md:p-12">
        {/* Input Sliders */}
        <div className="space-y-8 mb-12">
          {/* Roles per quarter */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="font-semibold text-text-primary text-lg">
                Roles you're hiring for per quarter
              </label>
              <span className="text-2xl font-bold text-brand-primary-cta">
                {rolesPerQuarter}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={rolesPerQuarter}
              onChange={(e) => setRolesPerQuarter(Number(e.target.value))}
              className="w-full h-3 bg-base-background rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--brand-primary) 0%, var(--brand-primary) ${(rolesPerQuarter / 50) * 100}%, var(--base-background) ${(rolesPerQuarter / 50) * 100}%, var(--base-background) 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-text-secondary mt-1">
              <span>1</span>
              <span>50</span>
            </div>
          </div>

          {/* Candidates per role */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="font-semibold text-text-primary text-lg">
                Candidates screened per role
              </label>
              <span className="text-2xl font-bold text-brand-primary-cta">
                {candidatesPerRole}
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              value={candidatesPerRole}
              onChange={(e) => setCandidatesPerRole(Number(e.target.value))}
              className="w-full h-3 bg-base-background rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--brand-primary) 0%, var(--brand-primary) ${((candidatesPerRole - 5) / 95) * 100}%, var(--base-background) ${((candidatesPerRole - 5) / 95) * 100}%, var(--base-background) 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-text-secondary mt-1">
              <span>5</span>
              <span>100</span>
            </div>
          </div>

          {/* Hourly rate */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="font-semibold text-text-primary text-lg">
                Recruiter hourly rate
              </label>
              <span className="text-2xl font-bold text-brand-primary-cta">
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
              className="w-full h-3 bg-base-background rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--brand-primary) 0%, var(--brand-primary) ${((hourlyRate - 25) / 125) * 100}%, var(--base-background) ${((hourlyRate - 25) / 125) * 100}%, var(--base-background) 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-text-secondary mt-1">
              <span>$25</span>
              <span>$150</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="border-t-2 border-border-primary pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Current State */}
            <div className="bg-surface-background rounded-xl p-6 border-2 border-border-primary">
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
                Current State (Manual Screening)
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-text-secondary mb-1">Hours per quarter</div>
                  <div className="text-3xl font-bold text-text-primary">
                    {formatHours(currentHoursPerQuarter)} hrs
                  </div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">Cost per quarter</div>
                  <div className="text-3xl font-bold text-text-primary">
                    {formatCurrency(currentCostPerQuarter)}
                  </div>
                </div>
              </div>
            </div>

            {/* With ApertureIQ */}
            <div className="bg-brand-primary rounded-xl p-6 text-surface-background">
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

          {/* Capacity Difference */}
          <div className="bg-surface-background rounded-xl p-8 text-center border-2 border-brand-primary-cta">
            <div className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-2">
              Potential Quarterly Capacity Gain
            </div>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div>
                <div className="text-5xl font-bold text-text-primary mb-1">
                  {formatHours(timeSavedPerQuarter)} hrs
                </div>
                <div className="text-sm text-text-secondary">Recruiter hours freed</div>
              </div>
              <div className="text-4xl text-brand-primary-cta">+</div>
              <div>
                <div className="text-5xl font-bold text-text-primary mb-1">
                  {formatCurrency(costSavedPerQuarter)}
                </div>
                <div className="text-sm text-text-secondary">Capacity value</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border-primary">
              <div className="text-sm text-text-secondary mb-1">Annual Capacity Value</div>
              <div className="text-4xl font-bold text-brand-primary-cta">
                {formatCurrency(annualSavings)}
              </div>
            </div>
          </div>

          {/* Additional benefit */}
          <p className="text-center text-text-secondary mt-6 italic">
            The on-demand model lets you scale candidate evaluation without scheduling overhead—interview more candidates in the same timeframe.
          </p>
        </div>
      </div>
    </div>
  );
}
