import type { Metadata } from "next";
import { Questionnaire } from "./Questionnaire";
import { CollapsibleFAQs } from "./CollapsibleFAQs";

export const metadata: Metadata = {
  title: "Estate Beacon - Your Clear Path Through Estate Administration",
  description:
    "State-specific guidance for estate executors. Get the right checklist, proper sequencing, and tools to manage every aspect of estate settlement with confidence.",
  openGraph: {
    title: "Estate Beacon - Estate Administration Made Clear",
    description:
      "State-specific checklists, contact tracking, and step-by-step guidance for estate executors.",
    type: "website",
  },
};

export default function EstateBeacon() {
  const features = [
    {
      icon: "📋",
      title: "State-Specific Checklists",
      description:
        "Follow the exact sequence for your state—death certificates first, then probate, then institutions. No guesswork.",
    },
    {
      icon: "📞",
      title: "Institution Contact Log",
      description:
        "Track every call to banks, insurance companies, and agencies. Remember who you spoke with and what was said.",
    },
    {
      icon: "🏦",
      title: "Asset Inventory Tracker",
      description:
        "Catalog all accounts, property, and assets in one place. Know what you've found and what you're still looking for.",
    },
    {
      icon: "📄",
      title: "Secure Document Storage",
      description:
        "Keep death certificates, probate documents, and important paperwork organized and accessible when you need them.",
    },
    {
      icon: "👥",
      title: "Beneficiary Communication",
      description:
        "Send updates to family members and beneficiaries. Reduce the 'what's happening?' calls and emails.",
    },
    {
      icon: "⏰",
      title: "Deadline Reminders",
      description:
        "Never miss critical deadlines for probate filings, tax returns, or institutional notifications.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Select Your State",
      description:
        "Get a customized checklist based on your state's specific probate laws and requirements.",
    },
    {
      step: "2",
      title: "Follow the Sequence",
      description:
        "Work through tasks in the right order. We'll tell you exactly what to do next, and why it matters.",
    },
    {
      step: "3",
      title: "Track Everything",
      description:
        "Log contacts, store documents, manage deadlines, and communicate with beneficiaries—all in one place.",
    },
  ];

  const faqs = [
    {
      question: "Do I need this if I have a lawyer?",
      answer:
        "Many executors work with lawyers but still handle the day-to-day coordination. Estate Beacon helps you stay organized, track your progress, and know what questions to ask your attorney—potentially saving you billable hours. The cost is fully reimbursable from the estate.",
    },
    {
      question: "How is this different from a regular task manager?",
      answer:
        "Generic tools don't understand estate administration. Estate Beacon provides state-specific checklists in the proper sequence, templates for financial institutions, and context for why each step matters.",
    },
    {
      question: "What if I've already started the process?",
      answer:
        "No problem. You can mark completed tasks and pick up where you are. The checklist will help ensure you haven't missed anything critical.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Estate Beacon is $199 per estate—a one-time flat fee for complete access throughout the entire settlement process (typically 6-18 months). This is a qualified estate expense and is fully reimbursable from the estate, so you don't pay out of pocket.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. All documents and information are encrypted and stored securely. Your data is private and will never be shared.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Once you sign up, we'll guide you through the setup process for your specific state. You'll receive your customized checklist and can start organizing your estate administration immediately.",
    },
  ];

  return (
    <main className="min-h-screen bg-white antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2d5650] via-[#3d7068] via-[#4a8177] to-[#5a9284]">
        {/* Layered gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f3d38]/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a8177]/20 via-transparent to-[#2f5952]/30"></div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Additional texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            {/* Logo + Brand Name */}
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 justify-center mb-1">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer waves */}
                  <circle
                    cx="30"
                    cy="30"
                    r="28"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.2"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="22"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.4"
                  />
                  {/* Inner beacon light */}
                  <circle cx="30" cy="30" r="14" fill="white" opacity="0.9" />
                  <circle cx="30" cy="30" r="8" fill="white" />
                  {/* Center dot */}
                  <circle cx="30" cy="30" r="3" fill="#2f5952" />
                </svg>
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  Estate Beacon
                </span>
              </div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#d4e5df] text-xs font-semibold tracking-[0.15em] uppercase">
                For Estate Executors
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white mb-5 leading-[1.1] tracking-tight">
              Your Clear Path Through
              <br />
              Estate Administration
            </h1>
            <p className="text-xl sm:text-2xl text-white/85 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
              Being named executor is overwhelming, especially while grieving.
              <br />
              Get state-specific guidance & step-by-step tools to settle the
              estate with confidence.
            </p>

            {/* Get Started Button */}
            <div className="mb-6">
              <a
                href="#questionnaire"
                className="inline-flex items-center px-8 py-4 bg-white text-[#2f5952] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                Get Started →
              </a>
            </div>

            <p className="text-sm text-white/60 font-light tracking-wide">
              Answer a few questions • Get your customized guide • Estate
              reimbursable
            </p>

            {/* Small Screenshots in Header */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              {/* Mini Screenshot 1: Contact Log */}
              <div className="w-full sm:w-80 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-white/20 transform hover:scale-105 transition-transform duration-200">
                <div className="bg-gray-50 px-3 py-2 border-b border-gray-200 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-[10px] text-gray-500 ml-2">Contact Log</span>
                </div>
                <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
                      <div className="text-xs font-semibold text-gray-900">Wells Fargo</div>
                      <div className="text-[10px] text-gray-500">Acct. •••7392</div>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-gray-500">Status:</span>
                        <span className="text-green-600 font-medium">Closed</span>
                      </div>
                      <div className="flex justify-between text-[10px]">
                        <span className="text-gray-500">Contact:</span>
                        <span className="text-gray-900">Jan 15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Screenshot 2: Progress Card */}
              <div className="w-full sm:w-80 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-white/20 transform hover:scale-105 transition-transform duration-200">
                <div className="bg-gray-50 px-3 py-2 border-b border-gray-200 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-[10px] text-gray-500 ml-2">Dashboard</span>
                </div>
                <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#4a8177] to-[#3d7068] text-white mb-2">
                      <span className="text-xl font-bold">64%</span>
                    </div>
                    <div className="text-[10px] font-semibold text-gray-900">Overall Progress</div>
                    <div className="text-[9px] text-gray-500 mt-1">23 of 36 complete</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-white rounded p-2 border border-gray-200 text-center">
                      <div className="text-lg font-bold text-[#4a8177]">13</div>
                      <div className="text-[9px] text-gray-500">Institutions</div>
                    </div>
                    <div className="bg-white rounded p-2 border border-gray-200 text-center">
                      <div className="text-lg font-bold text-orange-500">3</div>
                      <div className="text-[9px] text-gray-500">Deadlines</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle wave decoration */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{
            clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
          }}
        ></div>
      </section>

      {/* Hero Screenshot with Text Overlay */}
      <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Screenshot as Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 scale-105 blur-[2px]">
              <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-500 font-light">
                    Estate Beacon - California Checklist
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border-2 border-green-200 shadow-sm">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                        ✓
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          Obtain Death Certificates
                        </div>
                        <div className="text-sm text-gray-500 mt-1 font-light">
                          Completed • Required for all institutions
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border-2 border-[#4a8177] shadow-sm">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4a8177] flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          File for Probate (Superior Court)
                        </div>
                        <div className="text-sm text-gray-500 mt-1 font-light">
                          In Progress • CA specific forms required
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-700">
                          Notify Financial Institutions
                        </div>
                        <div className="text-sm text-gray-500 mt-1 font-light">
                          Start after probate filing
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-700">
                          Inventory Estate Assets
                        </div>
                        <div className="text-sm text-gray-500 mt-1 font-light">
                          CA requires detailed inventory
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                        5
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-700">
                          File Tax Returns
                        </div>
                        <div className="text-sm text-gray-500 mt-1 font-light">
                          Federal and state estate taxes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 py-24 sm:py-32 text-center">
              <div className="backdrop-blur-sm bg-white/80 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200/50 max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                  You Shouldn't Have to
                  <br className="hidden sm:block" /> Figure This Out Alone
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
                  Every executor faces the same questions:{" "}
                  <em className="text-gray-800 font-normal">
                    Where do I start? Am I doing this in the right order? Did I
                    contact everyone? What do I tell the beneficiaries?
                  </em>
                </p>
                <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
                  Estate Beacon turns the chaos of estate administration into a clear,
                  step-by-step process tailored to your state's requirements.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4 font-light">
            State-specific guidance in the right order • Automatically sequenced
            for your location
          </p>
        </div>
      </section>

      {/* Product Screenshots Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              See Estate Beacon in Action
            </h2>
          </div>

          <div className="space-y-24">
            {/* Screenshot 1: State-Specific Checklist */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#4a8177]/10 text-[#2f5952] text-sm font-semibold mb-4">
                  State-Specific Checklists
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Your Checklist in Proper Order
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                  Each step is ordered correctly for your state's laws. Death
                  certificates before probate filing. Probate court before
                  contacting financial institutions. No guesswork, no mistakes.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="font-light">
                      Automatically sequenced for your state
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="font-light">
                      Context for why each step matters
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="font-light">
                      Mark complete as you progress
                    </span>
                  </li>
                </ul>
              </div>
              <div className="order-first md:order-last">
                {/* Mockup Browser Window */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 text-center text-xs text-gray-500 font-light">
                      Estate Beacon - California Checklist
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border-2 border-green-200 shadow-sm">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                          ✓
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">
                            Obtain Death Certificates
                          </div>
                          <div className="text-sm text-gray-500 mt-1 font-light">
                            Completed • Required for all institutions
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border-2 border-[#4a8177] shadow-sm">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4a8177] flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">
                            File for Probate (Superior Court)
                          </div>
                          <div className="text-sm text-gray-500 mt-1 font-light">
                            In Progress • CA specific forms required
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                          3
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-700">
                            Notify Financial Institutions
                          </div>
                          <div className="text-sm text-gray-500 mt-1 font-light">
                            Start after probate filing
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                          4
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-700">
                            Inventory Estate Assets
                          </div>
                          <div className="text-sm text-gray-500 mt-1 font-light">
                            CA requires detailed inventory
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot 2: Contact Log */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* Mockup Browser Window */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 text-center text-xs text-gray-500 font-light">
                      Estate Beacon - Contact Log
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <div className="font-semibold text-gray-900">
                          Wells Fargo - Checking Account
                        </div>
                        <div className="text-sm text-gray-500 mt-1 font-light">
                          Account ending in 7392
                        </div>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="text-sm space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-500 font-light">
                              Status:
                            </span>
                            <span className="text-green-600 font-medium">
                              Account Closed
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500 font-light">
                              Last Contact:
                            </span>
                            <span className="text-gray-900">Jan 15, 2025</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500 font-light">
                              Spoke With:
                            </span>
                            <span className="text-gray-900">
                              Maria Johnson, Rep #4782
                            </span>
                          </div>
                        </div>
                        <div className="pt-3 border-t border-gray-100">
                          <div className="text-xs text-gray-500 font-light mb-1">
                            Notes:
                          </div>
                          <div className="text-sm text-gray-700 font-light">
                            Submitted death certificate and probate documents.
                            Funds transferred to estate account. Final statement
                            mailed.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <div className="text-xs text-gray-400 font-light">
                        + 12 more institutions tracked
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#4a8177]/10 text-[#2f5952] text-sm font-semibold mb-4">
                  Institution Tracking
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Keep Track of Every Institution Contact
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                  Record every institution contact in one place. Phone numbers,
                  representatives' names, dates, and detailed notes—all
                  organized for when you need them.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="font-light">
                      Log every call and email interaction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="font-light">
                      Track status for each institution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="font-light">
                      Store confirmation numbers and documents
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Screenshot 3: Dashboard */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#4a8177]/10 text-[#2f5952] text-sm font-semibold mb-4">
                  Progress Dashboard
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  See Your Progress at a Glance
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                  Know exactly where you stand. Upcoming deadlines, pending
                  tasks, and completion status all in one dashboard.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="font-light">Visual progress tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="font-light">Upcoming deadline alerts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="font-light">
                      Quick access to all sections
                    </span>
                  </li>
                </ul>
              </div>
              <div className="order-first md:order-last">
                {/* Mockup Browser Window */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 text-center text-xs text-gray-500 font-light">
                      Estate Beacon - Dashboard
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                    <div className="space-y-4">
                      {/* Progress Ring */}
                      <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#4a8177] to-[#3d7068] text-white mb-3">
                          <span className="text-3xl font-bold">64%</span>
                        </div>
                        <div className="text-sm font-semibold text-gray-900">
                          Overall Progress
                        </div>
                        <div className="text-xs text-gray-500 mt-1 font-light">
                          23 of 36 tasks complete
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                          <div className="text-2xl font-bold text-[#4a8177]">
                            13
                          </div>
                          <div className="text-xs text-gray-500 mt-1 font-light">
                            Institutions Contacted
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                          <div className="text-2xl font-bold text-orange-500">
                            3
                          </div>
                          <div className="text-xs text-gray-500 mt-1 font-light">
                            Upcoming Deadlines
                          </div>
                        </div>
                      </div>

                      {/* Next Task */}
                      <div className="bg-[#4a8177]/5 border-l-4 border-[#4a8177] rounded p-4">
                        <div className="text-xs text-gray-500 font-light mb-1">
                          NEXT TASK
                        </div>
                        <div className="font-semibold text-gray-900 text-sm">
                          File Final Tax Return
                        </div>
                        <div className="text-xs text-gray-600 mt-1 font-light">
                          Due: Feb 28, 2025
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Everything You Need in One Place
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Purpose-built tools for the unique challenges of estate
              administration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#6b9688]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-5 transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
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

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-20 tracking-tight">
            Frequently Asked Questions
          </h2>
          <CollapsibleFAQs faqs={faqs} />
        </div>
      </section>

      {/* Questionnaire Section */}
      <section
        id="questionnaire"
        className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[#3d7068] via-[#4a8177] to-[#2f5952]"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Get Your Customized
              <br className="hidden sm:block" /> Estate Administration Guide
            </h2>
            <p className="text-xl sm:text-2xl text-white/85 leading-relaxed max-w-2xl mx-auto font-light">
              Answer a few quick questions so we can create a checklist tailored
              to your state and situation.
            </p>
          </div>

          {/* Questionnaire */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
            <Questionnaire />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f2e] text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer waves */}
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.2"
                  className="text-gray-600"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.4"
                  className="text-gray-500"
                />
                {/* Inner beacon light */}
                <circle
                  cx="30"
                  cy="30"
                  r="14"
                  fill="currentColor"
                  opacity="0.6"
                  className="text-[#4a8177]"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="8"
                  fill="currentColor"
                  className="text-[#4a8177]"
                />
                {/* Center dot */}
                <circle cx="30" cy="30" r="3" fill="white" />
              </svg>
              <span className="text-2xl font-bold text-white">
                Estate Beacon
              </span>
            </div>
            <p className="text-sm font-light mb-6">
              &copy; 2025 Estate Beacon. All rights reserved.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <a
                href="#"
                className="hover:text-white transition-colors font-light"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors font-light"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
