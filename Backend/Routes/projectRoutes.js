import express from "express";
import { createProject, getProjects } from "../controllers/project.js";
import formidable from "express-formidable"; 

const router = express.Router();


router.post("/create-project", formidable(), createProject);


router.get("/get-projects", getProjects);

export default router;
