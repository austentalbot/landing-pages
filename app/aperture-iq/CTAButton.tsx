"use client";

import React from "react";

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "teal";
  size?: "sm" | "md" | "lg";
  className?: string;
  eventName?: string;
}

export default function CTAButton({
  onClick,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  eventName,
}: CTAButtonProps) {
  const handleClick = () => {
    // Track with Umami if available
    if (eventName && typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track(eventName);
    }
    onClick();
  };

  const baseStyles =
    "font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-warm focus-outline-brand relative overflow-hidden";

  const variantStyles = {
    primary:
      "bg-brand-primary-cta text-surface-background border-2 border-brand-primary-cta hover-bg-surface-background-80 hover:text-text-primary",
    secondary:
      "bg-surface-background text-text-primary border-2 border-brand-primary-cta hover-bg-surface-background-80",
    teal:
      "bg-brand-primary text-surface-background border-2 border-brand-primary hover-bg-brand-primary-80",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
