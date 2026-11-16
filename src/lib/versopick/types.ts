import type { LucideIcon } from 'lucide-react'
import type { VpImage } from './images'

export type CategorySlug =
  | 'kitchen-home'
  | 'furniture-decor'
  | 'daily-essentials'
  | 'gadgets-technology'
  | 'office-work-from-home'
  | 'personal-care'

export type Category = {
  slug: CategorySlug
  name: string
  shortName: string
  description: string
  icon: LucideIcon
  subcategories: string[]
}

export type Product = {
  id: string
  name: string
  category: CategorySlug
  subcategory: string
  summary: string
  bestFor: string
  highlights: string[]
  considerations: string[]
  /** Neutral descriptive attributes used by the comparison table. */
  specs: Record<string, string>
  featured: boolean
  editorsPick: boolean
  /** ISO date the pick was added to VERSOPICK (our own catalogue data). */
  addedAt: string
  /**
   * True when a brand or retailer has paid for this placement or promotion. Per the Sponsored
   * Content Policy, the product is then always shown with the "Sponsored Content" label.
   */
  sponsored?: boolean
  /** True for placeholder/demonstration entries. Demo products never get retailer links. */
  isDemo: boolean
  /**
   * Retailer (e.g. Amazon affiliate) URL. Only set for real, verified products.
   * Prices, ratings and reviews are intentionally NOT stored: they must come from the
   * retailer's official API at display time, never be typed in by hand.
   */
  retailerUrl?: string
  /**
   * Real photographs of THIS product (first = primary), supplied by the retailer/brand or taken
   * by us, with licence details. Demo products must never have images: a generic stock photo
   * must not be presented as a specific product.
   */
  images?: VpImage[]
}

export type SortOption = 'recommended' | 'newest' | 'name-asc' | 'name-desc'
export type PickFilter = 'all' | 'featured' | 'editors'
