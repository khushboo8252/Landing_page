import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-300">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-lg text-blue-800 mb-4">Class Categories</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Language</li>
            <li>Cooking</li>
            <li>Music</li>
            <li>Arts & Craft</li>
            <li>Yoga</li>
            <li>Academic</li>
            <li>Back To Roots</li>
            <li>Funteresting</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg text-blue-800 mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg text-blue-800 mb-4">Learn</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>All Classes</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-lg text-blue-800 mb-4">Teach</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Become A Teacher</li>
          </ul>
        </div>

        {/* Image Card */}
        <div className="flex flex-col items-center">
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img
              src="https://feelingnifty.com/wp-content/uploads/2025/02/cd-painting-ideas-5-735x493.jpg.webp"
              alt="Products"
              className="w-full h-40 object-cover"
            />
            <div className="py-2 text-center text-sm font-medium text-blue-800 border-t border-gray-200">
              SELL YOUR PRODUCTS WITH US
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>© Project 2021. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <span className="text-red-500">❤️</span> by <span className="font-medium">SimplePlan</span>
        </p>
        <div className="flex gap-4 text-gray-600 mt-3 md:mt-0">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          <FaTwitter className="hover:text-sky-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
