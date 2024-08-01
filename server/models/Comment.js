// Example of Comment model in ../models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;