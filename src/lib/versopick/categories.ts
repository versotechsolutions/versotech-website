import { Armchair, Bath, CookingPot, Laptop, ShoppingBasket, Smartphone } from 'lucide-react'
import type { Category, CategorySlug } from './types'

/**
 * VERSOPICK categories. `name` is the full title (pages, metadata, footer); `shortName` is used
 * where space is tight (desktop nav, filter chips, card eyebrows). Subcategories list only the
 * types that exist or are planned for each category.
 */
export const categories: Category[] = [
  {
    slug: 'kitchen-home',
    name: 'Kitchen & Home',
    shortName: 'Kitchen & Home',
    description: 'Cookware, small appliances, storage and household basics for a kitchen and home that work as hard as you do.',
    icon: CookingPot,
    subcategories: ['Cookware', 'Small appliances', 'Food storage', 'Tools', 'Bedding', 'Organisation'],
  },
  {
    slug: 'furniture-decor',
    name: 'Furniture & Decor',
    shortName: 'Furniture & Decor',
    description: 'Seating, tables, storage, lighting and finishing touches chosen for comfort, build and lasting style.',
    icon: Armchair,
    subcategories: ['Seating', 'Tables', 'Storage', 'Lighting', 'Décor'],
  },
  {
    slug: 'daily-essentials',
    name: 'Daily Essentials',
    shortName: 'Essentials',
    description: 'Everyday staples for cleaning, errands and life on the go: the things you reach for every day.',
    icon: ShoppingBasket,
    subcategories: ['Cleaning', 'On the go'],
  },
  {
    slug: 'gadgets-technology',
    name: 'Gadgets & Technology',
    shortName: 'Gadgets & Tech',
    description: 'Useful tech for charging, listening and running a smarter home, without the jargon.',
    icon: Smartphone,
    subcategories: ['Charging', 'Audio', 'Smart home'],
  },
  {
    slug: 'office-work-from-home',
    name: 'Office & Work From Home',
    shortName: 'Work From Home',
    description: 'Chairs, desk accessories and set-up essentials for a comfortable, productive place to work.',
    icon: Laptop,
    subcategories: ['Seating', 'Desk accessories'],
  },
  {
    slug: 'personal-care',
    name: 'Personal Care',
    shortName: 'Personal Care',
    description: 'Thoughtful everyday care for your bathroom routine, from oral care onwards.',
    icon: Bath,
    subcategories: ['Oral care'],
  },
]

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function categoryName(slug: CategorySlug): string {
  return getCategory(slug)?.name ?? slug
}
