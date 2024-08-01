const express = require('express');
const multer = require('multer');
const path = require('path');
const Place = require('../models/Place');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// POST route to add a place
router.post('/', upload.single('image'), (req, res) => {
  const place = new Place({
    name: req.body.name,
    image: req.file ? req.file.path : null,
  });

  place.save()
    .then(result => {
      res.status(200).json({ message: 'Place added successfully', data: result });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// Serve the uploads directory
router.use('/uploads', express.static('uploads'));

module.exports = router;
