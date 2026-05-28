import { useState } from 'react'
import { formatSAR, getProduct } from '../data/content'
import { productImage } from '../data/productImages'
import { CheckCircleIcon } from '../components/icons'

const PAYMENT_METHODS = [
  'مدى',
  'Apple Pay',
  'STC Pay',
  'VISA',
  'Mastercard',
  'Tabby',
  'Tamara',
]

const planLabelAr = (days: number) => `اشتراك ${days} يوم`

export function CheckoutPage({ id, days }: { id: string; days?: number }) {
  const product = getProduct(id)
  const initialPlan =
    product?.plans.find((p) => p.days === days) ??
    product?.plans[product.plans.length - 1]

  const [planDays, setPlanDays] = useState<number | undefined>(initialPlan?.days)
  const [done, setDone] = useState(false)

  if (!product) {
    return (
      <section
        dir="rtl"
        className="font-ar min-h-[70vh] grid place-items-center px-6 text-center"
      >
        <div>
          <h1 className="font-ar-display text-3xl font-semibold">
            لا يوجد ما يمكن شراؤه
          </h1>
          <a href="#/products" className="pill-btn pill-btn-primary mt-6 inline-flex">
            العودة إلى المنتجات
          </a>
        </div>
      </section>
    )
  }

  const cover = productImage(product.id)
  const plan = product.plans.find((p) => p.days === planDays) ?? product.plans[0]

  if (done) {
    return (
      <section
        dir="rtl"
        className="font-ar min-h-[80vh] grid place-items-center px-6 text-center pt-28"
      >
        <div className="max-w-md">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/15">
            <CheckCircleIcon className="size-8 text-emerald-400" />
          </div>
          <h1 className="font-ar-display mt-6 text-3xl font-semibold">
            تم تأكيد الطلب
          </h1>
          <p className="mt-3 text-white/65">
            شكرًا لك! تم تسجيل طلبك ({product.gameName} — {planLabelAr(plan.days)}).
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href={`#/product/${product.id}`} className="pill-btn pill-btn-ghost">
              العودة إلى المنتج
            </a>
            <a href="#/products" className="pill-btn pill-btn-primary">
              تصفّح المزيد
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <article dir="rtl" className="font-ar pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <a
          href={`#/product/${product.id}`}
          className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
        >
          العودة إلى {product.gameName} <span aria-hidden>→</span>
        </a>

        <h1 className="font-ar-display mt-6 text-4xl font-semibold tracking-tight">
          إتمام الطلب
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* ---- اختيار الباقة + الدفع ---- */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold">اختر مدة الاشتراك</h2>
              <div className="mt-4 grid gap-3">
                {product.plans.map((p) => {
                  const active = p.days === planDays
                  return (
                    <button
                      key={p.days}
                      type="button"
                      onClick={() => setPlanDays(p.days)}
                      className={[
                        'card flex items-center justify-between p-4 text-right cursor-pointer',
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
                        <span className="font-medium">{planLabelAr(p.days)}</span>
                      </span>
                      <span className="font-semibold">{formatSAR(p.price)}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">طريقة الدفع</h2>
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
              <span className="text-sm text-white/70">البريد الإلكتروني للإيصال</span>
              <input
                type="email"
                placeholder="you@example.com"
                dir="ltr"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/25 text-right"
              />
            </label>
          </div>

          {/* ---- ملخص الطلب ---- */}
          <aside className="card p-6 h-fit cursor-default">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
              {cover ? (
                <img
                  src={cover}
                  alt={product.gameName}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full" style={{ background: product.gradient }} />
              )}
            </div>
            <h3 className="mt-4 font-semibold" dir="ltr">
              {product.gameName}
            </h3>
            <p className="text-sm text-white/55">{planLabelAr(plan.days)}</p>

            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between text-white/70">
                <dt>المجموع الفرعي</dt>
                <dd>{formatSAR(plan.price)}</dd>
              </div>
              <div className="flex justify-between text-white/70">
                <dt>الضريبة</dt>
                <dd>0 ريال</dd>
              </div>
              <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-base font-semibold">
                <dt>الإجمالي</dt>
                <dd>{formatSAR(plan.price)}</dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => setDone(true)}
              className="mt-6 pill-btn pill-btn-primary w-full justify-center"
            >
              إتمام الطلب
            </button>
          </aside>
        </div>
      </div>
    </article>
  )
}
