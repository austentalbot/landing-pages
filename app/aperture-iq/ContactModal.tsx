"use client";

import React, { FormEvent, useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { isValidEmail } from "@/lib/utils";
import { trackAnalyticsEvent } from "./lib/analytics";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAX_MESSAGE_LENGTH = 1200;

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const defaultFormState: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>(defaultFormState);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      trackAnalyticsEvent("Contact Modal Viewed", {
        category: "contact_form",
        label: "Contact Modal",
      });
    }
  }, [isOpen]);

  const isFormValid = useMemo(() => {
    if (!formData.name.trim()) return false;
    if (!isValidEmail(formData.email)) return false;
    if (!formData.company.trim()) return false;
    if (!formData.message.trim()) return false;
    return formData.message.trim().length <= MAX_MESSAGE_LENGTH;
  }, [formData]);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const resetState = () => {
    setFormData(defaultFormState);
    setError(null);
    setIsLoading(false);
    setIsSuccess(false);
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) {
      setError("Please complete all required fields with valid information.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const payload = {
      ...formData,
      message: formData.message.trim(),
      name: formData.name.trim(),
      company: formData.company.trim(),
      source: "aperture-iq-contact",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setIsSuccess(true);

      trackAnalyticsEvent("Contact Form Submission Success", {
        category: "contact_form",
        payload: {
          company: payload.company,
        },
      });
    } catch (err) {
      console.error("Contact form submission error:", err);
      setError("We couldn't send your message. Please try again.");
      trackAnalyticsEvent("Contact Form Submission Error", {
        category: "contact_form",
        payload: {
          error: err instanceof Error ? err.message : "unknown",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-surface-background shadow-warm">
        <div className="flex items-center justify-between border-b border-border-primary px-6 py-4">
          <h2 className="text-2xl font-bold text-text-primary">
            {isSuccess ? "Message sent 🎉" : "Contact Us"}
          </h2>
          <button
            onClick={handleClose}
            className="text-text-secondary transition-colors hover:text-text-primary"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {isSuccess ? (
          <div className="px-6 py-8">
            <p className="text-lg text-text-secondary">
              Thanks for reaching out! Someone from our team will follow up at{" "}
              <strong>{formData.email || "your email"}</strong> shortly.
            </p>
            <button
              onClick={handleClose}
              className="mt-8 w-full rounded-lg bg-brand-primary text-surface-background py-3 font-semibold transition-all hover:bg-brand-primary/80"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Jane Smith"
                className="w-full rounded-lg border border-border-primary bg-surface-background px-4 py-3 outline-none placeholder-text-disabled focus:border-transparent focus:ring-2 focus:ring-brand-primary-cta"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border-primary bg-surface-background px-4 py-3 outline-none placeholder-text-disabled focus:border-transparent focus:ring-2 focus:ring-brand-primary-cta"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Company *
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Acme Corp"
                className="w-full rounded-lg border border-border-primary bg-surface-background px-4 py-3 outline-none placeholder-text-disabled focus:border-transparent focus:ring-2 focus:ring-brand-primary-cta"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                How can we help? *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us what's on your mind..."
                rows={5}
                maxLength={MAX_MESSAGE_LENGTH}
                className="w-full resize-none rounded-lg border border-border-primary bg-surface-background px-4 py-3 outline-none placeholder-text-disabled focus:border-transparent focus:ring-2 focus:ring-brand-primary-cta"
              />
              <div className="mt-1 text-right text-xs text-text-secondary">
                {formData.message.length}/{MAX_MESSAGE_LENGTH} characters
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="flex items-center justify-end gap-4 border-t border-border-primary pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 font-semibold text-text-secondary transition-colors hover:text-text-primary"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`rounded-lg px-8 py-2 font-semibold text-surface-background transition-all ${
                  isFormValid
                    ? "bg-brand-primary-dark hover:bg-brand-primary-dark/90"
                    : "bg-brand-primary opacity-60"
                } disabled:cursor-not-allowed disabled:opacity-50`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
