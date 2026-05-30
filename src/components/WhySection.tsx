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
 * Clean icon housing — a subtle square grid that fades out radially, with the
 * white line icon centered on top (no plate). Mirrors the reference look.
 */
function FeatureIcon({
  Icon,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}) {
  return (
    <div
      className="relative mx-auto mt-6 grid size-24 place-items-center"
      style={
        {
          ['--color-border' as never]:
            'color-mix(in oklab, white 12%, transparent)',
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-border) 1px, transparent 1px),\
             linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          maskImage:
            'radial-gradient(circle at center, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black 0%, transparent 70%)',
        }}
      />
      <Icon className="relative size-8 text-white" />
    </div>
  )
}

export function WhySection() {
  return (
    <section dir="rtl" className="font-ar pt-27 pb-16 md:pt-44 md:pb-32 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <header className="text-center">
          <h2 className="font-ar-display text-balance text-4xl font-semibold lg:text-5xl">
            {WHY.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/60">
            {WHY.subtitle}
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:mt-18 sm:grid-cols-2 lg:grid-cols-3">
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
