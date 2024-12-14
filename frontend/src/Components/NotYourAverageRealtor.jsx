import React from "react";

const NotYourAverageRealtor = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        <div className="md:w-1/2 text-center flex flex-col items-center mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
            Not Your Average Realtor
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Real results are key for selling properties. Advanced staging designs and
            effective marketing help get maximum value quickly and efficiently.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex justify-center">
              <img
                src="./assets/S.svg"
                alt="Happy clients"
                className="rounded-lg w-60 h-60 object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="./assets/T.svg"
                alt="Man holding a blueprint"
                className="rounded-lg w-60 h-60 object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="./assets/R.svg"
                alt="Realtor holding a model house"
                className="rounded-lg w-60 h-60 object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotYourAverageRealtor;
