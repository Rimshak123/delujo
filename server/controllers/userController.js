// const JWT = require("jsonwebtoken");
// const userModel = require("../models/userModel");

// const registerController = async (req, res) => {
//   try {
//     const { name, email, password, repeatPassword } = req.body;
//     // Validation
//     if (!name) {
//       return res.status(400).send({
//         success: false,
//         message: "Name is required",
//       });
//     }
//     if (!email) {
//       return res.status(400).send({
//         success: false,
//         message: "Email is required",
//       });
//     }
//     if (!password || password.length < 6) {
//       return res.status(400).send({
//         success: false,
//         message: "Password is required and must be at least 6 characters long",
//       });
//     }
//     if (password !== repeatPassword) {
//       return res.status(400).send({
//         success: false,
//         message: "Passwords must match",
//       });
//     }
//     // Existing user check
//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).send({
//         success: false,
//         message: "User already registered with this email",
//       });
//     }
//     const user = await userModel({
//       name,
//       email,
//       password,
//       repeatPassword,
//     }).save();
//     return res.status(201).send({
//       success: true,
//       message: "Registration successful. Please login.",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Error in Register API",
//       error: error.message,
//     });
//   }
// };

// const loginController = async (req, res) => {
//   try {
//     const { email } = req.body;
//     // Validation
//     if (!email) {
//       return res.status(400).send({
//         success: false,
//         message: "Email is required",
//       });
//     }
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "User not found",
//       });
//     }
//     //Token JWT
//     const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });
//     return res.status(200).send({
//       success: true,
//       message: "Login successful",
//       token,
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Error in Login API",
//       error: error.message,
//     });
//   }
// };

//   // const createUser = async (req, res) => {
//   //   try {
//   //     const newUser = new userModel(req.body);
//   //     await newUser.save();
//   //     res.json(newUser);
//   //   } catch (error) {
//   //     console.error(error);
//   //     res.status(500).send('Internal Server Error');
//   //   }
//   // };
  
//   module.exports = { registerController, loginController };

// controllers/userController.js
const JWT = require("jsonwebtoken");
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

    const user = await userModel.create({
      name,
      email,
      password,
    });

    return res.status(201).send({
      success: true,
      message: "Registration successful. Please login.",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      }
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
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Verify password (insecure method for educational purposes)
    if (password !== user.password) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Token JWT
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).send({
      success: true,
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      }
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

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({}, "name email"); // Fetch only name and email fields
    return res.status(200).send({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};

module.exports = { registerController, loginController, getAllUsersController };
