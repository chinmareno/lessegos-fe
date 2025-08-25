import Image from "next/image";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Creative Minds",
      role: "Design & Innovation",
      image: "/team1.jpg",
      bio: "Our visionaries craft bold, minimalist designs that combine comfort with style, shaping the spirit of LESSEGOS.",
    },
    {
      name: "Comfort Crafters",
      role: "Production & Craft",
      image: "/team2.webp",
      bio: "From fabric to final stitch, this team ensures every piece delivers the comfort and style LESSEGOS stands for.",
    },
    {
      name: "Community Builders",
      role: "Culture & Connections",
      image: "/team3.webp",
      bio: "They nurture our inclusive brand, connecting people and ideas to create a space that truly feels like home.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 uppercase">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="relative w-full h-64 mb-4">
              <Image
                src={member.image}
                alt="Team at work"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
            <p className="text-gray-500 text-sm mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
