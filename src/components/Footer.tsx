import { Link } from "react-router-dom"
import { Cloud, Mail, Phone, MapPin, ShieldCheck } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-base border-t border-neutral-900 text-white mt-auto">
      {/* Top Footer Grid */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand & Corporate Overview */}
        <div className="col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-secondary">
              <Cloud className="w-5 h-5" />
            </div>
            <span className="font-logo text-xl font-bold text-white tracking-tight">
              XB Cloud Tech
            </span>
          </Link>

          <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
            Enterprise software engineered for business. We build industry-ready
            ERP platforms, high-scale business management software, and custom
            digital systems that power operations worldwide.
          </p>

          <div className="space-y-2 text-xs text-neutral-400 pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a
                href="mailto:contact@xbcloudtech.com"
                className="hover:text-white transition-colors"
              >
                contact@xbcloudtech.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>+1 (555) 019-2834 / WhatsApp Available</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>
                Global Hubs: San Francisco, CA &bull; London &bull; Singapore
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Software Products */}
        <div>
          <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider text-secondary">
            ERP Products
          </h4>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li>
              <Link
                to="/products/storex-erp"
                className="hover:text-white transition-colors"
              >
                Storex ERP (Retail POS)
              </Link>
            </li>
            <li>
              <Link
                to="/products/purchoon-erp"
                className="hover:text-white transition-colors"
              >
                Purchoon ERP (Grocery)
              </Link>
            </li>
            <li>
              <Link
                to="/products/cambridgedesk"
                className="hover:text-white transition-colors"
              >
                CambridgeDesk (Schools)
              </Link>
            </li>
            <li>
              <Link
                to="/products/pharmacy-erp"
                className="hover:text-white transition-colors"
              >
                Pharmacy ERP (Medical)
              </Link>
            </li>
            <li>
              <Link
                to="/products/industrial-erp"
                className="hover:text-white transition-colors"
              >
                Industrial ERP (Plants)
              </Link>
            </li>
            <li>
              <Link
                to="/products/qistmarket-erp"
                className="hover:text-white transition-colors"
              >
                Qistmarket ERP (Leasing)
              </Link>
            </li>
            <li className="pt-2 border-t border-neutral-800">
              <Link
                to="/products"
                className="text-xs font-bold text-primary hover:text-secondary transition-colors"
              >
                All 6 Products Directory →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Enterprise Services */}
        <div>
          <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider text-secondary">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li>
              <Link
                to="/services/custom-software-development"
                className="hover:text-white transition-colors"
              >
                Custom Software
              </Link>
            </li>
            <li>
              <Link
                to="/services/enterprise-erp"
                className="hover:text-white transition-colors"
              >
                Enterprise ERP
              </Link>
            </li>
            <li>
              <Link
                to="/services/saas-development"
                className="hover:text-white transition-colors"
              >
                SaaS Platforms
              </Link>
            </li>
            <li>
              <Link
                to="/services/business-process-automation"
                className="hover:text-white transition-colors"
              >
                Process Automation
              </Link>
            </li>
            <li>
              <Link
                to="/services/ai-integration"
                className="hover:text-white transition-colors"
              >
                AI Integration
              </Link>
            </li>
            <li>
              <Link
                to="/services/legacy-modernization"
                className="hover:text-white transition-colors"
              >
                Legacy Modernization
              </Link>
            </li>
            <li className="pt-2 border-t border-neutral-800">
              <Link
                to="/services"
                className="text-xs font-bold text-primary hover:text-secondary transition-colors"
              >
                All Capabilities Overview →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Company & Legal */}
        <div>
          <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider text-secondary">
            Company
          </h4>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About XB Cloud Tech
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-white transition-colors"
              >
                Case Studies &amp; Work
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-white transition-colors"
              >
                Pricing &amp; Plans
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition-colors">
                Engineering Insights
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact &amp; Support
              </Link>
            </li>
            <li className="pt-2 border-t border-white/10">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors text-xs text-neutral-500"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-white transition-colors text-xs text-neutral-500"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-neutral-500">
          <p>&copy; {currentYear} XB Cloud Tech, Inc. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Enterprise Grade Security</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
            <div className="flex items-center gap-1.5 text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              <span>99.99% Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
