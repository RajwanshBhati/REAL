import React, { useState } from "react";
import axios from "axios";
import ClientMag from "./ClientMag";
import ClientDetail from "./ClientDetail";
import Subscribe from "./Subscribe";
import { FaBars, FaTimes } from 'react-icons/fa';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("ProductManagement");
  const [formData, setFormData] = useState({
    name: "",
    projectName: "",
    location: "",
    photo: null,
  });

  const [productImagePreview, setProductImagePreview] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
    if (file) {
      setProductImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/project/create-project`, // Updated to use REACT_APP_API
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setShowToast(true);
      setFormData({ name: "", projectName: "", location: "", photo: null });
      setProductImagePreview(null);

      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error.response?.data?.error || error.message);
      alert(error.response?.data?.error || "An error occurred.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white px-6 py-4 shadow-md flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-6 w-full justify-between md:w-auto">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <button
              onClick={() => setSelectedTab("ProductManagement")}
              className={`hover:text-gray-300 ${selectedTab === "ProductManagement" ? "underline" : ""}`}
            >
              Project Management
            </button>

            <button
              onClick={() => setSelectedTab("ClientManagement")}
              className={`hover:text-gray-300 ${selectedTab === "ClientManagement" ? "underline" : ""}`}
            >
              Client Management
            </button>

            <button
              onClick={() => setSelectedTab("ContactDetail")}
              className={`hover:text-gray-300 ${selectedTab === "ContactDetail" ? "underline" : ""}`}
            >
              Contact Form Detail
            </button>

            <button
              onClick={() => setSelectedTab("SubscribedEmails")}
              className={`hover:text-gray-300 ${selectedTab === "SubscribedEmails" ? "underline" : ""}`}
            >
              Subscribed Emails
            </button>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-6 py-2 text-white rounded-lg hover:bg-red-600 transition duration-300 mt-4 md:mt-0 ml-auto"
        >
          Logout
        </button>
      </nav>

      <div className="flex-1 bg-gray-100 p-6 md:p-8">
        {selectedTab === "ProductManagement" && (
          <div className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-3xl">
            <h1 className="text-3xl font-semibold mb-4 text-center">Project Management</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="projectName"
                  placeholder="Project Name"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Project's Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {productImagePreview && (
                  <img
                    src={productImagePreview}
                    alt="Preview"
                    className="mt-4 h-32 w-32 object-cover border rounded-md shadow-lg"
                  />
                )}
              </div>

              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 shadow-md">
                Submit
              </button>
            </form>
          </div>
        )}
        {selectedTab === "ClientManagement" && <ClientMag />}
        {selectedTab === "ContactDetail" && <ClientDetail />}
        {selectedTab === "SubscribedEmails" && <Subscribe />}
      </div>

      {showToast && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md shadow-md z-50">
          <p>Project Submitted Successfully!</p>
        </div>
      )}

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-4 shadow-md flex justify-between items-center">
        <button
          onClick={() => setSelectedTab("ProductManagement")}
          className="text-white"
        >
          Project Management
        </button>
        <button
          onClick={() => setSelectedTab("ClientManagement")}
          className="text-white"
        >
          Client Management
        </button>
        <button
          onClick={() => setSelectedTab("ContactDetail")}
          className="text-white"
        >
          Contact Detail
        </button>
        <button
          onClick={() => setSelectedTab("SubscribedEmails")}
          className="text-white"
        >
          Subscribed Emails
        </button>
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
