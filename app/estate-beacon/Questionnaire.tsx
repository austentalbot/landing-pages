"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { EARLY_ACCESS_PRICE } from "./constants";

interface QuestionnaireData {
  state: string;
  situation: string;
  stage: string;
  challenge: string;
  hasLawyer: string;
}

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export function Questionnaire() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<QuestionnaireData>>({});
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const totalSteps = 4;

  const handleNext = async (field: keyof QuestionnaireData, value: string) => {
    setData({ ...data, [field]: value });
    window.umami?.track(`Next Step ${step}`, {
      ...data,
      field,
      step,
      value,
    });
    setStep(step + 1);
  };

  const handleBack = async () => {
    window.umami?.track(`Back`, {
      step,
    });
    setStep(Math.max(0, step - 1));
  };

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setSubmitStatus("loading");

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "estate_beacon_questionnaire",
          questionnaireData: data,
          timestamp: new Date().toISOString(),
        }),
      });

      window.umami?.track("Submit", data);

      // Track conversion
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          event_category: "questionnaire_complete",
          event_label: "estate_beacon",
        });
      }

      // Navigate to thank-you page
      router.push("/estate-beacon/thank-you");
    } catch (error) {
      setSubmitStatus("error");
      setMessage("Something went wrong. Please try again.");
      console.error("Questionnaire submission error:", error);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <span className="text-4xl">✓</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          You're all set
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
          {message}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      {step < totalSteps && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600 font-light">
              Question {step + 1} of {totalSteps}
            </span>
            <span className="text-sm text-gray-600 font-light">
              {Math.round(((step + 1) / totalSteps) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4a8177] transition-all duration-300 ease-out"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Question 1: State */}
      {step === 0 && (
        <div className="space-y-6 animate-fadeIn">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            What state is the estate being settled in?
          </h3>
          <select
            value={data.state || ""}
            onChange={(e) => handleNext("state", e.target.value)}
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-[#4a8177] focus:border-[#4a8177] outline-none text-gray-900 font-light bg-white appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234a8177'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "1.5em 1.5em",
              paddingRight: "3rem",
            }}
          >
            <option value="">Select a state...</option>
            {US_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-500 font-light">
            Estate laws vary by state, so we&apos;ll customize guidance for your
            location.
          </p>
        </div>
      )}

      {/* Question 2: Combined Situation & Stage */}
      {step === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <button
            onClick={handleBack}
            className="text-sm text-gray-500 hover:text-gray-700 font-light mb-4"
          >
            ← Back
          </button>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            What's your current situation?
          </h3>
          <div className="space-y-3">
            {[
              {
                value: "current_executor_just_starting",
                label: "Currently serving as executor - within first month",
              },
              {
                value: "current_executor_in_progress",
                label: "Currently serving as executor - 1-6 months in",
              },
              {
                value: "current_executor_well_underway",
                label: "Currently serving as executor - 6+ months in",
              },
              {
                value: "named_not_started",
                label: "Named as executor but haven't started yet",
              },
              {
                value: "preparing",
                label: "Preparing in case I'm named",
              },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleNext("situation", option.value)}
                className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-[#4a8177] hover:bg-[#4a8177]/5 transition-all font-light"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Question 3: Challenge */}
      {step === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <button
            onClick={handleBack}
            className="text-sm text-gray-500 hover:text-gray-700 font-light mb-4"
          >
            ← Back
          </button>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            What's your biggest challenge right now?
          </h3>
          <div className="space-y-3">
            {[
              {
                value: "what_to_do_first",
                label: "Not knowing what to do first",
              },
              {
                value: "tracking_institutions",
                label: "Keeping track of all the institutions",
              },
              {
                value: "deadlines_paperwork",
                label: "Managing deadlines and paperwork",
              },
              {
                value: "beneficiary_communication",
                label: "Communicating with beneficiaries",
              },
              { value: "all_of_above", label: "All of the above" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleNext("challenge", option.value)}
                className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-[#4a8177] hover:bg-[#4a8177]/5 transition-all font-light"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Question 4: Lawyer */}
      {step === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <button
            onClick={handleBack}
            className="text-sm text-gray-500 hover:text-gray-700 font-light mb-4"
          >
            ← Back
          </button>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Are you working with a lawyer?
          </h3>
          <div className="space-y-3">
            {[
              { value: "yes", label: "Yes, I have legal representation" },
              { value: "no", label: "No, I'm handling it myself" },
              { value: "not_sure", label: "Not sure yet" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleNext("hasLawyer", option.value)}
                className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-[#4a8177] hover:bg-[#4a8177]/5 transition-all font-light"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Final step: Summary and email */}
      {step === 4 && (
        <div className="space-y-8 animate-fadeIn">
          <button
            onClick={handleBack}
            className="text-sm text-gray-500 hover:text-gray-700 font-light"
          >
            ← Back
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4a8177]/10 mb-6">
              <span className="text-3xl">📋</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Thank you for sharing these details
            </h3>
            <p className="text-lg text-gray-600 font-light mb-8">
              Based on your answers, we'll create a {data.state}-specific
              checklist tailored to your situation.
            </p>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-3 text-left">
            <h4 className="font-semibold text-gray-900 mb-4">Your details</h4>
            <div className="space-y-2 text-sm text-gray-600 font-light">
              <p>
                📍 <strong className="text-gray-900">State:</strong>{" "}
                {data.state}
              </p>
              <p>
                👤 <strong className="text-gray-900">Status:</strong>{" "}
                {data.situation === "current_executor_just_starting"
                  ? "Currently serving as executor - just starting"
                  : data.situation === "current_executor_in_progress"
                  ? "Currently serving as executor - in progress"
                  : data.situation === "current_executor_well_underway"
                  ? "Currently serving as executor - well underway"
                  : data.situation === "named_not_started"
                  ? "Named but not started"
                  : "Preparing for role"}
              </p>
              <p>
                ⚖️ <strong className="text-gray-900">Legal help:</strong>{" "}
                {data.hasLawyer === "yes"
                  ? "Working with lawyer"
                  : data.hasLawyer === "no"
                  ? "Self-managing"
                  : "Deciding"}
              </p>
            </div>
          </div>

          {/* Email capture */}
          <div className="bg-white border-2 border-[#4a8177]/20 rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Estate Beacon is not yet available in {data.state}
            </h4>
            <p className="text-gray-600 font-light mb-6">
              Enter your email to be notified when we launch in {data.state} and
              receive the early access price of ${EARLY_ACCESS_PRICE}.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-[#4a8177] focus:border-[#4a8177] outline-none text-gray-900 font-light"
                disabled={submitStatus === "loading"}
                required
              />
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full px-8 py-4 bg-[#4a8177] text-white font-semibold rounded-xl hover:bg-[#3d7068] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {submitStatus === "loading"
                  ? "Submitting..."
                  : "Notify Me When Ready"}
              </button>
              {message && submitStatus === "error" && (
                <p className="text-sm text-red-600 font-medium">{message}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
