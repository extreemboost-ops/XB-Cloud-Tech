import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import {
  SEO_REGISTRY,
  DEFAULT_SEO,
  BASE_URL,
  PageSEOMetadata,
} from "../data/seoMetadata"

function setMetaTag(name: string, content: string, isProperty = false) {
  const attribute = isProperty ? "property" : "name"
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute("content", content)
}

function setCanonicalLink(url: string) {
  let element = document.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement("link")
    element.setAttribute("rel", "canonical")
    document.head.appendChild(element)
  }
  element.setAttribute("href", url)
}

function setJsonLd(data: Record<string, unknown> | undefined) {
  const existing = document.querySelector(
    'script[type="application/ld+json"]#xb-seo-jsonld',
  )
  if (existing) {
    existing.remove()
  }
  if (!data) return

  const script = document.createElement("script")
  script.id = "xb-seo-jsonld"
  script.type = "application/ld+json"
  script.text = JSON.stringify(data)
  document.head.appendChild(script)
}

export function resolveSEOMetadata(pathname: string): PageSEOMetadata {
  // Normalize trailing slash (except root)
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname

  // Admin control portal & login - strictly noindex, nofollow per Google guidelines
  if (normalizedPath === "/admin" || normalizedPath.startsWith("/admin/")) {
    return {
      title: "XB Cloud Tech Admin Control Portal",
      description:
        "Authorized administrator and staff enterprise management portal.",
      canonicalUrl: `${BASE_URL}/admin`,
      noIndex: true,
    }
  }

  // Preview routes - noindex
  if (normalizedPath === "/preview" || normalizedPath.startsWith("/preview/")) {
    return {
      title: "Page Preview | XB Cloud Tech",
      description: "XB Cloud Tech preview workspace.",
      canonicalUrl: BASE_URL,
      noIndex: true,
    }
  }

  // 1. Direct registry hit
  if (SEO_REGISTRY[normalizedPath]) {
    return SEO_REGISTRY[normalizedPath]
  }

  // 2. Blog post dynamic detail route
  if (normalizedPath.startsWith("/blog/")) {
    const slug = normalizedPath.replace("/blog/", "")
    const formattedTitle = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
    return {
      title: `${formattedTitle} | XB Cloud Tech Engineering Blog`,
      description: `Read in-depth technical analysis and best practices on ${formattedTitle.toLowerCase()} from the engineering team at XB Cloud Tech.`,
      canonicalUrl: `${BASE_URL}${normalizedPath}`,
      ogType: "article",
    }
  }

  // 3. Portfolio project dynamic detail route
  if (normalizedPath.startsWith("/portfolio/")) {
    const id = normalizedPath.replace("/portfolio/", "")
    const formattedTitle = id
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
    return {
      title: `${formattedTitle} Case Study | XB Cloud Tech Deployments`,
      description: `Explore the architecture, deployment metrics, and business outcomes achieved for ${formattedTitle}.`,
      canonicalUrl: `${BASE_URL}${normalizedPath}`,
      ogType: "article",
    }
  }

  // 4. Products dynamic slug
  if (normalizedPath.startsWith("/products/")) {
    return {
      title: "Enterprise ERP Platform | XB Cloud Tech",
      description:
        "Specialized business software engineered for operational control, financial audit trails, and multi-location deployment.",
      canonicalUrl: `${BASE_URL}${normalizedPath}`,
      ogType: "product",
    }
  }

  // 5. Services dynamic slug
  if (normalizedPath.startsWith("/services/")) {
    return {
      title: "Custom Software Engineering Services | XB Cloud Tech",
      description:
        "High-performance system development, legacy modernization, and enterprise cloud architecture tailored to your business.",
      canonicalUrl: `${BASE_URL}${normalizedPath}`,
      ogType: "website",
    }
  }

  // 6. Industries dynamic slug
  if (normalizedPath.startsWith("/industries/")) {
    return {
      title: "Industry Software Solutions | XB Cloud Tech",
      description:
        "Engineered software platforms matching the operational workflows of retail, healthcare, education, and manufacturing.",
      canonicalUrl: `${BASE_URL}${normalizedPath}`,
      ogType: "website",
    }
  }

  // 7. Campaign landing pages fallback
  if (normalizedPath.startsWith("/lp/")) {
    return {
      title: "XB Cloud Tech Enterprise Solutions Demo",
      description:
        "Book a live technical demo and consultation with senior software architects.",
      canonicalUrl: BASE_URL,
      noIndex: true,
    }
  }

  return DEFAULT_SEO
}

export default function SEOHead() {
  const location = useLocation()

  useEffect(() => {
    // Window scroll reset on navigation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })

    const seo = resolveSEOMetadata(location.pathname)

    // Update document title
    document.title = seo.title

    // Standard meta tags
    setMetaTag("description", seo.description)
    setMetaTag(
      "robots",
      seo.noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large",
    )

    if (seo.keywords && seo.keywords.length > 0) {
      setMetaTag("keywords", seo.keywords.join(", "))
    }

    // Canonical link
    setCanonicalLink(seo.canonicalUrl)

    // OpenGraph meta tags
    setMetaTag("og:title", seo.title, true)
    setMetaTag("og:description", seo.description, true)
    setMetaTag("og:url", seo.canonicalUrl, true)
    setMetaTag("og:type", seo.ogType || "website", true)
    setMetaTag("og:site_name", "XB Cloud Tech", true)
    setMetaTag("og:image", `${BASE_URL}/og-preview.jpg`, true)

    // Twitter Card meta tags
    setMetaTag("twitter:card", "summary_large_image")
    setMetaTag("twitter:title", seo.title)
    setMetaTag("twitter:description", seo.description)
    setMetaTag("twitter:image", `${BASE_URL}/og-preview.jpg`)

    // JSON-LD structured data
    setJsonLd(seo.jsonLd || DEFAULT_SEO.jsonLd)
  }, [location.pathname])

  return null
}
