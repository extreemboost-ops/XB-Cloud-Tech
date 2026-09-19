// Stub catalog-store — replaces the deleted marketplace catalog-store.
// Admin pages still compile and render with empty data.

export type Category = {
  slug: string
  name: string
}

type CatalogState = {
  categories: Category[]
}

export function useCatalog(): CatalogState {
  return {
    categories: [],
  }
}
