const express = require('express');
const { createComment } = require('../controllers/commentController');

const router = express.Router();

router.post('/save', createComment);

module.exports = router;