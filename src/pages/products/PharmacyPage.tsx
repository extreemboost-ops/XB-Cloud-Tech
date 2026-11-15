import ProductPageTemplate from "../../components/ProductPageTemplate"
import { PRODUCTS_DATA } from "../../data/products"

export default function PharmacyPage() {
  const product = PRODUCTS_DATA["pharmacy-erp"]
  return <ProductPageTemplate product={product} />
}
