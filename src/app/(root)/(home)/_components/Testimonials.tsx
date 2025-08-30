"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Andi, Jakarta",
      text: "Kaosnya nyaman banget dipakai seharian, cutting oversized-nya pas dan bahan adem!",
    },
    {
      name: "Siti, Bandung",
      text: "Suka banget sama desain minimalisnya, gampang dipadukan sama outfit lain.",
    },
    {
      name: "Rizky, Surabaya",
      text: "Kualitas mantap dengan harga terjangkau. Bakal repeat order lagi 👍",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          What Our Customers Say
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <span className="font-semibold text-gray-900">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
