import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    "Language",
    "Cooking",
    "Music",
    "Arts & Craft",
    "Yoga",
    "Academic",
    "Back To Roots",
    "Funteresting",
  ];

  const subcategories = ["All", "Indian", "Norwegian", "Category 04"];

  return (
    <nav className="relative bg-white shadow-sm font-sans">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-900">Logo</h1>

          {/* Categories Dropdown (hidden on mobile) */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setIsCategoriesOpen(true)}
            onMouseLeave={() => setIsCategoriesOpen(false)}
          >
            <button className="flex items-center text-blue-900 font-semibold text-lg focus:outline-none">
              CATEGORIES
              <FiChevronDown className="ml-1" />
            </button>

            {/* Dropdown */}
            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-4 w-[95vw] md:w-[1100px] bg-[#f4f7ff] shadow-lg rounded-md p-8 flex flex-col md:flex-row justify-between z-50">
                {/* Category list */}
                <div className="grid grid-cols-2 gap-x-16 mb-6 md:mb-0">
                  {/* Left column */}
                  <div>
                    {categories.map((cat, index) => (
                      <p
                        key={index}
                        className="text-blue-900 font-medium mb-2 hover:text-orange-600 cursor-pointer"
                      >
                        {cat}
                      </p>
                    ))}
                  </div>

                  {/* Right column (subcategories) */}
                  <div>
                    {subcategories.map((sub, index) => (
                      <p
                        key={index}
                        className={`text-blue-900 mb-2 cursor-pointer ${
                          index === 1
                            ? "text-orange-500 font-semibold"
                            : "hover:text-orange-600"
                        }`}
                      >
                        {sub}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Quote Bubble */}
                <div className="relative bg-[#f66557] text-white rounded-full w-full md:w-80 h-60 flex flex-col justify-center items-center px-8 text-center mx-auto md:mx-0">
                  <p className="text-2xl font-semibold leading-snug">
                    “Do anything, but let it produce joy.”
                  </p>
                  <p className="text-sm mt-4">- Walt Whitman</p>
                  {/* yellow accent shape */}
                  <div className="absolute -top-2 -left-3 w-24 h-24 bg-yellow-400 rounded-full -z-10"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side (hidden on small) */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-blue-900 text-lg font-medium hover:text-orange-600"
          >
            TEACH
          </a>

          <a
            href="#"
            className="border border-blue-900 text-blue-900 px-4 py-1 rounded-full text-lg font-medium hover:bg-blue-900 hover:text-white transition"
          >
            LOGIN
          </a>

          <a
            href="#"
            className="bg-blue-900 text-white px-5 py-1 rounded-full text-lg font-medium hover:bg-blue-800 transition"
          >
            SIGNUP
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-blue-900 text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f4f7ff] px-6 py-4 space-y-4 text-center">
          <div>
            <button
              className="flex justify-center items-center mx-auto text-blue-900 font-semibold text-lg"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              CATEGORIES
              <FiChevronDown
                className={`ml-1 transition-transform ${
                  isCategoriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isCategoriesOpen && (
              <div className="mt-4">
                {categories.map((cat, i) => (
                  <p
                    key={i}
                    className="text-blue-900 font-medium mb-2 hover:text-orange-600 cursor-pointer"
                  >
                    {cat}
                  </p>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="block text-blue-900 text-lg font-medium hover:text-orange-600"
          >
            TEACH
          </a>
          <a
            href="#"
            className="block border border-blue-900 text-blue-900 px-4 py-2 rounded-full text-lg font-medium hover:bg-blue-900 hover:text-white transition mx-auto w-fit"
          >
            LOGIN
          </a>
          <a
            href="#"
            className="block bg-blue-900 text-white px-5 py-2 rounded-full text-lg font-medium hover:bg-blue-800 transition mx-auto w-fit"
          >
            SIGNUP
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
