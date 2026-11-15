import Breadcrumb from "../components/ui/Breadcrumb"
import { FileCheck, AlertCircle, Scale, ShieldCheck } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-light-base font-sans text-neutral-900 selection:bg-primary/20">
      {/* Header */}
      <header className="bg-dark-base text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,95,255,0.15),transparent_60%)]" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Breadcrumb
            items={[{ label: "Legal" }, { label: "Terms of Service" }]}
            theme="dark"
            className="mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-neutral-400 max-w-xl text-base md:text-lg">
            Agreement governing the use of XB Cloud Tech platforms, custom
            software solutions, and advisory services.
          </p>
          <div className="mt-4 text-xs text-neutral-500 uppercase tracking-widest font-mono">
            Effective Date: January 1, 2026
          </div>
        </div>
      </header>

      {/* Main Terms Content */}
      <main className="max-w-[900px] mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-neutral-200/80 shadow-sm space-y-10">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold text-lg">
              <Scale className="w-5 h-5" />
              <h2>1. Acceptance of Terms</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              By accessing the XB Cloud Tech website, requesting a
              demonstration, or signing a Statement of Work (SOW) for software
              development or ERP deployment, you agree to be bound by these
              Terms of Service. If you are entering into this agreement on
              behalf of a company, you represent that you possess the authority
              to bind such entity.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold text-lg">
              <FileCheck className="w-5 h-5" />
              <h2>2. Enterprise Software Licenses &amp; Products</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              Proprietary ERP products (such as Storex, Purchoon, and
              CambridgeDesk) are licensed under specific commercial subscription
              or enterprise on-premise agreements. License grants are
              non-exclusive, non-transferable, and conditioned on timely payment
              of applicable license fees and compliance with usage boundaries.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold text-lg">
              <ShieldCheck className="w-5 h-5" />
              <h2>3. Intellectual Property Rights</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              All core platform architecture, design system assets, pre-built
              ERP modules, trademarks, and documentation remain the exclusive
              intellectual property of XB Cloud Tech. Custom deliverables
              created under specific client SOW agreements are transferred
              according to the explicit terms established in the applicable
              master services agreement.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold text-lg">
              <AlertCircle className="w-5 h-5" />
              <h2>4. Service Level Agreements (SLAs) &amp; Warranties</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              We commit to standard commercial reliability and uptime targets as
              set forth in our formal SLA documentation. Software is provided
              with warranty coverage against reproducible defects as specified
              in contract terms. Except as expressly provided, services and
              platforms are delivered &ldquo;as documented&rdquo; with industry
              standard security safeguards.
            </p>
          </section>

          <section className="space-y-4 border-t border-neutral-100 pt-8">
            <h2 className="text-lg font-bold text-neutral-900">
              5. Legal Inquiries &amp; Notices
            </h2>
            <p className="text-neutral-600 text-sm">
              Official notices regarding these terms should be addressed to our
              legal department at{" "}
              <a
                href="mailto:legal@xbcloudtech.com"
                className="text-primary font-medium hover:underline"
              >
                legal@xbcloudtech.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
