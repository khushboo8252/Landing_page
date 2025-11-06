import React from "react";

export default function BrowseByCategory() {
  const categories = [
    { img: "https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2023/03/032723_ec_language-brain-differences_feat.jpg", title: "Language" },
    { img: "https://thumbs.dreamstime.com/b/young-woman-cooking-27697836.jpg", title: "Cooking" },
    { img: "https://www.apple.com/v/apple-music/af/images/overview/music_sessions__blv0h7xsopaq_large.jpg", title: "Music" },
    { img: "https://www.shutterstock.com/image-photo/downward-view-little-girl-making-600nw-2375802669.jpg", title: "Arts & Craft" },
    { img: "https://www.gwinnettobgyn.com/wp-content/uploads/2024/12/the-6-most-popular-yoga-workouts-1576787237.jpg", title: "Yoga" },
    { img: "https://steinmontpublicschool.ac.in/wp-content/uploads/2021/03/AcademicSkillsLogoMainPage_0.png", title: "Academics" },
    { img: "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/09/07063823/image.png", title: "Back to Roots" },
    { img: "https://decoraaj.com/wp-content/uploads/2025/01/61je48d-ShL._SX679_.jpg", title: "Funteresting" }
  ];

  return (
    <div className="w-full px-8 md:px-24 lg:px-32 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center">
        Browse by category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[280px] h-[220px] object-cover rounded-xl shadow-lg"
            />
            <p className="mt-3 text-lg font-semibold text-gray-700 border-b-2 border-blue-400">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
