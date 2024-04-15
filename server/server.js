const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDb = require("./config/db");
const imageRoutes = require("./routes/imageRoutes"); // Import imageRoutes

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
// Use image routes
app.use('/api/images', imageRoutes); // Use imageRoutes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Internal Server Error"
  });
});

// PORT
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen.white);
});
