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
 * A tiny hash router swaps the page inside <main>. The hero keeps its own
 * HeroDotGrid; everything below the hero (home sections + product/checkout
 * pages) stays a clean, calm black — no ambient dot field.
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
              <CheckoutPage id={route.id} />
              <Footer />
            </>
          )}
        </main>
      </div>
    </>
  )
}

export default App
