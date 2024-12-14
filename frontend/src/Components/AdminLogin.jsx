import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/adminRoutes",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { success, token } = response.data;

      if (success) {
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;

        setShowToast(true);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setErrorMessage("Invalid Credentials!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full sm:w-96 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-xl p-8 space-y-6">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Admin Login Information</h3>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Email:</strong> admin@gmail.com
            </p>
            <p className="text-sm text-gray-600">
              <strong>Password:</strong> 12345
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Admin Login
          </h2>

          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}

          {showToast && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded-md shadow-md z-50">
              Login Successful!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300 ease-in-out"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Forgot your password?{" "}
              <a href="/reset-password" className="text-blue-500 hover:underline">
                Reset here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
