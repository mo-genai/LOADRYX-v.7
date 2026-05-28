import { formatSAR } from '../data/content'
import { productImage } from '../data/productImages'
import type { ProductCard as ProductCardType } from '../types/content'

/**
 * Product card — cover photo fills the top of the card, then the game name
 * (kept in English) and a prominent price in Saudi Riyal, with a single
 * action: استعرض الباقة (view the package / details).
 */
export function ProductCard({ product: p }: { product: ProductCardType }) {
  const cover = productImage(p.id)

  return (
    <div dir="rtl" className="font-ar card p-3 flex flex-col">
      <a
        href={`#/product/${p.id}`}
        className="group/cover relative block aspect-[4/3] w-full overflow-hidden rounded-xl"
        aria-label={p.gameName}
      >
        {cover ? (
          <img
            src={cover}
            alt={p.gameName}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/cover:scale-[1.05]"
          />
        ) : (
          <div className="absolute inset-0" style={{ background: p.gradient }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
      </a>

      <div className="flex items-center justify-between gap-3 px-1 pt-4">
        <h3 className="text-lg font-semibold text-white" dir="ltr">
          {p.gameName}
        </h3>
        <p className="whitespace-nowrap text-2xl font-bold text-white">
          {formatSAR(p.priceFrom)}
        </p>
      </div>

      <a
        href={`#/product/${p.id}`}
        className="mt-4 pill-btn pill-btn-primary w-full justify-center"
      >
        استعرض الباقة
      </a>
    </div>
  )
}
