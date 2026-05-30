import { productImage } from '../data/productImages'
import {
  ActivationIcon,
  BoltIcon,
  BoxIcon,
  CheckCircleIcon,
  CodeIcon,
  MonitorIcon,
  PerformanceIcon,
  PlayCircleIcon,
  SecurityIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UpdatesIcon,
} from '../components/icons'

type Glyph = React.FC<React.SVGProps<SVGSVGElement>>

const APEX_LOGO =
  'https://cdn.sanity.io/images/kzldmhbc/production/d5c9c62088a88442290fd75ab69fe4410e99cac2-1752x656.png?w=576&auto=format&q=75&fit=max'

const HERO = {
  title: 'Apex Legends',
  description:
    'خدمة إعداد احترافية تعتمد على الذكاء الاصطناعي لتحليل الصورة عبر الـ PC وكرت الكابتشر، بهدف تحسين دقة التصويب، سرعة الاستجابة، وثبات الأداء أثناء اللعب.',
  price: '1,426 ر.س',
}

const SHOWCASE = {
  title: 'عرض الخدمة',
  description:
    'شاهد فكرة عمل الخدمة وطريقة الإعداد قبل الشراء، مع توضيح آلية الربط بين PS5 والـ PC عبر كرت الكابتشر.',
}

const FEATURES_HEADER = {
  title: 'مميزات AI AIM PROGRAM',
  description:
    'إعداد مخصص للعبة APEX LEGENDS يمنحك تجربة تصويب أكثر ثباتًا واستجابة أثناء اللعب.',
}

const FEATURES: { Icon: Glyph; title: string; description: string }[] = [
  {
    Icon: SparklesIcon,
    title: 'تصويب ذكي',
    description: 'تحسين دقة التصويب باستخدام تحليل الصورة بالذكاء الاصطناعي.',
  },
  {
    Icon: PerformanceIcon,
    title: 'تتبّع أكثر ثباتًا',
    description: 'مساعدة على تتبّع الأهداف بسلاسة أعلى أثناء الحركة.',
  },
  {
    Icon: BoltIcon,
    title: 'استجابة أسرع',
    description: 'تحسين سرعة التفاعل أثناء لحظات اللعب السريعة.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'ثبات أثناء التصويب',
    description: 'تقليل الاهتزاز وتحسين التحكم أثناء التصويب.',
  },
  {
    Icon: ActivationIcon,
    title: 'إعدادات مخصصة',
    description: 'ضبط الإعدادات بما يناسب أسلوب لعبك وطريقة تحكمك.',
  },
]

const INFO_HEADER = {
  title: 'معلومات الخدمة',
  description: 'تفاصيل الإعداد، المتطلبات، وآلية تشغيل الخدمة قبل الشراء.',
}

const SERVICE_INFO: { Icon: Glyph; label: string; value: string }[] = [
  {
    Icon: UpdatesIcon,
    label: 'مدة الإعداد',
    value: 'من 2 إلى 3 ساعات بعد تحديد الموعد.',
  },
  {
    Icon: MonitorIcon,
    label: 'طريقة التشغيل',
    value: 'تعمل عبر PC وكرت كابتشر لتحليل الصورة القادمة من PS5.',
  },
  {
    Icon: CodeIcon,
    label: 'نظام التشغيل',
    value: 'Windows 10 أو Windows 11.',
  },
  {
    Icon: BoxIcon,
    label: 'متطلبات الكمبيوتر',
    value: 'معالج حديث، كرت شاشة Nvidia، ويفضل RTX 2080 أو أعلى.',
  },
  {
    Icon: PlayCircleIcon,
    label: 'كرت الكابتشر',
    value:
      'يدعم Elgato 4K X / 4K Pro / HD60 X / HD60 Pro وAvermedia Live Gamer HD 2 / Ultra.',
  },
]

const INCLUDES = {
  title: 'الخدمة تشمل',
  items: [
    'اشتراك AI AIM PROGRAM',
    'تثبيت البرامج المطلوبة',
    'ضبط إعدادات APEX LEGENDS',
    'إعداد كامل من البداية للنهاية',
    'دعم فني ومتابعة بعد الإعداد',
  ],
}

const STAGES = {
  title: 'مراحل الإعداد',
  sessions: [
    {
      label: 'الجلسة الأولى',
      description:
        'إعداد كامل خلال 2–3 ساعات، يشمل تثبيت البرامج، ربط الأجهزة عبر كرت الكابتشر، ضبط إعدادات اللعبة، واختبار الأداء.',
    },
    {
      label: 'الجلسة الثانية',
      description:
        'مراجعة بعد يوم من اللعب لتحليل التجربة، تعديل الإعدادات، وتحسين سرعة ودقة التصويب.',
    },
  ],
}

const SECURITY = {
  title: 'آلية تشغيل آمنة',
  description:
    'تعمل الخدمة عبر الـ PC باستخدام تحليل الصورة بالذكاء الاصطناعي، دون تثبيت ملفات على الكونسول أو تعديل ملفات اللعبة أو التدخل المباشر في نظام اللعبة.',
}

export function ApexProductPage({ id }: { id: string }) {
  const cover = productImage('apex')
  const checkoutHref = `#/checkout/${id}`

  const showShowcase = () => {
    document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <article dir="rtl" className="font-ar bg-[var(--color-background)]">
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden pt-36 pb-28">
        <div className="absolute inset-0 z-0" aria-hidden>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/45 to-background pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_10%,var(--color-background)_92%)] pointer-events-none" />
          {cover && (
            <img
              src={cover}
              alt=""
              className="absolute inset-0 z-0 h-full w-full object-cover object-top opacity-70"
            />
          )}
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-8 h-28 w-56 md:h-32 md:w-72">
            <img
              src={APEX_LOGO}
              alt="Apex Legends"
              className="h-full w-full object-contain drop-shadow-xl"
            />
          </div>

          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-600/60 bg-green-500/15 px-3 py-1 text-xs font-medium text-green-300">
              <CheckCircleIcon className="h-4 w-4" />
              متوفر الآن
            </span>
          </div>

          <h1
            className="font-ar-display text-balance font-bold text-white"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)' }}
            dir="ltr"
          >
            {HERO.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
            {HERO.description}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={checkoutHref}
              className="pill-btn pill-btn-primary w-full gap-2 sm:w-auto"
            >
              <BoltIcon className="h-4 w-4" />
              اشترِ الآن
            </a>
            <button
              type="button"
              onClick={showShowcase}
              className="pill-btn pill-btn-ghost w-full gap-2 sm:w-auto"
            >
              <PlayCircleIcon className="h-4 w-4" />
              شاهد العرض
            </button>
          </div>

          <div className="mx-auto mt-9 w-full max-w-xs">
            <div className="card cursor-default flex-row items-center justify-between px-6 py-4">
              <span className="text-sm text-white/60">السعر</span>
              <span className="text-2xl font-bold text-white">{HERO.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- عرض الخدمة ---------- */}
      <section id="showcase" className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              {SHOWCASE.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              {SHOWCASE.description}
            </p>
          </header>

          <div className="mt-10 grid aspect-video w-full place-items-center overflow-hidden rounded-2xl border border-white/10 bg-black/60">
            <button
              type="button"
              aria-label="تشغيل العرض"
              className="grid size-16 place-items-center rounded-2xl bg-white/10 text-white transition hover:bg-white/20"
            >
              <PlayCircleIcon className="size-8" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------- مميزات AI AIM PROGRAM ---------- */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              {FEATURES_HEADER.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              {FEATURES_HEADER.description}
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, description }) => (
              <article
                key={title}
                className="group card cursor-default p-6 text-center"
              >
                <div className="mx-auto grid size-12 place-items-center rounded-full bg-white/5">
                  <Icon className="size-6 text-white" />
                </div>
                <h3 className="font-ar-display mt-5 text-lg font-bold group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- معلومات الخدمة ---------- */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              {INFO_HEADER.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              {INFO_HEADER.description}
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_INFO.map(({ Icon, label, value }) => (
              <div key={label} className="card cursor-default p-6 text-right">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-full bg-white/5">
                    <Icon className="size-5 text-white" />
                  </div>
                  <p className="font-semibold text-white">{label}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60" dir="auto">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- الخدمة تشمل ---------- */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              {INCLUDES.title}
            </h2>
          </header>

          <ul className="card mt-10 cursor-default gap-1 p-2">
            {INCLUDES.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg px-4 py-3.5 text-white/85"
              >
                <CheckCircleIcon className="size-5 shrink-0 text-white/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- مراحل الإعداد ---------- */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              {STAGES.title}
            </h2>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {STAGES.sessions.map((session, index) => (
              <article
                key={session.label}
                className="card cursor-default p-6 text-right"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="font-ar-display text-lg font-bold text-white">
                    {session.label}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  {session.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- آلية تشغيل آمنة ---------- */}
      <section className="pb-24 pt-8">
        <div className="mx-auto max-w-3xl px-6">
          <div className="card cursor-default items-center p-8 text-center md:p-10">
            <div className="grid size-14 place-items-center rounded-full bg-white/5">
              <SecurityIcon className="size-7 text-white" />
            </div>
            <h2 className="font-ar-display mt-5 text-2xl font-semibold lg:text-3xl">
              {SECURITY.title}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-white/65">
              {SECURITY.description}
            </p>
          </div>

          <div className="mt-12 text-center">
            <a href={checkoutHref} className="pill-btn pill-btn-primary gap-2">
              <BoltIcon className="h-4 w-4" />
              اشترِ الآن
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}
