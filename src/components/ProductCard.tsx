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
        group relative block h-[340px] overflow-hidden rounded-xl
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
            transition-transform duration-700 group-hover:scale-[1.04]
          "
        />
      ) : (
        <div className="absolute inset-0" style={{ background: p.gradient }} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex h-full flex-col p-5">
        <div className="flex-1">
          <h3 className="max-w-[78%] text-2xl font-bold leading-tight text-white">
            {p.gameName}
          </h3>

          <p className="mt-2 text-sm text-white/65">
            السعر يبدأ من
          </p>

          <p className="text-2xl font-bold text-white">
            {formatSAR(p.priceFrom)}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>متاح</span>
          </div>
        </div>

        <div className="rounded-md bg-white py-2.5 text-center text-sm font-medium text-black transition group-hover:bg-white/90">
          استعرض الباقة
        </div>
      </div>
    </a>
  )
}
