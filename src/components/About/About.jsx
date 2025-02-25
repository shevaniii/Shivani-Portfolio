import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 text-purple-500 tracking-wide drop-shadow-lg">
        About Me
      </h1>

      {/* Introduction Section */}
      <div className="max-w-3xl text-center bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md">
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          Hey! I'm{" "}
          <span className="font-semibold text-purple-400 text-xl">Shivani Giri</span>,  
          a passionate <span className="text-blue-400 font-medium">MERN Stack Developer</span>  
          and a dedicated <span className="text-blue-400 font-medium">DSA Learner</span>.  
          I'm currently pursuing my **B.Tech in Computer Science** from **ABES Engineering College**.
        </p>

        <p className="text-gray-400">
          I hail from **Ghaziabad** and have completed my **10th & 12th from Ram Kishan Institute, Ghaziabad**  
          with an aggregate of <span className="text-purple-400">80%</span> and <span className="text-purple-400">90%</span> respectively.
        </p>
      </div>

      {/* Interests & Skills */}
      <h4 className="text-2xl font-semibold mt-8 text-purple-500 drop-shadow-md">
        My Tech Stack & Interests 🚀
      </h4>
      <p className="text-gray-300 text-center max-w-2xl">
        I specialize in **Full-Stack Development (MERN)** and love solving  
        problems with **Data Structures & Algorithms**.  
        Apart from coding, I'm deeply passionate about **graphic design & creative visuals**. 🎨
      </p>

      {/* Social Media Links */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold text-blue-400 mb-2">Let's Connect 🌐</h4>
        <ul className="flex gap-6">
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-all duration-300"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-all duration-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition-all duration-300"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      {/* Call to Action Button */}
<button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
  <Link to="/contact">Connect With Me</Link>
</button>

    </div>
  );
};

export default About;
