import React, { useEffect, useState } from "react";
import axios from "axios";

const OurProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllProjects = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/project/get-projects");
      setProjects(data.projects);
      setLoading(false);
    } catch (err) {
      setError("Error fetching projects");
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div section id="about-products-section" className="bg-blue-50 py-16 px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-600">Our Projects</h2>
        <p className="mt-4 text-gray-500">
          We know what buyers are looking for and suggest projects that will bring
          clients top dollar for the sale of their homes.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto">
        {loading ? (
          <p className="text-center text-blue-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="flex space-x-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white shadow-md rounded-lg p-4 text-center w-64 h-[300px] flex-shrink-0"
              >
                {project.photo ? (
                  <img
                    src={project.photo}
                    alt={project.name}
                    className="rounded-lg w-full h-40 object-cover mb-4"
                  />
                ) : (
                  <div className="bg-gray-200 rounded-lg w-full h-40 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                <h3 className="text-lg font-semibold text-blue-600">{project.name}</h3>
                <p className="text-gray-500 text-sm">
                  {project.projectName} · {project.location}
                </p>

                <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProject;
