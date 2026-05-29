export type Product = {
  name: string;
  price: string;
  href: string;
};

type ProductCardProps =
  | Product
  | {
      product: Product;
    };

export function ProductCard(props: ProductCardProps) {
  const product = "product" in props ? props.product : props;

  return (
    <a href={product.href} className="block no-underline">
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 hover:border-primary/50 duration-500 cursor-pointer border border-transparent">
        <div className="absolute inset-0 z-0">
          <div
            className="relative w-full h-full transition-transform duration-500 group-hover:scale-[1.05] transform-gpu"
            style={{
              clipPath: "inset(0 round 0.75rem)",
              minHeight: "400px",
            }}
          />

          <div
            className="absolute -inset-2 bg-gradient-to-b from-gray-900/40 to-gray-900 z-10"
            style={{
              clipPath: "inset(0 round 0.75rem)",
            }}
          />
        </div>

        <div className="relative z-20 p-5 flex flex-col h-full min-h-[400px]">
          <div className="mt-auto">
            <h3 className="text-2xl font-bold text-white mb-2">
              {product.name}
            </h3>

            <div
              className="mb-3"
              style={{
                direction: "rtl",
                textAlign: "right",
                fontSize: "24px",
                fontWeight: 800,
                color: "rgb(255,255,255)",
                textShadow: "rgba(0,0,0,0.75) 0px 2px 14px",
              }}
            >
              <p
                className="text-xl font-bold text-white"
                style={{
                  direction: "rtl",
                  textAlign: "right",
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "rgb(255,255,255)",
                  textShadow: "rgba(0,0,0,0.75) 0px 2px 14px",
                }}
              >
                {product.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
