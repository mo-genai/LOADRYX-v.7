import { formatSAR } from '../data/content'
import { productImage } from '../data/productImages'
import type { ProductCard as ProductCardType } from '../types/content'

export function ProductCard({ product: p }: { product: ProductCardType }) {
  const cover = productImage(p.id)

  return (
    <a href={`#/product/${p.id}`}>
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 hover:border-primary/50 duration-500 cursor-pointer border border-transparent">
        <div className="absolute inset-0 z-0">
          <div
            className="relative w-full h-full transition-transform duration-500 group-hover:scale-[1.05] transform-gpu"
            style={{ clipPath: 'inset(0 round 0.75rem)', minHeight: '400px' }}
          >
            {cover ? (
              <img
                src={cover}
                alt={p.gameName}
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="object-cover w-full h-full" style={{ background: p.gradient }} />
            )}
          </div>

          <div
            className="absolute -inset-2 bg-gradient-to-b from-gray-900/40 to-gray-900 z-10"
            style={{ clipPath: 'inset(0 round 0.75rem)' }}
          />
        </div>

        <div className="relative z-20 p-5 flex flex-col h-full min-h-[400px]">
          <div className="relative h-10 w-28" />

          <div className="mt-auto">
            <h3 className="text-2xl font-bold text-white mb-2">
              {p.gameName}
            </h3>

            <div
              className="mb-3"
              style={{
                direction: 'rtl',
                textAlign: 'right',
                fontSize: '24px',
                fontWeight: 800,
                color: 'rgb(255,255,255)',
                textShadow: 'rgba(0,0,0,0.75) 0px 2px 14px',
              }}
            >
              <p className="text-sm text-gray-300" style={{ display: 'none' }} />

              <p
                className="text-xl font-bold text-white"
                style={{
                  direction: 'rtl',
                  textAlign: 'right',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: 'rgb(255,255,255)',
                  textShadow: 'rgba(0,0,0,0.75) 0px 2px 14px',
                }}
              >
                {formatSAR(p.priceFrom)}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-4 relative">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <div className="mt-0.5 w-2 h-2 rounded-full bg-green-500 mr-2" />
                  <span className="text-sm text-gray-300" style={{ display: 'none' }} />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative inline-block" role="presentation">
                  <div className="flex items-center cursor-help">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-blue-400 mr-1"
                    >
                      <path d="M12 3 4 7v6c0 5 3.4 8.7 8 9.9 4.6-1.2 8-4.9 8-9.9V7z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>

                    <span className="text-sm text-gray-300" style={{ display: 'none' }} />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-primary hover:bg-primary/90 pointer-events-none"
              style={{ direction: 'rtl', textAlign: 'center' }}
            >
              اشتر
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
