import { ReactNode } from "react";

export type ServiceProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  items?: string[];
  index: number;
  color?: string; 
  textColor?: string;
  className?: string;
};

export type DecorativeProps = {
  className?: string;
  size?: "md" | "lg" | "xl";
  iconColor?: string;
  icon?: React.ElementType; 
};

export type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  as?: "button" | "a"; 
  href?: string;
  onClick?: () => void;
  className?: string;
};

export type VisionMissionProps = {
  title: string;
  desc: string;
  color?: string; 
  textColor?: string;
  className?: string;
};