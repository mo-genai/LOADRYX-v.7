import { ContactSection } from '../components/ContactSection'
import { FaqSection } from '../components/FaqSection'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { ProductsSection } from '../components/ProductsSection'
import { WhySection } from '../components/WhySection'

export function HomePage() {
  return (
    <>
      <Hero />
      <WhySection />
      <ProductsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  )
}
