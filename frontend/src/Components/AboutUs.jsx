import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center bg-white p-8">
      <div className="text-center max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-gray-600 text-lg mb-6">
          Fifteen years of experience in real estate, excellent customer service,
          and a commitment to work hard, listen, and follow through. We provide
          quality services to build relationships with clients and, more
          importantly, maintain those relationships by communicating effectively.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
