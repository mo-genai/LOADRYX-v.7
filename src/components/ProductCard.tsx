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
        group relative block h-[300px] overflow-hidden rounded-xl
        border border-white/10 bg-black
        transition duration-500 hover:-translate-y-1 hover:border-white/20
      "
    >
      {cover ? (
        <img
          src={cover}
          alt={p.gameName}
          loading="lazy"
          className="
            absolute inset-0 h-full w-full object-cover object-center
            transition-transform duration-700 group-hover:scale-[1.05]
          "
        />
      ) : (
        <div className="absolute inset-0" style={{ background: p.gradient }} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/95 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <div className="mb-4">
          <h3 className="text-xl font-bold leading-tight text-white">
            {p.gameName}
          </h3>

          <p className="mt-1 text-xs text-white/60">
            السعر يبدأ من
          </p>

          <p className="mt-0.5 text-lg font-bold text-white">
            {formatSAR(p.priceFrom)}
          </p>

          <div className="mt-2 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-blue-400/70 text-[10px] text-blue-400">
              ✓
            </span>
          </div>
        </div>

        <div className="rounded-md bg-white py-2 text-center text-sm font-medium text-black transition group-hover:bg-white/90">
          استعرض الباقة
        </div>
      </div>
    </a>
  )
}
