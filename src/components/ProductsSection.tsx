import { PRODUCTS } from '../data/content'
import { ProductCard } from './ProductCard'

const VISIBLE_PRODUCT_COUNT = 9
const PREVIEW_PRODUCT_COUNT = 12

export function ProductsSection() {
  const visibleProducts = PRODUCTS.slice(0, VISIBLE_PRODUCT_COUNT)
  const previewProducts = PRODUCTS.slice(
    VISIBLE_PRODUCT_COUNT,
    PREVIEW_PRODUCT_COUNT,
  )
  const hasMore = PRODUCTS.length > VISIBLE_PRODUCT_COUNT

  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent relative z-0">
      <div className="@container mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Our Products
          </h2>
          <p className="mt-4 text-muted-foreground">
            Private game cheats with undetected status and advanced features.
          </p>
        </div>

        <div className="relative w-full mx-auto mt-8 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center">
            {visibleProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {hasMore && (
            <div className="relative mt-6">
              <div className="relative h-[200px] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center absolute top-0 left-0 right-0 pointer-events-none">
                  {previewProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-[25]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center z-[30] pb-6 px-4">
                <a
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gray-400/10 text-secondary-foreground shadow-xs hover:bg-gray-200/10 h-10 has-[>svg]:px-4 rounded-xl px-5 text-base w-full lg:w-auto max-w-xs inline-flex"
                >
                  Show All
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
