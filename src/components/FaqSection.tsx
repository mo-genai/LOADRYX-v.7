import { useState } from 'react'
import { FAQ } from '../data/content'
import { ChevronDownIcon } from './icons'

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      dir="rtl"
      className="font-ar py-16 md:py-32 dark:bg-transparent"
    >
      <div className="mx-auto max-w-3xl px-6">
        <header className="text-center">
          <h2 className="font-ar-display text-balance text-4xl font-semibold lg:text-5xl">
            الأسئلة الشائعة
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            إجابات سريعة عن أكثر ما يهمك قبل الطلب وأثناء الاستخدام.
          </p>
        </header>

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
                >
                  <span className="font-ar-display text-base font-semibold text-white">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={[
                      'size-5 shrink-0 text-white/50 transition-transform duration-300',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-white/65">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
