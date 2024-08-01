// // imageController.js
// const { v4: uuidv4 } = require('uuid');
// const Image = require('../models/imageModel.js');

// const uploadImage = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ success: false, message: 'No file provided.' });
//   }

//   const image = new Image({
//     name: `${uuidv4()}.${req.file.mimetype.split('/')[1]}`,
//     data: req.file.buffer,
//     contentType: req.file.mimetype,
//   });

//   try {
//     await image.save();
//     return res.status(201).json({
//       success: true,
//       message: 'Image created successfully.',
//       imageName: image.name,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ success: false, message: error.message });
//   }
// };

// const getImage = async (req, res) => {
//   const { name } = req.params;
//   const image = await Image.findOne({ name });
//   if (!image) {
//     return res.status(404).json({ success: false, message: 'Image not found.' });
//   }
//   res.set('Content-Type', image.contentType);
//   res.send(image.data);
// };

// const getAllImages = async (req, res) => {
//   try {
//     const images = await Image.find({}, { name: 1, _id: 0 }); // Fetch only the names
//     res.status(200).json({ success: true, images });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// };

// module.exports = {
//   uploadImage,
//   getImage,
//   getAllImages,
// };


const { v4: uuidv4 } = require('uuid');
const Image = require('../models/imageModel.js');

const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file provided.' });
  }

  const image = new Image({
    name: `${uuidv4()}.${req.file.mimetype.split('/')[1]}`,
    data: req.file.buffer,
    contentType: req.file.mimetype,
  });

  try {
    await image.save();
    return res.status(201).json({
      success: true,
      message: 'Image created successfully.',
      imageName: image.name,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

const getImage = async (req, res) => {
  const { name } = req.params;
  const image = await Image.findOne({ name });
  if (!image) {
    return res.status(404).json({ success: false, message: 'Image not found.' });
  }
  res.set('Content-Type', image.contentType);
  res.send(image.data);
};

module.exports = {
  uploadImage,
  getImage,
};
