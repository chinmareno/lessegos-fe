import Image from "next/image";

export const CultureSection = () => (
  <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
    <div className="text-center md:text-left">
      <h2 className="text-3xl sm:text-5xl font-bold mb-4 uppercase">
        Our Culture
      </h2>
      <div className="w-24 h-1 bg-black mb-6" />
      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
        At LESSEGOS, we cultivate a culture of creativity, inclusivity, and
        comfort. Our team thrives in a collaborative environment where ideas are
        valued, individuality is celebrated, and oversized comfort is always at
        the forefront. We believe in work that inspires, clothes that empower,
        and a community that feels like home.
      </p>
    </div>
    <div className="relative w-full h-[400px] md:h-[500px]">
      <Image
        src="/culture.webp"
        alt="Company Culture"
        fill
        className="object-cover rounded-2xl shadow-lg"
      />
    </div>
  </section>
);
