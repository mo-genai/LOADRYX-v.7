import { FEATURES, WHY } from '../data/content'
import {
  ActivationIcon,
  PerformanceIcon,
  SecurityIcon,
  SupportIcon,
  UpdatesIcon,
  WarrantyIcon,
} from './icons'
import type { FeatureCard } from '../types/content'

const ICONS: Record<FeatureCard['icon'], React.FC<React.SVGProps<SVGSVGElement>>> = {
  performance: PerformanceIcon,
  support: SupportIcon,
  updates: UpdatesIcon,
  security: SecurityIcon,
  activation: ActivationIcon,
  warranty: WarrantyIcon,
}

/**
 * Card icon housing per teardown §7c — exact three-layer construction:
 *   1) 24px dotted grid using --color-border
 *   2) radial mask fading the grid toward the center
 *   3) 12px (size-12) icon plate with top-left border only, centered
 */
function FeatureIcon({
  Icon,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}) {
  return (
    <div
      className="group/icon relative mx-auto size-36 duration-200 rounded-md"
      style={
        {
          ['--color-border' as never]:
            'color-mix(in oklab, white 15%, transparent)',
        } as React.CSSProperties
      }
    >
      {/* Layer 1 — 24px grid */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-border) 1px, transparent 1px),\
             linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Layer 2 — radial mask, transparent in center, --color-background at 75% */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle, transparent 0%, var(--color-background) 75%)',
        }}
      />
      {/* Layer 3 — icon plate with top-left bordered corner */}
      <div
        className="absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t"
        style={{
          background: 'var(--color-background)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div
          className="aspect-square rounded-full p-2"
          style={{
            background:
              'radial-gradient(closest-side, var(--color-background) 0%, var(--color-background) 60%, transparent 100%)',
          }}
        >
          <Icon className="size-6 text-white" />
        </div>
      </div>
    </div>
  )
}

export function WhySection() {
  return (
    <section dir="rtl" className="font-ar py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h2 className="font-ar-display text-balance text-4xl font-semibold lg:text-5xl">
            {WHY.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            {WHY.subtitle}
          </p>
        </header>

        <div className="w-full mx-auto mt-8 grid gap-6 md:mt-16 grid-cols-1 lg:grid-cols-3">
          {FEATURES.map((feat) => {
            const Icon = ICONS[feat.icon]
            return (
              <article
                key={feat.title}
                className="group card flex flex-col gap-6 py-6 text-center"
              >
                <div className="relative z-10 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-3">
                  <FeatureIcon Icon={Icon} />
                  <h3 className="font-ar-display mt-6 font-bold pb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-white/55 group-hover:text-white transition-colors duration-300">
                    {feat.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
