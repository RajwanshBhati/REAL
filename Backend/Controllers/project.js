import projectModel from "../Model/projectModel.js";
import fs from "fs"; 


export const createProject = async (req, res) => {
  try {
    const { name, projectName, location } = req.fields; 
    const { photo } = req.files; 
   
    if (!name) return res.status(400).send({ error: "Name is required" });
    if (!projectName) return res.status(400).send({ error: "Project name is required" });
    if (!location) return res.status(400).send({ error: "Location is required" });
    if (photo && photo.size > 5000000) {
      return res.status(400).send({ error: "Photo size should be less than 5MB" });
    }

  
    const project = new projectModel({ name, projectName, location });

    if (photo) {
      project.photo.data = fs.readFileSync(photo.path);
      project.photo.contentType = photo.type;
    }

    // Save to database
    await project.save();
    res.status(201).send({
      success: true,
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.error("Error in creating project:", error);
    res.status(500).send({
      success: false,
      message: "Error in creating project",
      error: error.message,
    });
  }
};

// Get Projects
export const getProjects = async (req, res) => {
  try {
    const projects = await projectModel.find(); 

   
    const formattedProjects = projects.map((project) => ({
      ...project._doc,
      photo: project.photo && project.photo.data
        ? `data:${project.photo.contentType};base64,${project.photo.data.toString("base64")}`
        : null, 
    }));

    res.status(200).send({
      success: true,
      message: "Projects fetched successfully",
      projects: formattedProjects,
    });
  } catch (error) {
    console.error("Error in fetching projects:", error);
    res.status(500).send({
      success: false,
      message: "Error in fetching projects",
      error: error.message,
    });
  }
};
