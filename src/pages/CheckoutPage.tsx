import { useState } from 'react'
import { getProduct } from '../data/content'
import { ProductCover } from '../components/ProductCover'
import { CheckCircleIcon } from '../components/icons'

const PAYMENT_METHODS = ['VISA', 'Mastercard', 'PayPal', 'Amex', 'Crypto']

export function CheckoutPage({ id, days }: { id: string; days?: number }) {
  const product = getProduct(id)
  const initialPlan =
    product?.plans.find((p) => p.days === days) ??
    product?.plans[product.plans.length - 1]

  const [planDays, setPlanDays] = useState<number | undefined>(initialPlan?.days)
  const [done, setDone] = useState(false)

  if (!product) {
    return (
      <section className="min-h-[70vh] grid place-items-center px-6 text-center">
        <div>
          <h1 className="text-3xl font-semibold">Nothing to check out</h1>
          <a href="#products" className="pill-btn pill-btn-primary mt-6 inline-flex">
            Back to Products
          </a>
        </div>
      </section>
    )
  }

  const plan = product.plans.find((p) => p.days === planDays) ?? product.plans[0]

  if (done) {
    return (
      <section className="min-h-[80vh] grid place-items-center px-6 text-center pt-28">
        <div className="max-w-md">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/15">
            <CheckCircleIcon className="size-8 text-emerald-400" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold">Order confirmed</h1>
          <p className="mt-3 text-white/65">
            Thanks! Your {product.title} ({plan.label}) order has been recorded.
            This is a demo checkout — no payment was processed and no card details
            were collected.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href={`#/product/${product.id}`} className="pill-btn pill-btn-ghost">
              Back to Product
            </a>
            <a href="#products" className="pill-btn pill-btn-primary">
              Browse More
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <article className="pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <a
          href={`#/product/${product.id}`}
          className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
        >
          <span aria-hidden>←</span> Back to {product.title}
        </a>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">Checkout</h1>

        {/* Demo notice */}
        <div className="mt-6 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm text-amber-200/90">
          Demo checkout — this page does not process real payments or collect card
          details. It's a UI mockup for the learning clone.
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* ---- Left: plan + (demo) payment ---- */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold">Select access plan</h2>
              <div className="mt-4 grid gap-3">
                {product.plans.map((p) => {
                  const active = p.days === planDays
                  return (
                    <button
                      key={p.days}
                      type="button"
                      onClick={() => setPlanDays(p.days)}
                      className={[
                        'card flex items-center justify-between p-4 text-left cursor-pointer',
                        active ? 'ring-1 ring-[var(--color-primary)]/50' : '',
                      ].join(' ')}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={[
                            'grid size-5 place-items-center rounded-full border',
                            active
                              ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/20'
                              : 'border-white/25',
                          ].join(' ')}
                        >
                          {active && (
                            <span className="size-2 rounded-full bg-[var(--color-primary)]" />
                          )}
                        </span>
                        <span className="font-medium">{p.label} Access</span>
                      </span>
                      <span className="font-semibold">${p.price.toFixed(2)}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Payment method</h2>
              <p className="mt-1 text-sm text-white/55">
                Demo only — selecting a method does nothing.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {PAYMENT_METHODS.map((m) => (
                  <span
                    key={m}
                    className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/70"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="text-sm text-white/70">Email for receipt</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/25"
              />
            </label>
          </div>

          {/* ---- Right: order summary ---- */}
          <aside className="card p-6 h-fit cursor-default">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
              <ProductCover product={product} />
            </div>
            <h3 className="mt-4 font-semibold">{product.title}</h3>
            <p className="text-sm text-white/55">{plan.label} access</p>

            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between text-white/70">
                <dt>Subtotal</dt>
                <dd>${plan.price.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between text-white/70">
                <dt>Taxes</dt>
                <dd>$0.00</dd>
              </div>
              <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-base font-semibold">
                <dt>Total</dt>
                <dd>${plan.price.toFixed(2)}</dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => setDone(true)}
              className="mt-6 pill-btn pill-btn-primary w-full justify-center"
            >
              Complete Order
            </button>
            <p className="mt-3 text-center text-xs text-white/40">
              No real charge — demo checkout.
            </p>
          </aside>
        </div>
      </div>
    </article>
  )
}
