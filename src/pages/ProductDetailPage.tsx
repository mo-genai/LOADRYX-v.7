import { getProduct } from '../data/content'
import { ProductCover } from '../components/ProductCover'
import { CheckCircleIcon } from '../components/icons'
import type { FeatureGroup } from '../types/content'
import type { SVGProps } from 'react'

/* ---- compact feature-group icons (legal gaming-utility framing) ---- */
function GroupIcon({ kind, ...p }: { kind: FeatureGroup['icon'] } & SVGProps<SVGSVGElement>) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...p,
  }
  switch (kind) {
    case 'tune':
      return (
        <svg {...common}>
          <path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h7M15 18h5" />
          <circle cx="16" cy="6" r="2" />
          <circle cx="8" cy="12" r="2" />
          <circle cx="13" cy="18" r="2" />
        </svg>
      )
    case 'overlay':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18M7 13h6" />
        </svg>
      )
    case 'panel':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 9v12" />
        </svg>
      )
    case 'map':
      return (
        <svg {...common}>
          <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3 4 6v5c0 5 3.6 8.8 8 10 4.4-1.2 8-5 8-10V6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'broom':
      return (
        <svg {...common}>
          <path d="M19 5 9 15M7 13l4 4-3 3H4v-4l3-3ZM14 8l2 2" />
        </svg>
      )
    case 'gamepad':
      return (
        <svg {...common}>
          <rect x="2" y="7" width="20" height="10" rx="5" />
          <path d="M7 11v2M6 12h2M15 11h.01M18 13h.01" />
        </svg>
      )
    case 'stream':
      return (
        <svg {...common}>
          <rect x="2" y="5" width="14" height="14" rx="2" />
          <path d="m22 8-6 4 6 4V8Z" />
        </svg>
      )
  }
}

const STATUS_LABEL: Record<'active' | 'beta', string> = {
  active: 'Active',
  beta: 'Beta',
}

export function ProductDetailPage({ id }: { id: string }) {
  const product = getProduct(id)

  if (!product) {
    return (
      <section className="min-h-[70vh] grid place-items-center px-6 text-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Not found
          </p>
          <h1 className="mt-3 text-3xl font-semibold">Product unavailable</h1>
          <p className="mt-2 text-white/60">
            We couldn't find that product in the catalog.
          </p>
          <a href="#products" className="pill-btn pill-btn-primary mt-6 inline-flex">
            Back to Products
          </a>
        </div>
      </section>
    )
  }

  const isBeta = product.status === 'beta'

  return (
    <article className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Back nav */}
        <a
          href="#products"
          className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
        >
          <span aria-hidden>←</span> Back to Products
        </a>

        {/* ---------------- Hero ---------------- */}
        <div className="mt-6 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <span
              className={[
                'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium',
                isBeta
                  ? 'bg-amber-500/15 text-amber-300'
                  : 'bg-emerald-500/15 text-emerald-300',
              ].join(' ')}
            >
              <CheckCircleIcon className="size-3.5" />
              {STATUS_LABEL[product.status]}
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              {product.title}
            </h1>
            <p className="mt-2 text-white/60">{product.tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`#/checkout/${product.id}`}
                className="pill-btn pill-btn-primary"
              >
                Purchase Now
              </a>
              <a href="#how" className="pill-btn pill-btn-ghost">
                View Showcase
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
              <div className="card p-5 cursor-default">
                <p className="text-xs text-white/55">Starting at</p>
                <p className="mt-1 text-2xl font-bold">
                  ${product.priceFrom.toFixed(2)}
                </p>
              </div>
              <div className="card p-5 cursor-default">
                <p className="text-xs text-white/55">Verification</p>
                <p className="mt-1 text-2xl font-bold">Required</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10">
            <ProductCover product={product} size="hero" />
          </div>
        </div>

        {/* ---------------- Overview ---------------- */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">
            {product.gameName} {product.kind} Overview
          </h2>
          <p className="mt-3 max-w-3xl text-white/65 leading-relaxed">
            {product.description}
          </p>
        </section>

        {/* ---------------- Features & Benefits ---------------- */}
        <section className="mt-20">
          <header className="text-center">
            <h2 className="text-3xl font-semibold lg:text-4xl">
              Features &amp; Benefits
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              Everything in the {product.gameName} {product.kind} is built to give
              verified players a clean, customizable setup.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {product.features.map((group) => (
              <div key={group.category} className="card p-6">
                <div className="flex items-center gap-2.5">
                  <GroupIcon kind={group.icon} className="size-5 text-white" />
                  <h3 className="font-semibold">{group.category}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <CheckCircleIcon className="size-3.5 shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Product Information / Compatibility ---------------- */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Product Information</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <InfoCard label="Release Date" value={product.compatibility.releaseDate} />
            <InfoCard label="Supported Platforms" value={product.compatibility.platforms} />
            <InfoCard label="Supported OS" value={product.compatibility.os} />
            <InfoCard label="Streaming / Recording" value={product.compatibility.recording} />
          </div>
        </section>

        {/* ---------------- Pricing Plans ---------------- */}
        <section className="mt-20">
          <header className="text-center">
            <h2 className="text-3xl font-semibold lg:text-4xl">Pricing Plans</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              Choose the access window that fits you. Every plan unlocks the full
              feature set.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {product.plans.map((plan, i) => {
              const featured = i === product.plans.length - 1
              return (
                <div
                  key={plan.label}
                  className={[
                    'card p-7 text-center cursor-default',
                    featured ? 'ring-1 ring-[var(--color-primary)]/40' : '',
                  ].join(' ')}
                >
                  {featured && (
                    <span className="inline-block rounded-full bg-white/10 px-3 py-0.5 text-[0.65rem] uppercase tracking-wider text-white/80">
                      ★ Most Popular
                    </span>
                  )}
                  <p className="mt-2 text-white/60">{plan.label}</p>
                  <p className="mt-2 text-3xl font-bold">${plan.price.toFixed(2)}</p>
                  <a
                    href={`#/checkout/${product.id}/${plan.days}`}
                    className="mt-5 pill-btn pill-btn-primary w-full justify-center"
                  >
                    Purchase {plan.label} Access
                  </a>
                </div>
              )
            })}
          </div>
        </section>

        {/* ---------------- Bottom CTA ---------------- */}
        <section className="mt-20 text-center">
          <a href={`#/checkout/${product.id}`} className="pill-btn pill-btn-primary">
            Purchase {product.title}
          </a>
          <div className="mt-4">
            <a href="#products" className="text-sm text-white/55 hover:text-white">
              ← Back to all products
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-6 cursor-default">
      <p className="text-xs uppercase tracking-wider text-white/45">{label}</p>
      <p className="mt-2 text-sm font-medium text-white/85">{value}</p>
    </div>
  )
}
