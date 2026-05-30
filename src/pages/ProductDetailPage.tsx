import { useState } from 'react'
import { formatSAR, getProduct } from '../data/content'
import { productImage } from '../data/productImages'
import { ApexProductPage } from './ApexProductPage'
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

const PRODUCT_LOGOS: Record<string, string> = {
  fortnite:
    'https://cdn.sanity.io/images/kzldmhbc/production/398eab0c45b06f810689b09a4a33d5ff9b7e7a1c-302x82.png?w=576&auto=format&q=75&fit=max',
  pubg:
    'https://cdn.sanity.io/images/kzldmhbc/production/7c9fd529f385037d00939fd4c8761a322ac4206a-731x464.png?w=576&auto=format&q=75&fit=max',
  apex:
    'https://cdn.sanity.io/images/kzldmhbc/production/d5c9c62088a88442290fd75ab69fe4410e99cac2-1752x656.png?w=576&auto=format&q=75&fit=max',
  dayz:
    'https://cdn.sanity.io/images/kzldmhbc/production/71a3dccb4fc954bce9b0570b83845d4d80eb817f-179x82.png?w=576&auto=format&q=75&fit=max',
  'overwatch-2':
    'https://cdn.sanity.io/images/kzldmhbc/production/02869107e7c76ad068d95aad9f88db4f45f02f46-250x155.webp?w=576&auto=format&q=75&fit=max',
  'black-ops-6':
    'https://cdn.sanity.io/images/kzldmhbc/production/e4b559933c3bc4683013c0dbf1d425affee75cd0-267x83.png?w=576&auto=format&q=75&fit=max',
  'arma-3':
    'https://cdn.sanity.io/images/kzldmhbc/production/521c2eeb5dd72448ffb29e7df60d4ddc2fc1481b-183x82.png?w=576&auto=format&q=75&fit=max',
  'arc-raiders':
    'https://cdn.sanity.io/images/kzldmhbc/production/6021f5d0ee228993de8c12b06c71d760a6f3998e-512x160.png?w=576&auto=format&q=75&fit=max',
  'black-ops-7':
    'https://cdn.sanity.io/images/kzldmhbc/production/c682eef77dfd062da0d12277902d81c4ddd508d9-512x134.png?w=576&auto=format&q=75&fit=max',
  'cold-war':
    'https://cdn.sanity.io/images/kzldmhbc/production/81518335a5e5a619160708b9da6635650f234b86-704x308.png?w=576&auto=format&q=75&fit=max',
  'mw-iii':
    'https://cdn.sanity.io/images/kzldmhbc/production/c260d06f9c964a685ef40f322eb0a900fd317206-512x227.png?w=576&auto=format&q=75&fit=max',
  'mw-ii':
    'https://cdn.sanity.io/images/kzldmhbc/production/8d70df6ceb2455e1fdb9d0082a66478f692e13bc-2476x1234.png?w=576&auto=format&q=75&fit=max',
}

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

  // The Apex product page has its own dedicated Arabic RTL layout.
  if (product.id === 'apex') {
    return <ApexProductPage id={product.id} />
  }

  const cover = productImage(product.id)
  const logo = PRODUCT_LOGOS[product.id]
  const featurePreview = product.features.slice(0, 4)
  const showShowcase = () => {
    document.getElementById('showcase')?.scrollIntoView({ behavior: 'instant' })
  }

  return (
    <article dir="rtl" className="font-ar bg-[var(--color-background)]">
      <section className="relative isolate overflow-hidden pt-36 pb-40">
        <div className="absolute inset-0 z-0" aria-hidden>
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
              className="absolute inset-0 z-0 h-full w-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 z-0 h-full w-full" style={{ background: product.gradient }} />
          )}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-2 lg:px-2" dir="ltr">
          <div className="flex flex-col lg:grid lg:gap-8 lg:grid-cols-2">
            <div className="flex items-center justify-center order-first lg:order-last mb-8 lg:mb-0">
              <div className="relative h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72 -mb-8 z-20">
                {logo ? (
                  <img
                    src={logo}
                    alt={`${product.gameName} logo`}
                    className="object-contain drop-shadow-xl w-full h-full"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center text-5xl font-black text-white drop-shadow-xl">
                    {product.monogram}
                  </div>
                )}
              </div>
            </div>

            <div className="text-white text-center lg:text-left">
              <div className="mb-4 flex justify-center lg:justify-start">
                <span className="flex items-center gap-1.5 bg-green-500/90 text-white py-1 px-3 rounded-full text-xs font-medium border border-green-600 shadow-sm">
                  <CheckCircleIcon className="h-4 w-4" />
                  متوفر
                </span>
              </div>

              <h1
                className="text-balance text-4xl font-bold lg:text-5xl"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}
                dir="ltr"
              >
                {product.gameName}
              </h1>
              <p className="mt-4 text-xl text-gray-200" dir="rtl">
                إعداد احترافي وتجربة لعب مستقرة.
              </p>

              <div className="mt-8 px-2 md:px-2 lg:px-0">
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-start">
                  <a
                    href={`#/checkout/${product.id}`}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full lg:w-auto"
                  >
                    <BoltIcon className="h-4 w-4" />
                    اشترِ الآن
                  </a>
                  <button
                    type="button"
                    onClick={showShowcase}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-gray-400/10 shadow-xs hover:bg-gray-200/10 h-10 rounded-md px-6 has-[>svg]:px-4 text-white backdrop-blur-sm w-full lg:w-auto"
                  >
                    <PlayCircleIcon className="h-4 w-4" />
                    استعراض
                  </button>
                </div>
              </div>

              <div className="mt-4 px-2 md:px-2 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm text-center lg:text-left">
                    <div className="font-medium text-gray-200">يبدأ من</div>
                    <div className="text-2xl font-bold text-white" dir="rtl">
                      {formatSAR(product.priceFrom)}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm text-center lg:text-left">
                    <div className="font-medium text-gray-200">التسليم</div>
                    <div className="text-2xl font-bold text-white">فوري</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className="py-16 relative overflow-hidden bg-zinc-50/50 dark:bg-transparent -mt-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <header className="text-center">
            <h2 className="text-center text-3xl font-bold mb-2">العرض التوضيحي</h2>
            <p className="text-center text-muted-foreground mb-12">
              شاهد الخدمة أثناء العمل مع أبرز المزايا.
            </p>
          </header>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black grid place-items-center">
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
