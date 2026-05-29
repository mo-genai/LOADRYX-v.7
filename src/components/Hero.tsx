import { useLayoutEffect, useRef, useState } from 'react'
import { HERO } from '../data/content'
import { HeroDotGrid } from './HeroDotGrid'
import { VariableProximity } from './VariableProximity'

const HERO_VIDEO_SRC =
  'https://cdn.sanity.io/files/kzldmhbc/production/4b27394d27fa19f63c0577749b00572644637e6c.mp4'
const HERO_POSTER_SRC =
  'https://res.cloudinary.com/dmp1fo2j4/image/upload/v1779896891/Hero_fallback_image_middle_zix3fb.png'

const SIDE_MASK =
  'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'

const HERO_FONT_MAX_PX = 84 // 5.25rem — desktop cap; shrinks to fit on mobile
const HERO_TITLE_CLASS = 'leading-tight'

export function Hero() {
  const titleContainerRef = useRef<HTMLDivElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const [titleFontSize, setTitleFontSize] = useState<string>(`${HERO_FONT_MAX_PX}px`)

  // Auto-fit the title to the available width: keeps a single bold line that
  // scales up to HERO_FONT_MAX_PX on desktop and shrinks on narrow phones so
  // no line ever overflows / gets clipped. Measured off the invisible spacer
  // (rendered at the heaviest 'wght' 900 = worst-case width).
  useLayoutEffect(() => {
    const fit = () => {
      const container = titleContainerRef.current
      const spacer = spacerRef.current
      if (!container || !spacer) return
      const avail = container.clientWidth
      const lines = spacer.querySelectorAll<HTMLDivElement>(':scope > div')
      if (!avail || lines.length === 0) return
      let widest = 0
      let curPx = HERO_FONT_MAX_PX
      lines.forEach((d) => {
        widest = Math.max(widest, d.scrollWidth)
        curPx = parseFloat(getComputedStyle(d).fontSize) || curPx
      })
      if (!widest) return
      const next = Math.min(HERO_FONT_MAX_PX, curPx * (avail * 0.98) / widest)
      setTitleFontSize(`${Math.max(14, Math.floor(next))}px`)
    }
    fit()
    window.addEventListener('resize', fit)
    if (document.fonts?.ready) void document.fonts.ready.then(fit)
    const t = window.setTimeout(fit, 450)
    return () => {
      window.removeEventListener('resize', fit)
      window.clearTimeout(t)
    }
  }, [])

  return (
    <section
      dir="rtl"
      className="font-ar relative"
      style={{
        width: '100%',
        minHeight: 'auto',
        position: 'relative',
        zIndex: 1,
        maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
      }}
    >
      <HeroDotGrid />

      <main className="overflow-hidden w-full">
        <section>
          <div
            className="relative pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-32"
            style={{ minHeight: '80.38vh' }}
          >
            <div className="absolute inset-0 -z-20 h-full lg:w-3/4 xl:w-3/4 2xl:w-3/4 mx-auto overflow-hidden">
              <div className="relative w-full h-full">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gray-800 rounded-lg"
                  style={{
                    aspectRatio: '16 / 9',
                    minHeight: '100vh',
                    maskImage: SIDE_MASK,
                    WebkitMaskImage: SIDE_MASK,
                  }}
                />

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={HERO_POSTER_SRC}
                  className="relative mx-auto h-full w-full object-cover rounded-lg"
                  style={{
                    maxWidth: 'none',
                    minHeight: '100vh',
                    objectPosition: 'center top',
                    transformOrigin: 'center center',
                    maskImage: SIDE_MASK,
                    WebkitMaskImage: SIDE_MASK,
                  }}
                >
                  <source src={HERO_VIDEO_SRC} type="video/mp4" />
                </video>

                <div className="absolute inset-0 mix-blend-color bg-background/10" aria-hidden />
              </div>
            </div>

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full"
              style={{
                background:
                  'radial-gradient(175% 175% at 50% 100%, transparent 0%, var(--color-background) 90%)',
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full"
              style={{
                background:
                  'radial-gradient(115% 115% at 50% 0%, transparent 0%, var(--color-background) 90%)',
              }}
            />

            <div className="mx-auto max-w-6xl px-4 sm:px-4 md:px-12 lg:px-12 xl:px-16 2xl:px-16">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <div
                  ref={titleContainerRef}
                  className="font-ar-display relative mt-8"
                  style={{ position: 'relative', textAlign: 'center', width: '100%' }}
                >
                  <div
                    ref={spacerRef}
                    aria-hidden
                    className="invisible pointer-events-none select-none"
                    style={{ fontFamily: 'Cairo', fontVariationSettings: "'wght' 900" }}
                  >
                    {HERO.lines.map((line) => (
                      <div
                        key={line}
                        className={`block w-fit ${HERO_TITLE_CLASS} whitespace-nowrap mx-auto`}
                        style={{ fontSize: titleFontSize }}
                      >
                        {line}
                      </div>
                    ))}
                  </div>

                  <div className="absolute inset-0 z-[1]">
                    {HERO.lines.map((line) => (
                      <div
                        key={line}
                        className="block w-fit whitespace-nowrap mx-auto"
                        style={{ fontSize: titleFontSize }}
                      >
                        <VariableProximity
                          label={line}
                          className={`${HERO_TITLE_CLASS} font-normal`}
                          fromFontVariationSettings="'wght' 300"
                          toFontVariationSettings="'wght' 900"
                          containerRef={titleContainerRef}
                          radius={160}
                          falloff="gaussian"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mx-auto mt-8 max-w-2xl text-balance text-base sm:text-lg px-4 sm:px-0">
                  <span
                    className="inline-block animate-fade-in-blur"
                    style={{
                      animationDelay: '0.65s',
                      animationDuration: '0.5s',
                      animationFillMode: 'both',
                    }}
                  >
                    {HERO.subtitle}
                  </span>
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:gap-4 lg:flex-row px-4 sm:px-0">
                  <div className="animate-fade-in-blur [animation-delay:1.2s] [animation-fill-mode:backwards] w-full md:w-auto">
                    <a
                      href="#products"
                      className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 text-base font-medium shadow-xs transition-all md:w-auto"
                      style={{
                        backgroundColor: 'oklch(0.922 0 0)',
                        color: 'oklch(0.205 0 0)',
                      }}
                    >
                      <span className="text-nowrap">{HERO.primaryCta}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}
