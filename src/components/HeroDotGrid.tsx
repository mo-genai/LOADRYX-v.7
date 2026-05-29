import { useEffect, useRef } from 'react'
import { tsParticles } from '@tsparticles/engine'
import type { Container, ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

const SPARKLES_OPTIONS = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  fullScreen: {
    enable: false,
    zIndex: 1,
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: false,
        mode: 'repulse',
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#FFFFFF',
    },
    move: {
      enable: true,
      direction: 'none',
      outModes: {
        default: 'out',
      },
      speed: {
        min: 0.1,
        max: 1,
      },
    },
    number: {
      density: {
        enable: true,
        width: 400,
        height: 400,
      },
      value: 1200,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 4,
        decay: 0,
        delay: 0,
        sync: false,
        mode: 'auto',
        startValue: 'random',
        destroy: 'none',
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: {
        min: 0.4,
        max: 1,
      },
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        decay: 0,
        delay: 0,
        sync: false,
        mode: 'auto',
        startValue: 'random',
        destroy: 'none',
      },
    },
  },
  detectRetina: true,
} satisfies ISourceOptions

export function HeroDotGrid() {
  const hostRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<Container | undefined>(undefined)

  useEffect(() => {
    let mounted = true
    const id = `sparkles-${Math.random().toString(36).slice(2, 10)}`

    async function mountParticles() {
      if (!hostRef.current) return

      await loadSlim(tsParticles)

      if (!mounted || !hostRef.current) return

      containerRef.current = await tsParticles.load({
        id,
        element: hostRef.current,
        options: SPARKLES_OPTIONS,
      })

      const canvas = hostRef.current.querySelector('canvas')
      if (canvas) {
        canvas.className = 'absolute inset-0 w-full h-full pointer-events-none'
        canvas.style.width = '100%'
        canvas.style.height = '100%'
      }
    }

    void mountParticles()

    return () => {
      mounted = false
      containerRef.current?.destroy()
      containerRef.current = undefined
    }
  }, [])

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
