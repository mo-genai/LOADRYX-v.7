import type {
  BenefitCard,
  FeatureCard,
  FooterColumn,
  NavLink,
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

export const PRODUCTS: ProductCard[] = [
  {
    id: 'aurora',
    title: 'Project Aurora',
    priceFrom: 59.99,
    status: 'stable',
    verified: true,
    monogram: 'AUR',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 60%, #14b8a6 100%)',
  },
  {
    id: 'borealis',
    title: 'Project Borealis',
    priceFrom: 23.99,
    status: 'stable',
    verified: true,
    monogram: 'BOR',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #6d28d9 60%, #db2777 100%)',
  },
  {
    id: 'cobalt',
    title: 'Project Cobalt',
    priceFrom: 23.99,
    status: 'stable',
    verified: true,
    monogram: 'COB',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e40af 60%, #f59e0b 100%)',
  },
  {
    id: 'mesa',
    title: 'Project Mesa',
    priceFrom: 29.99,
    status: 'stable',
    verified: true,
    monogram: 'MES',
    gradient: 'linear-gradient(135deg, #1f2937 0%, #475569 50%, #94a3b8 100%)',
  },
  {
    id: 'arena',
    title: 'Project Arena',
    priceFrom: 59.99,
    status: 'stable',
    verified: true,
    monogram: 'ARE',
    gradient: 'linear-gradient(135deg, #5b21b6 0%, #a21caf 50%, #f97316 100%)',
  },
  {
    id: 'onyx',
    title: 'Project Onyx',
    priceFrom: 23.99,
    status: 'beta',
    verified: true,
    monogram: 'ONX',
    gradient: 'linear-gradient(135deg, #111827 0%, #312e81 60%, #f97316 100%)',
  },
  {
    id: 'ridge',
    title: 'Project Ridge',
    priceFrom: 29.99,
    status: 'stable',
    verified: true,
    monogram: 'RID',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #94a3b8 100%)',
  },
  {
    id: 'voyage',
    title: 'Project Voyage',
    priceFrom: 49.99,
    status: 'stable',
    verified: true,
    monogram: 'VOY',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #d97706 50%, #fbbf24 100%)',
  },
  {
    id: 'pulse',
    title: 'Project Pulse',
    priceFrom: 23.99,
    status: 'beta',
    verified: true,
    monogram: 'PUL',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 50%, #f97316 100%)',
  },
  {
    id: 'cypress',
    title: 'Project Cypress',
    priceFrom: 23.99,
    status: 'stable',
    verified: true,
    monogram: 'CYP',
    gradient: 'linear-gradient(135deg, #052e16 0%, #166534 50%, #84cc16 100%)',
  },
  {
    id: 'monolith',
    title: 'Project Monolith',
    priceFrom: 23.99,
    status: 'stable',
    verified: true,
    monogram: 'MON',
    gradient: 'linear-gradient(135deg, #450a0a 0%, #b91c1c 60%, #f97316 100%)',
  },
  {
    id: 'horizon',
    title: 'Project Horizon',
    priceFrom: 23.99,
    status: 'stable',
    verified: true,
    monogram: 'HOR',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #facc15 100%)',
  },
]

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
      { label: 'Aurora', href: '#aurora' },
      { label: 'Borealis', href: '#borealis' },
      { label: 'Cobalt', href: '#cobalt' },
      { label: 'Mesa', href: '#mesa' },
      { label: 'Arena', href: '#arena' },
      { label: 'Cypress', href: '#cypress' },
    ],
  },
  {
    heading: 'More Tools',
    links: [
      { label: 'Onyx', href: '#onyx' },
      { label: 'Ridge', href: '#ridge' },
      { label: 'Voyage', href: '#voyage' },
      { label: 'Pulse', href: '#pulse' },
      { label: 'Monolith', href: '#monolith' },
      { label: 'Horizon', href: '#horizon' },
    ],
  },
  {
    heading: 'Quick Links',
    links: [
      { label: 'Status', href: '#status' },
      { label: 'Getting Started', href: '#start' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Applications', href: '#apply' },
      { label: 'Store', href: '#store' },
      { label: 'Manage Purchases', href: '#manage' },
    ],
  },
]

export const FOOTER_ABOUT = `The brand ${BRAND} stands for triple-A quality and reliable tools for modern product teams. What started as a small community in 2017 has grown into one of the most respected toolkit providers in the industry — with hundreds of satisfied customers, 100% transparency, unbeatable support, and a friendly, helpful community. Join us at ${BRAND.toLowerCase()}.example.`
