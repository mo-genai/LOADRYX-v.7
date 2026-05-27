import { useEffect, useRef } from 'react'

/**
 * Ambient dot field — visually identical to the previous implementation,
 * with motion physics borrowed from the ReactBits "Dot Grid" reference:
 *
 *  - Calm idle drift + per-dot breathing
 *  - Subtle hover proximity push (continuous, light)
 *  - Pointer-down SHOCK IMPULSE: nearby dots get a one-shot velocity kick
 *    *toward* the click, then return naturally via the spring + inertia
 *  - Damped-harmonic spring back to home position (slight overshoot for an
 *    elastic feel — matches ReactBits' inertia plugin behavior)
 *  - Velocity damping = inertia/resistance
 *
 * Visibility is gated by two multipliers (both kept):
 *  1) Section intensity (hero 1.0 → mid 0.45 → footer 0.10)
 *  2) Content occlusion — dots inside or near .card, headings, footer text,
 *     compare-track, hero title go to 0 with a soft 28px edge fade. So
 *     dots stay ambient in open dark spaces and never compete with content.
 *
 * Visuals are unchanged: same #ffffff dot, same 1-2px size, same random
 * distribution, same density per area, same dark Proofcore feel.
 *
 * Respects prefers-reduced-motion (paints once, redraws on scroll/resize,
 * no rAF). Mobile density halved. Constant viewport-sized canvas memory
 * regardless of page length.
 */

interface Dot {
  homeX: number
  homeY: number
  x: number
  y: number
  vx: number
  vy: number
  r: number
  baseA: number
  phase: number
}

interface ContentRect {
  left: number
  top: number
  right: number
  bottom: number
}

/* ---------------- Tunables ---------------- */
const SPRING_K = 0.04 // stiffness — stronger = snappier
const DAMPING = 0.9 // < 1 — lower = more inertia / overshoot
const DRIFT = 0.005 // ambient noise per axis per frame

const HOVER_RADIUS = 130
const HOVER_FORCE = 0.35

const SHOCK_RADIUS = 220
const SHOCK_IMPULSE = 7.5
const SHOCK_FALLOFF = 2 // exponent on (1 - dist/radius)

const EDGE_FADE = 28 // soft fade halo around content rects (px)

/* ---------------- Component ---------------- */
export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let dots: Dot[] = []
    let contentRects: ContentRect[] = []
    let viewportW = 0
    let viewportH = 0
    let docH = 0
    let dpr = 1
    let heroBottom = 800
    let footerTop = 0
    let isVisible = !document.hidden

    const mouse = { x: -9999, y: -9999, active: false }

    /* ---- section bounds (hero / footer in document Y) ---- */
    const computeBounds = () => {
      const main = document.querySelector('main')
      if (!main) return
      const firstSection = main.querySelector('section')
      const footer = main.querySelector('footer')
      if (firstSection) {
        const r = firstSection.getBoundingClientRect()
        heroBottom = r.bottom + window.scrollY
      }
      if (footer) {
        const r = footer.getBoundingClientRect()
        footerTop = r.top + window.scrollY
      } else {
        footerTop = docH * 0.85
      }
    }

    /* ---- content blocks to mask — measured in document coords ---- */
    const computeContentRects = () => {
      contentRects = []
      const selectors = [
        '.card',
        '.compare-track',
        // Section headers (each component renders <header className="text-center">)
        'main section header',
        // Hero title + subtitle + CTA container
        'main section .max-w-6xl',
        // CTA inner block
        '#cta .relative.text-center',
        // Whole footer (text columns, brand block, social cluster)
        'footer',
      ]
      const els = document.querySelectorAll(selectors.join(','))
      for (let i = 0; i < els.length; i++) {
        const r = (els[i] as HTMLElement).getBoundingClientRect()
        if (r.width < 24 || r.height < 16) continue
        contentRects.push({
          left: r.left + window.scrollX,
          top: r.top + window.scrollY,
          right: r.right + window.scrollX,
          bottom: r.bottom + window.scrollY,
        })
      }
    }

    /**
     * Per-point occlusion factor:
     *  - 0.0 inside any content rect
     *  - linear 0 → 1 within EDGE_FADE px of the nearest edge
     *  - 1.0 in open space
     */
    const occlusionAt = (x: number, y: number): number => {
      let factor = 1.0
      for (let i = 0; i < contentRects.length; i++) {
        const r = contentRects[i]
        if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
          return 0
        }
        const dx = x < r.left ? r.left - x : x > r.right ? x - r.right : 0
        const dy = y < r.top ? r.top - y : y > r.bottom ? y - r.bottom : 0
        const edgeDist = dx > dy ? dx : dy // Chebyshev
        if (edgeDist < EDGE_FADE) {
          const f = edgeDist / EDGE_FADE
          if (f < factor) factor = f
        }
      }
      return factor
    }

    /* ---- section intensity by document Y ---- */
    const intensityAtY = (y: number): number => {
      const heroFadeEnd = heroBottom + 200
      const footerFadeStart = footerTop - 200
      if (y < heroBottom) return 1.0
      if (y < heroFadeEnd) return 1.0 - ((y - heroBottom) / 200) * 0.55
      if (y < footerFadeStart) return 0.45
      if (y < footerTop) return 0.45 - ((y - footerFadeStart) / 200) * 0.35
      return 0.1
    }

    /* ---- seed ---- */
    const sizeCanvas = () => {
      viewportW = window.innerWidth
      viewportH = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = viewportW * dpr
      canvas.height = viewportH * dpr
      canvas.style.width = `${viewportW}px`
      canvas.style.height = `${viewportH}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const seed = () => {
      sizeCanvas()
      docH = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        viewportH,
      )
      computeBounds()
      computeContentRects()

      const isMobile = viewportW < 640
      const density = isMobile ? 26000 : 13000
      const count = Math.round((viewportW * docH) / density)

      dots = []
      for (let i = 0; i < count; i++) {
        const x = Math.random() * viewportW
        const y = Math.random() * docH
        dots.push({
          homeX: x,
          homeY: y,
          x,
          y,
          vx: 0,
          vy: 0,
          r: Math.random() < 0.82 ? 1 : 2,
          baseA: 0.45 + Math.random() * 0.45,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    /* ---- listeners ---- */
    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX + window.scrollX
      mouse.y = e.clientY + window.scrollY
      mouse.active = true
    }
    const onPointerLeave = () => {
      mouse.active = false
    }
    const onPointerDown = (e: PointerEvent) => {
      // One-shot shockwave: dots inside SHOCK_RADIUS get an impulse TOWARD the
      // click. Spring + damping naturally resolves the return (no sustained
      // attractor → no "stuck pulled-in" look while held).
      const cx = e.clientX + window.scrollX
      const cy = e.clientY + window.scrollY
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]
        const dx = cx - d.x
        const dy = cy - d.y
        const distSq = dx * dx + dy * dy
        if (distSq < SHOCK_RADIUS * SHOCK_RADIUS && distSq > 0.01) {
          const dist = Math.sqrt(distSq)
          const t = 1 - dist / SHOCK_RADIUS
          const force = Math.pow(t, SHOCK_FALLOFF) * SHOCK_IMPULSE
          d.vx += (dx / dist) * force
          d.vy += (dy / dist) * force
        }
      }
    }
    const onVisibility = () => {
      isVisible = !document.hidden
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('visibilitychange', onVisibility)

    seed()

    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(seed, 150)
    }
    window.addEventListener('resize', onResize)

    // Recompute rects when document layout shifts (font load, images, etc.)
    const ro = new ResizeObserver(() => {
      const nextH = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        viewportH,
      )
      if (Math.abs(nextH - docH) > 60) {
        window.clearTimeout(resizeTimer)
        resizeTimer = window.setTimeout(seed, 200)
      } else {
        docH = nextH
        computeBounds()
        computeContentRects()
      }
    })
    ro.observe(document.body)

    /* ---- prefers-reduced-motion: paint once, redraw on scroll ---- */
    if (reduced) {
      const drawStatic = () => {
        const sx = window.scrollX
        const sy = window.scrollY
        ctx.clearRect(0, 0, viewportW, viewportH)
        for (let i = 0; i < dots.length; i++) {
          const d = dots[i]
          const screenY = d.y - sy
          if (screenY < -10 || screenY > viewportH + 10) continue
          const sec = intensityAtY(d.y)
          if (sec < 0.01) continue
          const occ = occlusionAt(d.x, d.y)
          if (occ < 0.01) continue
          const a = d.baseA * sec * occ
          if (a < 0.01) continue
          ctx.globalAlpha = Math.min(1, a)
          ctx.fillStyle = '#ffffff'
          ctx.beginPath()
          ctx.arc(d.x - sx, screenY, d.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      drawStatic()
      window.addEventListener('scroll', drawStatic, { passive: true })
      window.addEventListener('resize', drawStatic)
      return () => {
        ro.disconnect()
        window.clearTimeout(resizeTimer)
        window.removeEventListener('resize', onResize)
        window.removeEventListener('resize', drawStatic)
        window.removeEventListener('scroll', drawStatic)
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('pointerleave', onPointerLeave)
        window.removeEventListener('pointerdown', onPointerDown)
        document.removeEventListener('visibilitychange', onVisibility)
      }
    }

    /* ---- animated loop ---- */
    let raf = 0
    const tick = (t: number) => {
      raf = requestAnimationFrame(tick)
      if (!isVisible) return

      const sx = window.scrollX
      const sy = window.scrollY
      ctx.clearRect(0, 0, viewportW, viewportH)

      const cullTop = sy - 80
      const cullBottom = sy + viewportH + 80

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]

        if (d.y < cullTop || d.y > cullBottom) continue

        // Spring back to home (damped harmonic)
        d.vx += (d.homeX - d.x) * SPRING_K
        d.vy += (d.homeY - d.y) * SPRING_K

        // Ambient drift
        d.vx += (Math.random() - 0.5) * DRIFT
        d.vy += (Math.random() - 0.5) * DRIFT

        // Hover proximity push (light, continuous)
        if (mouse.active) {
          const dx = d.x - mouse.x
          const dy = d.y - mouse.y
          const distSq = dx * dx + dy * dy
          if (distSq < HOVER_RADIUS * HOVER_RADIUS && distSq > 0.01) {
            const dist = Math.sqrt(distSq)
            const f = (1 - dist / HOVER_RADIUS) * HOVER_FORCE
            d.vx += (dx / dist) * f
            d.vy += (dy / dist) * f
          }
        }

        // Inertia (damping)
        d.vx *= DAMPING
        d.vy *= DAMPING
        d.x += d.vx
        d.y += d.vy

        // ---- Visibility chain (all kept) ----
        const sec = intensityAtY(d.y)
        if (sec < 0.01) continue
        const occ = occlusionAt(d.x, d.y)
        if (occ < 0.01) continue
        const breathe = 1 + Math.sin(t * 0.0008 + d.phase) * 0.12
        const a = d.baseA * breathe * sec * occ
        if (a < 0.01) continue

        ctx.globalAlpha = Math.min(1, a)
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(d.x - sx, d.y - sy, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 w-screen h-screen pointer-events-none"
    />
  )
}
