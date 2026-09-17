import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { Cloud, Menu, X } from "lucide-react"

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [consoleMockOpen, setConsoleMockOpen] = useState(false)

  return (
    <div className="min-h-screen bg-light-base font-sans text-neutral-900 selection:bg-primary/20 flex flex-col">
      {/* ── NAVBAR ──────────────────────────────── */}
      <nav className="bg-dark-base border-b border-neutral-900 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <Cloud className="w-6 h-6 text-secondary" />
              <span className="font-logo text-xl font-bold text-white tracking-tight">
                XB Cloud Tech
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: "Services", to: "/services" },
                { label: "Pricing", to: "/pricing" },
                { label: "Case Studies", to: "/portfolio" },
                { label: "About", to: "/about" },
                { label: "Blog", to: "/blog" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setConsoleMockOpen(true)}
              className="hidden md:block text-sm font-medium text-neutral-300 hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Sign In
            </button>
            <button
              onClick={() => setConsoleMockOpen(true)}
              className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm transition-all hover:bg-primary/90 shadow-md hover:shadow-lg hover:shadow-primary/20 active:scale-95 flex items-center gap-2"
            >
              Console
            </button>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden max-w-[1200px] mx-auto pt-4 pb-2 flex flex-col gap-2 border-t border-white/10 mt-4">
            {[
              { label: "Services", to: "/services" },
              { label: "Pricing", to: "/pricing" },
              { label: "Case Studies", to: "/portfolio" },
              { label: "About", to: "/about" },
              { label: "Blog", to: "/blog" },
              { label: "Contact", to: "/contact" },
            ].map((p) => (
              <Link
                key={p.to}
                to={p.to}
                onClick={() => setMobileOpen(false)}
                className="text-left px-3 py-2 text-neutral-300 hover:text-white text-sm font-medium rounded-md hover:bg-white/5 transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* ── FOOTER ──────────────────────────────── */}
      <footer className="bg-dark-base border-t border-neutral-900 text-white mt-auto">
        <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Cloud className="w-6 h-6 text-secondary" />
              <span className="font-logo text-xl font-bold text-white tracking-tight">
                XB Cloud Tech
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs">
              Enterprise cloud infrastructure & IT solutions. Powering
              businesses at any scale since 2018.
            </p>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "GitHub"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs font-bold text-neutral-400 hover:bg-primary hover:text-white transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
          {[
            {
              title: "Services",
              links: [
                { l: "Cloud Hosting", t: "/services" },
                { l: "Cybersecurity", t: "/services" },
                { l: "DevOps", t: "/services" },
                { l: "Backup & Recovery", t: "/services" },
                { l: "Managed IT", t: "/services" },
              ],
            },
            {
              title: "Company",
              links: [
                { l: "About Us", t: "/about" },
                { l: "Careers", t: "/about" },
                { l: "Blog", t: "/blog" },
                { l: "Case Studies", t: "/portfolio" },
                { l: "Contact", t: "/contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { l: "Privacy Policy", t: "#" },
                { l: "Terms of Service", t: "#" },
                { l: "SLA", t: "#" },
                { l: "GDPR", t: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h5 className="font-semibold text-sm text-white mb-5">
                {col.title}
              </h5>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.l}>
                    <Link
                      to={link.t}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-neutral-500">
            <p>© 2026 XB Cloud Tech, Inc. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Mock Modal */}
      {consoleMockOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-6"
          onClick={() => setConsoleMockOpen(false)}
        >
          <div
            className="bg-dark-base rounded-2xl overflow-hidden w-full max-w-sm shadow-2xl p-6 text-center border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Cloud className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              XB Cloud Console
            </h3>
            <p className="text-sm text-neutral-400 mb-6">
              This is a frontend demonstration. In production, this would
              redirect to the authentication portal.
            </p>
            <button
              onClick={() => setConsoleMockOpen(false)}
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold w-full hover:bg-primary/90 transition-all"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
