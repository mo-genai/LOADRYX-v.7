import { PRODUCTS } from '../data/content'
import { ProductCard } from '../components/ProductCard'

/**
 * Full catalogue page (route #/products) — every product, using the exact
 * same card design and grid as the home Products section.
 */
export function ProductsPage() {
  return (
    <section className="pt-28 sm:pt-32 lg:pt-40 pb-16 md:pb-32 dark:bg-transparent relative z-0">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h1 className="text-balance text-4xl font-semibold lg:text-5xl">
            Our Products
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            Premium gaming utilities with stable releases and advanced features.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
