import { PRODUCTS } from '../data/content'
import { CheckCircleIcon } from './icons'

export function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-32 dark:bg-transparent relative z-0">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Our Products
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            Premium toolkits with stable releases and advanced features.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => {
            const isBeta = p.status === 'beta'
            return (
              <article key={p.id} className="card overflow-hidden flex flex-col">
                <div
                  className="product-cover relative aspect-[16/9] w-full"
                  style={{ background: p.gradient }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.55))]" />
                  <div className="absolute top-4 left-5 right-5 flex items-start justify-between">
                    <span className="text-[0.7rem] tracking-[0.32em] text-white/70">
                      {p.monogram}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white/60">
                      NIMBUS
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 text-3xl font-bold tracking-tight text-white drop-shadow">
                    {p.monogram}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
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
                        {isBeta ? 'Beta' : 'Stable'}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-white/75">
                      <CheckCircleIcon className="size-3.5 text-sky-400" />
                      Verified
                    </span>
                  </div>

                  <button
                    type="button"
                    className="mt-5 pill-btn pill-btn-ghost w-full justify-center"
                  >
                    Purchase Now
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
