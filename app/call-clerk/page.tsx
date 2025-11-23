"use client";

import React, { useState } from "react";
import {
  Phone,
  Zap,
  Calendar,
  MessageSquare,
  MessageCircle,
  FileText,
  PhoneForwarded,
  Settings,
  Wrench,
  Moon,
  DollarSign,
  TrendingDown,
  StarOff,
  PhoneIncoming,
  Bot,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import CTAButton from "./CTAButton";
import CollapsibleFAQs from "./CollapsibleFAQs";
import StickyButton from "./StickyButton";
import SignUpModal from "./SignUpModal";
import DemoRequestModal from "./DemoRequestModal";
import {
  PRICING_PLANS,
  FAQS,
  FEATURES,
  PROBLEM_POINTS,
  HOW_IT_WORKS_STEPS,
} from "./constants";

// Icon mapping
const iconMap: { [key: string]: any } = {
  zap: Zap,
  calendar: Calendar,
  "messages-square": MessageSquare,
  "message-circle": MessageCircle,
  "file-text": FileText,
  "phone-forwarded": PhoneForwarded,
  settings: Settings,
  phone: Phone,
  wrench: Wrench,
  moon: Moon,
  "dollar-sign": DollarSign,
  "trending-down": TrendingDown,
  "star-off": StarOff,
  "phone-incoming": PhoneIncoming,
  bot: Bot,
  "check-circle": CheckCircle,
};

export default function CallClerkLandingPage() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const handleCTAClick = (eventName: string) => {
    setShowSignUpModal(true);
  };

  const handleDemoClick = () => {
    setShowDemoModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Urgency Banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[#c2410c] to-[#ea580c] text-white py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2 flex-1 justify-center">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold text-sm sm:text-base">
                Launch Special: Lock in 20% off for early adopters!
              </span>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="text-white hover:text-gray-200 ml-4"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className={`relative overflow-hidden ${showBanner ? "pt-20" : "pt-8"}`}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c2410c] via-[#ea580c] to-[#f97316] opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#fb923c]/30 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white space-y-8">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold">Call Clerk</h1>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Never Miss Another $1,000 Job
                </h2>
                <p className="text-xl sm:text-2xl text-orange-100 leading-relaxed">
                  24/7 AI receptionist that answers every call, books jobs, and
                  captures leads—even when you're under a sink.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  onClick={() => handleCTAClick("Hero - Start Trial")}
                  variant="secondary"
                  size="lg"
                  eventName="Hero CTA - Start Trial"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Start Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </CTAButton>
                <button
                  onClick={handleDemoClick}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200"
                >
                  See How It Works
                </button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2 text-orange-100">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">14-day trial</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-100">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Money back guarantee</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-100">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Get started in 15 minutes</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image Placeholder */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Placeholder for hero image */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-8 aspect-square flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Phone className="w-24 h-24 text-white/60 mx-auto" />
                      <p className="text-white/60 text-sm">
                        [Hero image: Tradesperson on jobsite with phone ringing]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 sm:h-16 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="currentColor"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="currentColor"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Most home service companies miss 30-50% of calls
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every missed call is money left on the table. Here's why it happens:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PROBLEM_POINTS.map((point, index) => {
              const Icon = iconMap[point.icon];
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-[#f97316] to-[#fb923c] p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-800 font-medium leading-relaxed pt-1">
                      {point.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, seamless, and totally automated
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#fb923c] text-white rounded-full text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                    <Icon className="w-12 h-12 text-[#f97316] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  {/* Arrow (hidden on mobile and last item) */}
                  {index < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-[#fb923c]">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Capture Every Lead
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional call handling without the overhead
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-[#f97316] to-[#fb923c] w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {PRICING_PLANS.starter.name}
                </h3>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ${PRICING_PLANS.starter.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {PRICING_PLANS.starter.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <CTAButton
                onClick={() => handleCTAClick("Pricing - Starter")}
                variant="secondary"
                size="lg"
                className="w-full"
                eventName="Pricing CTA - Starter"
              >
                {PRICING_PLANS.starter.cta}
              </CTAButton>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-2xl border-2 border-[#f97316] p-8 relative">
              {/* Badge */}
              {PRICING_PLANS.pro.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {PRICING_PLANS.pro.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {PRICING_PLANS.pro.name}
                </h3>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ${PRICING_PLANS.pro.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {PRICING_PLANS.pro.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <CTAButton
                onClick={() => handleCTAClick("Pricing - Pro")}
                variant="primary"
                size="lg"
                className="w-full"
                eventName="Pricing CTA - Pro"
              >
                {PRICING_PLANS.pro.cta}
              </CTAButton>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 text-sm">
            Additional minutes at $0.20/min. Cancel anytime.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Call Clerk
            </p>
          </div>

          <CollapsibleFAQs faqs={FAQS} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#c2410c] via-[#ea580c] to-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Stop Losing Money From Missed Calls
          </h2>
          <p className="text-xl sm:text-2xl text-orange-100 mb-8 leading-relaxed">
            Join hundreds of home service pros who never miss a call again.
          </p>

          <CTAButton
            onClick={() => handleCTAClick("Final CTA")}
            variant="secondary"
            size="lg"
            className="mb-8"
            eventName="Final CTA - Start Trial"
          >
            Start Your Trial
          </CTAButton>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-200" />
              <span className="text-orange-100">14-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-orange-200" />
              <span className="text-orange-100">Money back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-orange-200" />
              <span className="text-orange-100">Get started in 15 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="w-6 h-6" />
                <span className="text-xl font-bold">Call Clerk</span>
              </div>
              <p className="text-gray-400 text-sm">
                Never miss another call. 24/7 AI receptionist for home service
                professionals.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button
                    onClick={() => handleCTAClick("Footer")}
                    className="hover:text-white transition-colors"
                  >
                    Start Trial
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleDemoClick}
                    className="hover:text-white transition-colors"
                  >
                    Request Demo
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">
                Questions? We'd love to hear from you.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Call Clerk. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      <StickyButton onClick={() => handleCTAClick("Sticky Button")}>
        Start Trial
      </StickyButton>

      {/* Modals */}
      <SignUpModal
        isOpen={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
      />
      <DemoRequestModal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
      />
    </div>
  );
}

