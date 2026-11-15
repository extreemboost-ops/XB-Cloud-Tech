import { useParams, Link } from "react-router-dom"
import CampaignLandingTemplate from "../../components/CampaignLandingTemplate"
import { CAMPAIGNS_DATA } from "../../data/campaigns"
import { AlertTriangle, ArrowRight } from "lucide-react"

export default function CampaignRouter() {
  const { slug } = useParams<{ slug: string }>()

  // Map legacy/alternative campaign slugs
  const resolvedSlug =
    slug === "custom-erp-development" ? "custom-enterprise-software" : slug

  const campaign = resolvedSlug ? CAMPAIGNS_DATA[resolvedSlug] : undefined

  if (!campaign) {
    return (
      <div className="min-h-screen bg-dark-base text-white flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold mb-3">
          Campaign Landing Page Not Found
        </h1>
        <p className="text-neutral-400 max-w-md mb-8 text-sm">
          The requested campaign offer may have concluded. Explore our verified
          software platforms and operational products.
        </p>
        <Link
          to="/products"
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
        >
          View All Products <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    )
  }

  return <CampaignLandingTemplate campaign={campaign} />
}
