"use client";

import Image from "next/image";
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

const encodePublicAssetPath = (fileName: string) =>
  `/${encodeURIComponent(fileName).replace(/%2F/g, "/")}`;

const ILLUSTRATIONS = {
  recruiter: encodePublicAssetPath(
    "Nature and Ecology _ birds, flying, wildlife, nature, Vector illustration.svg"
  ),
  hiring: encodePublicAssetPath(
    "Health and Wellness _ body, pain, massage, treatment, Vector illustration.svg"
  ),
  overwhelmed: encodePublicAssetPath(
    "Lifestyle and Leisure _ sleeping, rest, relaxation, man, silhouette, Vector illustration.svg"
  ),
};

const VARIANT_ILLUSTRATIONS: Record<
  IllustrationVariant,
  { src: string; alt: string }
> = {
  recruiter: {
    src: ILLUSTRATIONS.recruiter,
    alt: "Nature illustration representing nimble recruiter workflows",
  },
  hiring: {
    src: ILLUSTRATIONS.hiring,
    alt: "Health-inspired illustration symbolizing hiring manager focus",
  },
};

const VARIANT_IMAGE_WRAPPERS: Record<IllustrationVariant, string> = {
  recruiter: "bg-[rgba(216,140,154,0.12)]",
  hiring: "bg-[rgba(153,193,185,0.15)]",
};

const HeroBackdrop = () => {
  const topWaveGradientId = useId();
  const bottomWaveGradientId = useId();
  const glowGradientId = useId();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, rgba(216,140,154,0.22) 0%, transparent 40%), radial-gradient(circle at 82% 12%, rgba(153,193,185,0.22) 0%, transparent 34%), radial-gradient(circle at 65% 76%, rgba(242,208,169,0.18) 0%, transparent 50%), linear-gradient(135deg, #fffaf6 0%, #f4e5d8 42%, #e9f1ed 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-[-12%] top-[-14%] h-[70%] opacity-85 mix-blend-screen">
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient
              id={topWaveGradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(216,140,154,0.8)" />
              <stop offset="50%" stopColor="rgba(242,208,169,0.75)" />
              <stop offset="100%" stopColor="rgba(153,193,185,0.8)" />
            </linearGradient>
            <linearGradient
              id={glowGradientId}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.52)" />
              <stop offset="65%" stopColor="rgba(255,255,255,0.06)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M0 260 C 260 180 520 380 820 310 C 1140 240 1360 340 1600 250 L1600 0 L0 0 Z"
            fill={`url(#${topWaveGradientId})`}
          />
          <path
            d="M0 240 C 200 160 520 280 760 250 C 1100 210 1320 280 1600 200 L1600 0 L0 0 Z"
            fill={`url(#${glowGradientId})`}
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-x-[-12%] bottom-[-12%] h-[78%] opacity-90 mix-blend-normal">
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient
              id={bottomWaveGradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(153,193,185,0.9)" />
              <stop offset="45%" stopColor="rgba(242,208,169,0.75)" />
              <stop offset="100%" stopColor="rgba(216,140,154,0.85)" />
            </linearGradient>
          </defs>
          <path
            d="M0 520 C 240 640 520 540 820 620 C 1120 700 1340 620 1600 700 L1600 900 L0 900 Z"
            fill={`url(#${bottomWaveGradientId})`}
          />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 32% 60%, rgba(216,140,154,0.12) 0%, transparent 42%), radial-gradient(circle at 72% 62%, rgba(153,193,185,0.12) 0%, transparent 40%), radial-gradient(circle at 50% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)",
        }}
      />
    </div>
  );
};

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
  <div className="relative w-full max-w-[280px] rounded-[24px] border border-border-primary bg-surface-background p-5 shadow-warm">
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

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}

      <section className="relative overflow-hidden bg-base-background text-text-primary">
        <HeroBackdrop />
        <div className="grain-overlay" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 sm:py-16">
          <div className="pointer-events-none absolute left-4 top-8 hidden h-24 w-24 rounded-full bg-[rgba(153,193,185,0.25)] blur-3xl lg:block" />
          <div className="pointer-events-none absolute right-10 top-6 hidden h-28 w-28 rounded-full bg-[rgba(216,140,154,0.22)] blur-3xl lg:block" />
          <div className="grid items-center gap-12 lg:grid-cols-3">
            <div className="space-y-8 col-span-2">
              <FadeInSection>
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(60,42,47,0.08)] bg-surface-background px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-text-secondary shadow-warm backdrop-blur">
                    <span className="flex h-2 w-2 rounded-full bg-brand-primary" />
                    Adaptive voice interviews
                    <span className="rounded-full bg-[rgba(216,140,154,0.14)] px-2 py-1 text-[10px] font-semibold text-text-primary">
                      Built for engineering
                    </span>
                  </div>
                  <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                    The AI Interviewer Built for Engineering Teams
                  </h1>
                </div>
              </FadeInSection>
              <FadeInSection delay={80}>
                <p className="text-lg leading-relaxed text-text-secondary sm:text-xl">
                  Adaptive voice interviews that expose real ownership and
                  deliver evidence-backed scorecards—without scheduling a single
                  call.
                </p>
              </FadeInSection>
              <FadeInSection delay={120}>
                <div className="flex flex-row flex-nowrap items-center gap-4">
                  <CTAButton
                    onClick={() => setShowWaitlistModal(true)}
                    variant="primary"
                    size="lg"
                    eventName="Hero CTA Click"
                    className="min-w-[200px]"
                  >
                    Sign Up Now
                  </CTAButton>
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-text-secondary">
                  <span className="inline-flex h-2 w-2 rounded-full bg-brand-primary" />
                  More signal. Zero scheduling.
                </div>
              </FadeInSection>
            </div>
            <FadeInSection delay={140}>
              <div className="relative -mt-6 flex justify-center lg:justify-end">
                <div className="pointer-events-none absolute -right-16 bottom-10 hidden h-32 w-32 rounded-full bg-[rgba(216,140,154,0.28)] blur-3xl lg:block" />
                <div className="relative flex w-full max-w-[640px] flex-wrap items-center justify-center gap-4 xl:max-w-[300px] xl:flex-col xl:items-end">
                  <HeroScorecard />
                  <div
                    className="w-full max-w-[280px] rounded-2xl border border-border-primary bg-surface-background p-4 text-sm shadow-warm backdrop-blur"
                    style={{
                      backgroundColor:
                        "rgba(var(--surface-background-rgb), 0.92)",
                    }}
                  >
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-text-secondary">
                      <Mic className="h-4 w-4 text-brand-primary" />
                      Your best interviewer on repeat.
                    </div>
                    <p className="mt-2 text-text-secondary">
                      Same rigor. Same standards. Zero drift. Across every
                      single candidate.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 2: Problem */}

      <section className="section-shell section-shell--surface bg-base-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
            <FadeInSection className="w-full lg:w-1/2">
              <h2 className="mb-6 text-center text-4xl font-bold text-text-primary sm:text-5xl lg:text-left">
                Your recruiters are drowning in first-round screens
              </h2>
            </FadeInSection>
            <FadeInSection
              delay={80}
              className="flex w-full justify-center lg:w-1/2"
            >
              <div className="flex justify-center">
                <Image
                  src={ILLUSTRATIONS.overwhelmed}
                  alt="Illustration of overwhelmed recruiter resting to highlight screening fatigue"
                  width={320}
                  height={220}
                  className="h-auto w-full max-w-[260px] rounded-[32px] shadow-warm"
                  sizes="(min-width: 1024px) 280px, 60vw"
                />
              </div>
            </FadeInSection>
          </div>
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
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 3: Solution */}

      <section className="section-shell section-shell--base bg-base-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center">
              <h2 className="mb-4 text-4xl font-bold text-text-primary sm:text-5xl">
                Two AI-Led Screens, One Consistent Bar
              </h2>
              <p className="text-xl text-text-secondary">
                Adaptive voice interviews with real follow-ups—no calendars, no
                drift.
              </p>
            </div>
          </FadeInSection>

          <div className="mt-12 space-y-16">
            {SOLUTION_BENEFITS.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              const variant: IllustrationVariant =
                index === 0 ? "recruiter" : "hiring";
              const variantIllustration = VARIANT_ILLUSTRATIONS[variant];

              return (
                <FadeInSection
                  key={benefit.title}
                  delay={index * 120}
                  className={`flex flex-col gap-10 lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="w-full flex-1 rounded-[32px] border border-border-primary bg-surface-background p-8 shadow-warm">
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
                  <div className="flex w-full flex-1 justify-center">
                    <div
                      className={`flex w-full max-w-[260px] justify-center rounded-[36px] p-4 shadow-warm ${VARIANT_IMAGE_WRAPPERS[variant]}`}
                    >
                      <Image
                        src={variantIllustration.src}
                        alt={variantIllustration.alt}
                        width={280}
                        height={200}
                        className="h-auto w-full max-w-[220px]"
                        sizes="(min-width: 1024px) 220px, 60vw"
                      />
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 4: How It Works */}

      <section className="section-shell section-shell--surface bg-base-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-16 text-center text-4xl font-bold text-text-primary sm:text-5xl">
              How It Works in Three Quick Steps
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
              Four capabilities that keep signal high without slowing you down
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
              Evidence-backed scorecards with level calibration and transcript
              quotes—signal, not summaries.
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
        </div>
      </section>
      <div className="section-divider" aria-hidden="true" />

      {/* Section 10: Final CTA */}

      <section className="relative overflow-hidden bg-brand-primary py-20 text-surface-background">
        <div className="grain-overlay" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              Screen Every Engineering Candidate. Without Scheduling.
            </h2>
          </FadeInSection>
          <FadeInSection delay={80}>
            <p className="mb-10 text-xl">
              Voice-based adaptive interviews with competency-based
              scorecards—built for IC engineering.
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
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 text-sm md:grid-cols-3">
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
    </div>
  );
}
