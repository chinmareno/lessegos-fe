"use client";

import Image from "next/image";

const CompanyOverview = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Left side image */}
      <div className="relative w-full aspect-[4/5] md:aspect-[2/3]">
        <Image
          src="/ducklogo.jpeg"
          alt="Our Team"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Right side text */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold mb-4">
          Company Overview
          <div className="w-full h-1 bg-black mb-6 sm:mb-8" />
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 md:mb-6">
          LESSEGOS is a streetwear-inspired clothing label from Indonesia,
          created to bring oversized comfort into everyday style. We started
          with a simple idea: timeless basics, designed for him, her, and
          everyone in between.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 md:mb-6">
          Our small but passionate team works across design, production, and
          community — making sure every piece feels right, lasts long, and
          represents the culture we believe in.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          At LESSEGOS, we’re not just about clothes. We’re about creating a
          space where individuality meets comfort — a pleasure club for those
          who want to look good, feel free, and keep it minimal.
        </p>

        {/* Key values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-10">
          <div className="p-4 lg:p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-base lg:text-xl">Comfort</h3>
            <p className="text-gray-600 text-xs lg:text-sm mt-1 lg:mt-2 leading-snug">
              Oversized cuts built for everyday wear.
            </p>
          </div>
          <div className="p-4 lg:p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-base lg:text-xl">Timeless</h3>
            <p className="text-gray-600 text-xs lg:text-sm mt-1 lg:mt-2 leading-snug">
              Minimalist designs that never go out of style.
            </p>
          </div>
          <div className="p-4 lg:p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-base lg:text-xl">Minimalist</h3>
            <p className="text-gray-600 text-xs lg:text-sm mt-1 lg:mt-2 leading-snug">
              A clean look that speaks without trying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
