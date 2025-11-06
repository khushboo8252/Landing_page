import React from "react";
import { Check } from "lucide-react";

export default function BecomeTeacher() {
  return (
    <div className="w-full px-6 md:px-16 py-20 flex flex-col md:flex-row items-center gap-16">

      {/* ==== LEFT IMAGE SECTION ==== */}
      <div className="relative w-full md:w-1/2 flex justify-center">

        {/* BACK SHAPE TOP */}
        <div className="absolute -top-6 left-10 w-60 h-40 bg-[#FF6B4A] rounded-full rotate-[-20deg]">
          <div className="absolute inset-0 bg-[url('https://i.postimg.cc/QMxPpF2c/dots.png')] bg-contain bg-center opacity-70"></div>
        </div>

        {/* BACK SHAPE BOTTOM */}
        <div className="absolute bottom-0 left-0 w-72 h-44 bg-[#FF6B4A] rounded-full rotate-[15deg]">
          <div className="absolute inset-0 bg-[url('https://i.postimg.cc/QMxPpF2c/dots.png')] bg-contain bg-center opacity-70"></div>
        </div>

        {/* MAIN IMAGE */}
        <div className="relative w-[420px] h-[380px] bg-white shadow-xl rounded-[40px] overflow-hidden z-10">
          <img
            src="https://images.pexels.com/photos/4100428/pexels-photo-4100428.jpeg"
            alt="Teacher"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ==== RIGHT TEXT SECTION ==== */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6">
          Become a certified teacher
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          We only have the best and trusted teachers from the globe.
          Join us if you have the skill and passion to share it.
        </p>

        {/* Bullet List */}
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-3">
            <Check className="text-orange-500" />
            Make your own schedule
          </li>

          <li className="flex items-center gap-3">
            <Check className="text-orange-500" />
            Teach students on an international platform
          </li>

          <li className="flex items-center gap-3">
            <Check className="text-orange-500" />
            Become part of an international community of educators
          </li>
        </ul>

        {/* Button */}
        <button className="mt-8 px-7 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition flex items-center gap-2">
          START TEACHING →
        </button>
      </div>
    </div>
  );
}
