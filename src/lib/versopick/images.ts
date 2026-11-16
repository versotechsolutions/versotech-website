import type { StaticImageData } from 'next/image'
import type { CategorySlug } from './types'

/**
 * VERSOPICK IMAGE REGISTRY
 *
 * Every photograph shown on VERSOPICK must be registered here with its licence, so the site
 * always knows where an image came from and on what terms it may be used. Only add images that
 * are licensed for commercial web use (e.g. purchased stock, an Unsplash/Pexels licence,
 * your own photography, or retailer imagery you are authorised to use).
 *
 * Until a slot has an image, components render a designed, clearly-labelled placeholder.
 * How to add a photo: see src/assets/versopick/README.md
 */

export type ImageLicense = {
  /** Photographer / rights holder. */
  author: string
  /** Where it was obtained (e.g. "Unsplash", "Adobe Stock", "Own photography"). */
  source: string
  /** Licence name (e.g. "Unsplash License", "Adobe Stock Standard"). */
  license: string
  /** Link to the original asset or licence record. */
  url?: string
}

export type VpImage = {
  /** Static import (preferred: gives width/height + blur placeholder automatically) or a path in /public. */
  src: StaticImageData | string
  alt: string
  credit: ImageLicense
  /** Optional focal point for object-position when cropping, e.g. "50% 30%". */
  focus?: string
}

/** A lifestyle/mood photo. NEVER used to represent a specific product. */
export type LifestyleSlot = VpImage | null

// ---- Licensed lifestyle photography ------------------------------------------------------------
// All 11 images: downloaded from unsplash.com via each photo's official download link (served
// from images.unsplash.com, i.e. free photos, not Unsplash+), verified on the photo page as
// "Free to use under the Unsplash License" (checked 2026-11-16), re-encoded to max 2000px.
// Unsplash License: commercial use allowed, attribution not required (we credit anyway); images
// may not be sold unmodified or compiled into a competing image service.
// https://unsplash.com/license
import heroLivingRoom from '@/assets/versopick/hero-living-room.jpg'
import kitchenHome from '@/assets/versopick/kitchen-home.jpg'
import furnitureDecor from '@/assets/versopick/furniture-decor.jpg'
import dailyEssentials from '@/assets/versopick/daily-essentials.jpg'
import gadgetsTechnology from '@/assets/versopick/gadgets-technology.jpg'
import officeWorkFromHome from '@/assets/versopick/office-work-from-home.jpg'
import personalCare from '@/assets/versopick/personal-care.jpg'
import guideKitchenAppliances from '@/assets/versopick/guide-kitchen-appliances.jpg'
import guideHomeFurniture from '@/assets/versopick/guide-home-furniture.jpg'
import guideEverydayEssentials from '@/assets/versopick/guide-everyday-essentials.jpg'
import guideGadgets from '@/assets/versopick/guide-gadgets.jpg'

const UNSPLASH = 'Unsplash'
const UNSPLASH_LICENSE = 'Unsplash License'
const unsplash = (author: string, photoId: string): ImageLicense => ({
  author,
  source: UNSPLASH,
  license: UNSPLASH_LICENSE,
  url: `https://unsplash.com/photos/${photoId}`,
})

/** The 11 approved lifestyle images, by theme. Mood imagery only: never shown as a product. */
export const lifestyleImages = {
  hero: {
    src: heroLivingRoom,
    alt: 'Bright living room with a white sofa, leather lounge chair and patterned rug',
    focus: '50% 65%',
    credit: unsplash('Jakob Owens', 'nQBc6clG3X4'),
  },
  kitchenHome: {
    src: kitchenHome,
    alt: 'Kitchen with dark lower cabinets, open shelving and a window over the sink',
    focus: '50% 55%',
    credit: unsplash('Collov Home Design', '-aDGbdTsBZg'),
  },
  furnitureDecor: {
    src: furnitureDecor,
    alt: 'Living room with a grey sofa, wooden coffee table, table lamps and wall art',
    focus: '35% 60%',
    credit: unsplash('Francesca Tosolini', 'lLDh9JppH2c'),
  },
  dailyEssentials: {
    src: dailyEssentials,
    alt: 'Glass tumbler wrapped in a cloth beside a wooden dish brush on a white surface',
    focus: '50% 70%',
    credit: unsplash('Rachel Beck', 'fFgZUtnQz6I'),
  },
  gadgetsTechnology: {
    src: gadgetsTechnology,
    alt: 'Over-ear headphones resting on an oak headphone stand',
    focus: '50% 55%',
    credit: unsplash('Workperch', 'G8UAl_XAnJs'),
  },
  officeWorkFromHome: {
    src: officeWorkFromHome,
    alt: 'Bright home office with bookshelves, two desks and chairs beneath large windows',
    focus: '55% 60%',
    credit: unsplash('Clay Banks', 'Mb-lGau6K5U'),
  },
  personalCare: {
    src: personalCare,
    alt: 'Bamboo toothbrushes in a glass jar beside eucalyptus leaves',
    focus: '30% 60%',
    credit: unsplash('Harold Hisona', 'VCC5Vc0X2F8'),
  },
  guideKitchenAppliances: {
    src: guideKitchenAppliances,
    alt: 'Kitchen counter with an electric kettle, espresso machine and cups against a tiled wall',
    focus: '50% 55%',
    credit: unsplash('Jakub Żerdzicki', 'CyoNZtVUVcM'),
  },
  guideHomeFurniture: {
    src: guideHomeFurniture,
    alt: 'Sunlit living room with a green velvet sofa, wooden chest and armchair',
    focus: '50% 60%',
    credit: unsplash('Clay Banks', 'E0pZm6b2z7A'),
  },
  guideEverydayEssentials: {
    src: guideEverydayEssentials,
    alt: 'Reusable mesh produce bag hanging on a wall above a shelf with a woven basket',
    focus: '50% 30%',
    credit: unsplash('Ting Chen', 'LJUdJ2QJ0Ko'),
  },
  guideGadgets: {
    src: guideGadgets,
    alt: 'Close-up of tan and black over-ear headphones on a wooden table',
    focus: '45% 60%',
    credit: unsplash('felirbe', 'bNW0HC_a3KE'),
  },
} satisfies Record<string, VpImage>

// ---- Slots ----------------------------------------------------------------------------------

export const heroImage: LifestyleSlot = lifestyleImages.hero

/** One approved photograph per category (six categories, six category images). */
export const categoryImages: Record<CategorySlug, LifestyleSlot> = {
  'kitchen-home': lifestyleImages.kitchenHome,
  'furniture-decor': lifestyleImages.furnitureDecor,
  'daily-essentials': lifestyleImages.dailyEssentials,
  'gadgets-technology': lifestyleImages.gadgetsTechnology,
  'office-work-from-home': lifestyleImages.officeWorkFromHome,
  'personal-care': lifestyleImages.personalCare,
}

/** Guide cover images, keyed by guide slug (see guides.ts). */
export const guideImages: Record<string, LifestyleSlot> = {
  'choosing-home-furniture': lifestyleImages.guideHomeFurniture,
  'choosing-kitchen-appliances': lifestyleImages.guideKitchenAppliances,
  'lower-waste-essentials': lifestyleImages.guideEverydayEssentials,
  'everyday-gadgets': lifestyleImages.guideGadgets,
}

/** Every registered image (deduplicated), for the credits list on the About page. */
export function allImageCredits(): { alt: string; credit: ImageLicense }[] {
  return Object.values(lifestyleImages).map(({ alt, credit }) => ({ alt, credit }))
}

export { RATIOS } from './ratios'
