import React from 'react';
import { FiSearch, FiGlobe, FiChevronDown, FiUser, FiShoppingCart, FiHeart, FiMenu } from 'react-icons/fi';

export default function HomePage() {
  const categories = [
    { icon: '📚', title: 'Academics' },
    { icon: '🎨', title: 'Arts & Crafts' },
    { icon: '👨‍🍳', title: 'Cooking' },
    { icon: '💃', title: 'Dance' },
    { icon: '🎭', title: 'Drama' },
    { icon: '📱', title: 'Digital' },
    { icon: '🎨', title: 'Design' },
    { icon: '🎵', title: 'Music' },
  ];

  const benefits = [
    { icon: '🕒', title: 'Interactive live online classes at your convenient time slots' },
    { icon: '👩‍🏫', title: 'Learning from passionate, talented and trusted teachers' },
    { icon: '🌎', title: 'Cross country sharing of interesting and unique hobbies' },
    { icon: '👨‍👩‍👧‍👦', title: 'Age no bar for enrolling into your cherished hobby or activity classes' },
    { icon: '💳', title: 'Transparent and structured fee payment options' },
    { icon: '🎨', title: 'Contributing to the revival and nurturing of traditional art forms' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">LOGO</div>
              <nav className="hidden md:flex space-x-8 ml-10">
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">Categories</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center text-gray-500">
                <FiGlobe className="mr-1" />
                <span>EN</span>
                <FiChevronDown className="ml-1" />
              </div>
              <button className="p-2 text-gray-500 hover:text-blue-600">
                <FiUser className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-blue-600 relative">
                <FiHeart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </button>
              <button className="p-2 text-gray-500 hover:text-blue-600 relative">
                <FiShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </button>
              <button className="md:hidden p-2 text-gray-500 hover:text-blue-600">
                <FiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Discover Your Passion
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Learn from the best teachers and explore your interests with our online classes.
              </p>
              <div className="mt-8 max-w-lg mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    className="block w-full px-4 py-3 rounded-lg border-0 shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Search for classes, teachers, or categories..."
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg">
                    <FiSearch className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 text-xl mr-4">
                    {benefit.icon}
                  </div>
                  <p className="text-gray-700">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">FB</a>
                <a href="#" className="text-gray-300 hover:text-white">TW</a>
                <a href="#" className="text-gray-300 hover:text-white">IG</a>
                <a href="#" className="text-gray-300 hover:text-white">YT</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
