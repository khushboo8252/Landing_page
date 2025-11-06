import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, Star } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const tabVariants = {
  active: {
    backgroundColor: '#ffffff',
    color: '#1D4ED8',
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  inactive: {
    backgroundColor: 'transparent',
    color: '#4B5563',
    scale: 1,
    transition: { duration: 0.2 }
  }
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
    img: "https://cdn.vectorstock.com/i/1000v/02/57/kids-learning-math-in-classroom-vector-39080257.jpg"
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Discover classes</h2>
          <p className="text-gray-600">
            Choose from a variety of classes from around the world.
          </p>
        </div>
        
        {/* Currency Tabs */}
        <motion.div 
          className="flex items-center mt-4 md:mt-0"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
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
                animate={activeTab === tab ? 'active' : 'inactive'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={item}
              className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 p-3 relative group"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
            <div className="relative">
              <img
                src={card.img}
                className="w-full h-40 object-cover rounded-lg"
                alt="class"
              />
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {card.discount}
              </span>
              <motion.button 
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Bookmark className="w-4 h-4 text-gray-700" />
              </motion.button>
            </div>

            <p className="text-xs text-blue-600 font-bold mt-2">{card.title}</p>
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

            <div className="flex items-center justify-between mt-3">
              <div className="text-sm font-bold text-blue-600 flex items-center gap-2">
                <span>{card.price}</span>
                <span className="line-through text-gray-400 text-xs">
                  {card.cutPrice}
                </span>
              </div>
              <motion.button 
                className="bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-lg"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#1D4ED8',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Enroll now
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
