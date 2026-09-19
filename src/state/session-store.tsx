// Stub session-store — replaces the deleted marketplace session-store.
// Admin pages still compile and render without real auth.

export type AdminUser = {
  id: string
  fullName: string
  email: string
  role: string
}

type SessionState = {
  status: 'authenticated'
  user: AdminUser
  signOut: () => Promise<void>
  signIn: (email: string, password: string) => Promise<{ ok: boolean; message?: string }>
}

const STUB_USER: AdminUser = {
  id: 'stub-admin',
  fullName: 'Admin User',
  email: 'admin@xbcloudtech.com',
  role: 'superadmin',
}

export function useSession(): SessionState {
  return {
    status: 'authenticated',
    user: STUB_USER,
    signOut: async () => {},
    signIn: async () => ({ ok: true }),
  }
}
