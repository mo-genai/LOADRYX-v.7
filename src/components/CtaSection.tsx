import { BRAND } from '../data/content'

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative py-32 md:py-48 mx-auto max-w-7xl overflow-hidden dark:bg-transparent"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(99,102,241,0.20), transparent 70%)',
        }}
      />
      <div className="relative text-center px-6">
        <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
          Try {BRAND} today
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/65">
          Join thousands of teams who trust our reliable toolkits for the
          ultimate competitive edge in production.
        </p>
        <div className="mt-8">
          <a href="#" className="pill-btn pill-btn-primary">
            Sign Up For Free
          </a>
        </div>
      </div>
    </section>
  )
}
