# VERSOPICK images

Photographs for VERSOPICK live in this folder and are registered in
`src/lib/versopick/images.ts`. Only licensed or authorised images may be added.

## Rules

1. **Licence first.** Every image needs a known source and a licence that permits commercial
   web use: purchased stock, a free licence such as Unsplash or Pexels, your own photography,
   or retailer/brand imagery you are authorised to use. Record it in the `credit` field.
2. **Lifestyle ≠ product.** Lifestyle photos (hero, categories, guides) set the mood only.
   Never use a generic or stock photo to represent a specific product.
3. **Product photos** go on real products only (`product.images`, with `isDemo: false`), and must
   show that exact product, supplied by the brand/retailer or photographed by us.
4. **People and trademarks.** Avoid identifiable people (they need a model release) and visible
   third-party logos or branded products in lifestyle shots.

## Sizes (export as JPG or WebP, sRGB, about 80% quality)

| Slot | Ratio | Export at least |
|---|---|---|
| Homepage hero | 4:5 (crops to 4:3 on phones) | 1600 × 2000 |
| Category cards / headers | 4:3 (16:10 and 16:9 on phones); keep the subject centred | 2000 × 1500 |
| Buying-guide covers | 3:2 | 1800 × 1200 |
| Product photos | 1:1 on a white or very light background | 1600 × 1600 |

Next.js generates the smaller responsive sizes and modern formats automatically; you only
supply one high-quality file per image.

## Adding an image

```ts
// src/lib/versopick/images.ts
import heroKitchen from '@/assets/versopick/hero-kitchen.jpg'

export const heroImage: LifestyleSlot = {
  src: heroKitchen,
  alt: 'Sunlit kitchen with open shelving and a wooden dining table',
  focus: '50% 40%', // optional crop focal point
  credit: { author: 'Jane Doe', source: 'Unsplash', license: 'Unsplash License', url: 'https://unsplash.com/photos/…' },
}
```

The credit appears automatically in the "Image credits" section of `/versopick/about`.
