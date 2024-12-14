import React from "react";
import CardOne from "../assests/Card2.svg";
import CardFive from "../assests/Card5.svg"
import CardTwo from "../assests/Card1.svg"

const Header = () => {
  return (
    <div className="bg-white flex flex-wrap justify-center items-center gap-4 p-4">
      <div className="w-1/3 p-2">
        <img
          src={CardOne}
          alt="Image 1"
          className="rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-10px]"
        />
      </div>
      <div className="w-1/3 p-2">
        <img
          src={CardFive}
          alt="Image 2"
          className="rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-10px]"
        />
      </div>
      <div className="w-1/3 p-2">
        <img
          src={CardTwo}
          alt="Image 3"
          className="rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-10px]"
        />
      </div>
    </div>
  );
};

export default Header;
