"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const products = [
  {
    title: "Oversized Tees",
    description:
      "Premium cotton oversized t-shirts designed for comfort and effortless style.",
    image: "/product1.webp",
    cta: "View Products",
  },
  {
    title: "Best Sale Products",
    description:
      "Our top-selling items loved by customers, featuring minimalist prints and streetwear-inspired cuts.",
    image: "/product2.webp",
    badge: "Best Seller",
    cta: "View Products",
  },
  {
    title: "Unisex Collection",
    description:
      "Gender-neutral pieces that fit every body, made for everyday wear.",
    image: "/product3.webp",
    cta: "View Products",
  },
];

export default function ProductsHighlight() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Our Products</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Card
              key={i}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl h-full"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <CardContent className="flex-1 flex flex-col items-center justify-center text-center px-6 py-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-500 mb-4">{product.description}</p>
              </CardContent>

              {/* CTA */}
              <CardFooter className="flex justify-center px-6 pb-6">
                <Link
                  href="/products"
                  className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 hover:-translate-y-0.5 transition-transform duration-200 w-full sm:w-auto text-center"
                >
                  {product.cta}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
