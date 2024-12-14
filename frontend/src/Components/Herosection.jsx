import React, { useState } from "react";
import axios from "axios";
import BackgroundImage from "../assests/BG.svg";

const Herosection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, city } = formData;

    if (!name || !email || !phone || !city) {
      setMessage("All fields are required!");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/register`,  // Updated to use VITE_API_URL
        formData
      );
      if (res && res.status === 201 && res.data.success) {
        setMessage("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", city: "" });
      } else {
        setMessage(res.data.message || "Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(error.response?.data?.message || "An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center px-8 py-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        height: "120vh",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: 1 }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Consultation, <br />
            Design, & Marketing
          </h1>
        </div>

        <div className="w-full md:w-1/3 bg-blue-900 bg-opacity-90 text-white p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Get a Free Consultation</h2>
          {message && <p className="mb-4 text-yellow-300">{message}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-gray-800 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-gray-800 rounded"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-gray-800 rounded"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Your City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-gray-800 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded"
            >
              Get Quick Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
