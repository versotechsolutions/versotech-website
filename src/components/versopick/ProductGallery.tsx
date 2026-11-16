'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { VpImage } from '@/lib/versopick/images'
import { RATIOS } from '@/lib/versopick/ratios'
import { cn } from '@/lib/utils'
import VpImageFrame, { isRemote } from './VpImage'

/**
 * Product image gallery for product detail pages: large square main image, previous/next
 * controls, and a thumbnail strip. Only the main image is loaded at full size; thumbnails
 * request small widths. Pass the product's own photographs (never generic stock imagery).
 */
export default function ProductGallery({
  images,
  productName,
  priority = false,
  className,
}: {
  images: VpImage[]
  productName: string
  priority?: boolean
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const count = images.length
  const current = images[index]
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count)

  return (
    <div className={cn('w-full', className)} aria-roledescription="carousel" aria-label={`${productName} images`}>
      <VpImageFrame
        image={current}
        ratio={RATIOS.product}
        sizes="(min-width: 1024px) 560px, 100vw"
        priority={priority}
        fit="contain"
        className="rounded-2xl border border-vp-navy/10"
      >
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid w-10 h-10 place-items-center rounded-full bg-white/90 text-vp-navy shadow hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid w-10 h-10 place-items-center rounded-full bg-white/90 text-vp-navy shadow hover:bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <p className="absolute bottom-3 left-3 rounded-full bg-vp-navy/80 px-2.5 py-1 text-xs font-semibold text-white" aria-live="polite">
              {index + 1} / {count}
            </p>
          </>
        )}
      </VpImageFrame>

      {count > 1 && (
        <ul className="mt-3 grid grid-cols-5 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}: ${img.alt}`}
                aria-current={i === index}
                className={cn(
                  'relative block w-full overflow-hidden rounded-xl border-2 bg-white aspect-square transition',
                  i === index ? 'border-vp-gold' : 'border-transparent opacity-70 hover:opacity-100'
                )}
              >
                <Image src={img.src} alt="" fill sizes="96px" unoptimized={isRemote(img.src)} className="object-contain p-1.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
