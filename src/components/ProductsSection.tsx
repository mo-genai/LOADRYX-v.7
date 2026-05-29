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
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent relative z-0">
      <div
        className="@container mx-auto max-w-6xl px-4 lg:px-8"
        style={{
          direction: "rtl",
          textAlign: "center",
          lineHeight: 1.9,
          color: "rgba(255,255,255,0.62)",
        }}
      >
        <div
          className="text-center"
          style={{
            direction: "rtl",
            textAlign: "center",
            lineHeight: 1.9,
            color: "rgba(255,255,255,0.62)",
          }}
        >
          <h2
            className="text-balance text-4xl font-semibold lg:text-5xl"
            style={{
              direction: "rtl",
              textAlign: "center",
            }}
          >
            الباقات المتوفرة
          </h2>

          <p
            data-proof-desc
            style={{
              direction: "rtl",
              textAlign: "center",
              color: "rgba(255,255,255,0.62)",
              fontSize: "18px",
              lineHeight: 1.9,
              margin: "14px auto 72px",
              maxWidth: "900px",
            }}
          >
            اختر الباقة المناسبة لك، وابدأ بخطوات واضحة مع تجربة استخدام مستقرة ودعم مباشر بعد الشراء.
          </p>

          <p className="mt-4 text-muted-foreground" style={{ display: "none" }} />
        </div>

        <div className="relative w-full mx-auto mt-8 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center">
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
      </div>
    </section>
  );
}
