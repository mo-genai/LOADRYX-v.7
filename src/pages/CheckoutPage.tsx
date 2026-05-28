import { useState } from 'react'
import { formatSAR, getProduct } from '../data/content'
import { productImage } from '../data/productImages'
import { CheckCircleIcon } from '../components/icons'

/**
 * One-time purchase checkout (no subscriptions). A fast "Express Checkout"
 * collects only what a digital setup service needs to reach the buyer — name,
 * phone and email — and offers an optional account after payment.
 *
 * The data model stays centralized in `content.ts` so this flow can later be
 * wired to WordPress + WooCommerce without a rewrite.
 */
export function CheckoutPage({ id }: { id: string }) {
  const product = getProduct(id)
  const [createAccount, setCreateAccount] = useState(false)
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
  const price = formatSAR(product.priceFrom)

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
            تم استلام طلبك
          </h1>
          <p className="mt-3 text-white/65">
            شكرًا لك! تم تسجيل طلب <span dir="ltr">{product.gameName}</span>،
            وسيتواصل معك فريقنا عبر الجوال أو البريد لإتمام التجهيز.
          </p>
          {createAccount && (
            <p className="mt-2 text-sm text-white/50">
              سيتم إرسال رابط إنشاء الحساب إلى بريدك الإلكتروني.
            </p>
          )}
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
    <article dir="rtl" className="font-ar pt-28 pb-24 bg-[var(--color-background)]">
      <div className="mx-auto max-w-5xl px-6">
        <a
          href={`#/product/${product.id}`}
          className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
        >
          العودة إلى <span dir="ltr">{product.gameName}</span>{' '}
          <span aria-hidden>→</span>
        </a>

        <h1 className="font-ar-display mt-6 text-4xl font-semibold tracking-tight">
          إتمام الطلب
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            setDone(true)
          }}
          className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]"
        >
          <div className="space-y-8">
            {/* Express Checkout */}
            <div>
              <h2 className="text-lg font-semibold">الدفع السريع</h2>
              <p className="mt-1 text-sm text-white/55">
                أدخل بياناتك لإتمام الطلب بسرعة دون تعقيد.
              </p>
              <div className="mt-4 space-y-4">
                <Field label="الاسم">
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="الاسم الكامل"
                    className={inputCls}
                  />
                </Field>
                <Field label="رقم الجوال">
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    autoComplete="tel"
                    placeholder="+966 5X XXX XXXX"
                    className={`${inputCls} text-right`}
                  />
                </Field>
                <Field label="البريد الإلكتروني">
                  <input
                    type="email"
                    required
                    dir="ltr"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={`${inputCls} text-right`}
                  />
                </Field>
              </div>
            </div>

            {/* Optional Account */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <h2 className="text-lg font-semibold">حساب اختياري</h2>
              <label className="mt-3 flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={createAccount}
                  onChange={(e) => setCreateAccount(e.target.checked)}
                  className="mt-1 size-4 accent-white"
                />
                <span className="text-sm text-white/70">
                  أنشئ لي حسابًا لمتابعة طلباتي (اختياري) — يمكنك إنشاؤه بعد الدفع،
                  ولا يؤثر على إتمام الطلب.
                </span>
              </label>
            </div>
          </div>

          {/* Order summary */}
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
            <p className="text-sm text-white/55">خدمة إعداد رقمية</p>

            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between text-white/70">
                <dt>المجموع</dt>
                <dd>{price}</dd>
              </div>
              <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-base font-semibold">
                <dt>الإجمالي</dt>
                <dd>{price}</dd>
              </div>
            </dl>

            <button
              type="submit"
              className="mt-6 pill-btn pill-btn-primary w-full justify-center"
            >
              إتمام الطلب
            </button>
            <p className="mt-3 text-center text-xs text-white/40">
              دفعة واحدة — بدون اشتراكات.
            </p>
          </aside>
        </form>
      </div>
    </article>
  )
}

const inputCls =
  'mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/25'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm text-white/70">{label}</span>
      {children}
    </label>
  )
}
