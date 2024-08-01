const Comment = require("../models/Comment");

exports.createComment = async (req, res) => {
  try {
    const newComment = new Comment({
      comment: req.body.comment,
      
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create item" });
  }
};