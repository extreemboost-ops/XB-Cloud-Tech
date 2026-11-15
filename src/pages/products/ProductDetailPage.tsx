import { useParams, Link } from "react-router-dom"
import ProductPageTemplate from "../../components/ProductPageTemplate"
import PurchoonPage from "./PurchoonPage"
import CambridgeDeskPage from "./CambridgeDeskPage"
import { PRODUCTS_DATA } from "../../data/products"
import { AlertTriangle, ArrowRight } from "lucide-react"

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? PRODUCTS_DATA[slug] : undefined

  if (!product) {
    return (
      <div className="min-h-[70vh] bg-dark-base text-white flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Product Not Found</h1>
        <p className="text-neutral-400 max-w-md mb-8 text-sm">
          The requested software platform does not exist or may have been
          updated. Explore our complete enterprise ERP directory below.
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

  if (slug === "purchoon-erp") {
    return <PurchoonPage />
  }

  if (slug === "cambridgedesk") {
    return <CambridgeDeskPage />
  }

  return <ProductPageTemplate product={product} />
}
