"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { isValidEmail } from "@/lib/utils";
import {
  BUSINESS_TYPES,
  REVENUE_RANGES,
  MISSED_CALLS_RANGES,
  PRICING_PLANS,
} from "./constants";
import { LANDING_PAGE_TYPES } from "@/lib/constants";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PlanType = "starter" | "pro";

interface FormData {
  businessName: string;
  yourName: string;
  email: string;
  businessType: string;
  revenue: string;
  missedCalls: string;
  selectedPlan: PlanType;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    yourName: "",
    email: "",
    businessType: "",
    revenue: "",
    missedCalls: "",
    selectedPlan: "pro",
  });

  const totalSteps = 3;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      if (!formData.businessName.trim()) {
        setError("Please enter your business name");
        return false;
      }
      if (!formData.yourName.trim()) {
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
      if (!formData.businessType) {
        setError("Please select your business type");
        return false;
      }
      if (!formData.revenue) {
        setError("Please select your revenue range");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;

    // Track step completion
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("Sign Up Step Complete", { step });
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!formData.missedCalls) {
      setError("Please select how many calls you miss per week");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          source: LANDING_PAGE_TYPES.CALL_CLERK,
          timestamp: new Date().toISOString(),
          questionnaireData: {
            businessName: formData.businessName,
            yourName: formData.yourName,
            businessType: formData.businessType,
            revenue: formData.revenue,
            missedCalls: formData.missedCalls,
            selectedPlan: formData.selectedPlan,
            planPrice:
              formData.selectedPlan === "pro"
                ? PRICING_PLANS.pro.price
                : PRICING_PLANS.starter.price,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Track successful submission
      if (typeof window !== "undefined" && (window as any).umami) {
        (window as any).umami.track("Sign Up Complete", {
          plan: formData.selectedPlan,
          businessType: formData.businessType,
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
      businessName: "",
      yourName: "",
      email: "",
      businessType: "",
      revenue: "",
      missedCalls: "",
      selectedPlan: "pro",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {isSuccess ? "You're on the list! 🎉" : "Start Your Trial"}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success State */}
        {isSuccess && (
          <div className="px-6 py-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thanks for your interest in Call Clerk AI!
              </h3>
            </div>

            <div className="bg-orange-50 border-l-4 border-[#f97316] p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">
                We're launching in 2026
              </p>
              <p className="text-gray-700">
                We're currently building based on feedback from professionals
                like you.
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-gray-900">Here's what happens next:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-[#f97316] mr-2">✓</span>
                  <span>
                    We'll email you within 24 hours with launch updates
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f97316] mr-2">✓</span>
                  <span>
                    You'll get early access pricing (locked in at{" "}
                    <strong>
                      $
                      {formData.selectedPlan === "pro"
                        ? PRICING_PLANS.pro.price
                        : PRICING_PLANS.starter.price}
                      /month
                    </strong>
                    )
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f97316] mr-2">✓</span>
                  <span>
                    We'd love 15 minutes of your time to understand your biggest
                    call-handling challenges
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleClose}
              className="w-full mt-8 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white py-3 rounded-lg font-semibold hover:from-[#ea580c] hover:to-[#f97316] transition-all"
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
                <span className="text-sm text-gray-600">
                  Step {step} of {totalSteps}
                </span>
                <span className="text-sm text-gray-600">
                  {Math.round((step / totalSteps) * 100)}% complete
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#f97316] to-[#fb923c] transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Content */}
            <div className="px-6 py-6">
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        handleInputChange("businessName", e.target.value)
                      }
                      placeholder="e.g., ABC Plumbing"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.yourName}
                      onChange={(e) =>
                        handleInputChange("yourName", e.target.value)
                      }
                      placeholder="e.g., John Smith"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Business Details */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) =>
                        handleInputChange("businessType", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                    >
                      <option value="">Select your business type...</option>
                      {BUSINESS_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Average Monthly Revenue *
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => handleInputChange("revenue", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                    >
                      <option value="">Select revenue range...</option>
                      {REVENUE_RANGES.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Plan Selection */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      How many calls do you miss per week? *
                    </label>
                    <select
                      value={formData.missedCalls}
                      onChange={(e) =>
                        handleInputChange("missedCalls", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                    >
                      <option value="">Select range...</option>
                      {MISSED_CALLS_RANGES.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Which plan? *
                    </label>
                    <div className="space-y-3">
                      {/* Starter Plan */}
                      <label className="block cursor-pointer">
                        <div
                          className={`border-2 rounded-lg p-4 transition-all ${
                            formData.selectedPlan === "starter"
                              ? "border-[#f97316] bg-orange-50"
                              : "border-gray-300 hover:border-orange-300"
                          }`}
                        >
                          <div className="flex items-start">
                            <input
                              type="radio"
                              name="plan"
                              value="starter"
                              checked={formData.selectedPlan === "starter"}
                              onChange={(e) =>
                                handleInputChange(
                                  "selectedPlan",
                                  e.target.value as PlanType
                                )
                              }
                              className="mt-1 mr-3"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-lg">
                                  {PRICING_PLANS.starter.name}
                                </span>
                                <span className="text-2xl font-bold text-[#f97316]">
                                  ${PRICING_PLANS.starter.price}
                                  <span className="text-sm text-gray-600">
                                    /month
                                  </span>
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">
                                Up to {PRICING_PLANS.starter.minutes} call minutes
                              </p>
                            </div>
                          </div>
                        </div>
                      </label>

                      {/* Pro Plan */}
                      <label className="block cursor-pointer">
                        <div
                          className={`border-2 rounded-lg p-4 transition-all relative ${
                            formData.selectedPlan === "pro"
                              ? "border-[#f97316] bg-orange-50"
                              : "border-gray-300 hover:border-orange-300"
                          }`}
                        >
                          {PRICING_PLANS.pro.badge && (
                            <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {PRICING_PLANS.pro.badge}
                            </div>
                          )}
                          <div className="flex items-start">
                            <input
                              type="radio"
                              name="plan"
                              value="pro"
                              checked={formData.selectedPlan === "pro"}
                              onChange={(e) =>
                                handleInputChange(
                                  "selectedPlan",
                                  e.target.value as PlanType
                                )
                              }
                              className="mt-1 mr-3"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-lg">
                                  {PRICING_PLANS.pro.name}
                                </span>
                                <span className="text-2xl font-bold text-[#f97316]">
                                  ${PRICING_PLANS.pro.price}
                                  <span className="text-sm text-gray-600">
                                    /month
                                  </span>
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">
                                Up to {PRICING_PLANS.pro.minutes} call minutes +
                                advanced features
                              </p>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
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
            <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
              <button
                onClick={step > 1 ? handleBack : handleClose}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
              >
                {step > 1 ? "Back" : "Cancel"}
              </button>

              {step < totalSteps ? (
                <button
                  onClick={handleNext}
                  className="px-8 py-2 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white rounded-lg font-semibold hover:from-[#ea580c] hover:to-[#f97316] transition-all"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="px-8 py-2 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white rounded-lg font-semibold hover:from-[#ea580c] hover:to-[#f97316] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting..." : "Start Trial"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
