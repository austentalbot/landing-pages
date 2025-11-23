"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { isValidEmail } from "@/lib/utils";
import { BUSINESS_TYPES } from "./constants";
import { LANDING_PAGE_TYPES } from "@/lib/constants";

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DemoFormData {
  name: string;
  email: string;
  businessType: string;
  phone: string;
}

export default function DemoRequestModal({
  isOpen,
  onClose,
}: DemoRequestModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    email: "",
    businessType: "",
    phone: "",
  });

  const handleInputChange = (field: keyof DemoFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const validateForm = (): boolean => {
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
    if (!formData.businessType) {
      setError("Please select your business type");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          source: `${LANDING_PAGE_TYPES.CALL_CLERK}-demo-request`,
          timestamp: new Date().toISOString(),
          questionnaireData: {
            name: formData.name,
            businessType: formData.businessType,
            phone: formData.phone || "Not provided",
            requestType: "demo",
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Track successful submission
      if (typeof window !== "undefined" && (window as any).umami) {
        (window as any).umami.track("Demo Request Submitted", {
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
    setIsSuccess(false);
    setError(null);
    setFormData({
      name: "",
      email: "",
      businessType: "",
      phone: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#f97316] to-[#fb923c] px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h2 className="text-2xl font-bold text-white">
            {isSuccess ? "Request Received!" : "Request a Demo"}
          </h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success State */}
        {isSuccess && (
          <div className="px-6 py-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Thanks for requesting a demo!
              </h3>
              <p className="text-gray-700">
                We'll reach out within 24 hours to schedule a personalized demo
                of Call Clerk AI.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-[#f97316] p-4 mb-6">
              <p className="text-sm text-gray-700">
                In the meantime, check your email for some sample call recordings
                and case studies from businesses like yours.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white py-3 rounded-lg font-semibold hover:from-[#ea580c] hover:to-[#f97316] transition-all"
            >
              Close
            </button>
          </div>
        )}

        {/* Form */}
        {!isSuccess && (
          <form onSubmit={handleSubmit} className="px-6 py-6">
            <p className="text-gray-600 mb-6">
              See Call Clerk in action with a personalized demo for your business.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
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
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white py-3 rounded-lg font-semibold hover:from-[#ea580c] hover:to-[#f97316] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Submitting..." : "Request Demo"}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              We'll never share your information or spam you.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
