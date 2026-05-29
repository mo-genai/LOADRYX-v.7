import { PRODUCTS } from '../data/content'
import { ProductCard } from './ProductCard'

const HOME_PRODUCT_COUNT = 12

export function ProductsSection() {
  const products = PRODUCTS.slice(0, HOME_PRODUCT_COUNT)
  const hasMore = PRODUCTS.length > HOME_PRODUCT_COUNT

  return (
    <section
      id="products"
      dir="ltr"
      className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent"
    >
      <div className="@container mx-auto max-w-6xl px-4 lg:px-8">
        <header className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Our Products
          </h2>
          <p className="mt-4 text-muted-foreground">
            Private game cheats with undetected status and advanced features.
          </p>
        </header>

        <div className="relative mt-8 md:mt-16">
          <div className="w-full mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {hasMore && (
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-b from-transparent via-[var(--color-background)]/85 to-[var(--color-background)]"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center pb-10">
                <a
                  href="#/products"
                  className="pointer-events-auto rounded-xl bg-gray-400/10 px-6 py-3 text-sm font-medium text-white hover:bg-gray-200/10"
                >
                  Show All
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
