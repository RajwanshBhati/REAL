import React, { useState } from "react";
import axios from "axios";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:8080/api/v1/subscribers/uplordSubscribe", { subscriber: email });
      setSuccessMessage("Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Failed to subscribe. Please try again.");
    }
  };

  return (
    <nav className="bg-blue-600 text-white h-auto flex flex-col items-center p-4 md:p-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center w-full">
        <div className="flex flex-col sm:flex-row sm:space-x-6 text-lg sm:flex-1 justify-start mb-4 sm:mb-0">
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Projects</li>
            <li className="hover:underline cursor-pointer">Testimonials</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="hidden sm:flex items-center space-x-4 mb-4 sm:mb-0">
          <form
            onSubmit={handleSubscribe}
            className="flex items-center space-x-4 bg-white text-blue-600 px-6 py-3 rounded-md"
          >
            <div className="text-sm font-semibold">Subscribe to Us</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="px-4 py-3 rounded-md text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="sm:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
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
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden bg-blue-700 p-6 rounded-lg shadow-lg mt-4 w-full">
          <ul className="space-y-4 text-lg">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Projects</li>
            <li className="hover:underline cursor-pointer">Testimonials</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>

          <form
            onSubmit={handleSubscribe}
            className="mt-6 flex flex-col items-center bg-white text-blue-600 px-6 py-3 rounded-md"
          >
            <div className="text-sm font-semibold text-white mb-2">Subscribe to Us</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="px-4 py-3 rounded-md text-black w-full focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 mt-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      )}

      <div className="absolute top-28 w-full text-center">
        {successMessage && <p className="text-green-400">{successMessage}</p>}
        {errorMessage && <p className="text-red-400">{errorMessage}</p>}
      </div>
    </nav>
  );
};

export default Nav;
