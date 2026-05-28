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
  const showShowcase = () => {
    document.getElementById('showcase')?.scrollIntoView({ behavior: 'instant' })
  }

  return (
    <article dir="rtl" className="font-ar bg-[var(--color-background)]">
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden">
        {/* Background cover art */}
        <div className="absolute inset-0" aria-hidden>
          {cover ? (
            <img
              src={cover}
              alt=""
              className="h-full w-full object-cover opacity-40"
            />
          ) : (
            <div className="h-full w-full" style={{ background: product.gradient }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-background)] via-[var(--color-background)]/80 to-[var(--color-background)]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-[var(--color-background)]/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-14 sm:pt-32 lg:pt-40">
          <a
            href="#/products"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
          >
            العودة إلى المنتجات <span aria-hidden>→</span>
          </a>

          <div className="mt-6 max-w-xl">
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

      {/* ---------------- الميزات والفوائد (محتوى يُضاف لاحقًا) ---------------- */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              الميزات والفوائد
            </h2>
          </header>
          <div className="mt-8 min-h-24" />
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
