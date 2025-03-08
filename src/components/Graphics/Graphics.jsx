import React, { useState } from "react";

const Graphics = () => {
  const images = [
    "D1.png", "D2.jpeg", "D3.jpg", "D4.png", "D5.png",
    "D6.png", "D7.png", "D8.png", "D9.jpeg"
  ];

  // State for tracking selected image
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        My Creative Visuals 🎨
      </h1>

      {/* Graphics Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6 max-w-6xl">
        {images.map((src, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Graphic ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative max-w-[90%] max-h-[90%]">
            <img
              src={selectedImage}
              alt="Full Preview"
              className="max-h-screen object-contain rounded-lg"
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphics;
