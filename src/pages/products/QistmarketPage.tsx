import ProductPageTemplate from "../../components/ProductPageTemplate"
import { PRODUCTS_DATA } from "../../data/products"

export default function QistmarketPage() {
  const product = PRODUCTS_DATA["qistmarket-erp"]
  return <ProductPageTemplate product={product} />
}
