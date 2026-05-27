import { BRAND, FOOTER_ABOUT, FOOTER_COLUMNS } from '../data/content'
import { ChatBubbleIcon, GlobeIcon, NimbusMark } from './icons'

export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <NimbusMark size={36} />
            <span className="sr-only">{BRAND}</span>
          </a>
          <div className="flex items-center gap-3 text-white/70">
            <a
              href="#"
              aria-label="Forum"
              className="grid size-9 place-items-center rounded-full border border-white/10 hover:text-white hover:border-white/20"
            >
              <GlobeIcon className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Chat"
              className="grid size-9 place-items-center rounded-full border border-white/10 hover:text-white hover:border-white/20"
            >
              <ChatBubbleIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold">{col.heading}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/55 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-sm font-semibold">{BRAND}</h4>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {FOOTER_ABOUT}
            </p>
            <a
              href="#imprint"
              className="mt-3 inline-block text-sm text-white/55 hover:text-white"
            >
              Imprint
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/45">
          Copyright 2017–2026 {BRAND.toLowerCase()}.example — Placeholder learning clone. All marks
          are illustrative.
        </div>
      </div>
    </footer>
  )
}
