import { motion } from "framer-motion";

export default function ProductList() {
  const features = [
    {
      img: "https://i0.wp.com/blogs.xpheno.com/wp-content/uploads/2025/01/How-to-Learn-New-Skills-1.png?resize=1024%2C605&ssl=1",
      title: "Learn something new",
      desc: "Explore your passion and go beyond physical and mental boundaries of time, age, gender or geography.",
    },
    {
      img: "https://varthana.com/school/wp-content/uploads/2022/12/B103.jpg",
      title: "Skilled & Passionate Teachers",
      desc: "We offer interactive classes by experts who are qualified and trusted.",
    },
    {
      img: "https://pmptraining.com.my/new/wp-content/uploads/2020/05/header-virtual.png",
      title: "Take classes anytime, anywhere",
      desc: "Join sessions at your own convenience and pace, from the comforts of your home.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcqbKyeiDeA5QmDMrCClWFqdgMdvUAqD19w&s",
      title: "Pay as you go",
      desc: "No enrollment fee for our classes. You only pay for the classes you take. Your payment is safe and secure.",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section className="text-center py-16 bg-white overflow-hidden">
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-[#1D34CF] mb-10 leading-snug"
      >
        Explore. Enroll. Have Fun. Repeat – <br />
        here hobby meets happiness
      </motion.h2>

      {/* Animated Feature Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6"
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              rotate: 1,
              transition: { type: "spring", stiffness: 200 },
            }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center text-center bg-white shadow-lg hover:shadow-2xl rounded-xl p-6 transition-all"
          >
            <motion.img
              src={f.img}
              alt={f.title}
              className="w-20 h-20 mb-4 rounded-full object-cover shadow-md"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
            <h3 className="font-bold text-[#1D34CF] mb-2 text-sm md:text-base">
              {f.title}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
