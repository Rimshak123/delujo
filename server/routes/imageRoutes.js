/// imageRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path'); // Import path module
const imageController = require('../controllers/imageController');

// Set up Multer for handling multipart/form-data
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Route for uploading an image
router.post('/upload', upload.single('image'), imageController.uploadImage);

module.exports = router;


