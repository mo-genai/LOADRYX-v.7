import { formatSAR } from '../data/content'
import { productImage } from '../data/productImages'
import type { ProductCard as ProductCardType } from '../types/content'

export function ProductCard({ product: p }: { product: ProductCardType }) {
  const cover = productImage(p.id)

  return (
    <a
      dir="ltr"
      href={`#/product/${p.id}`}
      className="group relative block h-[260px] overflow-hidden rounded-xl border border-white/10 bg-black"
      aria-label={p.gameName}
    >
      {cover ? (
        <img
          src={cover}
          alt={p.gameName}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      ) : (
        <div className="absolute inset-0" style={{ background: p.gradient }} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />

      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <h3 className="text-2xl font-bold text-white">
          {p.gameName}
        </h3>

        <p className="mt-1 text-sm text-white/65">
          Starting price
        </p>

        <p className="text-2xl font-bold text-white">
          {formatSAR(p.priceFrom)}
        </p>

        <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>Verification</span>
        </div>

        <div className="mt-4 rounded-md bg-white py-2 text-center text-sm font-medium text-black">
          استعرض الباقة
        </div>
      </div>
    </a>
  )
}
