import { useParams, Link } from "react-router-dom"
import ServicePageTemplate from "../../components/ServicePageTemplate"
import { SERVICES_DATA } from "../../data/services"
import { AlertTriangle, ArrowRight } from "lucide-react"

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? SERVICES_DATA[slug] : undefined

  if (!service) {
    return (
      <div className="min-h-[70vh] bg-dark-base text-white flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Service Not Found</h1>
        <p className="text-neutral-400 max-w-md mb-8 text-sm">
          The requested engineering capability is not found. Explore our
          complete enterprise services catalogue below.
        </p>
        <Link
          to="/services"
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
        >
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    )
  }

  return <ServicePageTemplate service={service} />
}
