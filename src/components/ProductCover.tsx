import type { ProductCard } from '../types/content'

/**
 * Abstract product cover — gradient panel + large wordmark text.
 * Deliberately NOT the original copyrighted game artwork; it reproduces the
 * Proofcore card *treatment* (branded cover, corner labels, bottom wordmark)
 * with original, generated visuals.
 */
export function ProductCover({
  product,
  size = 'card',
}: {
  product: ProductCard
  size?: 'card' | 'hero'
}) {
  const isHero = size === 'hero'
  return (
    <div
      className="product-cover relative w-full h-full overflow-hidden"
      style={{ background: product.gradient }}
    >
      {/* light bloom + bottom shade for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.6))]" />
      {/* faint dotted texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden
      />

      <div className="absolute top-4 left-5 right-5 flex items-start justify-between">
        <span className="text-[0.7rem] tracking-[0.32em] text-white/80">
          {product.monogram}
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white/70">
          NIMBUS
        </span>
      </div>

      <div
        className={[
          'absolute bottom-4 left-5 right-5 font-extrabold tracking-tight text-white drop-shadow',
          isHero ? 'text-5xl md:text-6xl' : 'text-3xl',
        ].join(' ')}
      >
        {product.monogram}
      </div>
    </div>
  )
}
