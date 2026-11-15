import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { AdminUser, UserRole, ROLE_PERMISSIONS } from "../../types/adminCms"
import { Shield, Plus, Trash2, CheckCircle2 } from "lucide-react"

export const AdminUsersPage: React.FC = () => {
  const { user: currentUser } = useAdminAuth()
  const [users, setUsers] = useState<AdminUser[]>(adminCmsStore.getUsers())
  const [showAddModal, setShowAddModal] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  // New user fields
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newRole, setNewRole] = useState<UserRole>("editor")

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setUsers(adminCmsStore.getUsers())
    })
  }, [])

  const handleRoleChange = (id: string, role: UserRole) => {
    if (!currentUser) return
    adminCmsStore.updateUser(id, { role }, currentUser)
    setFeedback(`Updated user role to ${role}`)
    setTimeout(() => setFeedback(null), 2500)
  }

  const handleStatusChange = (id: string, status: "active" | "suspended") => {
    if (!currentUser) return
    adminCmsStore.updateUser(id, { status }, currentUser)
    setFeedback(`Updated user status to ${status}`)
    setTimeout(() => setFeedback(null), 2500)
  }

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentUser || !newName.trim() || !newEmail.trim()) return

    adminCmsStore.addUser(
      {
        name: newName.trim(),
        email: newEmail.trim(),
        role: newRole,
        status: "active",
      },
      currentUser,
    )

    setShowAddModal(false)
    setNewName("")
    setNewEmail("")
    setFeedback("User account created successfully")
    setTimeout(() => setFeedback(null), 3000)
  }

  const handleDelete = (id: string, name: string) => {
    if (!currentUser) return
    if (id === currentUser.id) {
      alert("You cannot delete your own administrative account.")
      return
    }
    if (confirm(`Remove administrator "${name}"?`)) {
      adminCmsStore.deleteUser(id, currentUser)
      setFeedback(`Removed ${name}`)
      setTimeout(() => setFeedback(null), 2500)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            User Roles & Access Control
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage administrative personnel, assign RBAC role permissions, and
            control editing rights.
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
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20"
          >
            <Plus className="w-4 h-4" />
            Add Administrative User
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/75 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <th className="py-3.5 px-6">Administrator</th>
              <th className="py-3.5 px-4">Assigned Role</th>
              <th className="py-3.5 px-4">Account Status</th>
              <th className="py-3.5 px-4">Member Since</th>
              <th className="py-3.5 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      {u.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">
                        {u.name}
                      </span>
                      <span className="text-slate-400 text-xs">{u.email}</span>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-4">
                  <select
                    value={u.role}
                    onChange={(e) =>
                      handleRoleChange(u.id, e.target.value as UserRole)
                    }
                    disabled={u.id === currentUser?.id}
                    className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 capitalize"
                  >
                    <option value="super_admin">Super Admin</option>
                    <option value="admin">Site Admin</option>
                    <option value="editor">Content Editor</option>
                    <option value="marketing">Marketing Manager</option>
                    <option value="viewer">Viewer</option>
                  </select>
                </td>

                <td className="py-4 px-4">
                  <button
                    onClick={() =>
                      handleStatusChange(
                        u.id,
                        u.status === "active" ? "suspended" : "active",
                      )
                    }
                    disabled={u.id === currentUser?.id}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      u.status === "active"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        u.status === "active" ? "bg-emerald-500" : "bg-red-500"
                      }`}
                    />
                    {u.status}
                  </button>
                </td>

                <td className="py-4 px-4 text-slate-500">
                  {new Date(u.createdAt).toLocaleDateString()}
                </td>

                <td className="py-4 px-6 text-right">
                  {u.id !== currentUser?.id && (
                    <button
                      onClick={() => handleDelete(u.id, u.name)}
                      className="p-1.5 text-red-400 hover:text-red-700 hover:bg-red-50 rounded-lg"
                      title="Remove User"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Role Permission Matrix Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <Shield className="w-4 h-4 text-blue-600" />
          Active Role Permission Matrix
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
          {(Object.keys(ROLE_PERMISSIONS) as UserRole[]).map((r) => {
            const perms = ROLE_PERMISSIONS[r]
            return (
              <div
                key={r}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2"
              >
                <span className="font-bold text-slate-900 capitalize block text-sm border-b border-slate-200/60 pb-1">
                  {r.replace("_", " ")}
                </span>
                <div className="space-y-1 text-[11px] text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Manage Users</span>
                    <span>{perms.manageUsers ? "✓" : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Design System</span>
                    <span>{perms.manageDesignTokens ? "✓" : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Publish Content</span>
                    <span>{perms.publishContent ? "✓" : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Products CMS</span>
                    <span>{perms.manageProducts ? "✓" : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Landing Pages</span>
                    <span>{perms.manageLandingPages ? "✓" : "—"}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Add Administrative User
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Grant CMS management credentials to a team member.
            </p>

            <form onSubmit={handleAddUser} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zainab Malik"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="zainab@xbcloudtech.com"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Role Assignment
                </label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as UserRole)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl capitalize"
                >
                  <option value="editor">Content Editor</option>
                  <option value="marketing">Marketing Manager</option>
                  <option value="admin">Site Admin</option>
                  <option value="super_admin">Super Admin</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-md shadow-blue-500/20"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminUsersPage
