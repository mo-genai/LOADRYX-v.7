import { BRAND, FOOTER_ABOUT } from '../data/content'
import { ChatBubbleIcon, GlobeIcon } from './icons'

const popularCheats = [
  ['Fortnite', '#/product/fortnite'],
  ['Z1BR', '#/products'],
  ['Apex', '#/product/apex'],
  ['DayZ', '#/product/dayz'],
  ['Arma 3', '#/product/arma-3'],
  ['PUBG', '#/product/pubg'],
]

const moreCheats = [
  ['OW 2', '#/product/overwatch-2'],
  ['BO6/WZ', '#/product/black-ops-6'],
  ['Vanguard', '#/products'],
  ['MW2019', '#/products'],
  ['MW II', '#/product/mw-ii'],
  ['MW III', '#/product/mw-iii'],
]

const quickLinks = [
  ['Status', '#'],
  ['Getting Started', '#'],
  ['FAQs', '#faq'],
  ['Applications', '#'],
  ['Store', '#/products'],
  ['Manage Purchases', '#'],
]

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div className="space-y-4 text-sm">
      <span className="block font-bold">{title}</span>
      {links.map(([label, href]) => (
        <a
          key={label}
          className="text-muted-foreground hover:text-primary block duration-150"
          href={href}
        >
          <span>{label}</span>
        </a>
      ))}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-b bg-white pt-20 dark:bg-transparent">
      <div className="mb-8 border-b md:mb-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-4 pb-6 lg:px-8">
          <a href="#" aria-label="go home" className="block size-fit">
            <img
              alt={BRAND}
              className="h-8 w-auto select-none"
              draggable="false"
              src="https://res.cloudinary.com/dmp1fo2j4/image/upload/v1779955949/LR_logo_vilxah.svg"
            />
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary block"
              href="#"
              aria-label="Forum"
            >
              <GlobeIcon className="size-8" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary block"
              href="#contact"
              aria-label="Discord"
            >
              <ChatBubbleIcon className="size-8" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-0">
          <div className="grid grid-cols-3 gap-4 md:col-span-1 lg:col-span-2 lg:gap-6">
            <FooterColumn title="Popular Cheats" links={popularCheats} />
            <FooterColumn title="More Cheats" links={moreCheats} />
            <FooterColumn title="Quick Links" links={quickLinks} />
          </div>

          <form className="border-b pb-8 text-sm md:col-span-1 md:border-none lg:col-span-2">
            <div className="space-y-4">
              <label className="block font-bold">LOADRYX</label>
              <span className="text-muted-foreground block text-sm/6">
                {FOOTER_ABOUT}
              </span>
              <a
                href="#imprint"
                className="text-muted-foreground hover:text-primary inline-block text-sm duration-150"
              >
                Imprint
              </a>
            </div>
          </form>
        </div>

        <div className="mt-12 gap-6 border-t py-6">
          <small className="text-muted-foreground order-last block text-center text-sm md:order-first">
            Copyright 2017-2026 loadryx.com – All trademarks, screenshots and logos are the property of their respective owners.
          </small>
        </div>
      </div>
    </footer>
  )
}
