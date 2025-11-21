import type { Metadata } from "next";
import { EmailCaptureForm } from "./EmailForm";

export const metadata: Metadata = {
  title: "Estate Beacon - Your Clear Path Through Estate Administration",
  description: "State-specific guidance for estate executors. Get the right checklist, proper sequencing, and tools to manage every aspect of estate settlement with confidence.",
  openGraph: {
    title: "Estate Beacon - Estate Administration Made Clear",
    description: "State-specific checklists, contact tracking, and step-by-step guidance for estate executors.",
    type: "website",
  },
};

export default function EstateBeacon() {
  const features = [
    {
      icon: "📋",
      title: "State-Specific Checklists",
      description: "Follow the exact sequence for your state—death certificates first, then probate, then institutions. No guesswork.",
    },
    {
      icon: "📞",
      title: "Institution Contact Log",
      description: "Track every call to banks, insurance companies, and agencies. Remember who you spoke with and what was said.",
    },
    {
      icon: "🏦",
      title: "Asset Inventory Tracker",
      description: "Catalog all accounts, property, and assets in one place. Know what you've found and what you're still looking for.",
    },
    {
      icon: "📄",
      title: "Secure Document Storage",
      description: "Keep death certificates, probate documents, and important paperwork organized and accessible when you need them.",
    },
    {
      icon: "👥",
      title: "Beneficiary Communication",
      description: "Send updates to family members and beneficiaries. Reduce the 'what's happening?' calls and emails.",
    },
    {
      icon: "⏰",
      title: "Deadline Reminders",
      description: "Never miss critical deadlines for probate filings, tax returns, or institutional notifications.",
    },
    {
      icon: "✉️",
      title: "Template Letters & Scripts",
      description: "Pre-written scripts for common situations. Know exactly what to say when contacting financial institutions.",
    },
    {
      icon: "✓",
      title: "Status Tracking",
      description: "See at a glance which institutions you've contacted, which are in progress, and which are complete.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Select Your State",
      description: "Get a customized checklist based on your state's specific probate laws and requirements.",
    },
    {
      step: "2",
      title: "Follow the Sequence",
      description: "Work through tasks in the right order. We'll tell you exactly what to do next, and why it matters.",
    },
    {
      step: "3",
      title: "Track Everything",
      description: "Log contacts, store documents, manage deadlines, and communicate with beneficiaries—all in one place.",
    },
  ];

  const faqs = [
    {
      question: "Do I need this if I have a lawyer?",
      answer: "Many executors work with lawyers but still handle the day-to-day coordination. Estate Beacon helps you stay organized, track your progress, and know what questions to ask your attorney.",
    },
    {
      question: "How is this different from a regular task manager?",
      answer: "Generic tools don't understand estate administration. Estate Beacon provides state-specific checklists in the proper sequence, templates for financial institutions, and context for why each step matters.",
    },
    {
      question: "What if I've already started the process?",
      answer: "No problem. You can mark completed tasks and pick up where you are. The checklist will help ensure you haven't missed anything critical.",
    },
    {
      question: "How much does it cost?",
      answer: "Estate Beacon is $400 per estate. One flat fee for complete access throughout the entire estate settlement process—typically 6-18 months.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes. All documents and information are encrypted and stored securely. Your data is private and will never be shared.",
    },
    {
      question: "When will this be available?",
      answer: "We're currently in development. Join the waitlist to be notified when we launch and receive early access pricing.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4a8177] to-[#2f5952]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="text-[#c4d9d3] text-sm font-medium tracking-wide uppercase">
                For Estate Executors
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Clear Path Through<br />Estate Administration
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Being named executor is overwhelming, especially while grieving. Get state-specific checklists,
              proper task sequencing, and tools to manage every aspect of estate settlement with confidence.
            </p>

            {/* Email Capture Form */}
            <div className="max-w-md mx-auto mb-6">
              <EmailCaptureForm />
            </div>

            <p className="text-sm text-white/70">
              Join the waitlist • Get notified at launch • Early access pricing
            </p>
          </div>
        </div>

        {/* Subtle wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
        }}></div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            You Shouldn&apos;t Have to Figure This Out Alone
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Every executor faces the same questions: <em>Where do I start? Am I doing this in the right order?
            Did I contact everyone? What do I tell the beneficiaries?</em>
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            Estate Beacon turns the chaos of estate administration into a clear, step-by-step process
            tailored to your state&apos;s requirements.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f4f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Purpose-built tools for the unique challenges of estate administration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Estate Beacon Works
            </h2>
            <p className="text-xl text-gray-600">
              A clear process for an unclear time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {howItWorks.map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4a8177] text-white text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why State-Specific Matters */}
      <section className="py-20 bg-[#f4f7f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why State-Specific Guidance Matters
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Estate laws vary dramatically from state to state. California&apos;s probate process is completely
                different from Texas or New York. Filing deadlines, required forms, and even the order of operations
                changes based on where the estate is being settled.
              </p>
              <p>
                <strong>Generic advice can lead to costly mistakes.</strong> Missing a deadline or filing forms
                in the wrong order can delay the process by months—or worse, create legal liability.
              </p>
              <p>
                Estate Beacon provides checklists built for your specific state, with proper sequencing and
                deadline reminders tailored to your jurisdiction&apos;s requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-8 last:border-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4a8177] to-[#2f5952]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Bring Clarity to the Process?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join the waitlist and be the first to know when Estate Beacon launches.
            Early subscribers receive special pricing.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCaptureForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2937] text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">
              &copy; 2025 Estate Beacon. All rights reserved.
            </p>
            <div className="mt-4 space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
