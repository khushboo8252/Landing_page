import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Teachers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // Adjust visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const teachers = [
    {
      name: "Karandeep",
      role: "YOGA",
      img: "https://static.vecteezy.com/system/resources/previews/024/753/492/large_2x/a-beautiful-professional-indian-woman-wearing-a-suit-standing-holding-a-laptop-and-smiling-photo.jpg",
      bg: "bg-[#EDEDED]",
    },
    {
      name: "Asier",
      role: "ARTS & CRAFT",
      img: "https://img.freepik.com/free-photo/portrait-corporate-woman-working-with-laptop-smiling-looking-assertive-white-background_1258-88546.jpg?semt=ais_hybrid&w=740&q=80",
      bg: "bg-[#D9CCF3]",
    },
    {
      name: "Marius Neilson",
      role: "ACADEMICS",
      img: "https://media.istockphoto.com/id/1354898601/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=qhlY6BZ9CowHjWb5Fk7WNO8AI8Br6CEzL-bbtHeS8po=",
      bg: "bg-[#EDEDED]",
      active: true,
    },
    {
      name: "Nichola",
      role: "LANGUAGE",
      img: "https://img.freepik.com/free-photo/content-confident-young-man-leaning-railing-modern-office_1262-17338.jpg?semt=ais_hybrid&w=740&q=80",
      bg: "bg-[#EDEDED]",
    },
    {
      name: "Karandeep",
      role: "YOGA",
      img: "https://static.vecteezy.com/system/resources/previews/024/753/492/large_2x/a-beautiful-professional-indian-woman-wearing-a-suit-standing-holding-a-laptop-and-smiling-photo.jpg",
      bg: "bg-[#EDEDED]",
    },
    {
      name: "Asier",
      role: "ARTS & CRAFT",
      img: "https://img.freepik.com/free-photo/portrait-corporate-woman-working-with-laptop-smiling-looking-assertive-white-background_1258-88546.jpg?semt=ais_hybrid&w=740&q=80",
      bg: "bg-[#D9CCF3]",
    },
    {
      name: "Nichola",
      role: "LANGUAGE",
      img: "https://img.freepik.com/free-photo/content-confident-young-man-leaning-railing-modern-office_1262-17338.jpg?semt=ais_hybrid&w=740&q=80",
      bg: "bg-[#EDEDED]",
    },
  ];

  // Calculate groups of teachers to display
  const totalGroups = Math.ceil(teachers.length / visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  // Animation for slides
  const slideVariants = {
    enter: { x: 100, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  // Animation for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { y: -10, transition: { duration: 0.2 } },
  };

  const startIndex = currentIndex * visibleCards;
  const currentCards = teachers.slice(startIndex, startIndex + visibleCards);

  return (
    <div className="w-full px-6 md:px-16 py-20 max-w-7xl mx-auto overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet our teachers
      </motion.h2>

      <div className="relative">
        {/* Prev Button */}
        <motion.button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md border hover:bg-blue-100 transition-all z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="text-blue-700 w-6 h-6" />
        </motion.button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex gap-6 justify-center"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {currentCards.map((t, i) => (
                <motion.div
                  key={i}
                  className={`w-full sm:w-[45%] lg:w-[23%] bg-white rounded-xl shadow-md overflow-hidden ${
                    t.active ? "border-2 border-green-500" : "border border-gray-200"
                  }`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  {/* Top Image Section */}
                  <motion.div
                    className={`h-[250px] ${t.bg} flex items-end justify-center rounded-t-xl overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={t.img}
                      alt={t.name}
                      className="w-[200px] h-[240px] object-cover rounded-xl -mb-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    />
                  </motion.div>

                  {/* Info */}
                  <div className="text-center py-6">
                    <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                    <p className="text-sm font-bold text-pink-600 tracking-wide">
                      {t.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <motion.button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md border hover:bg-blue-100 transition-all z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="text-blue-700 w-6 h-6" />
        </motion.button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-700" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
