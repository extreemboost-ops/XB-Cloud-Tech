import { useState } from "react"
import { ChevronDown } from "lucide-react"

export interface AccordionItem {
  id?: string
  title: string
  content: string | React.ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpenIndex?: number | null
  allowMultiple?: boolean
  className?: string
}

export default function Accordion({
  items,
  defaultOpenIndex = 0,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== null && defaultOpenIndex !== undefined
      ? [defaultOpenIndex]
      : [],
  )

  const toggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index],
      )
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  return (
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index)
        return (
          <div
            key={item.id || index}
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
              isOpen
                ? "bg-white border-primary/30 shadow-md ring-1 ring-primary/10"
                : "bg-white border-neutral-200/80 hover:border-neutral-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-neutral-900 focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg">{item.title}</span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? "bg-primary text-white rotate-180"
                    : "bg-neutral-100 text-neutral-500"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-2 text-sm md:text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
