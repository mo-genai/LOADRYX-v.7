import { BenefitsSection } from '../components/BenefitsSection'
import { CtaSection } from '../components/CtaSection'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { ProductsSection } from '../components/ProductsSection'
import { TrustedSection } from '../components/TrustedSection'
import { WhySection } from '../components/WhySection'

export function HomePage() {
  return (
    <>
      <Hero />
      <WhySection />
      <ProductsSection />
      <TrustedSection />
      <BenefitsSection />
      <HowItWorks />
      <CtaSection />
      <Footer />
    </>
  )
}
