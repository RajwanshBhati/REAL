import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimonal = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/review/get-review`);
      setReviews(data.reviews); 
      setLoading(false);
    } catch (err) {
      setError("Error fetching reviews");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div id="testimonials" className="bg-gray-50 py-16 px-6">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
        What Our Clients Say
      </h2>

      <div className="mt-10 overflow-x-auto">
        {loading ? (
          <p className="text-center text-blue-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="flex space-x-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center w-64 h-[300px] flex-none"
              >
                <div className="flex justify-center mb-4">
                  {review.photo ? (
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>

                <p className="text-gray-500 text-sm mb-4">{review.description}</p>
                <h3 className="text-blue-600 font-semibold text-lg">{review.name}</h3>
                <p className="text-gray-400 text-sm">{review.destination}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonal;
