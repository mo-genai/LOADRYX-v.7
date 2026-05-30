import { PRODUCTS } from '../data/content'
import { ProductCard } from '../components/ProductCard'

/**
 * Full catalogue page (route #/products) — every product, using the exact
 * same card design and grid as the home Products section.
 */
export function ProductsPage() {
  return (
    <>
      <section
        dir="rtl"
        className="font-ar relative pt-48 pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-100/50 to-white dark:from-background dark:to-background/80" />

        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center">
            <h1
              className="font-ar-display text-balance text-4xl font-semibold lg:text-5xl"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}
            >
              الباقات المتوفرة
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              اختر الباقة المناسبة لك، وابدأ بخطوات واضحة مع تجربة استخدام مستقرة
              ودعم مباشر بعد الشراء.
            </p>
          </div>
        </div>
      </section>

      <section dir="rtl" className="font-ar dark:bg-transparent">
        <div className="@container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
