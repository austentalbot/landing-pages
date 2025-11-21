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
      question: "How quickly can I get started?",
      answer: "Once you sign up, we'll guide you through the setup process for your specific state. You'll receive your customized checklist and can start organizing your estate administration immediately.",
    },
  ];

  return (
    <main className="min-h-screen bg-white antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3d7068] via-[#4a8177] to-[#2f5952]">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <div className="inline-block mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#d4e5df] text-xs font-semibold tracking-[0.15em] uppercase">
                For Estate Executors
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Your Clear Path Through<br />Estate Administration
            </h1>
            <p className="text-xl sm:text-2xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Being named executor is overwhelming, especially while grieving. Get state-specific checklists,
              proper task sequencing, and tools to manage every aspect of estate settlement with confidence.
            </p>

            {/* Email Capture Form */}
            <div className="max-w-md mx-auto mb-8">
              <EmailCaptureForm />
            </div>

            <p className="text-sm text-white/60 font-light tracking-wide">
              Get started today • State-specific guidance • One flat fee
            </p>
          </div>
        </div>

        {/* Subtle wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
        }}></div>
      </section>

      {/* Problem Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            You Shouldn&apos;t Have to<br className="hidden sm:block" /> Figure This Out Alone
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
            Every executor faces the same questions: <em className="text-gray-800 font-normal">Where do I start? Am I doing this in the right order?
            Did I contact everyone? What do I tell the beneficiaries?</em>
          </p>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
            Estate Beacon turns the chaos of estate administration into a clear, step-by-step process
            tailored to your state&apos;s requirements.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Everything You Need in One Place
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Purpose-built tools for the unique challenges of estate administration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#6b9688]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-5 transition-transform group-hover:scale-110 duration-300">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              How Estate Beacon Works
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 font-light">
              A clear process for an unclear time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {howItWorks.map((item, i) => (
              <div key={i} className="relative text-center">
                {/* Connection line (hidden on mobile, shown between steps on desktop) */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-[#4a8177] to-[#6b9688]/30"></div>
                )}

                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4a8177] to-[#3d7068] text-white text-2xl font-bold mb-6 shadow-lg shadow-[#4a8177]/20">
                  <span className="relative">{item.step}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why State-Specific Matters */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 sm:p-14 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4a8177] to-[#3d7068] mb-8">
              <span className="text-3xl">🗺️</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
              Why State-Specific Guidance Matters
            </h2>
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Estate laws vary dramatically from state to state. California&apos;s probate process is completely
                different from Texas or New York. Filing deadlines, required forms, and even the order of operations
                changes based on where the estate is being settled.
              </p>
              <p className="text-gray-900">
                <strong className="font-semibold">Generic advice can lead to costly mistakes.</strong> Missing a deadline or filing forms
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
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-20 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-10 last:border-0 last:pb-0">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[#3d7068] via-[#4a8177] to-[#2f5952]">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Ready to Bring Clarity<br className="hidden sm:block" /> to the Process?
          </h2>
          <p className="text-xl sm:text-2xl text-white/85 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Get your state-specific estate administration guide.
            One flat fee of $400 for complete access throughout the process.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCaptureForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f2e] text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">Estate Beacon</span>
            </div>
            <p className="text-sm font-light mb-6">
              &copy; 2025 Estate Beacon. All rights reserved.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <a href="#" className="hover:text-white transition-colors font-light">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors font-light">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
