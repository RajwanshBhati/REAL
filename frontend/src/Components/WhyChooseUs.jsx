import React from "react";

const WhyChooseUs = () => {
  return (
    <div section id="why-choose-us" className="mt-16 text-center pb-24"> {/* Increased padding-bottom */}
      {/* Heading */}
      <h3 className="text-2xl font-bold text-blue-600">Why Choose Us?</h3>
      <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div> {/* Underline */}

      {/* Features */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Potential ROI */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="../assets/home.svg"
              alt="Potential ROI"
              className="w-16 h-16 sm:w-12 sm:h-12"
            />
          </div>
          <h4 className="text-lg font-bold mt-4">Potential ROI</h4>
          <p className="text-gray-500 mt-2 px-4 sm:px-0">
            Whether you're looking to buy or invest, we maximize your potential returns
            and value. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores exercitationem iste aliquam suscipit veritatis, error obcaecati saepe maiores earum!
          </p>
        </div>

        {/* Design */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="../assets/paintbrush-2.svg"
              alt="Design"
              className="w-16 h-16 sm:w-12 sm:h-12"
            />
          </div>
          <h4 className="text-lg font-bold mt-4">Design</h4>
          <p className="text-gray-500 mt-2 px-4 sm:px-0">
            Our designs bring vision to life and create a compelling presentation for homes. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum consequuntur a nemo illo explicabo labore tempore ab facere beatae incidunt!
          </p>
        </div>

        {/* Marketing */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="../assets/circle-dollar-sign.svg"
              alt="Marketing"
              className="w-16 h-16 sm:w-12 sm:h-12"
            />
          </div>
          <h4 className="text-lg font-bold mt-4">Marketing</h4>
          <p className="text-gray-500 mt-2 px-4 sm:px-0">
            We use modern digital marketing tools to attract potential buyers effectively. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis eaque fugit in doloremque ducimus alias iste eius, consequatur iusto!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
