import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { uploadToCloudinary } from "../../services/cloudinaryService"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { MediaAsset } from "../../types/adminCms"
import {
  Search,
  Upload,
  Copy,
  CheckCircle2,
  Trash2,
  ExternalLink,
} from "lucide-react"

export const AdminMediaPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [assets, setAssets] = useState<MediaAsset[]>(
    adminCmsStore.getMediaAssets(),
  )
  const [search, setSearch] = useState("")
  const [filterFolder, setFilterFolder] = useState("all")
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [showUploadModal, setShowUploadModal] = useState(false)

  // New asset form
  const [newName, setNewName] = useState("")
  const [newUrl, setNewUrl] = useState("")
  const [newAlt, setNewAlt] = useState("")
  const [newFolder, setNewFolder] = useState("products")
  const [newDimensions, setNewDimensions] = useState("1920 × 1080")
  const [isUploading, setIsUploading] = useState(false)

  const handleDirectUpload = async (file: File) => {
    if (!file) return
    setIsUploading(true)
    setFeedback("Uploading to Cloudinary CDN...")
    try {
      const res = await uploadToCloudinary(file, `xb_cloud_tech/${newFolder}`)
      setNewUrl(res.secure_url)
      setNewName(file.name.replace(/\.[^/.]+$/, ""))
      setNewAlt(file.name.replace(/\.[^/.]+$/, ""))
      if (res.width && res.height) {
        setNewDimensions(`${res.width} × ${res.height}`)
      }
      setFeedback("Uploaded to Cloudinary! Click Save below.")
    } catch (err: any) {
      console.warn("Direct upload error:", err)
      const reader = new FileReader()
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string
        if (dataUrl) {
          setNewUrl(dataUrl)
          setNewName(file.name)
          setFeedback("Loaded local file data.")
        }
      }
      reader.readAsDataURL(file)
    } finally {
      setIsUploading(false)
      setTimeout(() => setFeedback(null), 4000)
    }
  }

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setAssets(adminCmsStore.getMediaAssets())
    })
  }, [])

  const filteredAssets = assets.filter((asset) => {
    const matchesSearch =
      asset.name.toLowerCase().includes(search.toLowerCase()) ||
      asset.url.toLowerCase().includes(search.toLowerCase()) ||
      asset.altText.toLowerCase().includes(search.toLowerCase())
    const matchesFolder =
      filterFolder === "all" || asset.folder === filterFolder
    return matchesSearch && matchesFolder
  })

  const handleCopyUrl = (asset: MediaAsset) => {
    navigator.clipboard.writeText(asset.url)
    setCopiedId(asset.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDelete = (id: string, name: string) => {
    if (!user) return
    if (
      confirm(
        `Delete media asset "${name}"? This will break any image links pointing to this path.`,
      )
    ) {
      adminCmsStore.deleteMediaAsset(id, user)
      setFeedback(`Deleted asset ${name}`)
      setTimeout(() => setFeedback(null), 3000)
    }
  }

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !newName.trim() || !newUrl.trim()) return

    // Validate safe URL / extension
    const cleanUrl = newUrl.trim()
    if (
      !cleanUrl.match(/\.(svg|png|jpg|jpeg|webp)$/i) &&
      !cleanUrl.startsWith("/")
    ) {
      alert(
        "Safety policy: Media URLs must have a valid image extension (.svg, .png, .jpg, .webp).",
      )
      return
    }

    const [w, h] = newDimensions
      .split("×")
      .map((d) => parseInt(d.trim()) || 1200)

    adminCmsStore.addMediaAsset(
      {
        name: newName.trim(),
        url: cleanUrl,
        type: cleanUrl.endsWith(".svg") ? "svg" : "image",
        sizeBytes: 15400,
        dimensions: { width: w, height: h || 800 },
        altText: newAlt.trim() || newName.trim(),
        folder: newFolder,
      },
      user,
    )

    setShowUploadModal(false)
    setNewName("")
    setNewUrl("")
    setNewAlt("")
    setFeedback("Media asset registered successfully!")
    setTimeout(() => setFeedback(null), 3000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Media & Asset Library
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Central repository for verified SVG product mockups, logos,
            diagrams, and high-resolution screenshots.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {feedback && (
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {feedback}
            </span>
          )}
          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20"
          >
            <Upload className="w-4 h-4" />
            Add Media Asset
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search assets by filename or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex items-center gap-2">
          {["all", "products", "general"].map((fol) => (
            <button
              key={fol}
              onClick={() => setFilterFolder(fol)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold capitalize transition-colors ${
                filterFolder === fol
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {fol}
            </button>
          ))}
        </div>
      </div>

      {/* Asset Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Asset Preview Thumbnail */}
            <div className="h-40 bg-slate-100 flex items-center justify-center p-3 relative overflow-hidden group">
              <img
                src={asset.url}
                alt={asset.altText}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xs group-hover:scale-105 transition-transform"
                onError={(e) => {
                  ;(e.target as HTMLElement).style.display = "none"
                }}
              />
              <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-900/80 text-white text-[9px] font-mono uppercase tracking-wider backdrop-blur-xs">
                {asset.type}
              </span>
            </div>

            {/* Asset Metadata */}
            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3
                  className="font-bold text-slate-900 text-xs truncate"
                  title={asset.name}
                >
                  {asset.name}
                </h3>
                <p className="text-[11px] text-slate-400 font-mono truncate mt-0.5">
                  {asset.url}
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                  <span>
                    {asset.dimensions?.width} × {asset.dimensions?.height}
                  </span>
                  <span>{(asset.sizeBytes / 1024).toFixed(1)} KB</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleCopyUrl(asset)}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    copiedId === asset.id
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {copiedId === asset.id ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Path</span>
                    </>
                  )}
                </button>

                <a
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-lg"
                  title="Open Asset in New Tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => handleDelete(asset.id, asset.name)}
                  className="p-1.5 text-red-400 hover:text-red-700 hover:bg-red-50 rounded-lg"
                  title="Delete Asset"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Asset Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Register New Media Asset
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Add a verified SVG or image asset path to the media library.
            </p>

            <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Asset Display Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CambridgeDesk RFID Gate"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              {/* Direct File Upload to Cloudinary */}
              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
                <span className="text-[11px] font-bold text-blue-900 block">
                  Upload Directly to Cloudinary CDN
                </span>
                <label className="inline-flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold cursor-pointer shadow-sm transition-all w-full justify-center">
                  <Upload className="w-4 h-4" />
                  <span>
                    {isUploading
                      ? "Uploading to Cloudinary..."
                      : "Choose Image File from Computer"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    disabled={isUploading}
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleDirectUpload(file)
                    }}
                  />
                </label>
                <span className="text-[10px] text-blue-600/80 block text-center font-mono">
                  Cloud: hdtlfkxg • Auto WebP & CDN Optimization
                </span>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Asset URL / Cloudinary CDN Path
                </label>
                <input
                  type="text"
                  required
                  placeholder="/images/products/new-mockup.svg"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Resolution
                  </label>
                  <input
                    type="text"
                    value={newDimensions}
                    onChange={(e) => setNewDimensions(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Folder Category
                  </label>
                  <select
                    value={newFolder}
                    onChange={(e) => setNewFolder(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="products">Products</option>
                    <option value="general">General</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Alt Text (Accessibility & SEO)
                </label>
                <input
                  type="text"
                  placeholder="Descriptive alt text for screen readers..."
                  value={newAlt}
                  onChange={(e) => setNewAlt(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-md shadow-blue-500/20"
                >
                  Save to Media Library
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminMediaPage
