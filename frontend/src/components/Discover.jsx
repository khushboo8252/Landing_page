import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, Star } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const tabVariants = {
  active: {
    backgroundColor: "#ffffff",
    color: "#1D4ED8",
    scale: 1.05,
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 },
  },
  inactive: {
    backgroundColor: "transparent",
    color: "#4B5563",
    scale: 1,
    boxShadow: "none",
    transition: { duration: 0.3 },
  },
};

const DiscoverClasses = () => {
  const [activeTab, setActiveTab] = useState("NOK");
  const tabs = ["NOK", "INR"];

  const cards = [...Array(4)].map((_, i) => ({
    id: i,
    title: "LANGUAGE",
    className: "Class name - Lorem ipsum sit elit variat lectus sit amet",
    teacher: "John Doe",
    rating: 4.7,
    price: activeTab === "INR" ? "₹1,499" : "kr 1,299",
    cutPrice: activeTab === "INR" ? "₹2,499" : "kr 2,499",
    discount: "60% OFF",
    img: "https://cdn.vectorstock.com/i/1000v/02/57/kids-learning-math-in-classroom-vector-39080257.jpg",
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row md:items-center justify-between mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Discover classes
          </h2>
          <p className="text-gray-600">
            Choose from a variety of classes from around the world.
          </p>
        </div>

        {/* Animated Currency Tabs */}
        <motion.div
          className="flex items-center mt-4 md:mt-0"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-gray-600 mr-3">Show prices in:</p>
          <div className="flex bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 text-sm font-medium rounded-md"
                variants={tabVariants}
                animate={activeTab === tab ? "active" : "inactive"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.97 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 15px 30px -10px rgba(0,0,0,0.2)",
              }}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-3 relative group transition-all duration-300"
            >
              {/* Card Image */}
              <motion.div
                className="relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.03 }}
              >
                <motion.img
                  src={card.img}
                  className="w-full h-40 object-cover rounded-lg"
                  alt="class"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {card.discount}
                </span>

                <motion.button
                  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Bookmark className="w-4 h-4 text-gray-700" />
                </motion.button>
              </motion.div>

              {/* Content */}
              <p className="text-xs text-blue-600 font-bold mt-2">
                {card.title}
              </p>
              <p className="text-sm font-semibold text-gray-800 leading-tight">
                {card.className}
              </p>

              <div className="flex items-center text-xs text-gray-500 mt-1">
                by {card.teacher}
                <span className="flex items-center ml-2 text-yellow-400">
                  <Star className="w-3 h-3 fill-current mr-1" />
                  {card.rating}
                </span>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, varius consectetur varius.
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-3">
                <motion.div
                  key={activeTab} // currency change fade animation
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm font-bold text-blue-600 flex items-center gap-2"
                >
                  <span>{card.price}</span>
                  <span className="line-through text-gray-400 text-xs">
                    {card.cutPrice}
                  </span>
                </motion.div>

                <motion.button
                  className="relative bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-lg overflow-hidden"
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0 6px 15px rgba(29,78,216,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    animate={{
                      backgroundPositionX: ["0%", "100%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 opacity-20"
                  ></motion.span>
                  <span className="relative z-10">Enroll now</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default DiscoverClasses;
