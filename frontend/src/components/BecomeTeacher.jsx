import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function BecomeTeacher() {
  return (
    <section className="w-full px-6 md:px-16 py-20 flex flex-col md:flex-row items-center gap-16 overflow-hidden">

      {/* ==== LEFT IMAGE SECTION ==== */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* BACK SHAPE TOP */}
        <motion.div
          className="absolute -top-6 left-10 w-60 h-40 bg-[#FF6B4A] rounded-full rotate-[-20deg]"
          animate={{
            y: [0, -10, 0],
            rotate: [-20, -18, -20],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-[url('https://i.postimg.cc/QMxPpF2c/dots.png')] bg-contain bg-center opacity-70"></div>
        </motion.div>

        {/* BACK SHAPE BOTTOM */}
        <motion.div
          className="absolute bottom-0 left-0 w-72 h-44 bg-[#FF6B4A] rounded-full rotate-[15deg]"
          animate={{
            y: [0, 15, 0],
            rotate: [15, 18, 15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-[url('https://i.postimg.cc/QMxPpF2c/dots.png')] bg-contain bg-center opacity-70"></div>
        </motion.div>

        {/* MAIN IMAGE */}
        <motion.div
          className="relative w-[320px] sm:w-[380px] md:w-[420px] h-[300px] sm:h-[350px] md:h-[380px] bg-white shadow-xl rounded-[40px] overflow-hidden z-10"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.img
            src="https://images.pexels.com/photos/4100428/pexels-photo-4100428.jpeg"
            alt="Teacher"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.div>

      {/* ==== RIGHT TEXT SECTION ==== */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6">
          Become a certified teacher
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          We only have the best and trusted teachers from the globe.
          Join us if you have the skill and passion to share it.
        </p>

        {/* Bullet List */}
        <ul className="space-y-3 text-gray-700">
          {[
            "Make your own schedule",
            "Teach students on an international platform",
            "Become part of an international community of educators",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <Check className="text-orange-500" />
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Button */}
        <motion.button
          className="mt-8 px-7 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          START TEACHING →
        </motion.button>
      </motion.div>
    </section>
  );
}
