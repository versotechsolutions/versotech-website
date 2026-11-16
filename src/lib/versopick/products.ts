import type { CategorySlug, PickFilter, Product, SortOption } from './types'

/*
 * DEMONSTRATION CATALOGUE
 * Every entry below is placeholder content used to preview the layout. They are generic
 * product types, not real listings: no brands, prices, ratings, reviews or retailer links.
 * Replace with verified products (and `isDemo: false` + `retailerUrl`) before launch.
 */
type DemoInput = Omit<Product, 'isDemo' | 'retailerUrl' | 'featured' | 'editorsPick'> &
  Partial<Pick<Product, 'featured' | 'editorsPick'>>

const demo = (p: DemoInput): Product => ({ featured: false, editorsPick: false, ...p, isDemo: true })

// Products are listed in entry order; each one's `category` decides where it appears.
export const products: Product[] = [
  demo({
    id: 'demo-warm-led-floor-lamp', name: 'Warm-White LED Floor Lamp', category: 'furniture-decor', subcategory: 'Lighting',
    summary: 'A slim floor lamp with a dimmable warm glow for reading corners and living rooms.',
    bestFor: 'Reading nooks and soft evening light',
    highlights: ['Dimmable warm-white light', 'Slim footprint', 'Foot switch'],
    considerations: ['Check shade height against your seating'],
    specs: { Type: 'Floor lamp', Material: 'Metal and fabric', Power: 'Mains', 'Key feature': 'Dimmable' },
    featured: true, addedAt: '2026-11-02',
  }),
  demo({
    id: 'demo-cotton-sateen-sheet-set', name: 'Cotton Sateen Sheet Set', category: 'kitchen-home', subcategory: 'Bedding',
    summary: 'Smooth, breathable sheets with a soft sheen and deep-pocket fitted sheet.',
    bestFor: 'Year-round comfort',
    highlights: ['Breathable cotton', 'Deep pockets', 'Machine washable'],
    considerations: ['Sateen weaves can feel warmer than percale'],
    specs: { Type: 'Sheet set', Material: 'Cotton sateen', Care: 'Machine washable', 'Key feature': 'Deep pockets' },
    editorsPick: true, addedAt: '2026-10-28',
  }),
  demo({
    id: 'demo-ceramic-table-vase', name: 'Matte Ceramic Table Vase', category: 'furniture-decor', subcategory: 'Décor',
    summary: 'A minimalist ceramic vase that works with fresh or dried stems.',
    bestFor: 'Shelves, sideboards and dining tables',
    highlights: ['Matte glaze', 'Stable base', 'Neutral tones'],
    considerations: ['Hand-wash only'],
    specs: { Type: 'Vase', Material: 'Ceramic', Care: 'Hand wash', 'Key feature': 'Matte finish' },
    addedAt: '2026-10-15',
  }),
  demo({
    id: 'demo-stackable-storage-boxes', name: 'Stackable Fabric Storage Boxes', category: 'kitchen-home', subcategory: 'Organisation',
    summary: 'Collapsible fabric boxes with handles for shelves, wardrobes and under-bed storage.',
    bestFor: 'Tidying shelves and wardrobes',
    highlights: ['Collapsible when empty', 'Reinforced handles', 'Stackable'],
    considerations: ['Measure your shelf depth first'],
    specs: { Type: 'Storage boxes', Material: 'Fabric over board', Care: 'Spot clean', 'Key feature': 'Collapsible' },
    addedAt: '2026-09-30',
  }),

  demo({
    id: 'demo-ceramic-nonstick-pan', name: 'Ceramic Non-Stick Frying Pan', category: 'kitchen-home', subcategory: 'Cookware',
    summary: 'An everyday frying pan with a ceramic non-stick coating and a stay-cool handle.',
    bestFor: 'Eggs, pancakes and quick weeknight meals',
    highlights: ['Ceramic non-stick coating', 'Stay-cool handle', 'Induction-compatible base'],
    considerations: ['Use low to medium heat to protect the coating'],
    specs: { Type: 'Frying pan', Material: 'Ceramic-coated aluminium', Care: 'Hand wash recommended', 'Key feature': 'Induction-ready' },
    featured: true, editorsPick: true, addedAt: '2026-11-05',
  }),
  demo({
    id: 'demo-gooseneck-kettle', name: 'Gooseneck Electric Kettle', category: 'kitchen-home', subcategory: 'Small appliances',
    summary: 'A precise-pour kettle with temperature control for tea and pour-over coffee.',
    bestFor: 'Pour-over coffee and specialty tea',
    highlights: ['Precision gooseneck spout', 'Temperature presets', 'Keep-warm mode'],
    considerations: ['Smaller capacity than standard kettles'],
    specs: { Type: 'Electric kettle', Material: 'Stainless steel', Power: 'Mains', 'Key feature': 'Temperature control' },
    featured: true, addedAt: '2026-11-01',
  }),
  demo({
    id: 'demo-glass-meal-prep-containers', name: 'Glass Meal-Prep Containers', category: 'kitchen-home', subcategory: 'Food storage',
    summary: 'Oven- and microwave-safe glass containers with snap-lock lids.',
    bestFor: 'Meal prep and leftovers',
    highlights: ['Borosilicate glass', 'Snap-lock lids', 'Stackable'],
    considerations: ['Heavier than plastic containers'],
    specs: { Type: 'Food containers', Material: 'Borosilicate glass', Care: 'Dishwasher safe', 'Key feature': 'Oven safe (without lid)' },
    addedAt: '2026-10-20',
  }),
  demo({
    id: 'demo-chef-knife', name: '8-inch Chef’s Knife', category: 'kitchen-home', subcategory: 'Tools',
    summary: 'A balanced all-purpose chef’s knife for chopping, slicing and dicing.',
    bestFor: 'Everyday prep work',
    highlights: ['Full-tang build', 'Ergonomic handle', 'Holds an edge well'],
    considerations: ['Hand wash and dry to protect the blade'],
    specs: { Type: 'Chef’s knife', Material: 'Stainless steel', Care: 'Hand wash', 'Key feature': 'Full tang' },
    editorsPick: true, addedAt: '2026-10-10',
  }),

  demo({
    id: 'demo-ergonomic-office-chair', name: 'Ergonomic Mesh Office Chair', category: 'office-work-from-home', subcategory: 'Seating',
    summary: 'A breathable mesh chair with adjustable lumbar support for long workdays.',
    bestFor: 'Home offices and long work sessions',
    highlights: ['Adjustable lumbar support', 'Breathable mesh back', 'Height-adjustable armrests'],
    considerations: ['Check seat depth suits your height'],
    specs: { Type: 'Office chair', Material: 'Mesh and steel', Assembly: 'Required', 'Key feature': 'Lumbar support' },
    featured: true, editorsPick: true, addedAt: '2026-11-04',
  }),
  demo({
    id: 'demo-solid-wood-side-table', name: 'Solid Wood Side Table', category: 'furniture-decor', subcategory: 'Tables',
    summary: 'A compact side table with a lower shelf, finished in natural wood.',
    bestFor: 'Beside sofas and beds',
    highlights: ['Solid wood frame', 'Lower storage shelf', 'Compact size'],
    considerations: ['Natural wood can vary in grain and tone'],
    specs: { Type: 'Side table', Material: 'Solid wood', Assembly: 'Minimal', 'Key feature': 'Storage shelf' },
    addedAt: '2026-10-18',
  }),
  demo({
    id: 'demo-accent-armchair', name: 'Upholstered Accent Armchair', category: 'furniture-decor', subcategory: 'Seating',
    summary: 'A mid-century-style accent chair with supportive cushioning and tapered legs.',
    bestFor: 'Living rooms and reading corners',
    highlights: ['Supportive cushioning', 'Tapered wooden legs', 'Durable upholstery'],
    considerations: ['Measure doorways before delivery'],
    specs: { Type: 'Armchair', Material: 'Fabric and wood', Assembly: 'Legs attach', 'Key feature': 'Mid-century style' },
    featured: true, addedAt: '2026-10-25',
  }),
  demo({
    id: 'demo-modular-bookshelf', name: 'Modular Cube Bookshelf', category: 'furniture-decor', subcategory: 'Storage',
    summary: 'A reconfigurable cube shelf that works as a bookcase, room divider or TV unit.',
    bestFor: 'Flexible storage in small spaces',
    highlights: ['Reconfigurable layout', 'Fits standard storage cubes', 'Wall-anchor kit'],
    considerations: ['Anchor to the wall for safety'],
    specs: { Type: 'Bookshelf', Material: 'Engineered wood', Assembly: 'Required', 'Key feature': 'Modular' },
    addedAt: '2026-09-28',
  }),

  demo({
    id: 'demo-microfibre-cloth-set', name: 'Microfibre Cleaning Cloth Set', category: 'daily-essentials', subcategory: 'Cleaning',
    summary: 'Reusable, lint-free cloths for glass, screens, counters and dusting.',
    bestFor: 'Streak-free everyday cleaning',
    highlights: ['Lint-free weave', 'Colour-coded set', 'Reusable and washable'],
    considerations: ['Avoid fabric softener to keep them absorbent'],
    specs: { Type: 'Cleaning cloths', Material: 'Microfibre', Care: 'Machine washable', 'Key feature': 'Reusable' },
    editorsPick: true, addedAt: '2026-11-03',
  }),
  demo({
    id: 'demo-insulated-water-bottle', name: 'Insulated Stainless Water Bottle', category: 'daily-essentials', subcategory: 'On the go',
    summary: 'A double-wall vacuum bottle that keeps drinks cold or hot for hours.',
    bestFor: 'Commutes, gyms and travel',
    highlights: ['Double-wall insulation', 'Leak-resistant lid', 'Fits most cup holders'],
    considerations: ['Hand washing keeps the finish looking new'],
    specs: { Type: 'Water bottle', Material: 'Stainless steel', Care: 'Hand wash', 'Key feature': 'Vacuum insulated' },
    featured: true, addedAt: '2026-10-30',
  }),
  demo({
    id: 'demo-bamboo-toothbrush-set', name: 'Bamboo Toothbrush Set', category: 'personal-care', subcategory: 'Oral care',
    summary: 'Plant-based handles with soft bristles, in a multi-pack for the household.',
    bestFor: 'Lower-plastic bathroom routines',
    highlights: ['Bamboo handles', 'Soft bristles', 'Multi-pack'],
    considerations: ['Store upright to dry between uses'],
    specs: { Type: 'Toothbrushes', Material: 'Bamboo', Care: 'Air dry', 'Key feature': 'Plastic-free handle' },
    addedAt: '2026-10-12',
  }),
  demo({
    id: 'demo-foldable-shopping-bags', name: 'Foldable Reusable Shopping Bags', category: 'daily-essentials', subcategory: 'On the go',
    summary: 'Lightweight bags that fold into a pouch for pockets and handbags.',
    bestFor: 'Groceries and quick errands',
    highlights: ['Folds into pouch', 'Reinforced seams', 'Washable'],
    considerations: ['Not insulated for chilled goods'],
    specs: { Type: 'Shopping bags', Material: 'Ripstop polyester', Care: 'Machine washable', 'Key feature': 'Pocket-size' },
    addedAt: '2026-09-25',
  }),

  demo({
    id: 'demo-wireless-charging-stand', name: '3-in-1 Wireless Charging Stand', category: 'gadgets-technology', subcategory: 'Charging',
    summary: 'One stand to charge a phone, earbuds and a watch on a bedside table or desk.',
    bestFor: 'Decluttering bedside and desk charging',
    highlights: ['Charges three devices', 'Angled phone cradle', 'Single cable'],
    considerations: ['Check compatibility with your devices'],
    specs: { Type: 'Charging stand', Material: 'Aluminium and plastic', Power: 'USB-C adapter', 'Key feature': '3 devices at once' },
    featured: true, editorsPick: true, addedAt: '2026-11-06',
  }),
  demo({
    id: 'demo-noise-cancelling-earbuds', name: 'Noise-Cancelling Wireless Earbuds', category: 'gadgets-technology', subcategory: 'Audio',
    summary: 'Compact earbuds with active noise cancellation and a pocketable charging case.',
    bestFor: 'Commuting and focused work',
    highlights: ['Active noise cancellation', 'Transparency mode', 'Pocketable case'],
    considerations: ['Try several ear-tip sizes for the best seal'],
    specs: { Type: 'Earbuds', Material: 'Plastic', Power: 'Rechargeable', 'Key feature': 'Noise cancellation' },
    addedAt: '2026-10-22',
  }),
  demo({
    id: 'demo-smart-plug-pack', name: 'Smart Plug (Multi-pack)', category: 'gadgets-technology', subcategory: 'Smart home',
    summary: 'Wi-Fi plugs for scheduling lamps and appliances from your phone or voice assistant.',
    bestFor: 'A first step into smart home',
    highlights: ['Schedules and timers', 'Voice-assistant support', 'No hub required'],
    considerations: ['Check plug type and Wi-Fi band for your home'],
    specs: { Type: 'Smart plug', Material: 'Plastic', Power: 'Mains', 'Key feature': 'App and voice control' },
    editorsPick: true, addedAt: '2026-10-08',
  }),
  demo({
    id: 'demo-laptop-stand', name: 'Adjustable Aluminium Laptop Stand', category: 'office-work-from-home', subcategory: 'Desk accessories',
    summary: 'Raises your laptop to a more comfortable eye level and folds flat for travel.',
    bestFor: 'Better posture when working on a laptop',
    highlights: ['Height-adjustable', 'Folds flat', 'Ventilated design'],
    considerations: ['Pair with an external keyboard for best ergonomics'],
    specs: { Type: 'Laptop stand', Material: 'Aluminium', Assembly: 'None', 'Key feature': 'Folds flat' },
    addedAt: '2026-09-20',
  }),
]

export const getProduct = (id: string) => products.find((p) => p.id === id)
export const productsInCategory = (slug: CategorySlug) => products.filter((p) => p.category === slug)
export const featuredProducts = () => products.filter((p) => p.featured)
export const editorsPicks = () => products.filter((p) => p.editorsPick)

export type ProductQuery = {
  q?: string
  category?: CategorySlug | 'all'
  subcategory?: string
  picks?: PickFilter
  sort?: SortOption
}

const recommendedScore = (p: Product) => (p.editorsPick ? 2 : 0) + (p.featured ? 1 : 0)

/** Pure search/filter/sort used by every product listing. */
export function queryProducts(list: Product[], query: ProductQuery): Product[] {
  const terms = (query.q ?? '').toLowerCase().split(/\s+/).filter(Boolean)
  const filtered = list.filter((p) => {
    if (query.category && query.category !== 'all' && p.category !== query.category) return false
    if (query.subcategory && query.subcategory !== 'all' && p.subcategory !== query.subcategory) return false
    if (query.picks === 'featured' && !p.featured) return false
    if (query.picks === 'editors' && !p.editorsPick) return false
    if (terms.length) {
      const haystack = [p.name, p.summary, p.subcategory, p.bestFor, ...p.highlights, ...Object.values(p.specs)]
        .join(' ')
        .toLowerCase()
      return terms.every((t) => haystack.includes(t))
    }
    return true
  })

  const sorted = [...filtered]
  switch (query.sort ?? 'recommended') {
    case 'newest':
      sorted.sort((a, b) => b.addedAt.localeCompare(a.addedAt))
      break
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'name-desc':
      sorted.sort((a, b) => b.name.localeCompare(a.name))
      break
    default:
      sorted.sort((a, b) => recommendedScore(b) - recommendedScore(a) || b.addedAt.localeCompare(a.addedAt))
  }
  return sorted
}
