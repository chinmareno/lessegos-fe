"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Oversized Tees",
    description:
      "Premium cotton oversized t-shirts designed for comfort and effortless style.",
    image: "/products/oversized-tee.jpg",
    link: "/products",
    cta: "Shop Now",
  },
  {
    title: "Limited Editions",
    description:
      "Exclusive drops with minimalist prints and streetwear-inspired cuts.",
    image: "/products/limited.jpg",
    link: "/products",
    cta: "Explore",
  },
  {
    title: "Unisex Collection",
    description:
      "Gender-neutral pieces that fit every body, made for everyday wear.",
    image: "/products/unisex.jpg",
    link: "/products",
    cta: "View All",
  },
];

export default function ProductsHighlight() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Our Products</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  href={product.link}
                  className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                >
                  {product.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
