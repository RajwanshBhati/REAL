import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientDetail = () => {
  const [clients, setClients] = useState([]);  
  const [loading, setLoading] = useState(true);  //Loading state ko handle
  const [error, setError] = useState(null);     // error kai liyai 

 
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/auth/getUsers');  
        if (response.data.success) {
          setClients(response.data.users);  
        } else {
          setError("Error fetching clients.");
        }
      } catch (err) {
        console.error("Error fetching clients:", err);
        setError("Error fetching clients.");
      } finally {
        setLoading(false);  
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600 font-medium py-6">Loading...</div>;  
  }

  if (error) {
    return <div className="text-center text-red-600 font-medium py-6">{error}</div>;  
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Client Details</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Phone</th>
              <th className="px-6 py-3 text-left">City</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {clients.length > 0 ? (
              clients.map((client, index) => (
                <tr key={index} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                  <td className="px-6 py-4 border-b">{client.name}</td>
                  <td className="px-6 py-4 border-b">{client.email}</td>
                  <td className="px-6 py-4 border-b">{client.phone}</td>
                  <td className="px-6 py-4 border-b">{client.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center border-b text-gray-500">No clients found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/*mobile kai liyai */}
      <div className="block md:hidden mt-6">
        {clients.length > 0 ? (
          clients.map((client, index) => (
            <div key={index} className="bg-white p-4 mb-4 shadow-lg rounded-lg">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Name:</span>
                  <span>{client.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Email:</span>
                  <span>{client.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Phone:</span>
                  <span>{client.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">City:</span>
                  <span>{client.city}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No clients found</div>
        )}
      </div>
    </div>
  );
};

export default ClientDetail;
