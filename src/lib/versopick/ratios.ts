/**
 * Standard aspect ratios used across VERSOPICK, so imagery stays consistent.
 * Kept separate from images.ts so client components can import it without pulling the
 * image registry into the browser bundle.
 */
export const RATIOS = {
  hero: 'aspect-[4/5]',
  heroWide: 'aspect-[16/9]',
  category: 'aspect-[4/3]',
  banner: 'aspect-[21/9]',
  product: 'aspect-square',
  guide: 'aspect-[3/2]',
} as const
