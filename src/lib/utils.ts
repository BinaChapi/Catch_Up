import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn utility: merge Tailwind + conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
