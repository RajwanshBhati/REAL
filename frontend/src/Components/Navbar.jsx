import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assests/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollAndClose = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-white via-gray-100 to-white shadow-lg">
      <div className="flex items-center">
        <img src={LogoImage} alt="Logo" className="w-30 h-10 mr-3" />
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-lg font-bold text-gray-700 cursor-pointer hover:text-blue-600 transition duration-300"
            >
              HOME
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleScrollAndClose('why-choose-us')}
              className="text-lg font-bold text-gray-700 cursor-pointer hover:text-blue-600 transition duration-300"
            >
              SERVICES
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollAndClose('about-products-section')}
              className="text-lg font-bold text-gray-700 cursor-pointer hover:text-blue-600 transition duration-300"
            >
              ABOUT PROJECTS
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const testimonialsSection = document.getElementById('testimonials');
                testimonialsSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-lg font-bold text-gray-700 cursor-pointer hover:text-blue-600 transition duration-300"
            >
              TESTIMONIALS
            </button>
          </li>
          <li>
            <button className="px-5 py-2 bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition duration-300 shadow-md">
              CONTACT
            </button>
          </li>
          <li>
            <Link
              to="/admin-login"
              className="px-5 py-3 bg-gray-800 text-white text-lg font-bold hover:bg-gray-900 transition duration-300 shadow-md rounded-md"
            >
              Admin Login
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-lg p-6 space-y-6 z-50">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-700">Menu</h3>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-lg font-bold text-gray-700 cursor-pointer hover:text-blue-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleScrollAndClose('why-choose-us')}
                className="text-lg font-bold text-gray-700 cursor-pointer hover:text-blue-600 transition duration-300"
              >
                SERVICES
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollAndClose('about-products-section')}
                className="text-lg font-bold text-gray-700 cursor-pointer hover:text-blue-600 transition duration-300"
              >
                ABOUT PROJECTS
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const testimonialsSection = document.getElementById('testimonials');
                  testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-lg font-bold text-gray-700 cursor-pointer hover:text-blue-600 transition duration-300"
              >
                TESTIMONIALS
              </button>
            </li>
            <li>
              <button
                className="px-5 py-2 bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition duration-300 shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </button>
            </li>
            <li>
              <Link
                to="/admin-login"
                className="px-5 py-3 bg-green-600 text-white text-lg font-bold hover:bg-green-700 transition duration-300 shadow-md rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
