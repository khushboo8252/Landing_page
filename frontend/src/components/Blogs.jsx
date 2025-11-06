import React, { useState } from "react";
import { motion } from "framer-motion";

const initialBlogs = [
  {
    id: 1,
    category: "CATEGORY 01",
    title: "Blog name – Lorem ipsum dolor sit amet, et varius et consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed…",
    publisher: "Publisher name",
    comments: 0,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800",
  },
  {
    id: 2,
    category: "CATEGORY 03",
    title: "Blog name – Lorem ipsum dolor sit amet, et varius et consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed…",
    publisher: "Publisher name",
    comments: 12,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
  },
  {
    id: 3,
    category: "CATEGORY 02",
    title: "Blog name – Lorem ipsum dolor sit amet, et varius et consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed…",
    publisher: "Publisher name",
    comments: 0,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
];

const BlogSection = () => {
  const [blogs, setBlogs] = useState(initialBlogs);

  const handleImageUpload = (e, id) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setBlogs((prev) =>
        prev.map((blog) =>
          blog.id === id ? { ...blog, image: reader.result } : blog
        )
      );
    };
    reader.readAsDataURL(file);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40, rotateX: 10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const imageAnim = {
    hidden: { opacity: 0, scale: 1.1 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-between items-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            Our blogs
          </h2>

          <motion.button
            whileHover={{
              scale: 1.1,
              color: "#1D34CF",
              textDecoration: "underline",
            }}
            whileTap={{ scale: 0.95 }}
            className="text-[#FF4D4D] font-semibold"
          >
            SHOW ALL
          </motion.button>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={card}
              whileHover={{
                y: -8,
                rotateY: 2,
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-4"
            >
              {/* Image with animation */}
              <motion.label
                variants={imageAnim}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer block overflow-hidden rounded-xl"
              >
                <motion.img
                  src={blog.image}
                  alt="Blog"
                  className="w-full h-56 object-cover rounded-xl"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, blog.id)}
                />
              </motion.label>

              {/* Category with pulse effect */}
              <motion.span
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block mt-3 px-3 py-1 bg-red-100 text-red-500 text-xs font-semibold rounded-full"
              >
                {blog.category}
              </motion.span>

              <h3 className="text-lg font-bold mt-3 text-[#1a1a1a] leading-snug">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{blog.desc}</p>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4 border-t pt-3 text-sm text-[#1a1a1a]">
                <p className="font-semibold text-blue-600">{blog.publisher}</p>
                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"
                    />
                  </svg>
                  <span>{blog.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
