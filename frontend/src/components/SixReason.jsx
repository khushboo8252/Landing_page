import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { 
      y: { type: "spring", stiffness: 300, damping: 15 },
      boxShadow: { duration: 0.3 }
    }
  }
};

export default function SixReasons() {
  const reasons = [
    {
      icon: "🕒", // Clock emoji for time slots
      title: "Interactive live online classes at your convenient time slots",
    },
    {
      icon: "👩‍🏫", // Teacher emoji
      title: "Learning from passionate, talented and trusted teachers",
    },
    {
      icon: "🌎", // Globe emoji for cross-country
      title: "Cross country sharing of interesting and unique hobbies from across the world",
    },
    {
      icon: "👨‍👩‍👧‍👦", // Family emoji for all ages
      title: "Age no bar for enrolling into your cherished hobby or activity classes",
    },
    {
      icon: "💳", // Credit card emoji for payment
      title: "Transparent and structured fee payment options",
    },
    {
      icon: "🎨", // Art palette emoji for traditional art
      title: "Contributing to the revival and nurturing of traditional art forms",
    },
  ];

  return (
    <div className="w-full px-6 py-12 md:px-16 max-w-6xl mx-auto overflow-hidden">
      {/* Animated Heading */}
      <motion.h2 
        className="text-3xl font-bold text-center text-blue-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Six reasons to choose our class
      </motion.h2>

      {/* Animated Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {reasons.map((item, index) => (
          <motion.div 
            key={index}
            className="p-6 bg-white rounded-xl border border-gray-100"
            variants={item}
            initial="hidden"
            whileHover="hover"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex flex-col items-start"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                whileHover={{ 
                  rotate: 10,
                  scale: 1.1,
                  backgroundColor: '#DBEAFE'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  className="text-3xl"
                  whileHover={{ scale: 1.2 }}
                >
                  {item.icon}
                </motion.span>
              </motion.div>
              <motion.p 
                className="text-gray-700 text-left text-lg font-medium"
                whileHover={{ color: '#1E40AF' }}
              >
                {item.title}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
