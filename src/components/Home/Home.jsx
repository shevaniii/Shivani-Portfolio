import React from "react";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/*home page */}
    <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl">
      {/* left side profile pic  */}
    <div className="relative animate-fade-in">
      <div className="w-52 h-52 rounded-full overflow-hidden shadow-xl shadow-purple-500/50 border-4 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 p-1">
        <img
      src="Shivani-pic.jpeg"
      alt="Profile Pic"
      className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>

        {/* Right Side - Introduction */}
        <div className="text-center md:text-left animate-slide-in">
          <h1 className="text-4xl font-bold">Welcome to My World</h1>
          <p className="mt-4 text-lg">Hey.. I am <span className="text-blue-400 font-semibold">Shivani Giri</span></p>
          <p className="text-gray-300">A 3rd-year Computer Science Engineering student</p>
          <h5 className="text-sm text-gray-500">2022 - 2026</h5>
          <h2 className="mt-3 text-xl font-semibold text-purple-400">
            Enthusiastic Full Stack Developer & Graphic Designer
          </h2>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition">
          <Link to="/Projects">See My Projects </Link>
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md transition">
          See My Creative Visuals
        </button>
      </div>
    </div>
  );
};

export default Home;
