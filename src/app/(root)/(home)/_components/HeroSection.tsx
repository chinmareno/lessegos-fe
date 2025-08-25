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
      image: "/hero2.jpg",
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
              {/* Responsive aspect ratio: taller on desktop, shorter on mobile */}
              <div className="relative w-full aspect-[9/12] sm:aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-12">
                  {/* Responsive text */}
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-xl drop-shadow-md">
                    {slide.text}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition cursor-pointer" />
        <CarouselNext className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition cursor-pointer" />
      </Carousel>
    </section>
  );
};

export default Hero;
