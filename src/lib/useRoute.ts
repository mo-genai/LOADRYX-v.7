import { useEffect, useState } from 'react'

export type Route =
  | { name: 'home' }
  | { name: 'products' }
  | { name: 'product'; id: string }
  | { name: 'checkout'; id: string; days?: number }

/**
 * Minimal dependency-free hash router.
 *
 * Routes use a `#/` prefix so they never collide with the existing in-page
 * anchors (`#products`, `#cta`, …) the navbar relies on — a bare `#products`
 * is treated as "home" and the browser still scrolls to that section.
 *
 *   #/product/<id>           → product detail
 *   #/checkout/<id>          → checkout
 *   #/checkout/<id>/<days>   → checkout with a preselected plan
 *   anything else            → home
 *
 * Hash routing also means GitHub Pages serves the same index.html on refresh,
 * so deep links keep working under the /LOADRYX-v.7/ base path.
 */
function parse(hash: string): Route {
  const h = hash.replace(/^#/, '')
  if (!h.startsWith('/')) return { name: 'home' }
  const parts = h.split('/').filter(Boolean) // ["product","fortnite"]
  if (parts[0] === 'products') {
    return { name: 'products' }
  }
  if (parts[0] === 'product' && parts[1]) {
    return { name: 'product', id: decodeURIComponent(parts[1]) }
  }
  if (parts[0] === 'checkout' && parts[1]) {
    const days = parts[2] ? parseInt(parts[2], 10) : undefined
    return { name: 'checkout', id: decodeURIComponent(parts[1]), days }
  }
  return { name: 'home' }
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    parse(typeof window !== 'undefined' ? window.location.hash : ''),
  )

  useEffect(() => {
    const onHash = () => setRoute(parse(window.location.hash))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Scroll to top whenever we land on a detail/checkout page.
  useEffect(() => {
    if (route.name !== 'home') window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route.name, route.name === 'home' ? '' : (route as { id: string }).id])

  return route
}

/** Programmatic navigation helper. */
export function navigate(to: string) {
  window.location.hash = to
}
