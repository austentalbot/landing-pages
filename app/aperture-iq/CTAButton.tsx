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
      "bg-gradient-to-r from-[#D88C9A] to-[#F2D0A9] text-[#3C2A2F] hover:from-[#c67b8a] hover:to-[#e6c199] shadow-lg",
    secondary:
      "bg-white text-[#3C2A2F] border-2 border-[#D88C9A] hover:bg-[#F1E3D3]",
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
