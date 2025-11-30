"use client";

import { useState } from "react";
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
} from "lucide-react";
import CTAButton from "./CTAButton";
import StickyButton from "./StickyButton";
import CollapsibleFAQs from "./CollapsibleFAQs";
import CollapsibleFeatures from "./CollapsibleFeatures";
import ROICalculator from "./ROICalculator";
import ScorecardPreview from "./ScorecardPreview";
import WaitlistModal from "./WaitlistModal";
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

export default function ApertureIQPage() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showDemoVideo, setShowDemoVideo] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <section className="relative bg-gradient-to-br from-[#99C1B9] to-[#D88C9A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Interview every engineer.
              <br />
              In half the time.
            </h1>
            <p className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-95">
              AI-powered screening interviews that ask the right follow-ups, score consistently, and surface the signal your team needs—without the scheduling bottleneck.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                <Play className="w-5 h-5 inline mr-2" />
                Watch Demo
              </CTAButton>
            </div>

            <div className="mt-12 text-sm opacity-90 bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
              Built by a former hiring decision-maker with experience at Netflix, Snap, and top startups.
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#3C2A2F] mb-4">
            Your recruiters are drowning in first-round screens
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {PROBLEM_POINTS.map((point, index) => {
              const IconComponent = iconMap[point.icon];
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F1E3D3] to-[#F2D0A9] rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-[#D88C9A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3C2A2F] mb-3">
                    {point.title}
                  </h3>
                  <p className="text-[#446B67] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#F1E3D3] to-[#F2D0A9] border-l-4 border-[#D88C9A] rounded-lg p-6 text-center max-w-3xl mx-auto">
            <p className="text-[#3C2A2F] font-semibold text-lg">
              Result: You hire too slowly, pass on hidden gems, and waste hiring manager time on weak candidates.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Solution */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#3C2A2F] mb-4">
              Meet your AI interview partner
            </h2>
            <p className="text-xl text-[#446B67]">
              Two types of interviews. Zero scheduling. Built for IC engineering roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SOLUTION_BENEFITS.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#E5D8D0] hover:border-[#D88C9A] transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-[#99C1B9] to-[#D88C9A] p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#3C2A2F]">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-[#446B67] mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#446B67]">
                        <span className="text-[#99C1B9] mt-1">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 bg-[#F6F2EE] rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-[#3C2A2F] font-semibold text-lg">
              Candidates click the link when they're ready. No calendar Tetris. No waiting.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#3C2A2F] mb-16">
            From application to decision in 24 hours
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((step) => {
              const IconComponent = iconMap[step.icon];
              return (
                <div key={step.step} className="relative">
                  <div className="bg-gradient-to-br from-[#F1E3D3] to-white rounded-xl shadow-lg p-8 border-2 border-[#E5D8D0]">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#99C1B9] to-[#D88C9A] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto shadow-md">
                      <IconComponent className="w-8 h-8 text-[#D88C9A]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#3C2A2F] mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-[#446B67] text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Feature Deep-Dive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#3C2A2F] mb-4">
            Built for how engineering recruiting actually works
          </h2>
          <p className="text-center text-xl text-[#446B67] mb-12">
            Explore the features that make ApertureIQ different
          </p>
          <CollapsibleFeatures />
        </div>
      </section>

      {/* Section 6: Scorecard Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#3C2A2F] mb-4">
            See what you'll actually get
          </h2>
          <p className="text-xl text-center text-[#446B67] mb-12">
            Every candidate gets a comprehensive scorecard with actionable insights
          </p>
          <ScorecardPreview />
          <div className="text-center mt-8">
            <CTAButton
              onClick={() => setShowWaitlistModal(true)}
              variant="primary"
              size="lg"
              eventName="Scorecard CTA Click"
            >
              Get scorecards like this for your candidates
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Section 7: ROI Calculator */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <ROICalculator />
        <div className="text-center mt-12">
          <CTAButton
            onClick={() => setShowWaitlistModal(true)}
            variant="primary"
            size="lg"
            eventName="ROI CTA Click"
          >
            Start Saving Time—Get Started
          </CTAButton>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#3C2A2F] mb-12">
            Common questions
          </h2>
          <CollapsibleFAQs faqs={FAQS} />
        </div>
      </section>

      {/* Section 9: Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#3C2A2F] mb-4">
            Pay only for the interviews you need
          </h2>
          <p className="text-center text-xl text-[#446B67] mb-12">
            No monthly commitments. Only pay for what you use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Recruiter Screen */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-[#E5D8D0] hover:border-[#99C1B9] transition-all">
              <h3 className="text-2xl font-bold text-[#3C2A2F] mb-2">
                {PRICING_PLANS.recruiter.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#D88C9A]">
                  ${PRICING_PLANS.recruiter.price}
                </span>
                <span className="text-[#446B67] ml-2">
                  per {PRICING_PLANS.recruiter.duration}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {PRICING_PLANS.recruiter.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#446B67]">
                    <CheckCircle className="w-5 h-5 text-[#99C1B9] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <CTAButton
                onClick={() => setShowWaitlistModal(true)}
                variant="secondary"
                size="md"
                eventName="Pricing Recruiter Click"
                className="w-full"
              >
                {PRICING_PLANS.recruiter.cta}
              </CTAButton>
            </div>

            {/* Hiring Manager Screen */}
            <div className="bg-gradient-to-br from-[#F1E3D3] to-white rounded-xl shadow-xl p-8 border-2 border-[#D88C9A] relative">
              {PRICING_PLANS.hiring.badge && (
                <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#99C1B9] to-[#D88C9A] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {PRICING_PLANS.hiring.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#3C2A2F] mb-2">
                {PRICING_PLANS.hiring.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#D88C9A]">
                  ${PRICING_PLANS.hiring.price}
                </span>
                <span className="text-[#446B67] ml-2">
                  per {PRICING_PLANS.hiring.duration}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {PRICING_PLANS.hiring.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#446B67]">
                    <CheckCircle className="w-5 h-5 text-[#99C1B9] flex-shrink-0 mt-0.5" />
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
          </div>

          <div className="mt-12 text-center space-y-2 text-[#446B67]">
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#99C1B9]" />
              14-day free trial available—no credit card required
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#99C1B9]" />
              Add-ons include extra screens or premium support
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#99C1B9] to-[#D88C9A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Start interviewing smarter today
          </h2>
          <p className="text-xl mb-10 opacity-95">
            Screen faster, evaluate smarter, and focus on the candidates who matter most.
          </p>

          <CTAButton
            onClick={() => setShowWaitlistModal(true)}
            variant="primary"
            size="lg"
            eventName="Final CTA Click"
            className="mb-8"
          >
            Start Free Trial—No Credit Card Required
          </CTAButton>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm opacity-90">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free demo interview</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Setup in 10 minutes</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Works with your workflow</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Footer */}
      <footer className="bg-[#3C2A2F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold mb-2">ApertureIQ</h3>
              <p className="text-sm opacity-75 mb-4">
                AI interviewing for IC engineering roles
              </p>
              <p className="text-sm opacity-60">© 2025 ApertureIQ</p>
            </div>

            {/* Middle Column */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#pricing" className="hover:opacity-100 transition-opacity">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:opacity-100 transition-opacity">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:opacity-100 transition-opacity">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:opacity-100 transition-opacity">
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
                  className="hover:opacity-100 opacity-75 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:opacity-100 opacity-75 transition-opacity"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:opacity-100 opacity-75 transition-opacity"
                  aria-label="Contact"
                >
                  <MessageSquare className="w-6 h-6" />
                </a>
              </div>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#about" className="hover:opacity-100 transition-opacity">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:opacity-100 transition-opacity">
                    Contact Sales
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:opacity-100 transition-opacity">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
            <p>All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#terms" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="#privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#cookies" className="hover:opacity-100 transition-opacity">
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
          <div className="bg-white rounded-lg max-w-4xl w-full aspect-video flex items-center justify-center">
            <p className="text-[#446B67] text-xl">Demo Video Coming Soon</p>
          </div>
        </div>
      )}
    </div>
  );
}
