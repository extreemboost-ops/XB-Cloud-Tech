import React, { useState } from "react"
import { NavLink, Outlet, useNavigate, Link } from "react-router-dom"
import { useAdminAuth } from "../../context/AdminAuthContext"
import {
  LayoutDashboard,
  FileText,
  Boxes,
  Compass,
  Palette,
  Menu as MenuIcon,
  Image,
  BookOpen,
  Search,
  Inbox,
  Users,
  Settings,
  History,
  ShieldCheck,
  ExternalLink,
  LogOut,
  ChevronDown,
  X,
  Sliders,
  Footprints,
} from "lucide-react"

export const AdminLayout: React.FC = () => {
  const { user, role, logout, quickLoginAsRole } = useAdminAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/admin/login", { replace: true })
  }

  const navGroups = [
    {
      group: "Core Management",
      items: [
        { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
        { label: "Website Pages", path: "/admin/pages", icon: FileText },
        { label: "Product CMS", path: "/admin/products", icon: Boxes },
        {
          label: "Campaign Landing Pages",
          path: "/admin/landing-pages",
          icon: Compass,
        },
      ],
    },
    {
      group: "Design & Structure",
      items: [
        {
          label: "Design System & Tokens",
          path: "/admin/design-system",
          icon: Palette,
        },
        {
          label: "Header Navigation",
          path: "/admin/navigation",
          icon: Sliders,
        },
        { label: "Footer Layout", path: "/admin/footer", icon: Footprints },
        { label: "Media Library", path: "/admin/media", icon: Image },
      ],
    },
    {
      group: "Marketing & Leads",
      items: [
        { label: "Blog & Articles", path: "/admin/blog", icon: BookOpen },
        { label: "SEO Control Center", path: "/admin/seo", icon: Search },
        { label: "Forms & Leads Inbox", path: "/admin/forms", icon: Inbox },
      ],
    },
    {
      group: "Governance & Security",
      items: [
        { label: "User Roles & Access", path: "/admin/users", icon: Users },
        {
          label: "Audit Activity Log",
          path: "/admin/activity",
          icon: ShieldCheck,
        },
        {
          label: "Publishing & Rollbacks",
          path: "/admin/versions",
          icon: History,
        },
        { label: "Website Settings", path: "/admin/settings", icon: Settings },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row text-slate-900 font-sans">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 ease-in-out md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 px-6 border-b border-slate-200 flex items-center justify-between">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/20">
              XB
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm tracking-tight">
                XB Cloud CMS
              </span>
              <span className="block text-[10px] font-semibold text-blue-600 uppercase tracking-wider">
                Administration
              </span>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-slate-400 hover:text-slate-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          {navGroups.map((grp) => (
            <div key={grp.group} className="space-y-1">
              <p className="px-3 text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                {grp.group}
              </p>
              {grp.items.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`
                    }
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </NavLink>
                )
              })}
            </div>
          ))}
        </div>

        {/* View Live Website Footer Action */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/50">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-200 shadow-2xs transition-all"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
              View Live Website
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
              Public
            </span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-600">
              <span>XB Cloud Tech</span>
              <span>/</span>
              <span className="text-slate-900 font-semibold">
                Visual CMS Control Suite
              </span>
            </div>
          </div>

          {/* User Controls & Role Quick Switch */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2.5 p-1.5 pr-3 rounded-xl hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  {user?.name.charAt(0) || "A"}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-xs font-bold text-slate-900 leading-none">
                    {user?.name}
                  </div>
                  <div className="text-[10px] font-semibold text-blue-600 leading-tight mt-0.5 capitalize">
                    {role?.replace("_", " ")}
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
              </button>

              {userMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setUserMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-40 text-xs">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1">
                      <p className="font-bold text-slate-900">{user?.name}</p>
                      <p className="text-slate-600 text-[11px] truncate">
                        {user?.email}
                      </p>
                    </div>

                    <div className="py-1">
                      <p className="px-3 py-1 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                        Switch Active Role (Demo)
                      </p>
                      <div className="space-y-0.5">
                        {([
                          "super_admin",
                          "admin",
                          "editor",
                          "marketing",
                          "viewer",
                        ] as const).map((r) => (
                          <button
                            key={r}
                            onClick={() => {
                              quickLoginAsRole(r)
                              setUserMenuOpen(false)
                            }}
                            className={`w-full text-left px-3 py-1.5 rounded-lg font-medium flex items-center justify-between ${
                              role === r
                                ? "bg-blue-50 text-blue-700 font-bold"
                                : "text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            <span className="capitalize">
                              {r.replace("_", " ")}
                            </span>
                            {role === r && (
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-3 py-2 rounded-lg font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        Sign Out of Admin
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page Content Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
