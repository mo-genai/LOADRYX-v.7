import { CheckCircleIcon } from './icons'
import { ProductCover } from './ProductCover'
import type { ProductCard as ProductCardType } from '../types/content'

/**
 * Shared product card used by the home Products section and the full
 * Products page so both keep an identical design and grid cell.
 */
export function ProductCard({ product: p }: { product: ProductCardType }) {
  const isBeta = p.status === 'beta'
  return (
    <a
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
            <span className="text-white/75">{isBeta ? 'Beta' : 'Active'}</span>
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
}
