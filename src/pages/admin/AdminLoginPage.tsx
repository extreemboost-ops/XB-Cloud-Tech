import React, { useState } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { UserRole } from "../../types/adminCms"
import {
  Shield,
  Lock,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

export const AdminLoginPage: React.FC = () => {
  const { login, quickLoginAsRole, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState("superadmin@xbcloudtech.com")
  const [password, setPassword] = useState("••••••••••••")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const destination =
    (location.state as any)?.from?.pathname || "/admin/dashboard"

  // If already authenticated, redirect
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(destination, { replace: true })
    }
  }, [isAuthenticated, destination, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await login(email, password)
      if (res.success) {
        navigate(destination, { replace: true })
      } else {
        setError(
          res.error ||
            "Authentication failed. Please verify your administrative email.",
        )
      }
    } catch {
      setError("An unexpected network or service error occurred.")
    } finally {
      setLoading(false)
    }
  }

  const handleQuickRole = (role: UserRole) => {
    quickLoginAsRole(role)
    navigate(destination, { replace: true })
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Shield className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
          XB Cloud Tech CMS Portal
        </h2>
        <p className="mt-1 text-center text-sm text-slate-600">
          Enterprise Content Management & Visual Administration
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-200 sm:px-10">
          {error && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700 text-xs font-medium">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Administrative Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@xbcloudtech.com"
                  className="block w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Master Security Key
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="block w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all shadow-md shadow-blue-500/25 disabled:opacity-50"
              >
                {loading ? "Authenticating..." : "Sign In to Administration"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Quick Role Selectors for testing RBAC */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 text-center">
              Quick Role Test Logins (Demo Sandbox)
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleQuickRole("super_admin")}
                className="p-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-lg text-left transition-colors font-medium flex items-center justify-between"
              >
                <span>Super Admin</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              </button>
              <button
                type="button"
                onClick={() => handleQuickRole("admin")}
                className="p-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-lg text-left transition-colors font-medium flex items-center justify-between"
              >
                <span>Site Admin</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              </button>
              <button
                type="button"
                onClick={() => handleQuickRole("editor")}
                className="p-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-lg text-left transition-colors font-medium flex items-center justify-between"
              >
                <span>Content Editor</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              </button>
              <button
                type="button"
                onClick={() => handleQuickRole("marketing")}
                className="p-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-lg text-left transition-colors font-medium flex items-center justify-between"
              >
                <span>Marketing</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              ← Back to Public Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLoginPage
