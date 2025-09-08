"use client";

import { cn } from "@/lib/utils";
import { VisionMissionProps } from "@/types/types";
import React from "react";



export default function VisionMissionCard({
  title,
  desc,
  color = "bg-primary",
  textColor = "text-white",
  className = "",
}: VisionMissionProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl shadow-lg p-8 flex flex-col justify-center overflow-hidden",
        color,
        textColor,
        className
      )}
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 opacity-40 pointer-events-none" />
      <h3 className="relative text-xl font-semibold mb-4 z-10">{title}</h3>
      <p className="relative text-sm opacity-70 z-10">{desc}</p>
    </div>
  );
}
