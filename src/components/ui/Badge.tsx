import React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "success" | "warning" | "neutral" | "accent"
  dot?: boolean
  children: React.ReactNode
}

export default function Badge({
  variant = "brand",
  dot = false,
  children,
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles = {
    brand: "bg-primary/10 text-primary border-primary/20",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    neutral: "bg-neutral-100 text-neutral-600 border-neutral-200",
    accent: "bg-secondary/15 text-dark-base border-secondary/30 font-semibold",
  }

  const dotColors = {
    brand: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    neutral: "bg-neutral-400",
    accent: "bg-secondary",
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]} ${
            variant === "success" || variant === "brand" ? "animate-pulse" : ""
          }`}
        />
      )}
      {children}
    </span>
  )
}
