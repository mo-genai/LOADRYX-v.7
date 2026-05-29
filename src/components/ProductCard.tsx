// components/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  href: string;
};

export default function ProductCard({
  name,
  price,
  image,
  href,
}: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d14] shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-[230px] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-[#0b0d14]/45 to-transparent" />
      </div>

      <div className="relative z-10 px-6 pb-6 pt-4" dir="rtl">
        <h3 className="text-right text-2xl font-bold tracking-tight text-white">
          {name}
        </h3>

        <div className="mt-3 text-right text-2xl font-extrabold text-white">
          {price}
        </div>

        <Link
          href={href}
          className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-white text-sm font-bold text-black transition duration-300 hover:bg-white/85"
        >
          اطلب الآن
        </Link>
      </div>
    </div>
  );
}
