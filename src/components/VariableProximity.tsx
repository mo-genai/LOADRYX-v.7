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

/* ---------------------------------------------------------------------------
 * Arabic-aware port of the fancycomponents "Variable Font Cursor Proximity".
 *
 * The site's Arabic face (IBM Plex Sans Arabic) ships as STATIC weights, so a
 * smooth per-letter weight interpolation is impossible with it. To keep the
 * change scoped to THIS file only (no edits to index.html / Hero / css), the
 * component self-injects a variable Arabic face and applies it to the Arabic
 * glyphs it renders. Swap ARABIC_VF_* below to use a different variable face
 * (e.g. Noto Sans Arabic) — that's the only knob you need.
 *
 * Cursive joining: Arabic letters connect, and naive per-letter splitting
 * breaks that. We re-introduce the correct contextual shapes by wrapping each
 * letter with ZWJ (U+200D) on the side(s) where it should join, based on the
 * letter's joining type. RTL ordering + embedded Latin words (e.g. LOADRYX)
 * are handled by the native bidi algorithm.
 * ------------------------------------------------------------------------- */

const ARABIC_VF_FAMILY = 'Cairo'
const ARABIC_VF_HREF =
  'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap'

const ZWJ = '\u200D'

// Letters that join only to the preceding letter (never forward).
const RIGHT_JOINING = new Set([
  'ا', 'أ', 'إ', 'آ', 'ٱ', 'ٲ', 'ٳ',
  'د', 'ذ', 'ڈ', 'ڊ', 'ڋ', 'ڍ', 'ڌ',
  'ر', 'ز', 'ڑ', 'ڕ', 'ژ', 'ڙ', 'ۯ',
  'و', 'ؤ', 'ۄ', 'ۅ', 'ۆ', 'ۇ', 'ۈ', 'ۉ', 'ۊ', 'ۋ', 'ۏ',
  'ة',
])
const NON_JOINING = new Set(['ء'])

const isArabicLetter = (ch: string): boolean => {
  const c = ch.codePointAt(0) ?? 0
  return (
    (c >= 0x0621 && c <= 0x064a) ||
    (c >= 0x066e && c <= 0x06d3) ||
    (c >= 0x06fa && c <= 0x06ff) ||
    (c >= 0x0750 && c <= 0x077f)
  )
}
const isMark = (ch: string): boolean => {
  const c = ch.codePointAt(0) ?? 0
  return (
    (c >= 0x064b && c <= 0x065f) ||
    c === 0x0670 ||
    (c >= 0x06d6 && c <= 0x06dc) ||
    (c >= 0x06df && c <= 0x06e8) ||
    (c >= 0x06ea && c <= 0x06ed)
  )
}
type JoinType = 'U' | 'R' | 'D'
const joinType = (ch: string): JoinType => {
  if (!isArabicLetter(ch) || NON_JOINING.has(ch)) return 'U'
  if (RIGHT_JOINING.has(ch)) return 'R'
  return 'D'
}

type Letter = { shaped: string; arabic: boolean }
type Token =
  | { kind: 'space'; value: string }
  | { kind: 'word'; latin: boolean; letters: Letter[] }

function tokenize(label: string): Token[] {
  const tokens: Token[] = []
  for (const part of label.split(/(\s+)/)) {
    if (part === '') continue
    if (/^\s+$/.test(part)) {
      tokens.push({ kind: 'space', value: part })
      continue
    }
    const groups: { base: string; marks: string }[] = []
    for (const ch of part) {
      if (isMark(ch) && groups.length) groups[groups.length - 1].marks += ch
      else groups.push({ base: ch, marks: '' })
    }
    const latin = !/[\u0600-\u06FF]/.test(part)
    const letters: Letter[] = groups.map((g, i) => {
      const cur = joinType(g.base)
      const prev = i > 0 ? joinType(groups[i - 1].base) : 'U'
      const next = i < groups.length - 1 ? joinType(groups[i + 1].base) : 'U'
      const joinPrev = prev === 'D' && (cur === 'D' || cur === 'R')
      const joinNext = cur === 'D' && (next === 'D' || next === 'R')
      const shaped =
        (joinPrev ? ZWJ : '') + g.base + g.marks + (joinNext ? ZWJ : '')
      return { shaped, arabic: isArabicLetter(g.base) }
    })
    tokens.push({ kind: 'word', latin, letters })
  }
  return tokens
}

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
    const centers = useRef<{ cx: number; cy: number }[]>([])
    const mouseRef = useRef({ x: -9999, y: -9999 })
    const lastRef = useRef({ x: -1, y: -1 })

    const tokens = useMemo(() => tokenize(label), [label])

    const axes = useMemo(() => {
      const parse = (s: string) =>
        new Map(
          s
            .split(',')
            .map((p) => p.trim())
            .filter(Boolean)
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

    const settingsFor = (f: number) =>
      axes
        .map((a) => `'${a.axis}' ${a.fromValue + (a.toValue - a.fromValue) * f}`)
        .join(', ')

    // Inject a variable Arabic face once (scoped to this component's needs).
    useEffect(() => {
      const id = 'variable-proximity-ar-font'
      if (document.getElementById(id)) return
      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = ARABIC_VF_HREF
      document.head.appendChild(link)
    }, [])

    useEffect(() => {
      const measure = () => {
        const cr = containerRef.current?.getBoundingClientRect()
        if (!cr) return
        centers.current = letterRefs.current.map((el) => {
          if (!el) return { cx: -9999, cy: -9999 }
          const r = el.getBoundingClientRect()
          return {
            cx: r.left + r.width / 2 - cr.left,
            cy: r.top + r.height / 2 - cr.top,
          }
        })
      }

      const onMove = (e: MouseEvent | TouchEvent) => {
        const p = 'touches' in e ? e.touches[0] : e
        const cr = containerRef.current?.getBoundingClientRect()
        if (!cr || !p) return
        mouseRef.current = { x: p.clientX - cr.left, y: p.clientY - cr.top }
      }

      window.addEventListener('mousemove', onMove)
      window.addEventListener('touchmove', onMove, { passive: true })
      window.addEventListener('resize', measure)

      // Positions shift once the variable face loads — re-measure then.
      if (document.fonts?.ready) void document.fonts.ready.then(measure)
      const t = window.setTimeout(measure, 400)
      measure()

      let id = 0
      const tick = () => {
        id = requestAnimationFrame(tick)
        const { x, y } = mouseRef.current
        if (x === lastRef.current.x && y === lastRef.current.y) return
        lastRef.current = { x, y }

        for (let i = 0; i < letterRefs.current.length; i++) {
          const el = letterRefs.current[i]
          const c = centers.current[i]
          if (!el || !c) continue
          const d = Math.hypot(x - c.cx, y - c.cy)

          if (d >= radius) {
            el.style.fontVariationSettings = fromFontVariationSettings
            el.style.textShadow = 'none'
            continue
          }
          const norm = Math.max(0, Math.min(1, 1 - d / radius))
          const f =
            falloff === 'exponential'
              ? norm * norm
              : falloff === 'gaussian'
                ? Math.exp(-((d / (radius / 2)) ** 2) / 2)
                : norm

          el.style.fontVariationSettings = settingsFor(f)
          el.style.textShadow = `0 0 ${22 * f}px rgba(188,208,255,${0.5 * f})`
        }
      }
      id = requestAnimationFrame(tick)

      return () => {
        cancelAnimationFrame(id)
        window.clearTimeout(t)
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('touchmove', onMove)
        window.removeEventListener('resize', measure)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [axes, fromFontVariationSettings, radius, falloff, containerRef, tokens])

    let i = 0
    return (
      <span
        ref={ref}
        className={`${className} variable-proximity`}
        style={{ display: 'inline', whiteSpace: 'normal' }}
      >
        {tokens.map((tok, ti) => {
          if (tok.kind === 'space') return <span key={`s${ti}`}>{tok.value}</span>
          return (
            <span
              key={`w${ti}`}
              style={{
                display: 'inline',
                whiteSpace: 'nowrap',
                ...(tok.latin
                  ? { direction: 'ltr', unicodeBidi: 'isolate' as const }
                  : null),
              }}
            >
              {tok.letters.map((lt, li) => {
                const idx = i++
                return (
                  <span
                    key={li}
                    ref={(el) => {
                      letterRefs.current[idx] = el
                    }}
                    style={{
                      display: 'inline',
                      fontVariationSettings: fromFontVariationSettings,
                      transition:
                        'font-variation-settings 0.08s ease-out, text-shadow 0.2s ease-out',
                      willChange: 'font-variation-settings',
                      // Apply the variable face to every letter — Arabic AND
                      // Latin (e.g. LOADRYX) — so both interpolate weight.
                      fontFamily: ARABIC_VF_FAMILY,
                    }}
                    aria-hidden
                  >
                    {lt.shaped}
                  </span>
                )
              })}
            </span>
          )
        })}
        <span className="sr-only">{label}</span>
      </span>
    )
  },
)
