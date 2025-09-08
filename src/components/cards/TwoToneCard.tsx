"use client";

import { DecorativeProps } from "@/types/types";
import React from "react";

export default function DecorativeCard({
  className = "",
  size = "lg",
  iconColor = "#2B4B82",
  icon: Icon,
}: DecorativeProps) {
  const sizes: Record<string, string> = {
    md: "w-80 h-48",
    lg: "w-[520px] h-[360px]",
    xl: "w-[680px] h-[420px]",
  };

  return (
    <div
      className={`relative ${sizes[size]} rounded-[24px] overflow-hidden ${className} shadow-[0_20px_40px_rgba(2,6,23,0.06)]`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(246,248,250,1) 100%)",
        }}
      />

      <div
        aria-hidden
        className="decorative-float1 absolute -top-12 -left-12 w-44 h-44 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(240,90,40,0.42), rgba(240,90,40,0.22) 40%, rgba(240,90,40,0.08) 60%, transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="decorative-float2 absolute -right-12 -bottom-12 w-44 h-44 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(47,73,123,0.36), rgba(47,73,123,0.18) 40%, rgba(47,73,123,0.06) 60%, transparent 75%)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-6 rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(246,248,250,0.98))",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {Icon ? (
          <Icon size={45} color={iconColor} strokeWidth={1.5} />
        ) : (
          <svg
            width="84"
            height="84"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="9"
              r="4.2"
              stroke={iconColor}
              strokeWidth="1.4"
              fill="none"
              opacity="0.95"
            />
            <circle cx="12" cy="9" r="1.2" fill={iconColor} opacity="0.95" />
            <path
              d="M9.2 13.6L8 20l4-2 4 2-1.2-6.4"
              stroke={iconColor}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.95"
            />
          </svg>
        )}
      </div>
    </div>
  );
}