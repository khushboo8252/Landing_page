import { motion } from "framer-motion";
import heroImg from "../assets/Mask Group.png";

export default function Hero() {
  return (
    <section className="relative bg-white pt-10 pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:pl-16 lg:pl-32 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left text */}
        <motion.div
          className="flex-1 max-w-full md:max-w-[500px] text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
            Hobbies ❤️ Happiness ❤️ Home
          </h2>

          <p className="text-blue-600 text-sm sm:text-base max-w-md mx-auto md:mx-0 mb-6">
            A Nordic startup which brings incredibly interesting hobbies from around the world to people of all ages.
          </p>

          {/* search input */}
          <motion.div
            className="flex flex-col sm:flex-row items-center border border-gray-300 rounded-full overflow-hidden w-full sm:w-[400px] mx-auto md:mx-0 mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <input
              type="text"
              className="flex-1 px-4 py-2 focus:outline-none w-full text-sm sm:text-base"
              placeholder="Enter your email"
            />
            <button className="bg-blue-600 text-white text-xs sm:text-sm font-medium px-6 py-2 rounded-full whitespace-nowrap w-full sm:w-auto mt-2 sm:mt-0">
              START EXPLORING
            </button>
          </motion.div>
        </motion.div>

        {/* Right image with decorative background */}
        <div className="relative flex-1 w-full flex justify-center mt-8 md:mt-0">
          {/* Decorative background elements */}
          <motion.div
            className="absolute -z-10 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Green circle background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gradient-to-br from-green-100 to-green-50"></div>

            {/* Orange accent shape */}
            <motion.div
              className="absolute top-1/3 right-1/3 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-orange-400 rounded-full mix-blend-multiply opacity-70 filter blur-xl"
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Blue accent shape */}
            <motion.div
              className="absolute bottom-1/4 left-1/3 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 bg-blue-400 rounded-full mix-blend-multiply opacity-70 filter blur-xl"
              animate={{
                x: [0, -15, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>
          </motion.div>

          {/* Main image */}
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Orange background circle */}
            <div className="absolute inset-0 bg-orange-200 rounded-full blur-xl opacity-70 -z-10"></div>

            {/* Main image */}
            <motion.img
              src={heroImg}
              alt="family"
              className="relative z-10 rounded-full w-[250px] sm:w-[320px] md:w-[430px] h-[250px] sm:h-[320px] md:h-[430px] object-cover"
              style={{
                boxShadow: "0 0 0 10px rgba(251, 146, 60, 0.3)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.5,
                y: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            />
          </motion.div>

          {/* Floating chat icon */}
          <motion.div
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 md:bottom-10 md:right-10 bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            💬
          </motion.div>
        </div>
      </div>
    </section>
  );
}
