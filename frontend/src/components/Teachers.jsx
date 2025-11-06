import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Teachers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(4); // Default for larger screens

  // Update number of visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    // Initial call
    updateVisibleCards();

    // Add event listener for window resize
    window.addEventListener('resize', updateVisibleCards);

    // Cleanup
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= teachers.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teachers.length - visibleCards : prevIndex - 1
    );
  };
  const teachers = [
    {
      name: "Karandeep",
      role: "YOGA",
      img: "https://static.vecteezy.com/system/resources/previews/024/753/492/large_2x/a-beautiful-professional-indian-woman-wearing-a-suit-standing-holding-a-laptop-and-smiling-photo.jpg",
      bg: "bg-[#EDEDED]",
      active: false,
    },
    {
      name: "Asier",
      role: "ARTS & CRAFT",
      img: "https://img.freepik.com/free-photo/portrait-corporate-woman-working-with-laptop-smiling-looking-assertive-white-background_1258-88546.jpg?semt=ais_hybrid&w=740&q=80",
      bg: "bg-[#D9CCF3]",
      active: false,
    },
    {
      name: "Marius Neilson",
      role: "ACADEMICS",
      img: "https://media.istockphoto.com/id/1354898601/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=qhlY6BZ9CowHjWb5Fk7WNO8AI8Br6CEzL-bbtHeS8po=",
      bg: "bg-[#EDEDED]",
      active: true, // green border teacher
    },
    {
      name: "Nichola",
      role: "LANGUAGE",
      img: "https://img.freepik.com/free-photo/content-confident-young-man-leaning-railing-modern-office_1262-17338.jpg?semt=ais_hybrid&w=740&q=80",
      bg: "bg-[#EDEDED]",
      active: false,
    },
    {
        name: "Karandeep",
        role: "YOGA",
        img: "https://static.vecteezy.com/system/resources/previews/024/753/492/large_2x/a-beautiful-professional-indian-woman-wearing-a-suit-standing-holding-a-laptop-and-smiling-photo.jpg",
        bg: "bg-[#EDEDED]",
        active: false,
      },
      {
        name: "Nichola",
        role: "LANGUAGE",
        img: "https://img.freepik.com/free-photo/content-confident-young-man-leaning-railing-modern-office_1262-17338.jpg?semt=ais_hybrid&w=740&q=80",
        bg: "bg-[#EDEDED]",
        active: false,
      },
      {
        name: "Asier",
        role: "ARTS & CRAFT",
        img: "https://img.freepik.com/free-photo/portrait-corporate-woman-working-with-laptop-smiling-looking-assertive-white-background_1258-88546.jpg?semt=ais_hybrid&w=740&q=80",
        bg: "bg-[#D9CCF3]",
        active: false,
      },
      
  ];

  return (
    <div className="w-full px-6 md:px-16 py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center">
        Meet our teachers
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md border hover:bg-gray-100 transition z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-blue-700 w-6 h-6" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div 
            ref={containerRef}
            className="flex transition-transform duration-300 ease-in-out gap-6 px-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              width: `${(teachers.length / visibleCards) * 100}%`
            }}
          >
            {teachers.map((t, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[calc(100%/${visibleCards}-1.2)] min-w-[280px] bg-white rounded-xl shadow-md border ${
                  t.active ? "border-green-500" : "border-gray-200"
                }`}
              >
                {/* Background shape + image */}
                <div className={`h-[250px] ${t.bg} flex items-end justify-center rounded-t-xl`}>
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-[200px] h-[240px] object-cover rounded-xl -mb-4"
                  />
                </div>

                {/* Name & Role */}
                <div className="text-center py-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t.name}
                  </h3>
                  <p className="text-sm font-bold text-pink-600 tracking-wide">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md border hover:bg-gray-100 transition z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="text-blue-700 w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
