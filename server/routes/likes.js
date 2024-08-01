const express = require('express');
const router = express.Router();
const Like = require('../models/Like');

// Like a product
router.put('/like/:itemId', async (req, res) => {
  const { itemId } = req.params;
  try {
    let like = await Like.findById(itemId);
    if (like) {
      like.likes += 1;
    } else {
      like = new Like({ _id: itemId, likes: 1 }); // Initialize likes count for new item
    }
    await like.save();
    res.json({ likes: like.likes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get likes for a product
router.get('/like/:itemId', async (req, res) => {
  try {
    const like = await Like.findById(req.params.itemId);
    res.json({ likes: like ? like.likes : 0 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
