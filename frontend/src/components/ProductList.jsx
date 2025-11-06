import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiChevronDown, FiStar, FiHeart, FiShoppingCart } from 'react-icons/fi';

export default function ProductList() {
    const features = [
      {
        img: "https://i0.wp.com/blogs.xpheno.com/wp-content/uploads/2025/01/How-to-Learn-New-Skills-1.png?resize=1024%2C605&ssl=1", // replace with your actual image path
        title: "Learn something new",
        desc: "Explore your passion and go beyond physical and mental boundaries of time, age, gender or geography.",
      },
      {
        img: "https://varthana.com/school/wp-content/uploads/2022/12/B103.jpg",
        title: "Skilled & Passionate Teachers",
        desc: "We offers interactive classes by experts who are qualified and trusted.",
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
  
    return (
      <section className="text-center py-16 bg-white">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1D34CF] mb-10 leading-snug">
          Explore. Enroll. Have Fun. Repeat – <br />
          here hobby meets happiness
        </h2>
  
        {/* Feature Grid */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img src={f.img} alt="" className="w-16 h-16 mb-4" />
              <h3 className="font-bold text-[#1D34CF] mb-2 text-sm md:text-base">
                {f.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  