interface CTAButtonProps {
  text: string;
  analyticsEvent: string;
  href?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function CTAButton({
  text,
  analyticsEvent,
  href = "#questionnaire",
  className = "",
  size = "large"
}: CTAButtonProps) {
  const sizeClasses = {
    small: "px-6 py-3 text-base",
    medium: "px-7 py-3.5 text-base",
    large: "px-8 py-4 text-base"
  };

  return (
    <a
      data-umami-event={analyticsEvent}
      href={href}
      className={`inline-flex items-center ${sizeClasses[size]} bg-white text-[#2f5952] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(255,255,255,0.4)] hover:-translate-y-1 relative group ${className}`}
    >
      <span className="relative z-10">{text} →</span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
    </a>
  );
}
