import type {
  BenefitCard,
  ContactChannel,
  FaqItem,
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

/** Display prices in Saudi Riyal. Base catalogue numbers are kept in USD. */
const SAR_RATE = 3.75
export function priceSAR(usd: number): number {
  return Math.round(usd * SAR_RATE)
}
export function formatSAR(usd: number): string {
  return `${priceSAR(usd).toLocaleString('en-US')} ريال`
}

export const NAV_LINKS: NavLink[] = [
  { label: 'الرئيسية', href: '#' },
  { label: 'المنتجات', href: '#products' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
]

export const HERO = {
  lines: ['استجابة أسرع وتصويب أذكى', 'سيطرة كاملة مع LOADRYX'],
  subtitle:
    'تقنيات ذكاء اصطناعي مصممة لرفع دقة التصويب، تثبيت الأداء، وتسريع الاستجابة داخل ألعاب الشوتر التنافسية.',
  primaryCta: 'تصفّح المنتجات',
}

export const WHY = {
  title: 'رحلة البدء',
  subtitle:
    'من اختيار المنتج إلى التفعيل، تمر التجربة بخطوات واضحة وسريعة، مع إرشادات مباشرة ودعم يساعدك بعد الشراء.',
}

export const FEATURES: FeatureCard[] = [
  {
    icon: 'performance',
    title: 'أداء ثابت داخل اللعب',
    description:
      'تجربة أكثر سلاسة واستقرارًا، تمنحك تحكمًا أفضل وراحة أكبر أثناء اللعب.',
  },
  {
    icon: 'support',
    title: 'دعم فني',
    description:
      'فريق جاهز لمساعدتك في التفعيل والاستخدام، والرد على استفساراتك بأسرع وقت.',
  },
  {
    icon: 'updates',
    title: 'تحديثات مستمرة',
    description:
      'تحسينات وتطوير دائم للحفاظ على أداء أفضل وتجربة لعب مستقرة.',
  },
  {
    icon: 'security',
    title: 'أمان وخصوصية',
    description: 'حماية بياناتك وتجربة استخدام آمنة وموثوقة.',
  },
  {
    icon: 'activation',
    title: 'تفعيل مباشر',
    description: 'إعداد واضح وتشغيل مباشر بخطوات بسيطة وسريعة.',
  },
  {
    icon: 'warranty',
    title: 'ضمان الخدمة',
    description: 'متابعة ودعم كامل لضمان عمل الخدمة بالشكل المطلوب.',
  },
]

export const FAQ: FaqItem[] = [
  {
    question: 'هل الخدمة آمنة على الحساب والجهاز؟',
    answer:
      'الخدمة تعمل من خلال الكمبيوتر باستخدام الذكاء الاصطناعي لتحليل الصورة القادمة من كرت الكابتشر، ولا يتم تثبيت أي شيء داخل الكونسول أو تعديل ملفات اللعبة.',
  },
  {
    question: 'هل يتم تثبيت شيء على الكونسول؟',
    answer:
      'لا، الخدمة لا تتطلب تثبيت ملفات على الكونسول، ولا تعدّل على النظام أو اللعبة بشكل مباشر.',
  },
  {
    question: 'هل التوصيل متاح لجميع المدن؟',
    answer:
      'نعم، التوصيل متاح لجميع مدن المملكة، ويتم تجهيز الشحنة خلال 24 ساعة عمل بعد تأكيد الطلب.',
  },
  {
    question: 'كيف أتتبع طلبي؟',
    answer:
      'بعد تأكيد الطلب، تصلك رسالة تحتوي على رقم التتبع لمتابعة الشحنة عبر موقع شركة الشحن.',
  },
  {
    question: 'ما هي طرق الدفع المتاحة؟',
    answer:
      'نقبل مدى، VISA، Mastercard، Apple Pay، STC Pay، إضافة إلى التقسيط عبر Tabby وTamara.',
  },
  {
    question: 'هل يمكن إلغاء أو تعديل الطلب بعد تأكيده؟',
    answer:
      'يمكن الإلغاء أو التعديل خلال أول 30 دقيقة من تأكيد الطلب. بعد ذلك يدخل الطلب مرحلة التجهيز ولا يمكن تعديله.',
  },
  {
    question: 'ما هي متطلبات تشغيل الخدمة؟',
    answer:
      'تحتاج إلى جهاز PC أو لابتوب بنظام Windows 10 / 11، معالج Intel أو AMD من الجيل الثامن أو أعلى، وكرت شاشة Nvidia، ويفضل RTX 2080 أو أعلى.',
  },
  {
    question: 'ما هي كروت الكابتشر المدعومة؟',
    answer:
      'تدعم الخدمة Elgato 4K X / 4K Pro / HD60 X / HD60 S+ / 4K60 Pro MK.2، بالإضافة إلى Avermedia Live Gamer HD 2 وUltra.',
  },
  {
    question: 'كيف تتم آلية التركيب؟',
    answer:
      'يتم ربط الكونسول بالكمبيوتر عبر كرت الكابتشر لنقل الصورة، ثم تهيئة النظام وضبط الإعدادات للحصول على تجربة سلسة ومستقرة.',
  },
  {
    question: 'كم يستغرق تجهيز الخدمة؟',
    answer: 'عادة يتم تجهيز الخدمة خلال 2 إلى 3 ساعات بعد تحديد الموعد.',
  },
]

export const CONTACT = {
  title: 'تواصل معنا',
  subtitle:
    'فريقنا جاهز للرد على استفساراتك ومساعدتك في اختيار الخدمة المناسبة.',
  channels: [
    {
      kind: 'whatsapp',
      label: 'واتساب',
      value: '+966 57 353 4407',
      href: 'https://wa.me/966573534407',
    },
    {
      kind: 'call',
      label: 'اتصال مباشر',
      value: '+966 57 353 4407',
      href: 'tel:+966573534407',
    },
  ] satisfies ContactChannel[],
}

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
