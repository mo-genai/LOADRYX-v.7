import { BENEFITS } from '../data/content'
import { ShieldIcon } from './icons'
import type { BenefitCard } from '../types/content'

function Visual({ kind }: { kind: BenefitCard['visual'] }) {
  switch (kind) {
    case 'percent':
      return (
        <div className="relative flex items-center justify-center h-40">
          <div className="absolute h-32 w-44 rounded-full border-[6px] border-sky-400 -rotate-12" />
          <p className="relative text-5xl font-bold tracking-tight">100%</p>
        </div>
      )
    case 'shield-glow':
      return (
        <div className="relative flex items-center justify-center h-40">
          <div className="absolute h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_65%)]" />
          <div className="absolute h-28 w-28 rounded-full border border-white/10" />
          <ShieldIcon className="relative size-14 text-white" />
        </div>
      )
    case 'pricing':
      return (
        <div className="relative flex items-center justify-center h-40 px-4">
          <div className="absolute left-2 right-2 h-24 rounded-xl bg-white/5 blur-[1px] scale-95" />
          <div className="relative rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 shadow-xl text-center">
            <p className="absolute -top-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] text-white/80">
              ★ Most Popular
            </p>
            <p className="text-xs text-white/60">30 Days</p>
            <p className="my-1 text-2xl font-bold">$59.99</p>
            <p className="mt-1 rounded-md bg-white/90 px-3 py-1 text-[0.7rem] text-black">
              Purchase 30-Day Access
            </p>
          </div>
        </div>
      )
    case 'editor':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-lg border border-white/10 bg-[#0f0f15]">
          <div className="h-6 border-b border-white/10 bg-white/[0.04] flex items-center gap-1.5 px-3">
            <span className="size-2 rounded-full bg-rose-400/70" />
            <span className="size-2 rounded-full bg-amber-400/70" />
            <span className="size-2 rounded-full bg-emerald-400/70" />
          </div>
          <div className="p-4 font-mono text-[0.65rem] leading-relaxed text-white/70">
            <div className="text-sky-300">
              const config = <span className="text-white/50">{'{'}</span>
            </div>
            <div className="pl-4 text-white/80">
              tool: <span className="text-emerald-300">"aurora"</span>,
            </div>
            <div className="pl-4 text-white/80">
              version: <span className="text-emerald-300">"2.5"</span>,
            </div>
            <div className="pl-4 text-white/80">
              features: <span className="text-amber-300">["fast", "stable"]</span>
            </div>
            <div className="text-white/50">{'}'}</div>
            <div className="mt-2 text-white/40">→ deployed</div>
          </div>
        </div>
      )
    case 'payments': {
      const brands = ['VISA', 'PayPal', 'Mastercard', 'Amex', 'Discover', 'JCB', 'Maestro', 'Alipay', 'Diners']
      return (
        <div className="grid grid-cols-3 gap-2 h-40 overflow-hidden">
          {brands.concat(brands).slice(0, 12).map((b, i) => (
            <div
              key={i}
              className="grid place-items-center rounded-md border border-white/10 bg-white/5 text-[0.6rem] font-semibold tracking-wider text-white/70"
            >
              {b}
            </div>
          ))}
        </div>
      )
    }
    case 'version':
      return (
        <div className="flex items-center justify-center gap-3 h-40 text-2xl font-bold">
          <span className="text-white/30 line-through">v2.4</span>
          <span className="text-sky-400">⚡</span>
          <span>v2.5</span>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-emerald-300">
            Live
          </span>
        </div>
      )
    case 'refund':
      return (
        <div className="relative flex items-center justify-center h-40">
          <div className="absolute h-32 w-32 rounded-full border-2 border-dashed border-white/30 animate-[spin_20s_linear_infinite]" />
          <div className="relative text-center">
            <p className="text-3xl font-bold">100%</p>
            <p className="mt-0.5 text-[0.65rem] uppercase tracking-widest text-white/60">
              Refund
            </p>
          </div>
        </div>
      )
    case 'changelog':
      return (
        <div className="h-40 space-y-1.5 overflow-hidden text-xs">
          <div className="flex items-center justify-between rounded-md border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              <span className="font-semibold">v2.5</span>
              <span className="text-white/60">New: Recoil v2</span>
            </span>
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[0.6rem] uppercase tracking-wider text-emerald-300">
              New
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 text-white/60">
            <span className="size-1.5 rounded-full bg-white/40" />
            <span className="font-semibold">v2.4</span>
            <span>Fix: Aim drift</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 text-white/40">
            <span className="size-1.5 rounded-full bg-white/20" />
            <span className="font-semibold">v2.3</span>
            <span>Add: Streamproof</span>
          </div>
        </div>
      )
  }
}

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Our Benefits
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            We make your workflow easier by providing the best toolkits in the
            market.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENEFITS.slice(0, 3).map((b) => (
            <article key={b.title} className="card p-8 text-center">
              <Visual kind={b.visual} />
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/60">{b.description}</p>
            </article>
          ))}
        </div>

        {/* Row 2: 2/3 + 1/3 split */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="card p-8 md:col-span-2 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold">{BENEFITS[3].title}</h3>
              <p className="mt-2 text-sm text-white/60">
                {BENEFITS[3].description}
              </p>
            </div>
            <Visual kind="editor" />
          </article>
          <article className="card p-8 grid grid-cols-1 gap-4">
            <div>
              <h3 className="text-lg font-semibold">{BENEFITS[4].title}</h3>
              <p className="mt-2 text-sm text-white/60">
                {BENEFITS[4].description}
              </p>
            </div>
            <Visual kind="payments" />
          </article>
        </div>

        {/* Row 3: 3 cols */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENEFITS.slice(5).map((b) => (
            <article key={b.title} className="card p-8 text-center">
              <Visual kind={b.visual} />
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/60">{b.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
