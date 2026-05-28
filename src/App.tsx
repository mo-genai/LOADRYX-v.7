import { AmbientCanvas } from './components/AmbientCanvas'
import { BenefitsSection } from './components/BenefitsSection'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { ProductsSection } from './components/ProductsSection'
import { TrustedSection } from './components/TrustedSection'
import { WhySection } from './components/WhySection'

const PAGE_BOTTOM_MASK =
  'linear-gradient(to bottom, black 0%, black 92%, rgba(0,0,0,.35) 100%)'

/**
 * The canvas is mounted INSIDE the masked wrapper, as a sibling that comes
 * BEFORE <main> in the DOM. This puts it in the wrapper's stacking context
 * at z-index: auto, which means:
 *
 *   - It paints ABOVE the hero's -z-20 video and -z-10 vignettes
 *     (so dots are visible over the dark vignette corners)
 *   - It paints BELOW the hero's z-auto content (so the title sits on top)
 *   - The wrapper's bottom mask still applies to it — dots fade smoothly
 *     into the page background as you approach the footer
 *
 * AmbientCanvas itself is `position: fixed` so memory stays viewport-sized
 * regardless of page length. CSS mask-image does NOT create a containing
 * block for fixed descendants, so the canvas stays anchored to the viewport.
 */
function App() {
  return (
    <>
      <Header />
      <div
        className="relative w-full"
        style={{
          maskImage: PAGE_BOTTOM_MASK,
          WebkitMaskImage: PAGE_BOTTOM_MASK,
        }}
      >
        <AmbientCanvas />
        <main className="overflow-hidden w-full">
          <Hero />
          <WhySection />
          <ProductsSection />
          <TrustedSection />
          <BenefitsSection />
          <HowItWorks />
          <CtaSection />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
