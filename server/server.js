const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const multer = require("multer");
const connectDb = require("./config/db");

// DOTENV
// dotenv.config();

// //Mongo Db connection
connectDb();

// REST OBJECT
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.use("/api/v1/auth", require("./routes/userRoutes"));

//middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Internal Server Error"
  });
});git

// PORT
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen.white);
});



// ROUTES
// app.get("", (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Backend of DeLujo App",
//     });
// });