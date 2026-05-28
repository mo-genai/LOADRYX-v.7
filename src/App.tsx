import { AmbientCanvas } from './components/AmbientCanvas'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { useRoute } from './lib/useRoute'

const PAGE_BOTTOM_MASK =
  'linear-gradient(to bottom, black 0%, black 92%, rgba(0,0,0,.35) 100%)'

/**
 * The canvas is mounted INSIDE the masked wrapper, as a sibling that comes
 * BEFORE <main> in the DOM. This puts it in the wrapper's stacking context
 * at z-index: auto, which means:
 *   - It paints ABOVE the hero's -z-20 video and -z-10 vignettes
 *   - It paints BELOW the hero's z-auto content
 *
 * A tiny hash router swaps the page inside <main>. Product detail + checkout
 * pages get the same chrome (navbar, ambient background, footer) as the home
 * page, but only the Products flow is new — every other section is untouched.
 */
function App() {
  const route = useRoute()

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
          {route.name === 'home' && <HomePage />}
          {route.name === 'products' && (
            <>
              <ProductsPage />
              <Footer />
            </>
          )}
          {route.name === 'product' && (
            <>
              <ProductDetailPage id={route.id} />
              <Footer />
            </>
          )}
          {route.name === 'checkout' && (
            <>
              <CheckoutPage id={route.id} days={route.days} />
              <Footer />
            </>
          )}
        </main>
      </div>
    </>
  )
}

export default App
