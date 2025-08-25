import Image from "next/image";

export const CompanyHistorySection = () => (
  <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
    <div className="relative w-full h-[400px] md:h-[500px]">
      <Image
        src="/story.webp"
        alt="Company History"
        fill
        className="object-cover rounded-2xl shadow-lg"
      />
    </div>
    <div className="text-center md:text-left">
      <h2 className="text-3xl sm:text-5xl font-bold mb-4 uppercase">
        Our Story
      </h2>
      <div className="w-24 h-1 bg-black mb-6" />
      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
        LESSEGOS was founded in Indonesia with a simple mission: to bring
        oversized comfort into everyday style. From humble beginnings, our label
        has grown to offer timeless streetwear basics designed for anyone,
        anywhere. Along the way, we’ve celebrated milestones like launching our
        unisex collection and collaborating with local creatives.
      </p>
    </div>
  </section>
);
