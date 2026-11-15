import ProductPageTemplate from "../../components/ProductPageTemplate"
import { PRODUCTS_DATA } from "../../data/products"

export default function StorexPage() {
  const product = PRODUCTS_DATA["storex-erp"]
  return <ProductPageTemplate product={product} />
}
