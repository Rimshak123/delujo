// // const colors = require('colors');

// // const connectDb = async () => {
// //     try {
// //         // Load environment variables from .env file
// //         require('dotenv').config();

// //         // Make sure MONGO_URL is defined in your .env file
// //         const mongoUrl = process.env.MONGO_URL;
// //         if (!mongoUrl) {
// //             throw new Error('MongoDB connection URL is not defined in .env file');
// //         }

// //         console.log(`Connecting to MongoDB at ${mongoUrl}`.cyan);

// //         await mongoose.connect(mongoUrl, {
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true
// //         });

// //         console.log(`Connected to database ${mongoose.connection.host}`.bgCyan.white);
// //     } catch(error) {
// //         console.error(`Error in connection DB ${error}`.bgRed.white);
// //     }
// // };

// // module.exports = connectDb;

// const mongoose = require("mongoose");
// // MongoDB connection URL
// const connectDb = async () => {
//   // const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://amnazia690:ziaamna690@cluster0.ua5wm0x.mongodb.net/rreact-nativee';
//   const mongoURI =  process.env.MONGODB_URI ||  "mongodb+srv://amnazia690:ziaamna690@cluster0.ua5wm0x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//   // Connect to MongoDB
//   mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   // Check if MongoDB connection is successful
//   const db = mongoose.connection;
//   db.once("open", () => {
//     console.log(`MongoDB connected`.cyan);
//   });

//   // Handle MongoDB connection error
//   db.on("error", console.error.bind(console, "MongoDB connection error:"));
// };
// module.exports = connectDb;

const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI ||
      "mongodb+srv://amnazia690:ziaamna690@cluster0.ua5wm0x.mongodb.net/rreact-native";
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "rreact-native", // Specify the database name here
    });
    console.log(`MongoDB connected`.cyan);
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`.bgRed.white);
  }
};

module.exports = connectDb;
