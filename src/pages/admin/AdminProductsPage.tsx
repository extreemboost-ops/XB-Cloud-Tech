import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { uploadToCloudinary } from "../../services/cloudinaryService"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { CMSProduct, CMSProductScreenshot } from "../../types/adminCms"
import {
  Boxes,
  ExternalLink,
  Save,
  CheckCircle2,
  Image,
  Layers,
  Sparkles,
  Upload,
  RotateCcw,
  Loader2,
} from "lucide-react"

export const AdminProductsPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [products, setProducts] = useState<CMSProduct[]>(
    adminCmsStore.getProducts(),
  )
  const [selectedSlug, setSelectedSlug] = useState<string>(
    products[0]?.slug || "storex-erp",
  )
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setProducts(adminCmsStore.getProducts())
    })
  }, [])

  const activeProduct =
    products.find((p) => p.slug === selectedSlug) || products[0]

  const handleUpdateActiveProduct = (updates: Partial<CMSProduct>) => {
    if (!user || !activeProduct) return
    adminCmsStore.updateProduct(activeProduct.slug, updates, user)
  }

  const handlePublishProduct = () => {
    if (!user || !activeProduct) return
    const summary = prompt(
      "Enter a change summary for this product release:",
      "Updated copy and screenshot slots",
    )
    if (summary !== null) {
      adminCmsStore.publishProduct(activeProduct.slug, summary, user)
      setFeedback(`Published updates for ${activeProduct.name}!`)
      setTimeout(() => setFeedback(null), 3000)
    }
  }

  // Screenshot Slot updates
  const handleUpdateScreenshot = (
    index: number,
    updates: Partial<CMSProductScreenshot>,
  ) => {
    if (!activeProduct) return
    const updatedScreenshots = [...activeProduct.screenshots]
    updatedScreenshots[index] = { ...updatedScreenshots[index], ...updates }
    handleUpdateActiveProduct({ screenshots: updatedScreenshots })
  }

  const [uploadingSlot, setUploadingSlot] = useState<number | null>(null)

  // Handle direct file upload for a screenshot slot via Cloudinary CDN
  const handleFileUploadForSlot = async (index: number, file: File) => {
    if (!file || !activeProduct || !user) return

    setUploadingSlot(index)
    setFeedback(`Uploading Slot 0${index + 1} to Cloudinary CDN...`)

    try {
      const res = await uploadToCloudinary(
        file,
        `xb_cloud_tech/products/${activeProduct.slug}`,
      )
      const cdnUrl = res.secure_url

      // Update screenshot slot with permanent Cloudinary CDN URL
      handleUpdateScreenshot(index, { image: cdnUrl })

      // Automatically catalog asset into Media Assets Library
      adminCmsStore.addMediaAsset(
        {
          name: `${activeProduct.name} - Slot 0${index + 1} (${file.name})`,
          url: cdnUrl,
          type: file.type.startsWith("image/svg") ? "svg" : "image",
          sizeBytes: res.bytes || file.size,
          dimensions:
            res.width && res.height
              ? { width: res.width, height: res.height }
              : { width: 1920, height: 1080 },
          altText: `${activeProduct.name} screenshot slot 0${index + 1}`,
          folder: "products",
        },
        user,
      )

      setFeedback(`Slot 0${index + 1} uploaded to Cloudinary CDN & saved!`)
    } catch (err: any) {
      console.warn("Cloudinary upload fallback to dataURL:", err)
      const reader = new FileReader()
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string
        if (dataUrl) {
          handleUpdateScreenshot(index, { image: dataUrl })
          setFeedback(`Slot 0${index + 1} screenshot applied!`)
        }
      }
      reader.readAsDataURL(file)
    } finally {
      setUploadingSlot(null)
      setTimeout(() => setFeedback(null), 4000)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Product CMS
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage product copy, features, 4-slot screenshots, and SEO metadata
            across all enterprise platforms.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {feedback && (
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {feedback}
            </span>
          )}
          <a
            href={`/products/${activeProduct.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            View Live Product Page
          </a>
          <button
            onClick={handlePublishProduct}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
          >
            <Save className="w-4 h-4" />
            Publish Product Changes
          </button>
        </div>
      </div>

      {/* Product Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {products.map((prod) => (
          <button
            key={prod.slug}
            onClick={() => setSelectedSlug(prod.slug)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedSlug === prod.slug
                ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>{prod.name}</span>
          </button>
        ))}
      </div>

      {/* Product Editor Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Core Identity & Hero */}
        <div className="lg:col-span-7 space-y-6">
          {/* Identity Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Product Identity & Hero Positioning
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  value={activeProduct.name}
                  onChange={(e) =>
                    handleUpdateActiveProduct({ name: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  value={activeProduct.tagline}
                  onChange={(e) =>
                    handleUpdateActiveProduct({ tagline: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Hero Headline
                </label>
                <input
                  type="text"
                  value={activeProduct.heroHeadline}
                  onChange={(e) =>
                    handleUpdateActiveProduct({ heroHeadline: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Hero Subheadline
                </label>
                <textarea
                  rows={3}
                  value={activeProduct.heroSubheadline}
                  onChange={(e) =>
                    handleUpdateActiveProduct({
                      heroSubheadline: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Primary CTA Text
                </label>
                <input
                  type="text"
                  value={activeProduct.primaryCtaText}
                  onChange={(e) =>
                    handleUpdateActiveProduct({
                      primaryCtaText: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Primary CTA Target Link
                </label>
                <input
                  type="text"
                  value={activeProduct.primaryCtaLink}
                  onChange={(e) =>
                    handleUpdateActiveProduct({
                      primaryCtaLink: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-600"
                />
              </div>
            </div>
          </div>

          {/* 4-Slot Screenshot Management */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Image className="w-4 h-4 text-emerald-600" />4 Official
                Screenshot Slots (Admin Managed)
              </h2>
              <span className="text-[10px] text-slate-400 font-semibold uppercase">
                High-Res Mockups
              </span>
            </div>

            <div className="space-y-4 text-xs">
              {activeProduct.screenshots.map((slot, sIdx) => (
                <div
                  key={slot.id}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 text-xs flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center text-[10px]">
                        0{slot.slotNumber}
                      </span>
                      {slot.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {slot.recommendedResolution}
                    </span>
                  </div>

                  {/* Visual Screenshot Thumbnail Preview */}
                  <div className="relative aspect-video max-h-48 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200 group/thumb">
                    {slot.image ? (
                      <img
                        src={slot.image}
                        alt={slot.title}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-xs">
                        <Image className="w-6 h-6 mb-1 opacity-50" />
                        <span>No image assigned</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <label className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-xs cursor-pointer flex items-center gap-1.5 shadow-md">
                        {uploadingSlot === sIdx ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Upload className="w-3.5 h-3.5" />
                        )}
                        <span>
                          {uploadingSlot === sIdx
                            ? "Uploading..."
                            : "Replace File"}
                        </span>
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/webp,image/svg+xml"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) handleFileUploadForSlot(sIdx, file)
                          }}
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateScreenshot(sIdx, {
                            image: `/images/products/${activeProduct.slug.replace("-erp", "")}-hero.svg`,
                          })
                        }
                        className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1"
                        title="Reset to default illustration"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset</span>
                      </button>
                    </div>
                  </div>

                  {/* Upload Controls & Inputs */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-200">
                    <label className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-sm">
                      {uploadingSlot === sIdx ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Upload className="w-3.5 h-3.5" />
                      )}
                      <span>
                        {uploadingSlot === sIdx
                          ? "Uploading to Cloudinary..."
                          : "Upload Image From Computer"}
                      </span>
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp,image/svg+xml"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) handleFileUploadForSlot(sIdx, file)
                        }}
                      />
                    </label>

                    <button
                      type="button"
                      onClick={() =>
                        handleUpdateScreenshot(sIdx, {
                          image: `/images/products/${activeProduct.slug.replace("-erp", "")}-hero.svg`,
                        })
                      }
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-lg text-xs font-medium cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3 text-slate-400" />
                      <span>Reset to Default</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Slot Label / Title
                      </label>
                      <input
                        type="text"
                        value={slot.title}
                        onChange={(e) =>
                          handleUpdateScreenshot(sIdx, {
                            title: e.target.value,
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Image URL / Data Path
                      </label>
                      <input
                        type="text"
                        value={slot.image}
                        onChange={(e) =>
                          handleUpdateScreenshot(sIdx, {
                            image: e.target.value,
                          })
                        }
                        placeholder="/images/products/..."
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg font-mono text-slate-600"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Caption / Operational Description
                      </label>
                      <input
                        type="text"
                        value={slot.caption}
                        onChange={(e) =>
                          handleUpdateScreenshot(sIdx, {
                            caption: e.target.value,
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Features & FAQs */}
        <div className="lg:col-span-5 space-y-6">
          {/* Features Editor */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-600" />
              Core Capabilities & Features ({activeProduct.features.length})
            </h2>

            <div className="space-y-3 text-xs max-h-96 overflow-y-auto pr-1">
              {activeProduct.features.map((feat, fIdx) => (
                <div
                  key={feat.id}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">
                      Feature #{fIdx + 1}
                    </span>
                    {feat.metrics && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                        {feat.metrics}
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    value={feat.title}
                    onChange={(e) => {
                      const updated = [...activeProduct.features]
                      updated[fIdx] = {
                        ...updated[fIdx],
                        title: e.target.value,
                      }
                      handleUpdateActiveProduct({ features: updated })
                    }}
                    className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg font-semibold"
                  />
                  <textarea
                    rows={2}
                    value={feat.description}
                    onChange={(e) => {
                      const updated = [...activeProduct.features]
                      updated[fIdx] = {
                        ...updated[fIdx],
                        description: e.target.value,
                      }
                      handleUpdateActiveProduct({ features: updated })
                    }}
                    className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product SEO */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              Product SEO Metadata
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={activeProduct.seo.metaTitle}
                  onChange={(e) =>
                    handleUpdateActiveProduct({
                      seo: { ...activeProduct.seo, metaTitle: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  rows={3}
                  value={activeProduct.seo.metaDescription}
                  onChange={(e) =>
                    handleUpdateActiveProduct({
                      seo: {
                        ...activeProduct.seo,
                        metaDescription: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProductsPage
