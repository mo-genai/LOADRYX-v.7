import { forwardRef, useEffect, useMemo, useRef } from 'react'

type Falloff = 'linear' | 'exponential' | 'gaussian'

interface Props {
  label: string
  fromFontVariationSettings: string // e.g. "'wght' 400"
  toFontVariationSettings: string // e.g. "'wght' 900"
  containerRef: React.RefObject<HTMLElement | null>
  radius?: number
  falloff?: Falloff
  className?: string
}

/**
 * React port of the React Bits VariableProximity component used (in its
 * Svelte form) by proofcore.io.
 *
 * Per teardown §4:
 *  - Listens to mousemove/touchmove on window, not the container
 *  - rAF loop early-returns when the cursor has not moved (avoids
 *    re-writing the same fontVariationSettings 60×/sec)
 *  - Per-letter style.fontVariationSettings interpolation between
 *    `from` and `to` values, modulated by the chosen falloff
 *  - Default radius = 140, default falloff = "gaussian" to match the
 *    soft halo seen in the reference screenshots
 */
export const VariableProximity = forwardRef<HTMLSpanElement, Props>(
  function VariableProximity(props, ref) {
    const {
      label,
      fromFontVariationSettings,
      toFontVariationSettings,
      containerRef,
      radius = 140,
      falloff = 'gaussian',
      className = '',
    } = props

    const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
    const mouseRef = useRef({ x: -9999, y: -9999 })
    const lastRef = useRef({ x: -1, y: -1 })

    const axes = useMemo(() => {
      const parse = (s: string) =>
        new Map(
          s
            .split(',')
            .map((p) => p.trim())
            .map((p) => {
              const [n, v] = p.split(' ')
              return [n.replace(/['"]/g, ''), parseFloat(v)] as const
            }),
        )
      const from = parse(fromFontVariationSettings)
      const to = parse(toFontVariationSettings)
      return [...from].map(([axis, fromValue]) => ({
        axis,
        fromValue,
        toValue: to.get(axis) ?? fromValue,
      }))
    }, [fromFontVariationSettings, toFontVariationSettings])

    useEffect(() => {
      const onMove = (e: MouseEvent | TouchEvent) => {
        const p = 'touches' in e ? e.touches[0] : e
        if (!containerRef.current || !p) return
        const r = containerRef.current.getBoundingClientRect()
        mouseRef.current = { x: p.clientX - r.left, y: p.clientY - r.top }
      }
      window.addEventListener('mousemove', onMove)
      window.addEventListener('touchmove', onMove, { passive: true })

      let id = 0
      const tick = () => {
        id = requestAnimationFrame(tick)
        const { x, y } = mouseRef.current
        // Skip if mouse hasn't moved — the early-out from §4c
        if (x === lastRef.current.x && y === lastRef.current.y) return
        lastRef.current = { x, y }
        if (!containerRef.current) return
        const cr = containerRef.current.getBoundingClientRect()

        for (const el of letterRefs.current) {
          if (!el) continue
          const r = el.getBoundingClientRect()
          const cx = r.left + r.width / 2 - cr.left
          const cy = r.top + r.height / 2 - cr.top
          const d = Math.hypot(x - cx, y - cy)

          if (d >= radius) {
            el.style.fontVariationSettings = fromFontVariationSettings
            continue
          }
          const norm = Math.max(0, Math.min(1, 1 - d / radius))
          const f =
            falloff === 'exponential'
              ? norm * norm
              : falloff === 'gaussian'
                ? Math.exp(-((d / (radius / 2)) ** 2) / 2)
                : norm

          el.style.fontVariationSettings = axes
            .map(
              (a) =>
                `'${a.axis}' ${a.fromValue + (a.toValue - a.fromValue) * f}`,
            )
            .join(', ')
        }
      }
      id = requestAnimationFrame(tick)

      return () => {
        cancelAnimationFrame(id)
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('touchmove', onMove)
      }
    }, [axes, fromFontVariationSettings, radius, falloff, containerRef])

    // Render: words wrapped so they don't break, letters individually addressable.
    const words = label.split(' ')
    let i = 0
    return (
      <span
        ref={ref}
        className={`${className} variable-proximity`}
        style={{ display: 'inline' }}
      >
        {words.map((w, wi) => (
          <span
            key={wi}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            {[...w].map((ch) => {
              const idx = i++
              return (
                <span
                  key={idx}
                  ref={(el) => {
                    letterRefs.current[idx] = el
                  }}
                  style={{
                    display: 'inline-block',
                    fontVariationSettings: fromFontVariationSettings,
                  }}
                  aria-hidden
                >
                  {ch}
                </span>
              )
            })}
            {wi < words.length - 1 && (
              <span style={{ display: 'inline-block' }}>&nbsp;</span>
            )}
          </span>
        ))}
        <span className="sr-only">{label}</span>
      </span>
    )
  },
)
