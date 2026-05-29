import { PRODUCTS } from '../data/content'
import { ProductCard } from './ProductCard'

const HOME_PRODUCT_COUNT = 9

export function ProductsSection() {
  const products = PRODUCTS.slice(0, HOME_PRODUCT_COUNT)
  const hasMore = PRODUCTS.length > HOME_PRODUCT_COUNT

  return (
    <section
      id="products"
      dir="rtl"
      className="font-ar py-16 md:py-32 dark:bg-transparent relative z-0"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h2 className="font-ar-display text-balance text-4xl font-semibold lg:text-5xl">
            الباقات المتوفرة
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            اختر الباقة المناسبة لك، وابدأ بخطوات واضحة مع تجربة استخدام مستقرة
            ودعم مباشر بعد الشراء.
          </p>
        </header>

        <div className="relative mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {hasMore && (
            <>
              {/* Fade the last row into the background, like the reference. */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-b from-transparent via-[var(--color-background)]/85 to-[var(--color-background)]"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center pb-10">
                <a
                  href="#/products"
                  className="pointer-events-auto pill-btn pill-btn-primary px-10"
                >
                  عرض الكل
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
