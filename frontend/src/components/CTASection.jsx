import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const CTASection = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 px-6 mt-16">
      {/* Orange Background Shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-[#FF7043] rounded-full w-[90%] h-[350px] md:w-[80%] md:h-[280px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Start learning new skills today and pursue your passion
        </h2>
        <p className="text-base md:text-lg mb-6">
          Join the community of global learners and start exploring today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full w-64 sm:w-72 text-gray-800 border-none focus:ring-2 focus:ring-orange-300"
          />
          <button className="bg-white text-[#FF7043] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Started →
          </button>
        </div>
      </div>

      {/* Scroll to Top Arrow */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#FF7043] text-white p-3 rounded-full shadow-lg hover:bg-[#ff5722] transition"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </section>
  );
};

export default CTASection;
