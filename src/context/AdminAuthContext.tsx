import React, { createContext, useContext, useState, useEffect } from "react"
import {
  AdminUser,
  UserRole,
  RolePermissions,
  ROLE_PERMISSIONS,
} from "../types/adminCms"
import { adminCmsStore } from "../services/adminCmsStore"

interface AdminAuthContextType {
  user: AdminUser | null
  role: UserRole | null
  permissions: RolePermissions | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (
    email: string,
    password?: string,
  ) => Promise<{ success: boolean error?: string }>
  logout: () => void
  quickLoginAsRole: (role: UserRole) => void
  checkPermission: (permission: keyof RolePermissions) => boolean
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined,
)

const AUTH_STORAGE_KEY = "xb_admin_auth_session_v1"

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AdminUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed && parsed.email) {
          const freshUser = adminCmsStore.getUserByEmail(parsed.email)
          if (freshUser && freshUser.status === "active") {
            setUser(freshUser)
          } else {
            localStorage.removeItem(AUTH_STORAGE_KEY)
          }
        }
      }
    } catch (e) {
      console.warn("Failed to restore admin auth session:", e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = async (email: string, _password?: string): Promise<{
    success: boolean
    error?: string
  }> => {
    // In production this connects to Firebase Auth or REST Auth endpoint.
    // Here we validate against seeded CMS users.
    const targetUser = adminCmsStore.getUserByEmail(email.trim())
    if (!targetUser) {
      return {
        success: false,
        error: "Invalid administrative email address or user not found.",
      }
    }

    if (targetUser.status === "suspended") {
      return {
        success: false,
        error:
          "This administrative account is currently suspended. Contact Super Admin.",
      }
    }

    const updatedUser: AdminUser = {
      ...targetUser,
      lastLogin: new Date().toISOString(),
    }

    adminCmsStore.updateUser(
      targetUser.id,
      { lastLogin: updatedUser.lastLogin },
      updatedUser,
    )
    setUser(updatedUser)
    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ email: updatedUser.email, loginTime: Date.now() }),
    )
    adminCmsStore.logActivity(
      updatedUser,
      "User Logged In",
      "auth",
      updatedUser.id,
      updatedUser.name,
      `Role: ${updatedUser.role}`,
      "auth",
    )

    return { success: true }
  }

  const logout = () => {
    if (user) {
      adminCmsStore.logActivity(
        user,
        "User Logged Out",
        "auth",
        user.id,
        user.name,
        undefined,
        "auth",
      )
    }
    setUser(null)
    localStorage.removeItem(AUTH_STORAGE_KEY)
  }

  const quickLoginAsRole = (role: UserRole) => {
    const users = adminCmsStore.getUsers()
    const match = users.find((u) => u.role === role) || users[0]
    login(match.email)
  }

  const role = user ? user.role : null
  const permissions = role ? ROLE_PERMISSIONS[role] : null

  const checkPermission = (permission: keyof RolePermissions): boolean => {
    if (!permissions) return false
    return Boolean(permissions[permission])
  }

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        role,
        permissions,
        isAuthenticated: Boolean(user),
        isLoading,
        login,
        logout,
        quickLoginAsRole,
        checkPermission,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  )
}

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext)
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider")
  }
  return context
}
