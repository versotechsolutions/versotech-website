import type { CategorySlug } from './types'

/**
 * Buying guides. These are PLANNED editorial topics (status "planned"): the layouts are ready,
 * the articles are not written yet, so they are shown as "Coming soon" and do not link anywhere.
 * Cover images come from `guideImages` in images.ts, keyed by slug.
 */
export type Guide = {
  slug: string
  title: string
  dek: string
  category: CategorySlug
  status: 'planned' | 'published'
}

export const guides: Guide[] = [
  {
    slug: 'choosing-home-furniture',
    title: 'How to choose home furniture that lasts',
    dek: 'Materials, construction, comfort and scale: what to check before you buy sofas, tables and storage.',
    category: 'furniture-decor',
    status: 'planned',
  },
  {
    slug: 'choosing-kitchen-appliances',
    title: 'How to choose small kitchen appliances',
    dek: 'Kettles, coffee machines and more: matching features, size and care to how you actually cook.',
    category: 'kitchen-home',
    status: 'planned',
  },
  {
    slug: 'lower-waste-essentials',
    title: 'Everyday essentials for a lower-waste home',
    dek: 'Simple reusable swaps for cleaning, shopping and personal care that are easy to stick with.',
    category: 'daily-essentials',
    status: 'planned',
  },
  {
    slug: 'everyday-gadgets',
    title: 'Everyday gadgets worth owning',
    dek: 'Headphones, chargers and smart-home basics: what to prioritise and which specs actually matter.',
    category: 'gadgets-technology',
    status: 'planned',
  },
]
