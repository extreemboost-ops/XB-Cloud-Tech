import ProductPageTemplate from "../../components/ProductPageTemplate"
import { PRODUCTS_DATA } from "../../data/products"

export default function IndustrialPage() {
  const product = PRODUCTS_DATA["industrial-erp"]
  return <ProductPageTemplate product={product} />
}
