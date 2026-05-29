import ProductCard from "./ProductCard";

const products = [
  { name: "Fortnite", price: "1,426 ريال", href: "/products/fortnite-cheat" },
  { name: "PUBG", price: "1,426 ريال", href: "/products/pubg-cheat" },
  { name: "Apex Legends", price: "1,426 ريال", href: "/products/apex-cheat" },
  { name: "DayZ", price: "1,426 ريال", href: "/products/dayz-cheat" },
  { name: "Overwatch 2", price: "1,426 ريال", href: "/products/overwatch-2-cheat" },
  { name: "Black Ops 6", price: "1,426 ريال", href: "/products/warzone-cheat" },
  { name: "Arma 3", price: "1,426 ريال", href: "/products/arma-3-cheat" },
  { name: "Arc Raiders", price: "1,426 ريال", href: "/products/arc-raiders-cheat" },
  { name: "Black Ops 7", price: "1,426 ريال", href: "/products/bo7-cheat" },
  { name: "Cold War", price: "1,426 ريال", href: "/products/cold-war-cheat" },
  { name: "MW III Cheat", price: "1,426 ريال", href: "/products/mw-iii-cheat" },
  { name: "MW II Cheat", price: "1,426 ريال", href: "/products/mw-ii-cheat" },
];

export default function ProductsSection() {
  return (
    <section dir="rtl" className="w-full py-16">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.href}
              name={product.name}
              price={product.price}
              href={product.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
