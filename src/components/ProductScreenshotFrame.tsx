import { useState } from "react"
import {
  Maximize2,
  X,
  Image as ImageIcon,
  Info,
  CheckCircle2,
  Laptop,
} from "lucide-react"

export interface ScreenshotSlot {
  id: string
  slotNumber: string // "01", "02", "03", "04"
  slotLabel: string // e.g. "Hero Master Screenshot", "Operations Terminal", "Financial Ledger", "Mobile App"
  title: string
  subtitle?: string
  dimensions: string // e.g. "1920 × 1080 (16:9 4K / Full HD)"
  src?: string // path or url to actual image if uploaded by admin
  altText: string
  caption?: string
  category?: string
}

interface ProductScreenshotFrameProps {
  slot: ScreenshotSlot
  fallbackUI?: React.ReactNode
  variant?: "hero" | "section" | "compact"
  interactiveToggle?: {
    activeMode: "screenshot" | "simulator"
    onToggle: (mode: "screenshot" | "simulator") => void
    simulatorLabel?: string
  }
}

export default function ProductScreenshotFrame({
  slot,
  fallbackUI,
  variant = "section",
  interactiveToggle,
}: ProductScreenshotFrameProps) {
  const [imageError, setImageError] = useState(false)
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const [showAdminInfo, setShowAdminInfo] = useState(false)

  const isHero = variant === "hero"

  return (
    <>
      <div
        className={`group relative rounded-2xl border transition-all duration-300 shadow-2xl overflow-hidden ${
          isHero
            ? "border-slate-800 bg-[#0A0F1E] text-white"
            : "border-slate-300/80 bg-slate-900 text-white"
        }`}
      >
        {/* Top Window Bar (Browser / OS Mockup) */}
        <div className="px-4 py-3 bg-[#0d1428] border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 select-none">
          {/* Left: Window Dots & Admin Placeholder Indicator */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />

            {/* Admin Placeholder Slot Badge */}
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0B5FFF]/20 text-[#00D4FF] border border-[#0B5FFF]/40 flex items-center gap-1">
                <ImageIcon className="w-3 h-3" />
                <span>SLOT {slot.slotNumber} • ADMIN PLACEHOLDER</span>
              </span>
              <span className="text-[11px] font-mono text-slate-300 hidden md:inline truncate max-w-[220px]">
                {slot.slotLabel}
              </span>
            </div>
          </div>

          {/* Center/Right: Actions (Interactive Toggle, Specs & Zoom) */}
          <div className="flex items-center gap-2">
            {interactiveToggle && (
              <div className="hidden sm:flex rounded-lg bg-slate-950 p-0.5 border border-slate-800 text-[11px] font-medium">
                <button
                  type="button"
                  onClick={() => interactiveToggle.onToggle("screenshot")}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    interactiveToggle.activeMode === "screenshot"
                      ? "bg-[#0B5FFF] text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Original Screenshot
                </button>
                <button
                  type="button"
                  onClick={() => interactiveToggle.onToggle("simulator")}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    interactiveToggle.activeMode === "simulator"
                      ? "bg-[#0B5FFF] text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {interactiveToggle.simulatorLabel || "Interactive Simulator"}
                </button>
              </div>
            )}

            {/* Admin Upload Specs Tooltip Trigger */}
            <button
              type="button"
              onClick={() => setShowAdminInfo(!showAdminInfo)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Admin Image Placeholder Specifications"
            >
              <Info className="w-3.5 h-3.5 text-[#00D4FF]" />
            </button>

            {/* Fullscreen Lightbox Trigger */}
            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Expand Screenshot in Fullscreen Lightbox"
            >
              <Maximize2 className="w-3.5 h-3.5 text-slate-200" />
            </button>
          </div>
        </div>

        {/* Collapsible Admin Guidance Bar */}
        {showAdminInfo && (
          <div className="bg-slate-950/95 border-b border-[#0B5FFF]/40 px-4 py-2.5 text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-emerald-400 font-bold">
                Admin Custom Screenshot Slot Ready
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-400">
                Recommended:{" "}
                <strong className="text-white font-mono">
                  {slot.dimensions}
                </strong>{" "}
                (PNG / WebP)
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Path:{" "}
              <code className="text-[#00D4FF] bg-slate-900 px-1.5 py-0.5 rounded">
                {slot.src || `/public/images/products/${slot.id}.png`}
              </code>
            </div>
          </div>
        )}

        {/* Main Screenshot Container */}
        <div className="relative overflow-hidden bg-[#0A0F1E]">
          {slot.src && !imageError ? (
            <div
              className="relative group/img overflow-hidden cursor-pointer"
              onClick={() => setIsZoomOpen(true)}
            >
              <img
                src={slot.src}
                alt={slot.altText}
                onError={() => setImageError(true)}
                className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.01]"
                loading={isHero ? "eager" : "lazy"}
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-[#0A0F1E]/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="px-3.5 py-2 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2 shadow-xl border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5 text-[#00D4FF]" /> Click to
                  Inspect High-Resolution Screenshot
                </span>
              </div>
            </div>
          ) : fallbackUI ? (
            /* Rich Vector UI Fallback */
            <div className="relative">{fallbackUI}</div>
          ) : (
            /* Default Enterprise Screenshot Placeholder */
            <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4 min-h-[300px] bg-gradient-to-b from-[#0d1428] to-[#0A0F1E]">
              <div className="w-16 h-16 rounded-2xl bg-[#0B5FFF]/10 border border-[#0B5FFF]/30 flex items-center justify-center text-[#00D4FF] shadow-lg shadow-[#0B5FFF]/10">
                <Laptop className="w-8 h-8" />
              </div>
              <div className="max-w-md space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono text-emerald-400 font-semibold border border-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Admin Original Screenshot Placeholder</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {slot.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {slot.caption ||
                    "Official product interface capture slot. Replace with high-resolution screenshot."}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                <span>Target Specs:</span>
                <span className="text-[#00D4FF] font-bold">
                  {slot.dimensions}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Metadata & Caption Bar */}
        <div className="px-4 py-2.5 bg-[#090d1a] border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="font-mono text-[#00D4FF] font-bold text-[11px]">
              {slot.slotNumber}
            </span>
            <span className="font-semibold text-slate-200">{slot.title}</span>
            {slot.subtitle && (
              <span className="text-slate-500 hidden md:inline">
                • {slot.subtitle}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700">
              {slot.dimensions}
            </span>
            <span className="text-emerald-400">● LIVE PREVIEW</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={() => setIsZoomOpen(false)}
        >
          {/* Modal Header */}
          <div
            className="w-full max-w-6xl flex items-center justify-between py-3 px-4 bg-[#0A0F1E] border border-slate-800 rounded-t-2xl text-white select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0B5FFF] text-white">
                SLOT {slot.slotNumber}
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {slot.title}
                </h3>
                <p className="text-[11px] text-slate-400 font-mono">
                  {slot.slotLabel} • {slot.dimensions}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div
            className="w-full max-w-6xl max-h-[82vh] overflow-auto bg-[#0d1428] border-x border-b border-slate-800 rounded-b-2xl p-4 sm:p-6 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {slot.src && !imageError ? (
              <img
                src={slot.src}
                alt={slot.altText}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl border border-slate-800"
              />
            ) : fallbackUI ? (
              <div className="w-full max-w-4xl">{fallbackUI}</div>
            ) : (
              <div className="p-12 text-center text-slate-300 space-y-3">
                <Laptop className="w-12 h-12 text-[#00D4FF] mx-auto" />
                <h4 className="text-lg font-bold text-white">{slot.title}</h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  {slot.caption ||
                    "High-resolution product screenshot slot configured by administrator."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
