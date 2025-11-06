import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const CTASection = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 px-6 mt-16 overflow-hidden">
      {/* ===== Floating Orange Background Shape ===== */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-[#FF7043] rounded-full w-[90%] h-[350px] md:w-[80%] md:h-[280px]"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>

      {/* ===== Content Section ===== */}
      <motion.div
        className="relative z-10 text-white max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Start learning new skills today and pursue your passion
        </motion.h2>

        <motion.p
          className="text-base md:text-lg mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join the community of global learners and start exploring today.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full w-64 sm:w-72 text-gray-800 border-none focus:ring-2 focus:ring-orange-300"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#FF7043] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get Started →
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ===== Scroll to Top Arrow (Animated) ===== */}
      <AnimatePresence>
        {showArrow && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#FF7043] text-white p-3 rounded-full shadow-lg hover:bg-[#ff5722]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.6, ease: "backOut" },
            }}
            exit={{
              opacity: 0,
              y: 50,
              transition: { duration: 0.4 },
            }}
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 15px rgba(255, 112, 67, 0.7)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;
