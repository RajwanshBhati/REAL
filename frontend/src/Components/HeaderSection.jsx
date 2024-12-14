import React from "react";
import FooterImage from "../assests/Rectangle.svg";

const HeaderSection = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Learn more about our listing process, as well as our additional staging and design work.
        </h1>
        <button className="mt-4 bg-white text-black py-2 px-6 rounded-md shadow-md hover:bg-gray-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
