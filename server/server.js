const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/db");
const bodyParser = require("body-parser");
const imageRoutes = require("./routes/imageRoutes");
const itemRoutes = require("./routes/itemRoutes");
const userRoutes = require("./routes/userRoutes");
const likes = require('./routes/likes');
const paymentRoutes = require('./routes/paymentRoutes');
const commentRoutes = require('./routes/commentRoutes');

const colors = require("colors"); 

// DOTENV
// dotenv.config();

//Mongo Db connection
connectDb();

// REST OBJECT
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api", imageRoutes);
app.use("/api/items", itemRoutes);
app.use('/api/likes', likes);
app.use("/api/comments", commentRoutes);
app.use('/api/payments/intent', paymentRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Internal Server Error",
  });
});

// PORT
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen.white);
});

