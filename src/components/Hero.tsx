import { useRef } from 'react'
import { HERO } from '../data/content'
import { HeroDotGrid } from './HeroDotGrid'
import { VariableProximity } from './VariableProximity'

const HERO_VIDEO_SRC =
  'https://res.cloudinary.com/dmp1fo2j4/video/upload/v1779897126/Hero_background_video_middle_w4q8kl.mp4'
const HERO_POSTER_SRC =
  'https://res.cloudinary.com/dmp1fo2j4/image/upload/v1779896891/Hero_fallback_image_middle_zix3fb.png'

// The dual-side horizontal mask used on both the video and its placeholder.
const SIDE_MASK =
  'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'

const HERO_FONT_SIZE = 'clamp(1.875rem, 8vw, 5.25rem)'

export function Hero() {
  const titleContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative">
      <div className="relative pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-32">
        {/* --------------- Layer 1+2: video frame, 75% width on lg+, side-masked --------------- */}
        <div className="absolute inset-0 -z-20 h-full lg:w-3/4 xl:w-3/4 2xl:w-3/4 mx-auto overflow-hidden">
          <div
            className="relative w-full h-full"
            style={{
              maskImage: SIDE_MASK,
              WebkitMaskImage: SIDE_MASK,
            }}
          >
            {/* Placeholder shown until the video paints (mirrors proofcore's bg-gray-100 dark:bg-gray-800) */}
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
              className="relative w-full h-full object-cover"
              style={{
                objectPosition: 'center top',
                minHeight: '100vh',
              }}
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
          </div>

          {/* Layer 3: 10% color tint, mix-blend-color */}
          <div
            className="absolute inset-0 mix-blend-color"
            style={{
              background: 'color-mix(in oklab, var(--color-background) 10%, transparent)',
            }}
            aria-hidden
          />
        </div>

        {/* --------------- Layer 4: bottom-up radial vignette --------------- */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 size-full"
          style={{
            background:
              'radial-gradient(175% 175% at 50% 100%, transparent 0%, var(--color-background) 90%)',
          }}
        />
        {/* --------------- Layer 5: top-down radial vignette --------------- */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 size-full"
          style={{
            background:
              'radial-gradient(115% 115% at 50% 0%, transparent 0%, var(--color-background) 90%)',
          }}
        />

        {/* --------------- Layer 5.5: ReactBits DotGrid (hero only) --------- */}
        {/* Sits above the vignettes (-z-10) and below the in-flow content. */}
        <HeroDotGrid />

        {/* --------------- Layer 6: content (title + buttons) --------------- */}
        <div className="mx-auto max-w-6xl px-4 sm:px-4 md:px-12 lg:px-12 xl:px-16 2xl:px-16 text-center">
          {/* Title wrapper — establishes coords + holds the ghost + the live overlay */}
          <div
            ref={titleContainerRef}
            className="relative mt-8"
            style={{ textAlign: 'center', width: '100%' }}
          >
            {/* ---- LAYER A: invisible weight-900 ghost (reserves max-width so the live letters don't shift) ---- */}
            <div
              aria-hidden
              className="invisible pointer-events-none select-none"
              style={{ fontVariationSettings: "'wght' 900" }}
            >
              {HERO.lines.map((line) => (
                <div
                  key={line}
                  className="block w-fit mx-auto leading-tight"
                  style={{ fontSize: HERO_FONT_SIZE }}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* ---- LAYER B: live overlay — VariableProximity per line ---- */}
            <div className="absolute inset-0 z-[1]">
              {HERO.lines.map((line) => (
                <div
                  key={line}
                  className="block w-fit whitespace-nowrap mx-auto leading-tight"
                  style={{ fontSize: HERO_FONT_SIZE }}
                >
                  <VariableProximity
                    label={line}
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    containerRef={titleContainerRef}
                    radius={140}
                    falloff="gaussian"
                    className="font-normal"
                  />
                </div>
              ))}
            </div>
          </div>

          <p
            className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-white/70 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {HERO.subtitle}
          </p>

          <div
            className="mt-10 flex items-center justify-center gap-3 animate-fade-in"
            style={{ animationDelay: '0.55s' }}
          >
            <a href="#cta" className="pill-btn pill-btn-primary">
              {HERO.primaryCta}
            </a>
            <a href="#forums" className="pill-btn pill-btn-ghost">
              {HERO.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
