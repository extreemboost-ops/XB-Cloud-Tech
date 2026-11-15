import ProductPageTemplate from "../../components/ProductPageTemplate"
import { PRODUCTS_DATA } from "../../data/products"

export default function CambridgeDeskPage() {
  const product = PRODUCTS_DATA["cambridgedesk"]
  return <ProductPageTemplate product={product} />
}
