"use client";

import { cn } from "@/lib/utils"; 
import { ButtonProps } from "@/types/types";



export default function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  disabled = false,
  as = "button",
  href,
  onClick,
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const sizes: Record<typeof size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants: Record<typeof variant, string> = {
    primary:
      "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
    secondary:
      "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    ghost:
      "text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
  };

  const Comp = as;

  return (
    <Comp
      href={as === "a" ? href : undefined}
      onClick={onClick}
      disabled={as === "button" ? disabled : undefined}
      className={cn(
        baseStyles,
        sizes[size],
        variants[variant],
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Comp>
  );
}
