"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { isValidEmail } from "@/lib/utils";
import {
  TEAM_SIZE_OPTIONS,
  ROLES_PER_QUARTER_OPTIONS,
  ROLE_OPTIONS,
} from "./constants";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  rolesPerQuarter: string;
  painPoint: string;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    rolesPerQuarter: "",
    painPoint: "",
  });

  const totalSteps = 3;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      if (!formData.name.trim()) {
        setError("Please enter your name");
        return false;
      }
      if (!formData.email.trim()) {
        setError("Please enter your email address");
        return false;
      }
      if (!isValidEmail(formData.email)) {
        setError("Please enter a valid email address");
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.company.trim()) {
        setError("Please enter your company name");
        return false;
      }
      if (!formData.role) {
        setError("Please select your role");
        return false;
      }
      if (!formData.teamSize) {
        setError("Please select your team size");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;

    // Track step completion
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("Waitlist Step Complete", { step });
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!formData.rolesPerQuarter) {
      setError("Please select how many roles you hire per quarter");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          teamSize: formData.teamSize,
          rolesPerQuarter: formData.rolesPerQuarter,
          painPoint: formData.painPoint,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Track successful submission
      if (typeof window !== "undefined" && (window as any).umami) {
        (window as any).umami.track("Waitlist Success", {
          role: formData.role,
          teamSize: formData.teamSize,
        });
      }

      setIsSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Reset state when closing
    setStep(1);
    setIsSuccess(false);
    setError(null);
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      teamSize: "",
      rolesPerQuarter: "",
      painPoint: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-surface-background rounded-lg shadow-warm max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-surface-background border-b border-border-primary px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-text-primary">
            {isSuccess ? "You're on the list! 🎉" : "Join the Waitlist"}
          </h2>
          <button
            onClick={handleClose}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success State */}
        {isSuccess && (
          <div className="px-6 py-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Thanks for your interest in ApertureIQ!
              </h3>
            </div>

            <div className="bg-surface-background border-l-4 border-brand-primary-cta p-6 mb-6 rounded-lg">
              <p className="text-text-secondary">
                We're in private beta with select engineering teams, refining the voice-based interview experience and competency scoring framework.
              </p>
            </div>

            <div className="space-y-4 text-text-secondary">
              <p className="font-semibold text-text-primary">Here's what happens next:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>
                    We'll email you at <strong>{formData.email}</strong> to schedule a brief chat about your recruiting needs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>
                    You'll get <strong>early access pricing</strong> when you join the beta program
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>
                    Early access to the platform once it's ready (expected Q2 2025)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>
                    A chance to shape the product with your feedback
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleClose}
              className="w-full mt-8 bg-brand-primary text-surface-background py-3 rounded-lg font-semibold hover:bg-brand-primary/80 transition-all"
            >
              Close
            </button>
          </div>
        )}

        {/* Form Steps */}
        {!isSuccess && (
          <>
            {/* Progress Bar */}
            <div className="px-6 pt-4 pb-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-secondary">
                  Step {step} of {totalSteps}
                </span>
                <span className="text-sm text-text-secondary">
                  {Math.round((step / totalSteps) * 100)}% complete
                </span>
              </div>
              <div className="h-2 bg-base-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-primary transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Content */}
            <div className="px-6 py-6">
              {/* Step 1: Contact Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="e.g., Jane Smith"
                      className="w-full px-4 py-3 bg-surface-background border border-border-primary rounded-lg focus:ring-2 focus:ring-brand-primary-cta focus:border-transparent outline-none placeholder-text-disabled"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-surface-background border border-border-primary rounded-lg focus:ring-2 focus:ring-brand-primary-cta focus:border-transparent outline-none placeholder-text-disabled"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Company Info */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="e.g., TechCorp Inc."
                      className="w-full px-4 py-3 bg-surface-background border border-border-primary rounded-lg focus:ring-2 focus:ring-brand-primary-cta focus:border-transparent outline-none placeholder-text-disabled"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Your Role *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      className="w-full px-4 py-3 bg-surface-background border border-border-primary rounded-lg focus:ring-2 focus:ring-brand-primary-cta focus:border-transparent outline-none"
                    >
                      <option value="">Select your role...</option>
                      {ROLE_OPTIONS.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Team Size *
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => handleInputChange("teamSize", e.target.value)}
                      className="w-full px-4 py-3 bg-surface-background border border-border-primary rounded-lg focus:ring-2 focus:ring-brand-primary-cta focus:border-transparent outline-none"
                    >
                      <option value="">Select team size...</option>
                      {TEAM_SIZE_OPTIONS.map((size) => (
                        <option key={size} value={size}>
                          {size} people
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Use Case */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      How many engineering roles do you hire for per quarter? *
                    </label>
                    <select
                      value={formData.rolesPerQuarter}
                      onChange={(e) => handleInputChange("rolesPerQuarter", e.target.value)}
                      className="w-full px-4 py-3 bg-surface-background border border-border-primary rounded-lg focus:ring-2 focus:ring-brand-primary-cta focus:border-transparent outline-none"
                    >
                      <option value="">Select range...</option>
                      {ROLES_PER_QUARTER_OPTIONS.map((range) => (
                        <option key={range} value={range}>
                          {range} roles
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Anything else we should know? (Optional)
                    </label>
                    <textarea
                      value={formData.painPoint}
                      onChange={(e) => handleInputChange("painPoint", e.target.value)}
                      placeholder="Tell us about your biggest recruiting challenges, specific needs, or questions..."
                      rows={4}
                      className="w-full px-4 py-3 bg-surface-background border border-border-primary rounded-lg focus:ring-2 focus:ring-brand-primary-cta focus:border-transparent outline-none resize-none placeholder-text-disabled"
                    />
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="px-6 py-4 border-t border-border-primary flex justify-between">
              <button
                onClick={step > 1 ? handleBack : handleClose}
                className="px-6 py-2 text-text-secondary hover:text-text-primary font-semibold transition-colors"
              >
                {step > 1 ? "Back" : "Cancel"}
              </button>

              {step < totalSteps ? (
                <button
                  onClick={handleNext}
                  className="px-8 py-2 bg-brand-primary text-surface-background rounded-lg font-semibold hover-bg-brand-primary-80 transition-all"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="px-8 py-2 bg-brand-primary text-surface-background rounded-lg font-semibold hover-bg-brand-primary-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting..." : "Join Waitlist"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
