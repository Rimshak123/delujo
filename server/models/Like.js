const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  likes: { type: Number, default: 1 },
});

module.exports = mongoose.model('Like', LikeSchema);
