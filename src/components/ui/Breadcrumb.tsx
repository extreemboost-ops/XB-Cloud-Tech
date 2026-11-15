import { Link } from "react-router-dom"
import { ChevronRight, Home } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  to?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  theme?: "dark" | "light"
  className?: string
}

export default function Breadcrumb({
  items,
  theme = "light",
  className = "",
}: BreadcrumbProps) {
  const isDark = theme === "dark"

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex items-center gap-2 text-xs md:text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm border ${
        isDark
          ? "bg-white/5 border-white/10 text-neutral-400"
          : "bg-white border-neutral-200 text-neutral-500 shadow-xs"
      } ${className}`}
    >
      <Link
        to="/"
        className={`inline-flex items-center gap-1.5 transition-colors ${
          isDark ? "hover:text-white" : "hover:text-primary"
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1
        return (
          <div key={idx} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0" />
            {item.to && !isLast ? (
              <Link
                to={item.to}
                className={`transition-colors ${
                  isDark ? "hover:text-white" : "hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`font-semibold ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                {item.label}
              </span>
            )}
          </div>
        )
      })}
    </nav>
  )
}
