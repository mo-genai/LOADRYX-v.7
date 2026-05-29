import { formatSAR } from '../data/content'
import { productImage } from '../data/productImages'
import type { ProductCard as ProductCardType } from '../types/content'

export function ProductCard({ product: p }: { product: ProductCardType }) {
  const cover = productImage(p.id)

  return (
    <a
      dir="rtl"
      href={`#/product/${p.id}`}
      aria-label={p.gameName}
      className="
        group relative block min-h-[400px] cursor-pointer overflow-hidden rounded-xl
        border border-transparent bg-gray-900
        transition-all duration-500 hover:-translate-y-2 hover:border-primary/50
        hover:shadow-xl hover:shadow-primary/5
      "
    >
      <div className="absolute inset-0 z-0">
        <div
          className="
            relative h-full min-h-[400px] w-full transform-gpu
            transition-transform duration-500 group-hover:scale-[1.05]
          "
          style={{ clipPath: 'inset(0 round 0.75rem)' }}
        >
          {cover ? (
            <img
              src={cover}
              alt={p.gameName}
              loading="lazy"
              className="h-full min-h-[400px] w-full object-cover object-center"
            />
          ) : (
            <div className="h-full min-h-[400px] w-full" style={{ background: p.gradient }} />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 flex min-h-[400px] flex-col justify-end p-5">
        <div className="mb-4">
          <h3 className="text-center text-2xl font-bold text-white">
            {p.gameName}
          </h3>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-xl font-bold text-white">
              {formatSAR(p.priceFrom)}
            </span>

            <span className="mr-auto inline-flex h-5 w-5 items-center justify-center rounded-full border border-blue-400/70 text-xs text-blue-400">
              ✓
            </span>

            <span className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </div>

        <div
          className="
            h-9 w-full rounded-md bg-primary px-4 py-2 text-center text-sm
            font-medium text-primary-foreground shadow-xs transition-colors
            group-hover:bg-primary/90
          "
        >
          اشتر
        </div>
      </div>
    </a>
  )
}
