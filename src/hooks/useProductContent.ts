import { useState, useEffect, useMemo } from "react"
import { PRODUCTS_DATA, ProductData } from "../data/products"
import { adminCmsStore } from "../services/adminCmsStore"
import { CMSProduct, CMSProductScreenshot } from "../types/adminCms"
import { ScreenshotSlot } from "../components/ProductScreenshotFrame"

export interface ResolvedProductContent {
  product: ProductData
  cmsProduct?: CMSProduct
  isCustomized: boolean
  getSlotOverride: (
    slotNumber: 1 | 2 | 3 | 4,
    fallback: ScreenshotSlot,
  ) => ScreenshotSlot
}

export function useProductContent(slug: string): ResolvedProductContent {
  const [cmsProduct, setCmsProduct] = useState<CMSProduct | undefined>(() =>
    adminCmsStore.getProductBySlug(slug),
  )

  useEffect(() => {
    const update = () => {
      setCmsProduct(adminCmsStore.getProductBySlug(slug))
    }
    const unsubscribe = adminCmsStore.subscribe(update)
    return unsubscribe
  }, [slug])

  const staticProduct = PRODUCTS_DATA[slug] || PRODUCTS_DATA["storex-erp"]

  // Merge static product with CMS overrides if available
  const mergedProduct = useMemo<ProductData>(() => {
    if (!cmsProduct) return staticProduct

    return {
      ...staticProduct,
      name: cmsProduct.name || staticProduct.name,
      tagline: cmsProduct.heroSubheadline || staticProduct.tagline,
      heroSubhead: cmsProduct.description || staticProduct.heroSubhead,
      category: cmsProduct.category || staticProduct.category,
      color: cmsProduct.accentColor || staticProduct.color,
    }
  }, [staticProduct, cmsProduct])

  const getSlotOverride = (
    slotNumber: 1 | 2 | 3 | 4,
    fallback: ScreenshotSlot,
  ): ScreenshotSlot => {
    if (!cmsProduct || !cmsProduct.screenshots) return fallback

    const cmsScreenshot: CMSProductScreenshot | undefined =
      cmsProduct.screenshots.find((s) => s.slotNumber === slotNumber)

    if (!cmsScreenshot || !cmsScreenshot.image) {
      return fallback
    }

    return {
      ...fallback,
      src: cmsScreenshot.image,
      title: cmsScreenshot.title || fallback.title,
      caption: cmsScreenshot.caption || fallback.caption,
      dimensions: cmsScreenshot.recommendedResolution || fallback.dimensions,
    }
  }

  return {
    product: mergedProduct,
    cmsProduct,
    isCustomized: Boolean(cmsProduct && cmsProduct.status === "published"),
    getSlotOverride,
  }
}
