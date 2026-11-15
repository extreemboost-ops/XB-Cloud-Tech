import Breadcrumb from "../components/ui/Breadcrumb"
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-light-base font-sans text-neutral-900 selection:bg-primary/20">
      {/* Header */}
      <header className="bg-dark-base text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,95,255,0.15),transparent_60%)]" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Breadcrumb
            items={[{ label: "Legal" }, { label: "Privacy Policy" }]}
            theme="dark"
            className="mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 max-w-xl text-base md:text-lg">
            How XB Cloud Tech collects, uses, and protects your personal and
            operational business data.
          </p>
          <div className="mt-4 text-xs text-neutral-500 uppercase tracking-widest font-mono">
            Last Updated: January 15, 2026
          </div>
        </div>
      </header>

      {/* Main Policy Content */}
      <main className="max-w-[900px] mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-neutral-200/80 shadow-sm space-y-10">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold text-lg">
              <Shield className="w-5 h-5" />
              <h2>1. Introduction &amp; Commitment</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              XB Cloud Tech (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) respects your privacy and is dedicated to
              safeguarding the personal and corporate information you entrust
              with us. This Privacy Policy governs your use of our website,
              software products (including Storex ERP, Purchoon ERP,
              CambridgeDesk, and our industry platforms), and custom enterprise
              engineering services.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold text-lg">
              <Lock className="w-5 h-5" />
              <h2>2. Information We Collect</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              We collect information to provide secure, robust software services
              and support:
            </p>
            <ul className="space-y-3 text-neutral-600 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>
                  <strong>Direct Inquiries:</strong> Name, work email, phone
                  number, company name, and project requirements submitted via
                  our consultation and demo request forms.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>
                  <strong>Operational Telemetry:</strong> Anonymized platform
                  performance, diagnostic metrics, and usage statistics to
                  ensure high availability and prevent security threats.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>
                  <strong>Cookies &amp; Technical Logs:</strong> IP addresses,
                  browser types, and session tokens essential for web
                  performance, security verification, and accessibility.
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold text-lg">
              <FileText className="w-5 h-5" />
              <h2>3. How We Use Your Information</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              We do not sell, rent, or trade your personal or operational data
              to third parties. Information collected is used strictly to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                Schedule requested software product demonstrations and sales
                consultations.
              </li>
              <li>
                Deliver enterprise contracts, architectural blueprints, and
                SLA-backed engineering services.
              </li>
              <li>
                Provide critical security patches, operational notifications,
                and customer support.
              </li>
              <li>
                Comply with applicable legal, regulatory, and audit
                requirements.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold text-lg">
              <Shield className="w-5 h-5" />
              <h2>4. Data Security &amp; Retention</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              We implement industry-standard encryption (AES-256 for data at
              rest, TLS 1.3 for data in transit), role-based access control, and
              continuous vulnerability monitoring. We retain corporate records
              only for as long as necessary to fulfill project delivery,
              contract obligations, and regulatory compliance.
            </p>
          </section>

          <section className="space-y-4 border-t border-neutral-100 pt-8">
            <h2 className="text-lg font-bold text-neutral-900">
              5. Contact Our Data Protection Team
            </h2>
            <p className="text-neutral-600 text-sm">
              If you have any questions or data access requests regarding this
              policy, please reach out to us at{" "}
              <a
                href="mailto:privacy@xbcloudtech.com"
                className="text-primary font-medium hover:underline"
              >
                privacy@xbcloudtech.com
              </a>{" "}
              or write to our corporate office.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
