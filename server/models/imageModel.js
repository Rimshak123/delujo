// imageModel.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  path: String,
  // Add any other fields you need
});

module.exports = mongoose.model('Image', imageSchema);

