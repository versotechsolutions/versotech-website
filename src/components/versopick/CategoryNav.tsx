import Link from 'next/link'
import { categories } from '@/lib/versopick/categories'
import type { CategorySlug } from '@/lib/versopick/types'
import { cn } from '@/lib/utils'

/** Horizontal category pills; scrolls sideways inside itself on small screens. */
export default function CategoryNav({ active }: { active?: CategorySlug }) {
  return (
    <nav aria-label="Categories" className="-mx-4 px-4 overflow-x-auto">
      <ul className="flex gap-2 w-max">
        {categories.map(({ slug, name, icon: Icon }) => (
          <li key={slug}>
            <Link
              href={`/versopick/${slug}`}
              aria-current={active === slug ? 'page' : undefined}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition',
                active === slug
                  ? 'border-vp-navy bg-vp-navy text-white'
                  : 'border-vp-navy/15 bg-white text-vp-navy hover:border-vp-gold'
              )}
            >
              <Icon className="w-4 h-4" aria-hidden="true" /> {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
