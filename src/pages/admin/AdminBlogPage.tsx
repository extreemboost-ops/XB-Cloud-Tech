import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { BlogArticle } from "../../types/adminCms"
import {
  BookOpen,
  Plus,
  Trash2,
  ExternalLink,
  CheckCircle2,
  Search,
} from "lucide-react"

export const AdminBlogPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [articles, setArticles] = useState<BlogArticle[]>(
    adminCmsStore.getBlogArticles(),
  )
  const [selectedId, setSelectedId] = useState<string>(articles[0]?.id || "")
  const [search, setSearch] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [showCreateModal, setShowCreateModal] = useState(false)

  // New post fields
  const [newTitle, setNewTitle] = useState("")
  const [newCategory, setNewCategory] = useState("Architecture")
  const [newExcerpt, setNewExcerpt] = useState("")

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      const fresh = adminCmsStore.getBlogArticles()
      setArticles(fresh)
      if (fresh.length > 0 && !selectedId) {
        setSelectedId(fresh[0].id)
      }
    })
  }, [selectedId])

  const activeArticle = articles.find((a) => a.id === selectedId) || articles[0]

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase()),
  )

  const handleUpdate = (updates: Partial<BlogArticle>) => {
    if (!user || !activeArticle) return
    adminCmsStore.updateBlogArticle(activeArticle.id, updates, user)
  }

  const handleSavePublish = (status: "published" | "draft") => {
    if (!user || !activeArticle) return
    adminCmsStore.updateBlogArticle(activeArticle.id, { status }, user)
    setFeedback(`Article updated to ${status}!`)
    setTimeout(() => setFeedback(null), 3000)
  }

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !newTitle.trim()) return

    const slug = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    const created = adminCmsStore.createBlogArticle(
      {
        title: newTitle.trim(),
        slug,
        excerpt:
          newExcerpt.trim() ||
          "Technical insight and architecture breakdown from the XB Cloud Tech engineering team.",
        content: "Detailed architecture breakdown and engineering analysis.",
        author: { name: user.name, role: "Systems Architect" },
        category: newCategory,
        tags: [newCategory, "Enterprise", "Engineering"],
        featuredImage: "/images/products/storex-analytics.svg",
        readTimeMinutes: 5,
        status: "draft",
        seo: {
          metaTitle: `${newTitle.trim()} | XB Cloud Tech Insights`,
          metaDescription: newExcerpt.trim(),
        },
      },
      user,
    )

    setShowCreateModal(false)
    setSelectedId(created.id)
    setNewTitle("")
    setNewExcerpt("")
  }

  const handleDelete = (id: string, title: string) => {
    if (!user) return
    if (confirm(`Delete article "${title}"? This cannot be undone.`)) {
      adminCmsStore.deleteBlogArticle(id, user)
      if (selectedId === id) {
        setSelectedId(articles[0]?.id || "")
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Blog & Architecture Insights
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Publish technical whitepapers, case breakdowns, and engineering
            insights.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" />
          Create New Article
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Article List */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
            />
          </div>

          <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedId(art.id)}
                className={`py-3.5 px-3 rounded-xl cursor-pointer transition-all ${
                  selectedId === art.id
                    ? "bg-blue-50/70 border border-blue-200"
                    : "hover:bg-slate-50 border border-transparent"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/50 px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                      art.status === "published"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {art.status}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-xs line-clamp-1">
                  {art.title}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                  {art.excerpt}
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span>{new Date(art.publishedAt).toLocaleDateString()}</span>
                  <span>{art.readTimeMinutes} min read</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Article Editor */}
        <div className="lg:col-span-7 space-y-6">
          {activeArticle ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <h2 className="text-sm font-bold text-slate-900">
                    Article Editor
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  {feedback && (
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {feedback}
                    </span>
                  )}
                  <a
                    href={`/blog/${activeArticle.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-lg"
                    title="View Live Article"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() =>
                      handleDelete(activeArticle.id, activeArticle.title)
                    }
                    className="p-1.5 text-red-400 hover:text-red-700 hover:bg-red-50 rounded-lg"
                    title="Delete Article"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleSavePublish("published")}
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-xs"
                  >
                    Publish Post
                  </button>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Article Headline
                  </label>
                  <input
                    type="text"
                    value={activeArticle.title}
                    onChange={(e) => handleUpdate({ title: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      value={activeArticle.category}
                      onChange={(e) =>
                        handleUpdate({ category: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Estimated Read Time (Mins)
                    </label>
                    <input
                      type="number"
                      value={activeArticle.readTimeMinutes}
                      onChange={(e) =>
                        handleUpdate({
                          readTimeMinutes: parseInt(e.target.value) || 5,
                        })
                      }
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Excerpt / Meta Abstract
                  </label>
                  <textarea
                    rows={2}
                    value={activeArticle.excerpt}
                    onChange={(e) => handleUpdate({ excerpt: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Featured Image URL
                  </label>
                  <input
                    type="text"
                    value={activeArticle.featuredImage}
                    onChange={(e) =>
                      handleUpdate({ featuredImage: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Full Article Content (Markdown / Text)
                  </label>
                  <textarea
                    rows={8}
                    value={activeArticle.content}
                    onChange={(e) => handleUpdate({ content: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-sans"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400">
              Select an article to view details
            </div>
          )}
        </div>
      </div>

      {/* Create Article Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              New Technical Article
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Start drafting a new engineering publication.
            </p>

            <form onSubmit={handleCreate} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Headline
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Distributed Database Consistency in Offline POS"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="Architecture">Architecture</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Security">Security</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Excerpt
                </label>
                <textarea
                  rows={3}
                  placeholder="Brief summary of the article..."
                  value={newExcerpt}
                  onChange={(e) => setNewExcerpt(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-md shadow-blue-500/20"
                >
                  Create Draft
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminBlogPage
