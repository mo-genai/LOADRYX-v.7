/* eslint-disable @next/next/no-img-element */

import { priceSAR } from '../data/content'
import type { ProductCard as Product } from '../types/content'

type ProductCardProps = {
  product: Product
}

const ASSETS: Record<
  string,
  {
    title: string
    href: string
    image: string
    logo: string
  }
> = {
  fortnite: {
    title: 'Fortnite Cheat',
    href: '/products/fortnite-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/54a7a9f953ff163adf407c2bc0bf196ca015f0fd-1066x600.png?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/398eab0c45b06f810689b09a4a33d5ff9b7e7a1c-302x82.png?w=224&auto=format&q=75&fit=max',
  },
  pubg: {
    title: 'PUBG Cheat',
    href: '/products/pubg-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/433f7c5d87d6986bce1caea6adfa4b1ea524b048-3168x1344.png?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/7c9fd529f385037d00939fd4c8761a322ac4206a-731x464.png?w=224&auto=format&q=75&fit=max',
  },
  apex: {
    title: 'Apex Cheat',
    href: '/products/apex-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/aec581e33e5b663e58ff4d4273a113a191f1ed4d-2560x1441.png?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/d5c9c62088a88442290fd75ab69fe4410e99cac2-1752x656.png?w=224&auto=format&q=75&fit=max',
  },
  dayz: {
    title: 'DayZ Cheat',
    href: '/products/dayz-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/5fa4827c0a3c780527637d991719c2d97cacaad1-2160x1215.jpg?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/71a3dccb4fc954bce9b0570b83845d4d80eb817f-179x82.png?w=224&auto=format&q=75&fit=max',
  },
  'overwatch-2': {
    title: 'Overwatch 2 Cheat',
    href: '/products/overwatch-2-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/100ac7e1d9bb247d7d72f9cd44912c44f97f42c7-1900x1080.jpg?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/02869107e7c76ad068d95aad9f88db4f45f02f46-250x155.webp?w=224&auto=format&q=75&fit=max',
  },
  'black-ops-6': {
    title: 'Black Ops 6 Cheat',
    href: '/products/warzone-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/db6d0eb7649d60f423b751bbbe9374fe23466542-3840x2160.jpg?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/e4b559933c3bc4683013c0dbf1d425affee75cd0-267x83.png?w=224&auto=format&q=75&fit=max',
  },
  'arma-3': {
    title: 'Arma 3 Cheat',
    href: '/products/arma-3-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/83ad1a561a011bf158d6a893c37abad024ebaf33-1920x1080.jpg?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/521c2eeb5dd72448ffb29e7df60d4ddc2fc1481b-183x82.png?w=224&auto=format&q=75&fit=max',
  },
  'arc-raiders': {
    title: 'Arc Raiders Cheat',
    href: '/products/arc-raiders-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/6592d4bd659b6a68c5d993714d161add71f8fb57-3840x2160.heif?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/6021f5d0ee228993de8c12b06c71d760a6f3998e-512x160.png?w=224&auto=format&q=75&fit=max',
  },
  'black-ops-7': {
    title: 'Black Ops 7 Cheat',
    href: '/products/bo7-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/41381293e03f9bbce2d30a05e67b162728772dab-3840x2160.webp?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/c682eef77dfd062da0d12277902d81c4ddd508d9-512x134.png?w=224&auto=format&q=75&fit=max',
  },
  'cold-war': {
    title: 'Cold War Cheat',
    href: '/products/cold-war-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/f408c1432b358232cd5104291de979e141d1be6c-1920x1080.jpg?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/81518335a5e5a619160708b9da6635650f234b86-704x308.png?w=224&auto=format&q=75&fit=max',
  },
  'mw-iii': {
    title: 'MW III Cheat',
    href: '/products/mw-iii-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/1e0d4d296458a8e80ba70ee7b0ef3036b64a5221-3840x2160.jpg?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/c260d06f9c964a685ef40f322eb0a900fd317206-512x227.png?w=224&auto=format&q=75&fit=max',
  },
  'mw-ii': {
    title: 'MW II Cheat',
    href: '/products/mw-ii-cheat',
    image:
      'https://cdn.sanity.io/images/kzldmhbc/production/a08730c5d20f10ea28fcc2ed6ed685cd7bc17f1b-3840x2160.jpg?w=1200&auto=format&q=75&fit=max',
    logo:
      'https://cdn.sanity.io/images/kzldmhbc/production/8d70df6ceb2455e1fdb9d0082a66478f692e13bc-2476x1234.png?w=224&auto=format&q=75&fit=max',
  },
}

export function ProductCard({ product }: ProductCardProps) {
  const asset = ASSETS[product.id]
  const title = asset?.title ?? `${product.gameName} Cheat`
  const href = `#/product/${product.id}`
  const image = asset?.image
  const logo = asset?.logo
  const price = `${priceSAR(product.priceFrom).toLocaleString('en-US')} ر.س`

  const statusLabel = product.status === 'beta' ? 'Testing' : 'Undetected'
  const statusColor = product.status === 'beta' ? 'bg-red-500' : 'bg-green-500'

  return (
    <a href={href} dir="ltr">
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 hover:border-primary/50 duration-500 cursor-pointer border border-transparent">
        <div className="absolute inset-0 z-0">
          <div
            className="relative w-full h-full transition-transform duration-500 group-hover:scale-[1.05] transform-gpu"
            style={{
              clipPath: 'inset(0 round 0.75rem)',
              minHeight: '400px',
              background: image ? undefined : product.gradient,
            }}
          >
            {image && (
              <img
                src={image}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                alt={title}
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>

          <div
            className="absolute -inset-2 bg-gradient-to-b from-gray-900/40 to-gray-900 z-10"
            style={{ clipPath: 'inset(0 round 0.75rem)' }}
          />
        </div>

        <div className="relative z-20 p-5 flex flex-col h-full min-h-[400px] text-left">
          <div className="relative h-10 w-28">
            {logo ? (
              <img
                src={logo}
                sizes="112px"
                alt={`${title} logo`}
                className="object-contain w-full h-full"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="text-white text-2xl font-black tracking-wide">
                {product.monogram}
              </div>
            )}
          </div>

          <div className="mt-auto">
            <h3 className="text-2xl font-bold text-white mb-2 text-left">
              {title}
            </h3>

            <div className="mb-3 text-left">
              <p className="text-xl font-bold text-white" dir="rtl">
                {price}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-4 relative">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <div className={`mt-0.5 w-2 h-2 rounded-full ${statusColor} mr-2`} />
                  <span className="text-sm text-gray-300">{statusLabel}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative inline-block" role="presentation">
                  <div className="flex items-center cursor-help">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-blue-400 mr-1"
                    >
                      <path d="M12 3 4 7v6c0 5 3.4 8.7 8 9.9 4.6-1.2 8-4.9 8-9.9V7z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="text-sm text-gray-300">Verification</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none h-9 px-4 py-2 w-full pointer-events-none"
              style={{
                backgroundColor: '#f4f4f5',
                color: '#18181b',
              }}
            >
              شراء الآن
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProductCard
