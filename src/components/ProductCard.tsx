import { formatSAR } from '../data/content'
import { productImage } from '../data/productImages'
import { ShieldCheckIcon } from './icons'
import type { ProductCard as ProductCardType } from '../types/content'

/**
 * Product card — full cover photo on top, then game name (kept in English) and
 * price in Saudi Riyal, with a verification shield + status dot (no text), and
 * two actions: اشترِ (purchase) and استعراض (showcase / details).
 */
export function ProductCard({ product: p }: { product: ProductCardType }) {
  const isBeta = p.status === 'beta'
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
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/cover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0" style={{ background: p.gradient }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
      </a>

      <div className="flex items-start justify-between gap-3 px-1 pt-4">
        <h3 className="text-lg font-semibold text-white" dir="ltr">
          {p.gameName}
        </h3>
        <div className="text-left">
          <p className="whitespace-nowrap text-base font-bold text-white">
            {formatSAR(p.priceFrom)}
          </p>
          <div className="mt-1 flex items-center justify-start gap-1.5">
            <ShieldCheckIcon className="size-4 text-sky-400" />
            <span
              className={[
                'inline-block h-2 w-2 rounded-full',
                isBeta ? 'bg-amber-400' : 'bg-emerald-400',
              ].join(' ')}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <a
          href={`#/checkout/${p.id}`}
          className="pill-btn pill-btn-primary flex-1 justify-center text-sm"
        >
          اشترِ
        </a>
        <a
          href={`#/product/${p.id}`}
          className="pill-btn pill-btn-ghost flex-1 justify-center text-sm"
        >
          استعراض
        </a>
      </div>
    </div>
  )
}
