"use client";

import { useState, useId } from "react";
import {
  Clock,
  TrendingDown,
  Target,
  ClipboardCheck,
  Search,
  Send,
  Mic,
  FileText,
  Play,
  CheckCircle,
  MessageSquare,
  Mail,
  Linkedin,
  AlertTriangle,
} from "lucide-react";
import CTAButton from "./CTAButton";
import StickyButton from "./StickyButton";
import CollapsibleFAQs from "./CollapsibleFAQs";
import CollapsibleFeatures from "./CollapsibleFeatures";
import ROICalculator from "./ROICalculator";
import ScorecardPreview from "./ScorecardPreview";
import WaitlistModal from "./WaitlistModal";
import FadeInSection from "./FadeInSection";
import {
  PROBLEM_POINTS,
  SOLUTION_BENEFITS,
  HOW_IT_WORKS_STEPS,
  PRICING_PLANS,
  FAQS,
} from "./constants";

const iconMap: Record<string, React.ElementType> = {
  clock: Clock,
  "trending-down": TrendingDown,
  target: Target,
  "clipboard-check": ClipboardCheck,
  search: Search,
  send: Send,
  mic: Mic,
  "file-text": FileText,
};

type SignalTone = "positive" | "caution" | "negative";
type IllustrationVariant = "recruiter" | "hiring";

const HERO_SIGNALS: { label: string; value: string; tone: SignalTone }[] = [
  { label: "System Design Depth", value: "4.8 / 5", tone: "positive" },
  { label: "Ownership Evidence", value: "4.6 / 5", tone: "positive" },
  { label: "Risk Signal", value: "Needs scale follow-up", tone: "caution" },
];

const HERO_FLAGS: {
  title: string;
  description: string;
  tone: SignalTone;
}[] = [
  {
    title: "Green flag",
    description: "Led multi-region cache migration with hands-on execution.",
    tone: "positive",
  },
  {
    title: "Red flag",
    description: "Clarify production traffic scale during incident triage.",
    tone: "negative",
  },
];

const HERO_SCORE_LINES = [
  { label: "Communication clarity", value: 88 },
  { label: "Ownership depth", value: 84 },
  { label: "Risk callouts", value: 62 },
];

const HeroScorecard = () => (
  <div className="relative w-full max-w-xs rounded-[24px] border border-border-primary bg-surface-background p-5 shadow-warm">
    <div className="grain-overlay" />
    <div className="relative z-10 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-text-secondary">
            Scorecard
          </p>
          <h3 className="text-lg font-semibold text-text-primary">Jane Doe</h3>
          <p className="text-xs text-text-secondary">Senior Backend</p>
        </div>
        <span className="rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-surface-background">
          87 / 100
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-xs text-text-secondary">
        {HERO_SIGNALS.slice(0, 2).map((signal) => (
          <div key={signal.label}>
            <p className="mb-1 text-[10px] uppercase tracking-[0.3em]">
              {signal.label}
            </p>
            <div className="h-1 rounded-full bg-base-background">
              <div
                className="h-full rounded-full bg-brand-primary-cta"
                style={{
                  width: `${signal.tone === "positive" ? "90%" : "65%"}`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {HERO_SCORE_LINES.map((line) => (
          <div key={line.label}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-text-secondary">
              {line.label}
            </p>
            <div className="mt-1 h-1.5 rounded-full bg-base-background">
              <div
                className="h-full rounded-full bg-brand-primary-cta"
                style={{ width: `${line.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2 border-t border-border-primary pt-3 text-xs">
        {HERO_FLAGS.map((flag) => (
          <div key={flag.description} className="flex items-center gap-2">
            {flag.tone === "positive" ? (
              <CheckCircle className="h-4 w-4 text-brand-primary" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-brand-primary-cta" />
            )}
            <div className="h-2 w-24 rounded-full bg-base-background">
              <div
                className={`h-full rounded-full ${
                  flag.tone === "positive"
                    ? "bg-brand-primary"
                    : "bg-brand-primary-cta"
                }`}
                style={{ width: flag.tone === "positive" ? "80%" : "55%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SmoothVoiceWave = ({
  tone = "rose",
  className = "",
}: {
  tone?: "rose" | "light";
  className?: string;
}) => {
  const gradientId = useId();
  const stops =
    tone === "light"
      ? [
          { offset: "0%", color: "rgba(246, 242, 238, 0.9)" },
          { offset: "100%", color: "rgba(153, 193, 185, 0.8)" },
        ]
      : [
          { offset: "0%", color: "rgba(216, 140, 154, 0.8)" },
          { offset: "100%", color: "rgba(153, 193, 185, 0.85)" },
        ];

  return (
    <div className={`smooth-wave ${className}`} aria-hidden="true">
      <svg viewBox="0 0 360 90" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {stops.map((stop) => (
              <stop
                key={stop.offset}
                offset={stop.offset}
                stopColor={stop.color}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d="M5 45 Q35 20 65 45 T125 45 T185 45 T245 45 T305 45 Q335 70 355 45"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default function ApertureIQPage() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showDemoVideo, setShowDemoVideo] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}

      <section className="relative overflow-hidden bg-base-background text-text-primary">
        <div className="grain-overlay" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <FadeInSection>
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-text-secondary">
                    Adaptive voice interviews
                  </p>
                  <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                    The AI Interviewer Built for Engineering Teams
                  </h1>
                </div>
              </FadeInSection>
              <FadeInSection delay={80}>
                <p className="text-lg leading-relaxed text-text-secondary sm:text-xl">
                  Adaptive voice interviews that challenge vague answers,
                  distinguish ownership from participation, and deliver
                  competency-based scorecards. Without scheduling a single call.
                </p>
              </FadeInSection>
              <FadeInSection delay={140}>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                  <CTAButton
                    onClick={() => setShowWaitlistModal(true)}
                    variant="primary"
                    size="lg"
                    eventName="Hero CTA Click"
                    className="min-w-[200px]"
                  >
                    Start Free Trial
                  </CTAButton>
                  <CTAButton
                    onClick={() => setShowDemoVideo(true)}
                    variant="secondary"
                    size="lg"
                    eventName="Watch Demo Click"
                    className="min-w-[200px]"
                  >
                    <Play className="mr-2 inline h-5 w-5" />
                    Watch Demo
                  </CTAButton>
                </div>
              </FadeInSection>
            </div>
            <FadeInSection delay={120}>
              <div className="space-y-6">
                <div className="-mt-6 flex justify-center">
                  <HeroScorecard />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <div>
            <FadeInSection delay={200}>
              <div
                className="mt-6 max-w-xl rounded-2xl border border-border-primary p-4 text-sm text-text-primary backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(var(--surface-background-rgb), 0.8)",
                }}
              >
                Built by a former hiring decision-maker with experience at
                Netflix, Snap, and top startups.
              </div>
            </FadeInSection>
            <FadeInSection delay={200} className="flex justify-center">
              <SmoothVoiceWave />
            </FadeInSection>
          </div>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 2: Problem */}

      <section className="section-shell section-shell--surface bg-base-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-4 text-center text-4xl font-bold text-text-primary sm:text-5xl">
              Your recruiters are drowning in first-round screens
            </h2>
          </FadeInSection>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PROBLEM_POINTS.map((point, index) => {
              const IconComponent = iconMap[point.icon];

              return (
                <FadeInSection
                  key={index}
                  delay={index * 80}
                  className="text-center"
                >
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent">
                    <IconComponent className="h-8 w-8 text-brand-primary-cta" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-text-primary">
                    {point.title}
                  </h3>
                  <p className="leading-relaxed text-text-secondary">
                    {point.description}
                  </p>
                </FadeInSection>
              );
            })}
          </div>

          <FadeInSection delay={200}>
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-brand-primary-cta bg-surface-background p-6 text-center">
              <p className="text-lg font-semibold text-text-primary">
                Result: Your hiring managers waste time on weak candidates,
                strong engineers fall through, and your pipeline moves at the
                speed of calendar availability.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 3: Solution */}

      <section className="section-shell section-shell--base bg-base-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center">
              <h2 className="mb-4 text-4xl font-bold text-text-primary sm:text-5xl">
                Voice-Based Interviews That Adapt Like Your Best Hiring Manager
              </h2>
              <p className="text-xl text-text-secondary">
                On-demand technical screens with real-time follow-up questions.
                Two interview depths, engineered for IC roles.
              </p>
            </div>
          </FadeInSection>

          <div className="mt-12 space-y-16">
            {SOLUTION_BENEFITS.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              const variant: IllustrationVariant =
                index === 0 ? "recruiter" : "hiring";

              return (
                <FadeInSection
                  key={benefit.title}
                  delay={index * 120}
                  className={`flex flex-col gap-10 lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="w-full rounded-[32px] border border-border-primary bg-surface-background p-8 shadow-warm">
                    <div className="mb-6 flex items-start gap-4">
                      <div className="rounded-2xl bg-brand-primary p-3">
                        <IconComponent className="h-6 w-6 text-text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary">
                          {benefit.title}
                        </h3>
                        <p className="text-text-secondary">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {benefit.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-text-secondary"
                        >
                          <span className="mt-1 text-brand-primary">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInSection>
              );
            })}
          </div>

          <FadeInSection delay={300}>
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-brand-primary bg-surface-background p-6 text-center">
              <p className="text-lg font-semibold text-text-primary">
                Candidates click the link when they're ready.
                <br />
                No calendar Tetris. No waiting.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 4: How It Works */}

      <section className="section-shell section-shell--surface bg-base-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-16 text-center text-4xl font-bold text-text-primary sm:text-5xl">
              Three Steps. Zero Scheduling. Consistent Engineering Signal.
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((step) => {
              const IconComponent = iconMap[step.icon];

              return (
                <FadeInSection key={step.step} delay={step.step * 100}>
                  <div className="relative rounded-2xl border border-border-primary bg-surface-background p-8 shadow-warm">
                    <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-xl font-bold text-text-primary shadow-warm">
                      {step.step}
                    </div>
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border-primary bg-base-background">
                      <IconComponent className="h-8 w-8 text-brand-primary-cta" />
                    </div>
                    <h3 className="mb-3 text-center text-xl font-bold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-center leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 5: Feature Deep-Dive */}

      <section className="section-shell section-shell--base bg-base-background py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-4 text-center text-4xl font-bold text-text-primary sm:text-5xl">
              Engineered for Technical Recruiting Workflows
            </h2>
          </FadeInSection>
          <FadeInSection delay={80}>
            <p className="mb-12 text-center text-xl text-text-secondary">
              Four capabilities that set voice-based adaptive screening apart
              from static interview tools
            </p>
          </FadeInSection>
          <FadeInSection delay={120}>
            <div className="rounded-[32px] border border-border-primary bg-surface-background p-6 shadow-warm sm:p-8">
              <CollapsibleFeatures />
            </div>
          </FadeInSection>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 6: Scorecard Preview */}

      <section className="section-shell section-shell--surface bg-base-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-4 text-center text-4xl font-bold text-text-primary sm:text-5xl">
              Executive-Grade Scorecards with Engineering Rigor
            </h2>
          </FadeInSection>
          <FadeInSection delay={80}>
            <p className="mb-12 text-center text-xl text-text-secondary">
              Competency-based assessment with level calibration, transcript
              evidence, and follow-up topics. Built for engineering hiring
              managers who need signal, not summaries.
            </p>
          </FadeInSection>
          <FadeInSection delay={120}>
            <ScorecardPreview />
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="mt-8 text-center">
              <CTAButton
                onClick={() => setShowWaitlistModal(true)}
                variant="primary"
                size="lg"
                eventName="Scorecard CTA Click"
              >
                See these scorecards in your dashboard
              </CTAButton>
            </div>
          </FadeInSection>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 7: ROI Calculator */}

      <section className="section-shell section-shell--base bg-base-background py-20">
        <FadeInSection>
          <ROICalculator />
        </FadeInSection>

        <FadeInSection delay={120}>
          <div className="mt-12 text-center">
            <CTAButton
              onClick={() => setShowWaitlistModal(true)}
              variant="primary"
              size="lg"
              eventName="ROI CTA Click"
            >
              Start Saving Time—Get Started
            </CTAButton>
          </div>
        </FadeInSection>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 8: FAQ */}

      <section className="section-shell section-shell--surface bg-base-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-12 text-center text-4xl font-bold text-text-primary sm:text-5xl">
              Common questions
            </h2>
          </FadeInSection>
          <FadeInSection delay={100}>
            <CollapsibleFAQs faqs={FAQS} />
          </FadeInSection>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 9: Pricing */}

      <section className="section-shell section-shell--base bg-base-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-4 text-center text-4xl font-bold text-text-primary sm:text-5xl">
              Transparent Pricing. Pay Per Interview.
            </h2>
          </FadeInSection>
          <FadeInSection delay={80}>
            <p className="mb-12 text-center text-xl text-text-secondary">
              No subscriptions. No monthly minimums. Pay only for the interviews
              you conduct.
            </p>
          </FadeInSection>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <FadeInSection>
              <div className="rounded-[32px] border border-brand-primary bg-surface-background p-8 shadow-warm">
                <h3 className="mb-2 text-2xl font-bold text-text-primary">
                  {PRICING_PLANS.recruiter.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-brand-primary-cta">
                    ${PRICING_PLANS.recruiter.price}
                  </span>
                  <span className="ml-2 text-text-secondary">
                    per {PRICING_PLANS.recruiter.duration}
                  </span>
                </div>
                <ul className="mb-8 space-y-3">
                  {PRICING_PLANS.recruiter.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-text-secondary"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton
                  onClick={() => setShowWaitlistModal(true)}
                  variant="teal"
                  size="md"
                  eventName="Pricing Recruiter Click"
                  className="w-full"
                >
                  {PRICING_PLANS.recruiter.cta}
                </CTAButton>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div className="relative rounded-[32px] border border-brand-primary-cta bg-surface-background p-8 shadow-warm">
                <h3 className="mb-2 text-2xl font-bold text-text-primary">
                  {PRICING_PLANS.hiring.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-brand-primary-cta">
                    ${PRICING_PLANS.hiring.price}
                  </span>
                  <span className="ml-2 text-text-secondary">
                    per {PRICING_PLANS.hiring.duration}
                  </span>
                </div>
                <ul className="mb-8 space-y-3">
                  {PRICING_PLANS.hiring.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-text-secondary"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton
                  onClick={() => setShowWaitlistModal(true)}
                  variant="primary"
                  size="md"
                  eventName="Pricing Hiring Manager Click"
                  className="w-full"
                >
                  {PRICING_PLANS.hiring.cta}
                </CTAButton>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={200}>
            <div className="mt-12 space-y-2 text-center text-text-secondary">
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-primary" />
                14-day free trial available—no credit card required
              </p>
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-primary" />
                Add-ons include extra screens or premium support
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 10: Final CTA */}

      <section className="relative overflow-hidden bg-brand-primary py-20 text-surface-background">
        <div className="grain-overlay" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 opacity-70">
          <SmoothVoiceWave tone="light" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              Screen Every Engineering Candidate. Without Scheduling.
            </h2>
          </FadeInSection>
          <FadeInSection delay={80}>
            <p className="mb-10 text-xl">
              Voice-based adaptive interviews with competency-based scorecards.
              Built for IC engineering hiring.
            </p>
          </FadeInSection>
          <FadeInSection delay={140}>
            <CTAButton
              onClick={() => setShowWaitlistModal(true)}
              variant="primary"
              size="lg"
              eventName="Final CTA Click"
              className="mb-8"
            >
              Try Your First Interview Free
            </CTAButton>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 text-sm md:grid-cols-4">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free trial interview included</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Role-specific setup in minutes</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Integrates with your existing workflow</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>No contracts or commitments</span>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={260} className="flex">
            <div className="pointer-events-none mx-auto mt-10 opacity-80">
              <SmoothVoiceWave tone="light" />
            </div>
          </FadeInSection>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 11: Footer */}

      <footer className="bg-surface-background text-text-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left Column */}

            <div>
              <h3 className="text-2xl font-bold mb-2">ApertureIQ</h3>

              <p className="text-sm text-text-secondary mb-4">
                Voice-based technical screens for engineering teams
              </p>

              <p className="text-sm text-text-secondary-60">
                © 2025 ApertureIQ
              </p>
            </div>

            {/* Middle Column */}

            <div>
              <h4 className="font-semibold mb-4">Product</h4>

              <ul className="space-y-2 text-sm text-text-secondary">
                <li>
                  <a
                    href="#pricing"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a
                    href="#features"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#faq"
                    className="hover:opacity-100 transition-opacity"
                  >
                    FAQ
                  </a>
                </li>

                <li>
                  <a
                    href="#demo"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column */}

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>

              <div className="flex gap-4 mb-4">
                <a
                  href="#"
                  className="hover:opacity-100 text-text-secondary transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                <a
                  href="#"
                  className="hover:opacity-100 text-text-secondary transition-opacity"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>

                <a
                  href="#"
                  className="hover:opacity-100 text-text-secondary transition-opacity"
                  aria-label="Contact"
                >
                  <MessageSquare className="w-6 h-6" />
                </a>
              </div>

              <ul className="space-y-2 text-sm text-text-secondary">
                <li>
                  <a
                    href="#about"
                    className="hover:opacity-100 transition-opacity"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Contact Sales
                  </a>
                </li>

                <li>
                  <a
                    href="#support"
                    className="hover:opacity-100 transition-opacity"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border-primary pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary-60">
            <p>All rights reserved.</p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#terms" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </a>

              <a
                href="#privacy"
                className="hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </a>

              <a
                href="#cookies"
                className="hover:opacity-100 transition-opacity"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}

      <StickyButton onClick={() => setShowWaitlistModal(true)} />

      <WaitlistModal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
      />

      {/* Demo Video Modal */}

      {showDemoVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setShowDemoVideo(false)}
        >
          <div className="bg-surface-background rounded-lg max-w-4xl w-full aspect-video flex items-center justify-center">
            <p className="text-text-secondary text-xl">
              Demo Video Coming Soon
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
