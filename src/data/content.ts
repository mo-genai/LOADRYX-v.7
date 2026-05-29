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
export const FOOTER_ABOUT =
  'LOADRYX يقدم تجربة تجهيز رقمية واضحة، مع دعم مباشر ومتابعة بعد الشراء.'

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
  { label: 'المنتجات', href: '#/products' },
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

const COMPATIBILITY = {
  releaseDate: 'متاح الآن',
  platforms: 'PC / Console capture workflow',
  os: 'Windows 10 / 11',
  recording: 'يدعم OBS وبرامج التسجيل الشائعة',
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
    gradient: 'linear-gradient(135deg, #ea580c 0%, #f97316 55%, #38bdf8 100%)',
  },
  {
    id: 'black-ops-6',
    gameName: 'Black Ops 6',
    kind: 'Gaming Utility',
    priceFrom: 23.99,
    status: 'beta',
    monogram: 'BO6',
    gradient: 'linear-gradient(135deg, #111827 0%, #334155 55%, #f97316 100%)',
  },
  {
    id: 'arma-3',
    gameName: 'Arma 3',
    kind: 'Game Tool',
    priceFrom: 29.99,
    status: 'active',
    monogram: 'A3',
    gradient: 'linear-gradient(135deg, #1f2937 0%, #4b5563 55%, #d1d5db 100%)',
  },
  {
    id: 'arc-raiders',
    gameName: 'Arc Raiders',
    kind: 'Player Assist',
    priceFrom: 49.99,
    status: 'active',
    monogram: 'ARC',
    gradient: 'linear-gradient(135deg, #312e81 0%, #7c2d12 55%, #fbbf24 100%)',
  },
  {
    id: 'black-ops-7',
    gameName: 'Black Ops 7',
    kind: 'Gaming Utility',
    priceFrom: 23.99,
    status: 'beta',
    monogram: 'BO7',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #ea580c 100%)',
  },
  {
    id: 'cold-war',
    gameName: 'Cold War',
    kind: 'Gaming Utility',
    priceFrom: 23.99,
    status: 'active',
    monogram: 'CW',
    gradient: 'linear-gradient(135deg, #1f2937 0%, #334155 55%, #dc2626 100%)',
  },
  {
    id: 'mw-iii',
    gameName: 'MW III',
    kind: 'Gaming Utility',
    priceFrom: 23.99,
    status: 'active',
    monogram: 'MW3',
    gradient: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 55%, #111827 100%)',
  },
  {
    id: 'mw-ii',
    gameName: 'MW II',
    kind: 'Gaming Utility',
    priceFrom: 23.99,
    status: 'active',
    monogram: 'MW2',
    gradient: 'linear-gradient(135deg, #14532d 0%, #166534 55%, #0f172a 100%)',
  },
]

export const PRODUCTS: ProductCard[] = PRODUCT_SEEDS.map((seed) => ({
  ...seed,
  title: `${seed.gameName} ${seed.kind}`,
  tagline: 'إعداد سريع وتجربة مستقرة',
  verified: true,
  description: `${seed.gameName} ${seed.kind} package with assisted setup, clean onboarding, and post-purchase support.`,
  features: buildFeatures(seed.gameName),
  compatibility: { ...COMPATIBILITY },
  plans: plans(seed.priceFrom),
}))

export function getProduct(id: string): ProductCard | undefined {
  return PRODUCTS.find((product) => product.id === id)
}

export const STATS: StatCard[] = [
  {
    value: '99.9%',
    label: 'Service uptime',
    icon: 'trophy',
  },
  {
    value: '24/7',
    label: 'Support availability',
    icon: 'users',
  },
  {
    value: '12+',
    label: 'Supported titles',
    icon: 'shield-check',
  },
]

export const BENEFITS: BenefitCard[] = [
  {
    title: 'Fast onboarding',
    description:
      'Guided activation keeps setup clear from purchase to first session.',
    visual: 'version',
  },
  {
    title: 'Private configuration',
    description:
      'Profiles and preferences remain local to your workflow whenever possible.',
    visual: 'shield-glow',
  },
  {
    title: 'Ongoing updates',
    description:
      'Packages are maintained so supported titles stay usable through regular changes.',
    visual: 'changelog',
  },
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'روابط',
    links: [
      { label: 'المنتجات', href: '#/products' },
      { label: 'الأسئلة الشائعة', href: '#faq' },
      { label: 'تواصل معنا', href: '#contact' },
    ],
  },
  {
    heading: 'الدعم',
    links: [
      { label: 'واتساب', href: 'https://wa.me/966573534407' },
      { label: 'اتصال مباشر', href: 'tel:+966573534407' },
    ],
  },
]
