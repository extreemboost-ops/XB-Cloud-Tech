import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { RolePermissions } from "../../types/adminCms"
import { ShieldAlert, ArrowLeft } from "lucide-react"

interface AdminProtectedRouteProps {
  children: React.ReactNode
  requiredPermission?: keyof RolePermissions
}

export const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({
  children,
  requiredPermission,
}) => {
  const { user, isAuthenticated, isLoading, checkPermission } = useAdminAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-medium text-slate-500">
            Verifying administrative credentials...
          </p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  if (requiredPermission && !checkPermission(requiredPermission)) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
          <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-200">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Access Restricted
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Your current administrative role (
            <span className="font-semibold text-blue-600">{user.role}</span>)
            does not have authorization to view or edit this module (
            {requiredPermission}).
          </p>
          <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left border border-slate-200 text-xs text-slate-600">
            <p className="font-medium text-slate-700 mb-1">Signed in as:</p>
            <p className="font-semibold text-slate-900">{user.name}</p>
            <p className="text-slate-500">{user.email}</p>
          </div>
          <button
            onClick={() => window.history.back()}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default AdminProtectedRoute
