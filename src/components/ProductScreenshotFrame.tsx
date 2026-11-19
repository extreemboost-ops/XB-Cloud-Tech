import { useState, useEffect, useMemo, useRef } from "react"
import {
  Maximize2,
  X,
  Image as ImageIcon,
  Info,
  CheckCircle2,
  Laptop,
  Upload,
  RotateCcw,
  Loader2,
  Link2,
} from "lucide-react"
import { adminCmsStore } from "../services/adminCmsStore"
import { uploadToCloudinary } from "../services/cloudinaryService"
import { CMSProductScreenshot } from "../types/adminCms"

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
  productSlug?: string
  slotNumber?: 1 | 2 | 3 | 4
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
  productSlug,
  slotNumber,
  interactiveToggle,
}: ProductScreenshotFrameProps) {
  const [imageError, setImageError] = useState(false)
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const [showAdminInfo, setShowAdminInfo] = useState(false)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [customInputUrl, setCustomInputUrl] = useState("")
  const [uploadToast, setUploadToast] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Infer slug and slot number if not explicitly passed
  const resolvedSlug = useMemo(() => {
    if (productSlug) return productSlug
    const id = slot.id.toLowerCase()
    if (id.includes("storex")) return "storex-erp"
    if (id.includes("purchoon")) return "purchoon-erp"
    if (id.includes("cambridge")) return "cambridgedesk"
    if (id.includes("pharmacy")) return "pharmacy-erp"
    if (id.includes("industrial")) return "industrial-erp"
    if (id.includes("qistmarket")) return "qistmarket-erp"
    return undefined
  }, [productSlug, slot.id])

  const resolvedSlotNumber = useMemo(() => {
    if (slotNumber) return slotNumber
    const num = parseInt(slot.slotNumber, 10)
    if (num >= 1 && num <= 4) return num as 1 | 2 | 3 | 4
    return 1
  }, [slotNumber, slot.slotNumber])

  // Subscribe to live CMS store updates
  const [cmsOverride, setCmsOverride] = useState<string | undefined>(() => {
    if (!resolvedSlug) return undefined
    const p = adminCmsStore.getProductBySlug(resolvedSlug)
    const match = p?.screenshots?.find(
      (s: CMSProductScreenshot) => s.slotNumber === resolvedSlotNumber,
    )
    return match?.image
  })

  useEffect(() => {
    if (!resolvedSlug) return
    const update = () => {
      const p = adminCmsStore.getProductBySlug(resolvedSlug)
      const match = p?.screenshots?.find(
        (s: CMSProductScreenshot) => s.slotNumber === resolvedSlotNumber,
      )
      setCmsOverride(match?.image)
      setImageError(false)
    }
    return adminCmsStore.subscribe(update)
  }, [resolvedSlug, resolvedSlotNumber])

  const activeSrc = cmsOverride || slot.src
  const isCmsConfigured = Boolean(cmsOverride && cmsOverride !== slot.src)
  const isHero = variant === "hero"

  const handleApplyImage = (newImageUrl: string) => {
    if (!resolvedSlug) return
    const p = adminCmsStore.getProductBySlug(resolvedSlug)
    if (!p) return

    const updatedScreenshots = [...(p.screenshots || [])]
    const slotIdx = updatedScreenshots.findIndex(
      (s: CMSProductScreenshot) => s.slotNumber === resolvedSlotNumber,
    )

    if (slotIdx >= 0) {
      updatedScreenshots[slotIdx] = {
        ...updatedScreenshots[slotIdx],
        image: newImageUrl,
      }
    } else {
      updatedScreenshots.push({
        id: `scr_${Date.now()}`,
        slotNumber: resolvedSlotNumber,
        title: slot.title,
        caption: slot.caption || "",
        image: newImageUrl,
        recommendedResolution: slot.dimensions,
      })
    }

    const defaultAdmin =
      adminCmsStore.getUsers().find((u) => u.role === "super_admin") ||
      adminCmsStore.getUsers()[0]

    adminCmsStore.updateProduct(
      resolvedSlug,
      { screenshots: updatedScreenshots },
      defaultAdmin,
    )

    setCmsOverride(newImageUrl)
    setImageError(false)
    setIsUploadModalOpen(false)
    setUploadToast(`Slot 0${resolvedSlotNumber} screenshot saved & applied!`)
    setTimeout(() => setUploadToast(null), 3000)
  }

  const handleFileUpload = async (file: File) => {
    if (!file) return
    setIsUploading(true)

    try {
      const folder = `xb_cloud_tech/products/${resolvedSlug || "general"}`
      const res = await uploadToCloudinary(file, folder)

      const defaultAdmin =
        adminCmsStore.getUsers().find((u) => u.role === "super_admin") ||
        adminCmsStore.getUsers()[0]

      adminCmsStore.addMediaAsset(
        {
          name: `${slot.title} (Slot 0${resolvedSlotNumber})`,
          url: res.secure_url,
          type: file.type.startsWith("image/svg") ? "svg" : "image",
          sizeBytes: res.bytes || file.size,
          dimensions:
            res.width && res.height
              ? { width: res.width, height: res.height }
              : { width: 1920, height: 1080 },
          altText: slot.altText || slot.title,
          folder: "products",
        },
        defaultAdmin,
      )

      handleApplyImage(res.secure_url)
    } catch (err: any) {
      console.warn("Cloudinary upload failed, falling back to local file:", err)
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        if (result) {
          handleApplyImage(result)
        }
      }
      reader.readAsDataURL(file)
    } finally {
      setIsUploading(false)
    }
  }

  const handleResetToDefault = () => {
    if (!resolvedSlug) return
    const p = adminCmsStore.getProductBySlug(resolvedSlug)
    if (!p) return

    const updatedScreenshots = [...(p.screenshots || [])]
    const slotIdx = updatedScreenshots.findIndex(
      (s: CMSProductScreenshot) => s.slotNumber === resolvedSlotNumber,
    )
    if (slotIdx >= 0) {
      updatedScreenshots[slotIdx] = {
        ...updatedScreenshots[slotIdx],
        image: "",
      }
    }
    const defaultAdmin =
      adminCmsStore.getUsers().find((u) => u.role === "super_admin") ||
      adminCmsStore.getUsers()[0]

    adminCmsStore.updateProduct(
      resolvedSlug,
      { screenshots: updatedScreenshots },
      defaultAdmin,
    )

    setCmsOverride(undefined)
    setImageError(false)
    setIsUploadModalOpen(false)
    setUploadToast(`Slot 0${resolvedSlotNumber} reset to default placeholder.`)
    setTimeout(() => setUploadToast(null), 3000)
  }

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
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border flex items-center gap-1 ${
                  isCmsConfigured
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                    : "bg-[#0B5FFF]/20 text-[#00D4FF] border-[#0B5FFF]/40"
                }`}
              >
                {isCmsConfigured ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                ) : (
                  <ImageIcon className="w-3 h-3" />
                )}
                <span>
                  SLOT {slot.slotNumber} •{" "}
                  {isCmsConfigured ? "ADMIN CONFIGURED" : "ADMIN PLACEHOLDER"}
                </span>
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

            {/* Admin Upload / Set Image Button */}
            <button
              type="button"
              onClick={() => setIsUploadModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
              title="Upload or Change Screenshot via Cloudinary"
            >
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Set Image</span>
            </button>

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
                {activeSrc || `/public/images/products/${slot.id}.png`}
              </code>
            </div>
          </div>
        )}

        {/* Main Screenshot Container */}
        <div className="relative overflow-hidden bg-[#0A0F1E]">
          {activeSrc && !imageError ? (
            <div
              className="relative group/img overflow-hidden cursor-pointer"
              onClick={() => setIsZoomOpen(true)}
            >
              <img
                src={activeSrc}
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

              <button
                type="button"
                onClick={() => setIsUploadModalOpen(true)}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 cursor-pointer transition-all"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Original Screenshot (Admin)</span>
              </button>
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
            {activeSrc && !imageError ? (
              <img
                src={activeSrc}
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

      {/* Quick Admin Upload & Set Image Modal */}
      {isUploadModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => !isUploading && setIsUploadModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-[#0d1428]">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-600 text-white">
                  SLOT {slot.slotNumber}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Set Image: {slot.title}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Direct Cloudinary CDN Upload • {slot.dimensions}
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled={isUploading}
                onClick={() => setIsUploadModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-4">
              {/* Current Preview if configured */}
              {activeSrc && !imageError && (
                <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video max-h-44 flex items-center justify-center">
                  <img
                    src={activeSrc}
                    alt="Current preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                      Active Image
                    </span>
                  </div>
                </div>
              )}

              {/* Upload from Computer Box */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5 text-blue-400" />
                  <span>Upload From Computer (Cloudinary CDN)</span>
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/png,image/jpeg,image/webp,image/svg+xml"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleFileUpload(file)
                  }}
                />
                <button
                  type="button"
                  disabled={isUploading}
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-4 px-4 rounded-xl border-2 border-dashed border-slate-700 hover:border-blue-500 bg-slate-900/60 hover:bg-slate-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                >
                  {isUploading ? (
                    <div className="flex flex-col items-center gap-2 py-2">
                      <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
                      <span className="text-xs font-medium text-blue-400">
                        Uploading directly to Cloudinary CDN...
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                        <Upload className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-white">
                        Click to Browse & Upload Image
                      </span>
                      <span className="text-[11px] text-slate-400">
                        PNG, WebP, JPG up to 10MB • Target: {slot.dimensions}
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                <div className="flex-1 h-px bg-slate-800" />
                <span>OR PASTE IMAGE URL</span>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              {/* Custom URL Input */}
              <div className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Link2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      value={customInputUrl}
                      onChange={(e) => setCustomInputUrl(e.target.value)}
                      placeholder="https://res.cloudinary.com/... or https://..."
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="button"
                    disabled={!customInputUrl.trim() || isUploading}
                    onClick={() => {
                      if (customInputUrl.trim()) {
                        handleApplyImage(customInputUrl.trim())
                        setCustomInputUrl("")
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    Apply URL
                  </button>
                </div>
              </div>

              {/* Reset Option */}
              {isCmsConfigured && (
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">
                    Want to remove custom image?
                  </span>
                  <button
                    type="button"
                    onClick={handleResetToDefault}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-500/40 text-rose-400 hover:bg-rose-500/10 text-xs font-medium transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset to Default Placeholder
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {uploadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{uploadToast}</span>
        </div>
      )}
    </>
  )
}
