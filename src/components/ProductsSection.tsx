import { PRODUCTS } from '../data/content'
import { CheckCircleIcon } from './icons'
import { ProductCover } from './ProductCover'

export function ProductsSection() {
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
          {PRODUCTS.map((p) => {
            const isBeta = p.status === 'beta'
            return (
              <a
                key={p.id}
                href={`#/product/${p.id}`}
                className="card overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[16/9] w-full">
                  <ProductCover product={p} />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold group-hover:text-[var(--color-primary)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs text-white/55">Starting price</p>
                  <p className="mt-1 text-lg font-semibold">
                    from ${p.priceFrom.toFixed(2)}
                  </p>

                  <div className="mt-4 flex items-center gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className={[
                          'inline-block h-2 w-2 rounded-full',
                          isBeta ? 'bg-amber-400' : 'bg-emerald-400',
                        ].join(' ')}
                      />
                      <span className="text-white/75">
                        {isBeta ? 'Beta' : 'Active'}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-white/75">
                      <CheckCircleIcon className="size-3.5 text-sky-400" />
                      Verified
                    </span>
                  </div>

                  <span className="mt-5 pill-btn pill-btn-ghost w-full justify-center group-hover:bg-white/10">
                    View Details
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
