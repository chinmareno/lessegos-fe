"use client";

import Image from "next/image";

const CompanyOverview = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Left side image */}
      <div className="relative w-full h-[400px] md:h-[700px]">
        <Image
          src="/ducklogo.jpeg"
          alt="Our Team"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Right side text */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl uppercase sm:text-5xl font-bold mb-4">
          Company Overview
          <div className="w-full h-1 bg-black mb-8" />
        </h2>

        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          LESSEGOS is a streetwear-inspired clothing label from Indonesia,
          created to bring oversized comfort into everyday style. We started
          with a simple idea: timeless basics, designed for him, her, and
          everyone in between.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Our small but passionate team works across design, production, and
          community — making sure every piece feels right, lasts long, and
          represents the culture we believe in.
        </p>
        <p className="text-lg sm:text-xl text-gray-700">
          At LESSEGOS, we’re not just about clothes. We’re about creating a
          space where individuality meets comfort — a pleasure club for those
          who want to look good, feel free, and keep it minimal.
        </p>

        {/* Key values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl">Comfort</h3>
            <p className="text-gray-600 text-sm mt-2">
              Oversized cuts built for everyday wear.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl">Timeless</h3>
            <p className="text-gray-600 text-sm mt-2">
              Minimalist designs that never go out of style.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl">Minimalist</h3>
            <p className="text-gray-600 text-sm mt-2">
              A clean look that speaks without trying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
