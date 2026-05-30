import { useState } from 'react'
import { formatSAR, getProduct } from '../data/content'
import { productImage } from '../data/productImages'
import {
  BoltIcon,
  BoxIcon,
  CheckCircleIcon,
  MonitorIcon,
  PlayCircleIcon,
  SupportIcon,
} from '../components/icons'

const INFO = [
  { Icon: BoxIcon, label: 'نوع المنتج', value: 'خدمة إعداد رقمية' },
  { Icon: BoltIcon, label: 'التسليم', value: 'فوري بعد الطلب' },
  { Icon: MonitorIcon, label: 'المتطلبات', value: 'Windows 10 و 11' },
  { Icon: SupportIcon, label: 'الدعم', value: 'متوفر بعد الشراء' },
] as const

export function ProductDetailPage({ id }: { id: string }) {
  const product = getProduct(id)
  const [activeVideo, setActiveVideo] = useState(0)

  if (!product) {
    return (
      <section
        dir="rtl"
        className="font-ar min-h-[70vh] grid place-items-center px-6 text-center"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            غير موجود
          </p>
          <h1 className="font-ar-display mt-3 text-3xl font-semibold">
            المنتج غير متوفر
          </h1>
          <p className="mt-2 text-white/60">
            لم نتمكن من العثور على هذا المنتج في القائمة.
          </p>
          <a href="#/products" className="pill-btn pill-btn-primary mt-6 inline-flex">
            العودة إلى المنتجات
          </a>
        </div>
      </section>
    )
  }

  const cover = productImage(product.id)
  const featurePreview = product.features.slice(0, 4)
  const showShowcase = () => {
    document.getElementById('showcase')?.scrollIntoView({ behavior: 'instant' })
  }

  return (
    <article dir="rtl" className="font-ar bg-[var(--color-background)]">
      {/* ---------------- Hero ---------------- */}
      <section className="relative min-h-screen overflow-hidden pt-36 pb-40">
        {/* Background cover art */}
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/75 via-background/30 to-background/75 pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/65 via-background/20 to-background/65 pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_15%,var(--color-background)_95%)] pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-64 z-10 bg-gradient-to-b from-background to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-64 z-10 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-64 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-64 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          {cover ? (
            <img
              src={cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 h-full w-full" style={{ background: product.gradient }} />
          )}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-2 lg:px-2">
          <a
            href="#/products"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
          >
            العودة إلى المنتجات <span aria-hidden>→</span>
          </a>

          <div className="mt-8 max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
              <CheckCircleIcon className="size-3.5" />
              متوفر
            </span>

            <h1
              className="font-ar-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white"
              dir="ltr"
            >
              {product.gameName}
            </h1>
            <p className="mt-2 text-white/65">
              إعداد احترافي وتجربة لعب مستقرة.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`#/checkout/${product.id}`}
                className="pill-btn pill-btn-primary"
              >
                اشترِ
              </a>
              <button
                type="button"
                onClick={showShowcase}
                className="pill-btn pill-btn-ghost inline-flex items-center gap-2"
              >
                <PlayCircleIcon className="size-4" /> استعراض
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
              <div className="card p-5 cursor-default">
                <p className="text-xs text-white/55">يبدأ من</p>
                <p className="mt-1 text-2xl font-bold">{formatSAR(product.priceFrom)}</p>
              </div>
              <div className="card p-5 cursor-default">
                <p className="text-xs text-white/55">التسليم</p>
                <p className="mt-1 text-2xl font-bold">فوري</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Showcase ---------------- */}
      <section id="showcase" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              العرض التوضيحي
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              شاهد الخدمة أثناء العمل مع أبرز المزايا.
            </p>
          </header>

          <div className="mt-10 relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black grid place-items-center">
            <button
              type="button"
              aria-label="تشغيل الفيديو"
              className="grid size-16 place-items-center rounded-2xl bg-white/10 text-white transition hover:bg-white/20"
            >
              <PlayCircleIcon className="size-8" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {['فيديو 1', 'فيديو 2'].map((v, i) => (
              <button
                key={v}
                type="button"
                onClick={() => setActiveVideo(i)}
                className={[
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition',
                  activeVideo === i
                    ? 'bg-white text-black'
                    : 'border border-white/15 bg-white/5 text-white/70 hover:text-white',
                ].join(' ')}
              >
                <PlayCircleIcon className="size-4" /> {v}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- الميزات والفوائد ---------------- */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              الميزات والفوائد
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-white/60" dir="ltr">
              Preview content for {product.gameName}. Replace these lines later with final product copy.
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4" dir="ltr">
            {featurePreview.map((group) => (
              <article key={group.category} className="card min-h-[320px] p-6 text-left cursor-default">
                <h3 className="text-2xl font-bold text-white">
                  {group.category}
                </h3>
                <ul className="mt-6 space-y-4 text-white/85">
                  {group.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 text-white/45">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- معلومات المنتج ---------------- */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              معلومات المنتج
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              تفاصيل المنتج الرقمي وخدمة الإعداد.
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INFO.map(({ Icon, label, value }) => (
              <div key={label} className="card p-6 text-center cursor-default">
                <div className="mx-auto grid size-12 place-items-center rounded-full bg-white/5">
                  <Icon className="size-6 text-white" />
                </div>
                <p className="mt-4 font-semibold">{label}</p>
                <p className="mt-1 text-sm text-white/60" dir="auto">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href={`#/checkout/${product.id}`} className="pill-btn pill-btn-primary">
              اشترِ الآن
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}
