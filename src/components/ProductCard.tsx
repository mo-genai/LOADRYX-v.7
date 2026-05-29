import type { CSSProperties } from "react";

type Product = {
  name: string;
  price: string;
  href: string;
};

const products: Product[] = [
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

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px",
  direction: "rtl",
};

const cardStyle: CSSProperties = {
  minHeight: "400px",
  width: "100%",
  overflow: "hidden",
  borderRadius: "12px",
  border: "1px solid transparent",
  background: "#111827",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textDecoration: "none",
  transition: "all 0.5s ease",
};

const innerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  alignItems: "center",
  justifyContent: "center",
  padding: "32px",
};

const titleStyle: CSSProperties = {
  margin: 0,
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: 1.3,
};

const priceStyle: CSSProperties = {
  color: "rgba(255, 255, 255, 0.68)",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: 1.4,
};

export default function ProductCards() {
  return (
    <div style={gridStyle}>
      {products.map((product) => (
        <a key={product.name} href={product.href} style={cardStyle}>
          <div style={innerStyle}>
            <h3 style={titleStyle}>{product.name}</h3>
            <div style={priceStyle}>{product.price}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
