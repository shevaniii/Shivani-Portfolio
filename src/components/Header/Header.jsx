import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow bg-gray-900">
      <nav className="p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.vectorstock.com/i/500p/04/03/letter-sg-luxury-premium-brand-logo-vector-45070403.jpg"
              className="w-12 h-12"
              alt="logo"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center w-full lg:w-auto relative lg:relative top-2 left-0 bg-gray-900 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none w-full`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 text-white">
              {[
                { path: "/", label: "Home" },
                { path: "/About", label: "About" },
                { path: "/Contact", label: "Contact" },
                { path: "/Projects", label: "Projects" },
                { path: "/Graphics", label: "Graphics" }
              ].map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 px-4 border-b lg:border-none ${
                        isActive ? "text-orange-300" : "text-white"
                      } hover:text-orange-400`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex space-x-4">
            <Link className="text-white px-4 py-2 rounded hover:bg-gray-700" to="#">
              Login
            </Link>
            <Link
              className="text-white bg-orange-500 px-4 py-2 rounded hover:bg-orange-400"
              to="#"
            >
              Sign-up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
