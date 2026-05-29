type ProductCardProps = {
  name: string;
  price: string;
  href: string;
};

export default function ProductCard({ name, price, href }: ProductCardProps) {
  return (
    <a
      href={href}
      className="
        group
        relative
        flex
        min-h-[400px]
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-transparent
        bg-gray-900
        text-center
        no-underline
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-white/35
      "
    >
      <div className="flex flex-col items-center justify-center gap-3 p-8">
        <h3 className="m-0 text-2xl font-bold leading-tight text-white">
          {name}
        </h3>

        <div className="text-xl font-semibold leading-relaxed text-white/70">
          {price}
        </div>
      </div>
    </a>
  );
}
