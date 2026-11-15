import ProductPageTemplate from "../../components/ProductPageTemplate"
import { PRODUCTS_DATA } from "../../data/products"

export default function PurchoonPage() {
  const product = PRODUCTS_DATA["purchoon-erp"]
  return <ProductPageTemplate product={product} />
}
