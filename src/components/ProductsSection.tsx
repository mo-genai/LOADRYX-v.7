import { PRODUCTS } from '../data/content'
import { ProductCard } from './ProductCard'

const HOME_PRODUCT_COUNT = 9

export function ProductsSection() {
  const products = PRODUCTS.slice(0, HOME_PRODUCT_COUNT)

  return (
    <section id="products" className="py-16 md:py-32 dark:bg-transparent relative z-0">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Our Products
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            Premium gaming utilities with stable releases and advanced features.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {PRODUCTS.length > HOME_PRODUCT_COUNT && (
          <div className="mt-12 flex justify-center">
            <a
              href="#/products"
              dir="rtl"
              className="font-ar pill-btn pill-btn-ghost px-8"
            >
              عرض الكل
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
