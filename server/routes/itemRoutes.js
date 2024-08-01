// const express = require('express');
// const { createItem } = require('../controllers/itemController');

// const router = express.Router();

// router.post('/save', createItem);

// module.exports = router;



const express = require('express');
const { createItem, getItems } = require('../controllers/itemController');

const router = express.Router();

router.post('/save', createItem);
router.get('/all', getItems); 
// router.put('/like', likeItem);

module.exports = router;
