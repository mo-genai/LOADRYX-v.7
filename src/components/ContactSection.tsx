import { CONTACT } from '../data/content'
import { PhoneIcon, WhatsAppIcon } from './icons'
import type { ContactChannel } from '../types/content'

const ICONS: Record<ContactChannel['kind'], React.FC<React.SVGProps<SVGSVGElement>>> = {
  whatsapp: WhatsAppIcon,
  call: PhoneIcon,
}

export function ContactSection() {
  return (
    <section
      id="contact"
      dir="rtl"
      className="font-ar py-16 md:py-32 dark:bg-transparent"
    >
      <div className="mx-auto max-w-3xl px-6">
        <header className="text-center">
          <h2 className="font-ar-display text-balance text-4xl font-semibold lg:text-5xl">
            {CONTACT.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            {CONTACT.subtitle}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CONTACT.channels.map((c) => {
            const Icon = ICONS[c.kind]
            return (
              <a
                key={c.kind}
                href={c.href}
                target={c.kind === 'whatsapp' ? '_blank' : undefined}
                rel={c.kind === 'whatsapp' ? 'noreferrer' : undefined}
                className="card p-8 text-center"
              >
                <div className="relative mx-auto mb-5 grid h-20 w-20 place-items-center">
                  <div className="absolute inset-0 rounded-md bg-grid-tile opacity-50" aria-hidden />
                  <Icon className="relative z-10 size-8 text-white" />
                </div>
                <h3 className="font-ar-display text-lg font-semibold">{c.label}</h3>
                <p className="mt-2 text-sm text-white/70" dir="ltr">
                  {c.value}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
