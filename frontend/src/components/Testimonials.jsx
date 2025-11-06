import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Karandeep",
      img: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
      message:
        "It is nice to be on an international platform where there are teachers from around the world.",
      active: false,
    },
    {
      name: "Kalpana",
      img: "https://www.shutterstock.com/image-photo/portrait-attractive-young-professional-indian-260nw-1280916883.jpg",
      message:
        "The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.",
      active: true, // middle highlighted card
    },
    {
      name: "Kirti",
      img: "https://media.istockphoto.com/id/2208637349/photo/smiling-latin-hispanic-female-marketing-manager-professional-it-specialist-working-browsing.jpg?s=612x612&w=0&k=20&c=tbfdAk5rs5CZ9NSCXvsDJaGCxoP95BYfNc0xXdJanHQ=",
      message:
        "As a student, I get to explore and learn about the different cultural specialties of another country with native teachers.",
      active: false,
    },
  ];

  return (
    <div className="w-full px-6 md:px-16 py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-14 text-center">
        Love from community
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl shadow-md border transition-all
              ${
                item.active
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-gray-700 border-gray-200"
              }
            `}
          >
            {/* Quote Icon */}
            <div className="text-4xl font-bold mb-4">
              {item.active ? (
                <span className="text-white">“</span>
              ) : (
                <span className="text-gray-300">“</span>
              )}
            </div>

            {/* Profile Image */}
            <div className="flex flex-col items-center gap-3 mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <h3 className={`text-lg font-semibold ${item.active ? "text-white" : "text-gray-800"}`}>
                {item.name}
              </h3>
            </div>

            {/* Message */}
            <p
              className={`text-center leading-relaxed ${
                item.active ? "text-white" : "text-gray-600"
              }`}
            >
              {item.message}
            </p>

            {/* Bottom blue underline for active card */}
            {item.active && (
              <div className="w-10 h-[3px] bg-white mt-4 mx-auto rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
