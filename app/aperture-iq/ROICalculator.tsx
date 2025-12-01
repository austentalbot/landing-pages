"use client";

import React, { useState, useEffect } from "react";
import { ROI_DEFAULTS } from "./constants";

export default function ROICalculator() {
  const [rolesPerQuarter, setRolesPerQuarter] = useState<number>(
    ROI_DEFAULTS.rolesPerQuarter
  );
  const [candidatesPerRole, setCandidatesPerRole] = useState<number>(
    ROI_DEFAULTS.candidatesPerRole
  );
  const [hourlyRate, setHourlyRate] = useState<number>(ROI_DEFAULTS.hourlyRate);

  // Track interactions
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("ROI Calculator Interaction");
    }
  }, [rolesPerQuarter, candidatesPerRole, hourlyRate]);

  // Calculations
  const currentHoursPerQuarter =
    rolesPerQuarter * candidatesPerRole * (45 / 60); // 45 min per screen
  const currentCostPerQuarter = currentHoursPerQuarter * hourlyRate;

  const withAIHoursPerQuarter = rolesPerQuarter * candidatesPerRole * (5 / 60); // 5 min review
  const withAICostPerQuarter = withAIHoursPerQuarter * hourlyRate;

  const timeSavedPerQuarter = currentHoursPerQuarter - withAIHoursPerQuarter;
  const costSavedPerQuarter = currentCostPerQuarter - withAICostPerQuarter;
  const annualSavings = costSavedPerQuarter * 4;
  const additionalScreenedCandidates = Math.max(
    Math.round(timeSavedPerQuarter / (5 / 60)),
    0
  );
  const interviewingCapacityLift =
    currentHoursPerQuarter > 0
      ? Math.round((timeSavedPerQuarter / currentHoursPerQuarter) * 100)
      : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
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
          See How Much Recruiter Time You Free Up
        </h2>
        <p className="text-xl text-text-secondary">
          See how ApertureIQ hands recruiters hours back, trims screening spend,
          boosts interviewing capacity, and uncovers quality candidates faster.
        </p>
      </div>

      <div className="bg-surface-background rounded-2xl shadow-warm p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Sliders */}
          <div className="rounded-2xl border border-border-primary bg-base-background/40 p-6 lg:p-7">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
                Adjust to see savings
              </p>
            </div>
            <div className="space-y-8">
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
                    background: `linear-gradient(to right, var(--brand-primary) 0%, var(--brand-primary) ${
                      (rolesPerQuarter / 50) * 100
                    }%, var(--base-background) ${
                      (rolesPerQuarter / 50) * 100
                    }%, var(--base-background) 100%)`,
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
                    background: `linear-gradient(to right, var(--brand-primary) 0%, var(--brand-primary) ${
                      ((candidatesPerRole - 5) / 95) * 100
                    }%, var(--base-background) ${
                      ((candidatesPerRole - 5) / 95) * 100
                    }%, var(--base-background) 100%)`,
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
                    background: `linear-gradient(to right, var(--brand-primary) 0%, var(--brand-primary) ${
                      ((hourlyRate - 25) / 125) * 100
                    }%, var(--base-background) ${
                      ((hourlyRate - 25) / 125) * 100
                    }%, var(--base-background) 100%)`,
                  }}
                />
                <div className="flex justify-between text-sm text-text-secondary mt-1">
                  <span>$25</span>
                  <span>$150</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-border-primary p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary mb-4">
                Manual vs. ApertureIQ
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border-primary/70 p-4">
                  <p className="text-sm text-text-secondary mb-2">
                    Manual screening
                  </p>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold text-text-primary">
                        {formatHours(currentHoursPerQuarter)} hrs
                      </div>
                      <div className="text-xs uppercase tracking-wide text-text-secondary">
                        Hours per quarter
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-text-primary">
                        {formatCurrency(currentCostPerQuarter)}
                      </div>
                      <div className="text-xs uppercase tracking-wide text-text-secondary">
                        Cost per quarter
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-brand-primary text-surface-background p-4">
                  <p className="text-sm uppercase tracking-wide mb-2 opacity-90">
                    With ApertureIQ
                  </p>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold">
                        {formatHours(withAIHoursPerQuarter)} hrs
                      </div>
                      <div className="text-xs uppercase tracking-wide opacity-80">
                        Hours per quarter
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {formatCurrency(withAICostPerQuarter)}
                      </div>
                      <div className="text-xs uppercase tracking-wide opacity-80">
                        Cost per quarter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-brand-primary-cta/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary mb-4">
                Impact at a glance
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-text-primary">
                    {formatHours(timeSavedPerQuarter)} hrs
                  </div>
                  <p className="text-sm text-text-secondary">
                    Recruiter time back
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">
                    {formatCurrency(costSavedPerQuarter)}
                  </div>
                  <p className="text-sm text-text-secondary">
                    Quarterly money saved
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">
                    {interviewingCapacityLift}%
                  </div>
                  <p className="text-sm text-text-secondary">
                    Interviewing capacity lift
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">
                    {additionalScreenedCandidates.toLocaleString()}
                  </div>
                  <p className="text-sm text-text-secondary">
                    Extra high-signal candidates
                  </p>
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-dashed border-brand-primary-cta/70 p-4 text-center">
                <p className="text-sm text-text-secondary mb-1">
                  Annualized savings
                </p>
                <p className="text-3xl font-bold text-brand-primary-cta">
                  {formatCurrency(annualSavings)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
