
import userModel from "../Model/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

  

   
    if (!name) {
      return res.status(400).send({ message: "Full Name is required" });
    }
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }
    if (!phone) {
      return res.status(400).send({ message: "Mobile number is required" });
    }
    if (!city) {
      return res.status(400).send({ message: "Area/City is required" });
    }

   
    const user = await new userModel({
      name,
      email,
      phone, 
      city 
    }).save();

    res.status(201).send({
      success: true,
      message: "Submitted successfully",
      user,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};











export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "Users retrieved successfully",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting users",
      error,
    });
  }
};
