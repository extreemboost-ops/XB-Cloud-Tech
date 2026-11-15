import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { GlobalNavigation, NavItem } from "../../types/adminCms"
import {
  Sliders,
  Plus,
  Trash2,
  Save,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
} from "lucide-react"

export const AdminNavigationPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [nav, setNav] = useState<GlobalNavigation>(
    adminCmsStore.getNavigation(),
  )
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setNav(adminCmsStore.getNavigation())
    })
  }, [])

  const handleSave = () => {
    if (!user) return
    adminCmsStore.updateNavigation(nav, user)
    setFeedback("Navigation structure updated!")
    setTimeout(() => setFeedback(null), 3000)
  }

  const handleMove = (index: number, direction: "up" | "down") => {
    const target = direction === "up" ? index - 1 : index + 1
    if (target < 0 || target >= nav.items.length) return
    const items = [...nav.items]
    const temp = items[index]
    items[index] = items[target]
    items[target] = temp
    setNav({ ...nav, items })
  }

  const handleDelete = (index: number) => {
    const items = nav.items.filter((_, idx) => idx !== index)
    setNav({ ...nav, items })
  }

  const handleAddItem = () => {
    const newItem: NavItem = {
      id: `nav_${Date.now()}`,
      label: "New Link",
      href: "/new-link",
    }
    setNav({ ...nav, items: [...nav.items, newItem] })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Header Navigation
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Customize main menu links, dropdown mega-menus, and primary header
            call-to-action.
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
            onClick={handleAddItem}
            className="inline-flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Menu Item
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20"
          >
            <Save className="w-4 h-4" />
            Save Navigation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Items List */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
          <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-blue-600" />
            Main Header Menu Items ({nav.items.length})
          </h2>

          <div className="space-y-3 text-xs">
            {nav.items.map((item, idx) => (
              <div
                key={item.id}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-500 font-mono text-[10px] flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-slate-900">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleMove(idx, "up")}
                      disabled={idx === 0}
                      className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-20"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMove(idx, "down")}
                      disabled={idx === nav.items.length - 1}
                      className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-20"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(idx)}
                      className="p-1 text-red-400 hover:text-red-700 ml-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Label
                    </label>
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => {
                        const items = [...nav.items]
                        items[idx] = { ...items[idx], label: e.target.value }
                        setNav({ ...nav, items })
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Target Route / URL
                    </label>
                    <input
                      type="text"
                      value={item.href}
                      onChange={(e) => {
                        const items = [...nav.items]
                        items[idx] = { ...items[idx], href: e.target.value }
                        setNav({ ...nav, items })
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg font-mono text-slate-600"
                    />
                  </div>
                </div>

                {item.children && item.children.length > 0 && (
                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Nested Dropdown Links ({item.children.length})
                    </span>
                    <div className="space-y-1.5 pl-3 border-l-2 border-blue-200">
                      {item.children.map((child, cIdx) => (
                        <div key={child.id} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={child.label}
                            onChange={(e) => {
                              const items = [...nav.items]
                              const children = [...(items[idx].children || [])]
                              children[cIdx] = {
                                ...children[cIdx],
                                label: e.target.value,
                              }
                              items[idx] = { ...items[idx], children }
                              setNav({ ...nav, items })
                            }}
                            className="w-1/3 px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs"
                          />
                          <input
                            type="text"
                            value={child.href}
                            onChange={(e) => {
                              const items = [...nav.items]
                              const children = [...(items[idx].children || [])]
                              children[cIdx] = {
                                ...children[cIdx],
                                href: e.target.value,
                              }
                              items[idx] = { ...items[idx], children }
                              setNav({ ...nav, items })
                            }}
                            className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-600"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Primary CTA Settings */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              Header Primary CTA Button
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Button Label
                </label>
                <input
                  type="text"
                  value={nav.primaryCta.label}
                  onChange={(e) =>
                    setNav({
                      ...nav,
                      primaryCta: { ...nav.primaryCta, label: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Target Route
                </label>
                <input
                  type="text"
                  value={nav.primaryCta.href}
                  onChange={(e) =>
                    setNav({
                      ...nav,
                      primaryCta: { ...nav.primaryCta, href: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-600"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nav.primaryCta.visible}
                    onChange={(e) =>
                      setNav({
                        ...nav,
                        primaryCta: {
                          ...nav.primaryCta,
                          visible: e.target.checked,
                        },
                      })
                    }
                    className="rounded text-blue-600 w-4 h-4"
                  />
                  <span className="font-semibold text-slate-800">
                    Show CTA Button in Header
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNavigationPage
