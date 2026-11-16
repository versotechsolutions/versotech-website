export const vpBrand = {
  name: 'VERSOPICK',
  tagline: 'Discover. Compare. Pick.',
  message: 'Smart choices for everyday living.',
  description:
    'VERSOPICK is a premium product discovery platform for kitchen & home, furniture & decor, daily essentials, gadgets & technology, office & work-from-home, and personal care. Discover, compare and pick with confidence.',
  basePath: '/versopick',
  parent: { name: 'VersoTech Solutions', href: '/' },
}

/**
 * Affiliate disclosure shown site-wide. Kept generic until an affiliate programme is live.
 * When the Amazon Associates account is active, Amazon requires this exact statement to be
 * displayed as well: "As an Amazon Associate I earn from qualifying purchases."
 * Set `amazonAssociateActive` to true at that point to show it everywhere the disclosure appears.
 */
export const vpDisclosure = {
  short:
    'Some links on VERSOPICK may be affiliate links. If you buy through them, we may earn a commission at no extra cost to you.',
  // Keep this factual: describe what we do, not promises we have not formally adopted.
  independence: 'We publish the criteria we use to choose products, so you can judge our picks for yourself.',
  amazonAssociateActive: false,
  amazonStatement: 'As an Amazon Associate I earn from qualifying purchases.',
}

/**
 * Adopted Sponsored Content Policy: anything a brand or retailer pays to place, promote or
 * sponsor is labelled with exactly this text wherever it appears (see Product.sponsored).
 */
export const SPONSORED_LABEL = 'Sponsored Content'

export const vpDemoNotice =
  'Preview: every product currently shown is demonstration content, not a real listing. Prices, ratings and retailer links are not shown.'
