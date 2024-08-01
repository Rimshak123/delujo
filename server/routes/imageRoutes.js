// // imageRoutes.js
// const express = require('express');
// const { uploadImage, getImage, getAllImages } = require('../controllers/imageController.js');

// const router = express.Router();

// router.post('/images', uploadImage);
// router.get('/images/:name', getImage);
// router.get('/images', getAllImages);

// module.exports = router;


const express = require('express');
const multer = require('multer');
const { uploadImage, getImage } = require('../controllers/imageController.js');

const router = express.Router();
const upload = multer();

router.post('/images', upload.single('image'), uploadImage);
router.get('/images/:name', getImage);

module.exports = router;
