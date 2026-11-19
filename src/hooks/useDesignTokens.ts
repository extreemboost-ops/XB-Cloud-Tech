import { useEffect } from "react"
import { adminCmsStore } from "../services/adminCmsStore"
import { DesignTokens } from "../types/adminCms"

export function useDesignTokens(): DesignTokens {
  const tokens = adminCmsStore.getDesignTokens()

  useEffect(() => {
    const applyTokens = (t: DesignTokens) => {
      const root = document.documentElement
      if (!root) return

      if (t.primaryColor) {
        root.style.setProperty("--color-primary", t.primaryColor)
      }
      if (t.accentColor) {
        root.style.setProperty("--color-secondary", t.accentColor)
      }
      if (t.darkNavyColor) {
        root.style.setProperty("--color-dark-base", t.darkNavyColor)
      }
      if (t.surfaceColor) {
        root.style.setProperty("--color-surface", t.surfaceColor)
      }
      if (t.surfaceSecondaryColor) {
        root.style.setProperty(
          "--color-surface-elevated",
          t.surfaceSecondaryColor,
        )
      }
      if (t.textColor) {
        root.style.setProperty("--color-neutral-900", t.textColor)
      }
      if (t.textMutedColor) {
        root.style.setProperty("--color-neutral-500", t.textMutedColor)
      }
      if (t.fontHeading) {
        root.style.setProperty("--font-sans", t.fontHeading)
      }
      if (t.enableSmoothScroll) {
        root.style.scrollBehavior = "smooth"
      } else {
        root.style.scrollBehavior = "auto"
      }
    }

    // Apply initially
    applyTokens(tokens)

    // Subscribe to admin token updates
    const unsubscribe = adminCmsStore.subscribe(() => {
      const freshTokens = adminCmsStore.getDesignTokens()
      applyTokens(freshTokens)
    })

    return unsubscribe
  }, [])

  return tokens
}
