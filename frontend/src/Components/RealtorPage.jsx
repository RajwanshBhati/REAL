import React from 'react';

function RealtorPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="header text-center mb-8">
        <h1 className="text-4xl font-bold">Not Your Average Realtor</h1>
        <p className="mt-4 text-lg">
          We utilize our eyes for seeing properties, not just
          current market data. Our effective marketing strategy
          helps you get the most for your dollar on the market.
        </p>
      </div>

      <div className="why-choose-us">
        <h2 className="text-3xl font-semibold mb-4 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature bg-white p-6 rounded shadow-md">
            <div className="icon mb-4 flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center">Potential ROI</h3>
            <p className="text-gray-600 text-sm text-center">
              Whether you are looking to buy or sell, we can help you
              maximize your current position. We will walk you
              through your next real estate decision.
            </p>
          </div>

          <div className="feature bg-white p-6 rounded shadow-md">
            <div className="icon mb-4 flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-edit-3"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 12.5l-1.5-1.5"></path>
                <path d="M12 4l-9 9 9 9h9"></path>
                <path d="M17.5 17.5l1.5-1.5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center">Design</h3>
            <p className="text-gray-600 text-sm text-center">
              Our team specializes in creating visually appealing listings
              that attract potential buyers. We ensure that your property
              stands out in the market.
            </p>
          </div>

          <div className="feature bg-white p-6 rounded shadow-md">
            <div className="icon mb-4 flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M16 11a4 4 0 0 1 4 4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center">Expert Team</h3>
            <p className="text-gray-600 text-sm text-center">
              Our experienced team is dedicated to providing you with
              the best service possible. We are here to guide you
              through every step of the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealtorPage;
