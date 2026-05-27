import { useRef, useState } from 'react'

/**
 * Two SVG "screenshots" representing standard vs. NIMBUS-enhanced views,
 * with a hover-driven reveal slider. No real game artwork — abstract dashboards
 * fit the "developer tools" framing.
 */
function StandardView() {
  return (
    <svg viewBox="0 0 800 450" className="block w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1e293b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#sky-a)" />
      {[...Array(40)].map((_, i) => (
        <circle key={i} cx={(i * 113) % 800} cy={(i * 47) % 450} r={1.2} fill="rgba(255,255,255,0.12)" />
      ))}
      <rect x="40" y="60" width="280" height="80" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <rect x="40" y="160" width="200" height="14" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="40" y="190" width="170" height="14" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="40" y="220" width="150" height="14" rx="3" fill="rgba(255,255,255,0.08)" />
      <circle cx="600" cy="260" r="80" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
      <rect x="500" y="360" width="200" height="14" rx="3" fill="rgba(255,255,255,0.1)" />
    </svg>
  )
}

function EnhancedView() {
  return (
    <svg viewBox="0 0 800 450" className="block w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1e1b4b" />
          <stop offset="1" stopColor="#0f0f23" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#sky-b)" />
      <g stroke="#06b6d4" strokeWidth="0.8" opacity="0.4">
        <path d="M0 200 L800 220" />
        <path d="M0 240 L800 230" />
        <path d="M0 280 L800 260" />
      </g>
      {[
        { x: 120, y: 180, w: 120, h: 80 },
        { x: 520, y: 200, w: 100, h: 60 },
        { x: 360, y: 240, w: 140, h: 100 },
      ].map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <text
            x={b.x + 4}
            y={b.y - 6}
            fill="#22d3ee"
            fontSize="10"
            fontFamily="Manrope, sans-serif"
            fontWeight="500"
          >
            tracked
          </text>
        </g>
      ))}
      <g fill="#06b6d4">
        {[...Array(8)].map((_, i) => (
          <circle key={i} cx={80 + i * 90} cy={420} r={2.5} />
        ))}
      </g>
      <rect x="640" y="40" width="120" height="80" rx="6" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" strokeWidth="1" />
      <text x="650" y="60" fill="#22d3ee" fontSize="10" fontFamily="Manrope, sans-serif" fontWeight="600">
        NIMBUS · 07:25 PM
      </text>
      <circle cx="700" cy="90" r="14" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
      <circle cx="700" cy="90" r="2" fill="#22d3ee" />
    </svg>
  )
}

export function HowItWorks() {
  const [reveal, setReveal] = useState(50)
  const trackRef = useRef<HTMLDivElement>(null)

  function move(clientX: number) {
    const el = trackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setReveal(Math.max(0, Math.min(100, pct)))
  }

  return (
    <section id="how" className="py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            See it in action
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            Hover over the image to compare the standard view with a
            NIMBUS-enhanced workflow.
          </p>
        </header>

        <div className="mx-auto mt-12 w-full max-w-5xl">
        <div
          ref={trackRef}
          className="compare-track aspect-[16/9] w-full cursor-ew-resize"
          onMouseMove={(e) => move(e.clientX)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
          style={{ '--reveal': `${reveal}%` } as React.CSSProperties}
        >
          <StandardView />
          <div className="compare-after">
            <EnhancedView />
          </div>
          <div className="compare-handle" />
        </div>
        </div>
      </div>
    </section>
  )
}
