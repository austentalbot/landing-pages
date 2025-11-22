import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Estate Beacon",
  description: "You're on the list! We'll notify you when Estate Beacon is ready.",
  robots: "noindex", // Don't index thank-you pages
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf9] to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center py-12">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <span className="text-4xl">✓</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          You're all set!
        </h1>

        {/* Message */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Thank you for joining the Estate Beacon waitlist. We'll notify you as
          soon as it's ready in your state.
        </p>

        {/* Additional Info */}
        <div className="bg-[#4a8177]/5 border-2 border-[#4a8177]/20 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            What happens next?
          </h2>
          <ul className="text-left text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="mr-2">📧</span>
              <span>
                Check your inbox for a confirmation email (check spam if you don't see it)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🚀</span>
              <span>
                We'll send you updates as we build Estate Beacon
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">💰</span>
              <span>
                You'll get early access pricing when we launch
              </span>
            </li>
          </ul>
        </div>

        {/* Back to Home */}
        <a
          href="/estate-beacon"
          className="inline-block text-[#4a8177] hover:text-[#3d7068] font-semibold transition-colors"
        >
          ← Back to Estate Beacon
        </a>
      </div>
    </div>
  );
}
