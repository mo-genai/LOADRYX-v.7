import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content'

const LR_LOGO_SRC =
  'https://res.cloudinary.com/dmp1fo2j4/image/upload/v1779955949/LR_logo_vilxah.svg'

/**
 * Per teardown §5 (container/animation preserved verbatim):
 *  - Wrapper is fixed, full width, px-2
 *  - Empty `absolute inset-0` pill div takes border / glass / bg / narrower
 *    max-width on scrollY > 12, with a 600ms transition.
 *  - Content row holds the logo, links, CTA — independent of the pill.
 *  - Link hover is just a fast (150ms) color change, no underline or glow.
 *
 * RTL: dir="rtl" puts the logo on the right, links centered, CTA on the left.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <nav dir="rtl" className="font-ar fixed z-50 w-full px-2">
      {/* PILL backdrop — empty, transitions on scroll */}
      <div
        aria-hidden
        className={[
          'absolute inset-0 mx-2 lg:mx-auto mt-2 rounded-2xl transition-600',
          scrolled
            ? 'max-w-4xl border border-white/10 bg-[color-mix(in_oklab,var(--color-background)_75%,transparent)] backdrop-blur-xl'
            : 'max-w-full border border-transparent bg-transparent backdrop-blur-0',
        ].join(' ')}
      />

      {/* CONTENT row */}
      <div
        className={[
          'relative mx-2 lg:mx-auto mt-2 px-5 lg:px-4 transition-600',
          scrolled ? 'lg:max-w-4xl' : 'lg:max-w-full max-w-full',
        ].join(' ')}
      >
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
          <a href="#" aria-label="LOADRYX" className="flex items-center text-white">
            <img
              src={LR_LOGO_SRC}
              alt="LOADRYX"
              className="h-8 w-auto select-none"
              draggable={false}
            />
          </a>

          {/* desktop nav links — flat, fast color hover */}
          <div className="absolute inset-0 m-auto hidden size-fit lg:block">
            <ul className="flex gap-8 text-sm list-none m-0 p-0">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="block text-white/60 hover:text-white duration-150"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex lg:gap-3 relative z-20">
            <a href="#contact" className="pill-btn pill-btn-primary text-sm">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
