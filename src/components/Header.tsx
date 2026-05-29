import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content'

const LR_LOGO_SRC =
  'https://res.cloudinary.com/dmp1fo2j4/image/upload/v1779955949/LR_logo_vilxah.svg'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 50)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
    const here = document.getElementById('contact')
    if (here) {
      here.scrollIntoView({ behavior: 'instant', block: 'start' })
      return
    }

    window.location.hash = '#/'
    let tries = 0
    let lastTop = -1
    let stable = 0

    const tick = () => {
      const el = document.getElementById('contact')
      if (el) {
        const top = Math.round(el.getBoundingClientRect().top + window.scrollY)
        if (top > 0 && top === lastTop) {
          if (++stable >= 2) {
            el.scrollIntoView({ behavior: 'instant', block: 'start' })
            return
          }
        } else {
          stable = 0
          lastTop = top
        }
      }
      if (tries++ > 80) {
        el?.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
      window.setTimeout(tick, 50)
    }

    window.setTimeout(tick, 50)
  }

  return (
    <nav dir="rtl" className="font-ar fixed z-50 w-full px-2">
      <div
        aria-hidden
        className={[
          'absolute inset-0 mx-2 lg:mx-auto mt-2 transition-all ease-in-out duration-600 rounded-2xl',
          scrolled ? 'bg-background/50 max-w-6xl border backdrop-blur-lg' : 'max-w-full',
        ].join(' ')}
      />

      <div
        className={[
          'relative mx-2 lg:mx-auto mt-2 px-5 transition-all ease-in-out duration-600 lg:px-4',
          scrolled ? 'max-w-6xl' : 'max-w-full',
        ].join(' ')}
      >
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
          <div className="flex w-full justify-between lg:w-auto">
            <a href="#" aria-label="LOADRYX" className="flex items-center space-x-2">
              <img
                src={LR_LOGO_SRC}
                alt="LOADRYX"
                className="h-8 w-auto select-none"
                draggable={false}
              />
            </a>

            <button
              type="button"
              aria-label="القائمة"
              aria-expanded={menuOpen}
              data-state={menuOpen ? 'active' : 'inactive'}
              onClick={() => setMenuOpen((o) => !o)}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="absolute inset-0 m-auto hidden size-fit lg:block">
            <ul className="flex gap-8 text-sm list-none m-0 p-0">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                  >
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex lg:gap-3 relative z-20">
            <a
              href="#contact"
              onClick={goToContact}
              className="inline-flex h-8 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-[#e9e8eb] px-3 text-sm font-medium text-[#08060d] shadow-xs transition-all hover:bg-white"
            >
              <span>تواصل معنا</span>
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full w-full px-2 lg:hidden">
          <div className="lg:mx-auto mt-2 max-w-full px-5 bg-background rounded-2xl border py-6">
            <ul className="space-y-6 text-base mb-6 list-none m-0 p-0">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                  >
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col space-y-3">
              <a
                href="#contact"
                onClick={goToContact}
                className="inline-flex h-8 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-[#e9e8eb] px-3 text-sm font-medium text-[#08060d] shadow-xs transition-all hover:bg-white"
              >
                <span>تواصل معنا</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
