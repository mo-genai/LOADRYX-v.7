import { useCallback, useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

gsap.registerPlugin(InertiaPlugin)

interface Dot {
  cx: number
  cy: number
  xOffset: number
  yOffset: number
  _inertiaApplied: boolean
}

const DOT_SIZE = 2
const GAP = 43
const BASE_COLOR = '#ffffff34'
const ACTIVE_COLOR = '#ffffff'
const PROXIMITY = 340
const SPEED_TRIGGER = 100
const SHOCK_RADIUS = 340
const SHOCK_STRENGTH = 5
const MAX_SPEED = 5000
const RESISTANCE = 600
const RETURN_DURATION = 5

function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
  if (!m) return { r: 0, g: 0, b: 0 }
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  }
}

function throttle<F extends (...args: never[]) => void>(fn: F, wait: number) {
  let last = 0
  return ((...args: Parameters<F>) => {
    const now = performance.now()
    if (now - last >= wait) {
      last = now
      fn(...args)
    }
  }) as F
}

export function HeroDotGrid() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const pointerRef = useRef({
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  })

  const baseRgb = useMemo(() => hexToRgb(BASE_COLOR), [])
  const activeRgb = useMemo(() => hexToRgb(ACTIVE_COLOR), [])

  const circlePath = useMemo(() => {
    if (typeof window === 'undefined' || !window.Path2D) return null
    const p = new Path2D()
    p.arc(0, 0, DOT_SIZE / 2, 0, Math.PI * 2)
    return p
  }, [])

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const { width, height } = wrap.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    canvas.width = Math.max(1, Math.round(width * dpr))
    canvas.height = Math.max(1, Math.round(height * dpr))
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const cols = Math.max(1, Math.floor((width + GAP) / (DOT_SIZE + GAP)))
    const rows = Math.max(1, Math.floor((height + GAP) / (DOT_SIZE + GAP)))
    const cell = DOT_SIZE + GAP
    const gridW = cell * cols - GAP
    const gridH = cell * rows - GAP
    const extraX = width - gridW
    const extraY = height - gridH
    const startX = extraX / 2 + DOT_SIZE / 2
    const startY = extraY / 2 + DOT_SIZE / 2

    const dots: Dot[] = []
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell
        const cy = startY + y * cell
        dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false })
      }
    }
    dotsRef.current = dots
  }, [])

  useEffect(() => {
    if (!circlePath) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId = 0
    const proxSq = PROXIMITY * PROXIMITY

    const draw = () => {
      const cssW = canvas.clientWidth
      const cssH = canvas.clientHeight
      ctx.clearRect(0, 0, cssW, cssH)

      const { x: px, y: py } = pointerRef.current

      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i]
        const ox = dot.cx + dot.xOffset
        const oy = dot.cy + dot.yOffset
        const dx = dot.cx - px
        const dy = dot.cy - py
        const dsq = dx * dx + dy * dy

        let style = BASE_COLOR
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq)
          const t = 1 - dist / PROXIMITY
          const r = (baseRgb.r + (activeRgb.r - baseRgb.r) * t) | 0
          const g = (baseRgb.g + (activeRgb.g - baseRgb.g) * t) | 0
          const b = (baseRgb.b + (activeRgb.b - baseRgb.b) * t) | 0
          style = `rgb(${r},${g},${b})`
        }

        ctx.save()
        ctx.translate(ox, oy)
        ctx.fillStyle = style
        ctx.fill(circlePath)
        ctx.restore()
      }
      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafId)
  }, [baseRgb, activeRgb, circlePath])

  useEffect(() => {
    buildGrid()
    let ro: ResizeObserver | null = null
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(buildGrid)
      if (wrapperRef.current) ro.observe(wrapperRef.current)
    } else {
      ;(window as Window).addEventListener('resize', buildGrid)
    }
    return () => {
      if (ro) ro.disconnect()
      else (window as Window).removeEventListener('resize', buildGrid)
    }
  }, [buildGrid])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const localX = e.clientX - rect.left
      const localY = e.clientY - rect.top

      const insideHero =
        localX >= 0 &&
        localY >= 0 &&
        localX <= rect.width &&
        localY <= rect.height

      const now = performance.now()
      const pr = pointerRef.current
      const dt = pr.lastTime ? now - pr.lastTime : 16
      const dx = e.clientX - pr.lastX
      const dy = e.clientY - pr.lastY
      let vx = (dx / dt) * 1000
      let vy = (dy / dt) * 1000
      let speed = Math.hypot(vx, vy)
      if (speed > MAX_SPEED) {
        const scale = MAX_SPEED / speed
        vx *= scale
        vy *= scale
        speed = MAX_SPEED
      }
      pr.lastTime = now
      pr.lastX = e.clientX
      pr.lastY = e.clientY
      pr.vx = vx
      pr.vy = vy
      pr.speed = speed

      if (!insideHero) {
        pr.x = -9999
        pr.y = -9999
        return
      }

      pr.x = localX
      pr.y = localY

      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i]
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y)
        if (speed > SPEED_TRIGGER && dist < PROXIMITY && !dot._inertiaApplied) {
          dot._inertiaApplied = true
          gsap.killTweensOf(dot)
          const pushX = dot.cx - pr.x + vx * 0.005
          const pushY = dot.cy - pr.y + vy * 0.005
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance: RESISTANCE },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: RETURN_DURATION,
                ease: 'elastic.out(1, 0.75)',
              })
              dot._inertiaApplied = false
            },
          })
        }
      }
    }

    const onClick = (e: MouseEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      if (cx < 0 || cy < 0 || cx > rect.width || cy > rect.height) return

      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i]
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy)
        if (dist < SHOCK_RADIUS && !dot._inertiaApplied) {
          dot._inertiaApplied = true
          gsap.killTweensOf(dot)
          const falloff = Math.max(0, 1 - dist / SHOCK_RADIUS)
          const pushX = (dot.cx - cx) * SHOCK_STRENGTH * falloff
          const pushY = (dot.cy - cy) * SHOCK_STRENGTH * falloff
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance: RESISTANCE },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: RETURN_DURATION,
                ease: 'elastic.out(1, 0.75)',
              })
              dot._inertiaApplied = false
            },
          })
        }
      }
    }

    const throttledMove = throttle(onMove, 50)

    window.addEventListener('mousemove', throttledMove, { passive: true })
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('mousemove', throttledMove)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div ref={wrapperRef} aria-hidden className="pointer-events-none absolute inset-0 w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  )
}
