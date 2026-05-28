import { formatSAR, getProduct } from '../data/content'
import { productImage } from '../data/productImages'

export function ProductDetailPage({ id }: { id: string }) {
  const product = getProduct(id)

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

  const showFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'instant' })
  }

  return (
    <article dir="rtl" className="font-ar pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Back nav */}
        <a
          href="#/products"
          className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
        >
          العودة إلى المنتجات <span aria-hidden>→</span>
        </a>

        {/* ---------------- Hero ---------------- */}
        <div className="mt-6 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1
              className="font-ar-display text-4xl md:text-5xl font-semibold tracking-tight"
              dir="ltr"
            >
              {product.gameName}
            </h1>

            <p className="mt-4 text-2xl font-bold text-white">
              {formatSAR(product.priceFrom)}
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
                onClick={showFeatures}
                className="pill-btn pill-btn-ghost"
              >
                استعراض
              </button>
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10">
            {cover ? (
              <img
                src={cover}
                alt={product.gameName}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0" style={{ background: product.gradient }} />
            )}
          </div>
        </div>

        {/* ---------------- الميزات (محتوى يُضاف لاحقًا) ---------------- */}
        <section id="features" className="mt-20">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              الميزات
            </h2>
          </header>
          <div className="mt-8 min-h-24" />
        </section>

        {/* ---------------- الفوائد (محتوى يُضاف لاحقًا) ---------------- */}
        <section className="mt-12">
          <header className="text-center">
            <h2 className="font-ar-display text-3xl font-semibold lg:text-4xl">
              الفوائد
            </h2>
          </header>
          <div className="mt-8 min-h-24" />
        </section>

        {/* ---------------- Bottom CTA ---------------- */}
        <section className="mt-12 text-center">
          <a href={`#/checkout/${product.id}`} className="pill-btn pill-btn-primary">
            اشترِ الآن
          </a>
          <div className="mt-4">
            <a href="#/products" className="text-sm text-white/55 hover:text-white">
              العودة إلى جميع المنتجات
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}
