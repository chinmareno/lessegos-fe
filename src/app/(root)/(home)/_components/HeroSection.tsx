"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const slides = [
    {
      image: "/hero1.jpg",
      title: "For Him",
      text: "Oversized tees built for comfort & bold style.",
    },
    {
      image: "/get3.jpg",
      title: "For Her",
      text: "Effortless oversized fashion – chic, simple, stylish.",
    },
    {
      image: "/hero3.jpg",
      title: "Unisex Collection",
      text: "Designed for everyone. Minimalist, oversized, timeless.",
    },
  ];

  return (
    <section className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="relative w-full">
              <div className="relative w-screen min-h-[calc(100vh-134px)] max-h-[calc(100vh-134px)]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                  <h1 className="text-3xl sm:text-6xl font-bold mb-4 drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-xl drop-shadow">
                    {slide.text}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition cursor-pointer" />
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition cursor-pointer" />
      </Carousel>
    </section>
  );
};

export default Hero;
