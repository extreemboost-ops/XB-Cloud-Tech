import React from "react"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  padding?: "none" | "sm" | "md" | "lg"
  variant?: "light" | "dark" | "outline"
  children: React.ReactNode
}

export default function Card({
  hover = true,
  padding = "md",
  variant = "light",
  children,
  className = "",
  ...props
}: CardProps) {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4 md:p-6",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
  }

  const variantStyles = {
    light: "bg-white border border-neutral-200/80 text-neutral-900 shadow-sm",
    dark: "bg-dark-base border border-white/10 text-white shadow-xl",
    outline: "bg-transparent border border-neutral-200 text-neutral-900",
  }

  const hoverStyle = hover
    ? "transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1"
    : ""

  return (
    <div
      className={`rounded-2xl relative overflow-hidden ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
