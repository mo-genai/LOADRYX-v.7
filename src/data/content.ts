import type {
  BenefitCard,
  FeatureCard,
  FeatureGroup,
  FooterColumn,
  NavLink,
  PricingPlan,
  ProductCard,
  StatCard,
} from '../types/content'

export const BRAND = 'NIMBUS'
export const BRAND_TAGLINE = 'Production-Ready Tools for Modern Teams'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#products' },
  { label: 'Status', href: '#status' },
  { label: 'How-to', href: '#how' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Forums', href: '#forums' },
]

export const HERO = {
  lines: ['Ship Faster', 'with Production-Ready Tools', `from ${BRAND}`],
  subtitle:
    "Unleash your team's full potential with our curated suite of developer toolkits. Iterate quickly, ship reliably, and deliver effortless results.",
  primaryCta: 'Get Started',
  secondaryCta: 'Go to Forums',
}

export const FEATURES: FeatureCard[] = [
  {
    icon: 'shield',
    title: 'Reliable Tools',
    description:
      'Built with battle-tested patterns. Every toolkit ships with rigorous testing and a stability guarantee.',
  },
  {
    icon: 'sparkles',
    title: 'Leading Provider',
    description:
      'Established in 2017, we have grown into a trusted toolkit provider for product, design, and engineering teams.',
  },
  {
    icon: 'lock',
    title: 'Curated Community',
    description:
      'Only verified members of our community get access to the full catalog and early-release tools.',
  },
  {
    icon: 'code',
    title: '100% In-House Built',
    description:
      'Unlike other vendors, we only ship tools we build ourselves — full control over quality, roadmap, and updates.',
  },
  {
    icon: 'thumb',
    title: '24/7 Quality Support',
    description:
      'Our dedicated support team is available around the clock via forums, chat, and email.',
  },
  {
    icon: 'shield-coins',
    title: 'Satisfaction Guarantee',
    description:
      'If a toolkit ever drops out of compliance, you get a full credit refund for the remaining time.',
  },
]

/* -------------------------------------------------------------------------- */
/* Products — a legal digital gaming-tools / player-assistance catalogue.     */
/* Game names are factual product identifiers; all functionality is framed    */
/* as legitimate gaming utilities (no cheat/hack/aimbot/wallhack wording).    */
/* -------------------------------------------------------------------------- */

// Shared, sanitized feature groups. Most titles tailor a couple of entries
// per game while keeping the same overall structure as the reference.
function buildFeatures(game: string): FeatureGroup[] {
  return [
    {
      category: 'Input & Sensitivity',
      icon: 'tune',
      items: [
        'Customizable hotkeys',
        'Saved sensitivity profiles',
        'Two smoothing modes',
        'Adjustable & dynamic FOV',
        'On-screen FOV preview',
        'Deadzone tuning',
      ],
    },
    {
      category: 'HUD Overlay',
      icon: 'overlay',
      items: [
        'Customizable colors',
        'Adjustable transparency',
        'On-screen info panel',
        'Distance readout',
        'Custom hotkey toggle',
      ],
    },
    {
      category: 'Game Info Panel',
      icon: 'panel',
      items: [
        'Objective markers',
        'Inventory overview',
        'Item categories',
        'Distance indicators',
        'Max-distance slider',
      ],
    },
    {
      category: 'Minimap Tools',
      icon: 'map',
      items: [
        'Position display',
        'Adjustable scale',
        'Distance scale',
        'Directional lines',
        'Custom line length',
      ],
    },
    {
      category: 'Privacy Protection',
      icon: 'shield',
      items: ['Hardware privacy', 'Account safety', 'Local-only profiles'],
    },
    {
      category: 'System Cleaner',
      icon: 'broom',
      items: ['Temp-file cleanup', 'Cache reset', `Fresh ${game} session`],
    },
    {
      category: 'Controller Mapping',
      icon: 'gamepad',
      items: ['Full remap support', 'Per-profile bindings', 'Aim-key remap'],
    },
    {
      category: 'Stream-Friendly Mode',
      icon: 'stream',
      items: ['Overlay hidden during capture', 'Record while you play'],
    },
  ]
}

function plans(base: number): PricingPlan[] {
  return [
    { label: '7 Days', days: 7, price: Math.round(base * 0.6 * 100) / 100 },
    { label: '14 Days', days: 14, price: Math.round(base * 0.8 * 100) / 100 },
    { label: '30 Days', days: 30, price: base },
  ]
}

interface Seed {
  id: string
  gameName: string
  kind: string
  priceFrom: number
  status: 'active' | 'beta'
  monogram: string
  gradient: string
}

const PRODUCT_SEEDS: Seed[] = [
  {
    id: 'fortnite',
    gameName: 'Fortnite',
    kind: 'Player Assist',
    priceFrom: 59.99,
    status: 'active',
    monogram: 'FN',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #06b6d4 100%)',
  },
  {
    id: 'pubg',
    gameName: 'PUBG',
    kind: 'Game Tool',
    priceFrom: 23.99,
    status: 'active',
    monogram: 'PUBG',
    gradient: 'linear-gradient(135deg, #b45309 0%, #78350f 55%, #1c1917 100%)',
  },
  {
    id: 'apex',
    gameName: 'Apex Legends',
    kind: 'Player Assist',
    priceFrom: 23.99,
    status: 'active',
    monogram: 'APEX',
    gradient: 'linear-gradient(135deg, #b91c1c 0%, #ea580c 55%, #f59e0b 100%)',
  },
  {
    id: 'dayz',
    gameName: 'DayZ',
    kind: 'Gaming Utility',
    priceFrom: 29.99,
    status: 'active',
    monogram: 'DAYZ',
    gradient: 'linear-gradient(135deg, #334155 0%, #475569 55%, #94a3b8 100%)',
  },
  {
    id: 'overwatch-2',
    gameName: 'Overwatch 2',
    kind: 'Player Assist',
    priceFrom: 59.99,
    status: 'active',
    monogram: 'OW2',
    gradient: 'linear-gradient(135deg, #c2410c 0%, #ea580c 55%, #fbbf24 100%)',
  },
  {
    id: 'black-ops-6',
    gameName: 'Black Ops 6',
    kind: 'Performance Setup',
    priceFrom: 23.99,
    status: 'beta',
    monogram: 'BO6',
    gradient: 'linear-gradient(135deg, #111827 0%, #1e3a8a 55%, #f97316 100%)',
  },
  {
    id: 'arma-3',
    gameName: 'Arma 3',
    kind: 'Gaming Utility',
    priceFrom: 29.99,
    status: 'active',
    monogram: 'ARMA',
    gradient: 'linear-gradient(135deg, #1f2937 0%, #374151 55%, #6b7280 100%)',
  },
  {
    id: 'arc-raiders',
    gameName: 'Arc Raiders',
    kind: 'Player Assist',
    priceFrom: 49.99,
    status: 'active',
    monogram: 'ARC',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #b45309 55%, #fcd34d 100%)',
  },
  {
    id: 'black-ops-7',
    gameName: 'Black Ops 7',
    kind: 'Performance Setup',
    priceFrom: 23.99,
    status: 'beta',
    monogram: 'BO7',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #b91c1c 60%, #f59e0b 100%)',
  },
  {
    id: 'cold-war',
    gameName: 'Black Ops Cold War',
    kind: 'Gaming Utility',
    priceFrom: 23.99,
    status: 'active',
    monogram: 'BOCW',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 55%, #facc15 100%)',
  },
  {
    id: 'mw-iii',
    gameName: 'Modern Warfare III',
    kind: 'Game Tool',
    priceFrom: 23.99,
    status: 'active',
    monogram: 'MWIII',
    gradient: 'linear-gradient(135deg, #14532d 0%, #166534 55%, #84cc16 100%)',
  },
  {
    id: 'mw-ii',
    gameName: 'Modern Warfare II',
    kind: 'Game Tool',
    priceFrom: 23.99,
    status: 'active',
    monogram: 'MWII',
    gradient: 'linear-gradient(135deg, #450a0a 0%, #991b1b 60%, #f97316 100%)',
  },
  {
    id: 'vanguard',
    gameName: 'Vanguard',
    kind: 'Gaming Utility',
    priceFrom: 23.99,
    status: 'active',
    monogram: 'VG',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #b45309 60%, #fde68a 100%)',
  },
  {
    id: 'mw-2019',
    gameName: 'Modern Warfare 2019',
    kind: 'Game Tool',
    priceFrom: 23.99,
    status: 'active',
    monogram: 'MW19',
    gradient: 'linear-gradient(135deg, #1f2937 0%, #15803d 60%, #bef264 100%)',
  },
]

export const PRODUCTS: ProductCard[] = PRODUCT_SEEDS.map((s) => ({
  id: s.id,
  gameName: s.gameName,
  title: `${s.gameName} ${s.kind}`,
  kind: s.kind,
  tagline: `Private ${s.gameName} ${s.kind.toLowerCase()} for verified members`,
  priceFrom: s.priceFrom,
  status: s.status,
  verified: true,
  gradient: s.gradient,
  monogram: s.monogram,
  description:
    `The ${s.gameName} ${s.kind} is an in-house gaming utility that helps verified players ` +
    `fine-tune their setup for ${s.gameName}. It bundles sensitivity profiles, a customizable ` +
    `HUD overlay, minimap tools, controller mapping, and stream-friendly capture into one ` +
    `lightweight app. Every release is tested for stability and ships with continuous updates ` +
    `and dedicated support.`,
  features: buildFeatures(s.gameName),
  compatibility: {
    releaseDate: '2024',
    platforms: 'PC (Steam / Epic / Battle.net)',
    os: 'Windows 10 & 11 (64-bit)',
    recording: 'Compatible with OBS, Discord & NVIDIA capture',
  },
  plans: plans(s.priceFrom),
}))

export function getProduct(id: string): ProductCard | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export const STATS: StatCard[] = [
  { value: '99%', label: 'Positive Reviews', icon: 'trophy' },
  { value: '70,000+', label: 'Registered Members', icon: 'users' },
  { value: '23,000+', label: `Verified ${BRAND} Users`, icon: 'shield-check' },
]

export const BENEFITS: BenefitCard[] = [
  {
    visual: 'percent',
    title: 'In-House Development',
    description:
      'We are a team of engineers passionate about building the most polished tools on the market.',
  },
  {
    visual: 'shield-glow',
    title: 'Secure by Default',
    description:
      'Robust technology means every toolkit ships with sensible defaults, encrypted state, and audited dependencies.',
  },
  {
    visual: 'pricing',
    title: 'Fair Pricing',
    description:
      'We offer the most competitive pricing for premium toolkits in a curated ecosystem.',
  },
  {
    visual: 'editor',
    title: 'Easy to Use',
    description:
      'Our tools are designed to be approachable. Any team member can use them without friction.',
  },
  {
    visual: 'payments',
    title: 'Secure Payments',
    description:
      'We use trusted payment gateways to ensure every transaction stays safe end-to-end.',
  },
  {
    visual: 'version',
    title: 'Fast Updates',
    description:
      'Upstream releases are tracked continuously, with prompt updates to match the newest version.',
  },
  {
    visual: 'refund',
    title: 'Risk-Free',
    description:
      'In case of incidents, your remaining balance is refunded or transferred to a different toolkit.',
  },
  {
    visual: 'changelog',
    title: 'Active Progression',
    description:
      'Our toolkits are continuously optimized, updated, and expanded with new features.',
  },
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Popular Tools',
    links: [
      { label: 'Fortnite', href: '#/product/fortnite' },
      { label: 'PUBG', href: '#/product/pubg' },
      { label: 'Apex Legends', href: '#/product/apex' },
      { label: 'DayZ', href: '#/product/dayz' },
      { label: 'Arma 3', href: '#/product/arma-3' },
      { label: 'Arc Raiders', href: '#/product/arc-raiders' },
    ],
  },
  {
    heading: 'More Tools',
    links: [
      { label: 'Overwatch 2', href: '#/product/overwatch-2' },
      { label: 'Black Ops 6', href: '#/product/black-ops-6' },
      { label: 'Black Ops 7', href: '#/product/black-ops-7' },
      { label: 'Cold War', href: '#/product/cold-war' },
      { label: 'Modern Warfare III', href: '#/product/mw-iii' },
      { label: 'Vanguard', href: '#/product/vanguard' },
    ],
  },
  {
    heading: 'Quick Links',
    links: [
      { label: 'Status', href: '#status' },
      { label: 'Getting Started', href: '#start' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Applications', href: '#apply' },
      { label: 'Store', href: '#products' },
      { label: 'Manage Purchases', href: '#manage' },
    ],
  },
]

export const FOOTER_ABOUT = `The brand ${BRAND} stands for triple-A quality and reliable tools for modern product teams. What started as a small community in 2017 has grown into one of the most respected toolkit providers in the industry — with hundreds of satisfied customers, 100% transparency, unbeatable support, and a friendly, helpful community. Join us at ${BRAND.toLowerCase()}.example.`
