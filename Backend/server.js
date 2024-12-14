import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import reviewRoutes from "./Routes/reviewRouter.js";
import projectRoutes from "./Routes/projectRoutes.js";
import subscribersRoutes from "./Routes/subscribeRoutes.js";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors());

connectDb();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/project", projectRoutes);
app.use("/api/v1/subscribers", subscribersRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
