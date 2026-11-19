import { useParams, useLocation, Link } from "react-router-dom"
import IndustryPageTemplate from "../../components/IndustryPageTemplate"
import { INDUSTRIES_DATA } from "../../data/industries"
import { AlertTriangle, ArrowRight } from "lucide-react"

export default function IndustryDetailPage({
  slugOverride,
}: {
  slugOverride?: string
}) {
  const { slug: paramSlug } = useParams<{ slug: string }>()
  const location = useLocation()

  // Resolve slug from prop, param, or pathname segment (e.g. /industries/retail-wholesale -> retail-wholesale)
  const pathSlug = location.pathname.split("/").filter(Boolean).pop()
  const slug = slugOverride || paramSlug || pathSlug
  const industry = slug ? INDUSTRIES_DATA[slug] : undefined

  if (!industry) {
    return (
      <div className="min-h-[70vh] bg-dark-base text-white flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Industry Solution Not Found</h1>
        <p className="text-neutral-400 max-w-md mb-8 text-sm">
          The requested sector solution is not found. Explore our complete
          sector solutions overview below.
        </p>
        <Link
          to="/industries"
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
        >
          View All Industries <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    )
  }

  return <IndustryPageTemplate industry={industry} />
}
