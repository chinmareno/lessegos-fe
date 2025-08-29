"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductCardProps {
  name: string;
  material: string;
  price: number;
  discountPrice?: number;
  sizes: string[];
  imageUrl: string;
  hoverImageUrl?: string;
  placeholderLogo: string;
  productLink: string;
  wishlist: boolean;
  wishlistClick: (productName: string) => void;
}

export default function ProductCard({
  name,
  material,
  price,
  discountPrice,
  sizes,
  imageUrl,
  placeholderLogo,
  productLink,
  hoverImageUrl,
  wishlist,
  wishlistClick,
}: ProductCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [wishlistState, setWishlistState] = useState(false);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    if (wishlist !== wishlistState) {
      setWishlistState(wishlist);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlist]);

  return (
    <div className="max-w-sm overflow-hidden transition relative">
      <button
        onClick={() => {
          setWishlistState((prev) => !prev);
          wishlistClick(name);
        }}
        className="absolute group cursor-pointer top-1 right-1 z-10"
      >
        <Star
          className={`${
            wishlistState ? "fill-yellow-500" : "group-hover:fill-yellow-500"
          } text-yellow-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7`}
        />
      </button>
      <Link href={productLink} target="_blank" rel="noopener noreferrer">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative bg-gray-100 aspect-[4/5] flex items-center justify-center"
        >
          {!imgLoaded && (
            <Image
              src={placeholderLogo}
              alt="loading..."
              width={200}
              height={250}
              className="object-cover opacity-40"
            />
          )}
          <Image
            src={hovered && hoverImageUrl ? hoverImageUrl : imageUrl}
            alt={name}
            fill
            className={`object-cover transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
        <div className="py-2 pr-2 text-sm">
          <h2 className="font-semibold text-base leading-5 min-h-[2.5rem]">
            {name.split(" ").slice(1).join(" ")}
          </h2>

          <p className="text-gray-500 mb-4">{material}</p>

          {discountPrice ? (
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="line-through w-fit text-gray-400">
                  {formatter.format(price)}
                </p>
              </div>

              <p className="text-red-500 font-bold">
                {formatter.format(discountPrice)}
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="font-bold">{formatter.format(price)}</p>
              <span className="invisible">_</span>
            </div>
          )}
          {sizes.length > 0 && (
            <div className="flex text-xs gap-2 mt-4">
              {sizes.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 border rounded-md text-gray-700"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
