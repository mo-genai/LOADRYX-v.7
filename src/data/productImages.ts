// Real product cover art (from the provided `photo` set), mapped by product id.
// Imported so Vite hashes them and resolves the correct base-path URL.
import apex from '../assets/products/apex.png'
import arcRaiders from '../assets/products/arc-raiders.jpg'
import arma3 from '../assets/products/arma-3.jpg'
import blackOps6 from '../assets/products/black-ops-6.jpg'
import blackOps7 from '../assets/products/black-ops-7.jpg'
import coldWar from '../assets/products/cold-war.jpg'
import dayz from '../assets/products/dayz.jpg'
import fortnite from '../assets/products/fortnite.png'
import mw2019 from '../assets/products/mw-2019.jpg'
import mwII from '../assets/products/mw-ii.jpg'
import mwIII from '../assets/products/mw-iii.jpg'
import overwatch2 from '../assets/products/overwatch-2.jpg'
import pubg from '../assets/products/pubg.png'
import vanguard from '../assets/products/vanguard.png'

export const PRODUCT_IMAGES: Record<string, string> = {
  fortnite,
  pubg,
  apex,
  dayz,
  'overwatch-2': overwatch2,
  'black-ops-6': blackOps6,
  'arma-3': arma3,
  'arc-raiders': arcRaiders,
  'black-ops-7': blackOps7,
  'cold-war': coldWar,
  'mw-iii': mwIII,
  'mw-ii': mwII,
  vanguard,
  'mw-2019': mw2019,
}

export function productImage(id: string): string | undefined {
  return PRODUCT_IMAGES[id]
}
