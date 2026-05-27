import { STATS } from '../data/content'
import { ShieldCheckIcon, TrophyIcon, UsersIcon } from './icons'
import type { StatCard } from '../types/content'

const ICONS: Record<StatCard['icon'], React.FC<React.SVGProps<SVGSVGElement>>> = {
  trophy: TrophyIcon,
  users: UsersIcon,
  'shield-check': ShieldCheckIcon,
}

export function TrustedSection() {
  return (
    <section className="py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Trusted Worldwide
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            Join our growing community of teams who ship faster with NIMBUS.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <article
                key={s.label}
                className="card p-8 text-center"
              >
                <div className="relative mx-auto mb-5 grid h-24 w-24 place-items-center">
                  <div className="absolute inset-0 rounded-md bg-grid-tile opacity-50" aria-hidden />
                  <Icon className="relative z-10 size-9 text-white" />
                </div>
                <p className="text-5xl font-semibold tracking-tight">{s.value}</p>
                <p className="mt-3 text-sm text-white/70">{s.label}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
