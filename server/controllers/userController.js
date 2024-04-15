const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { name, email, password, repeatPassword } = req.body;
    // Validation
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required",
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required",
      });
    }
    if (!password || password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Password is required and must be at least 6 characters long",
      });
    }
    if (password !== repeatPassword) {
      return res.status(400).send({
        success: false,
        message: "Passwords must match",
      });
    }
    // Existing user check
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already registered with this email",
      });
    }
    const user = await userModel({
      name,
      email,
      password,
      repeatPassword,
    }).save();
    return res.status(201).send({
      success: true,
      message: "Registration successful. Please login.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Register API",
      error: error.message, 
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email } = req.body;
    // Validation
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) { 
      return res.status(404).send({ 
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Login successful",
      user, 
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Login API",
      error: error.message,
    });
  }
};




module.exports = { registerController, loginController };
