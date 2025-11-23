"use client";

import React from "react";

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
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
    "font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white hover:from-[#ea580c] hover:to-[#f97316] shadow-lg",
    secondary:
      "bg-white text-[#c2410c] border-2 border-[#f97316] hover:bg-orange-50",
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
