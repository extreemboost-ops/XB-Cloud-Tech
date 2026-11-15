import React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "dark" | "ghost"
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  children: React.ReactNode
}

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  }

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg hover:shadow-primary/25 border border-transparent",
    secondary:
      "bg-secondary text-dark-base hover:bg-secondary/90 shadow-md hover:shadow-lg hover:shadow-secondary/20 border border-transparent font-bold",
    outline:
      "bg-transparent border border-neutral-200 text-neutral-800 hover:border-primary hover:text-primary hover:bg-primary/5",
    dark: "bg-dark-base text-white hover:bg-neutral-900 border border-white/10 shadow-md hover:shadow-xl",
    ghost:
      "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </button>
  )
}
