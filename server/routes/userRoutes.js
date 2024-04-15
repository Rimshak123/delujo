const express = require('express');
const { registerController,loginController } = require('../controllers/userController');
const router = express.Router();
// const multer = require('multer');

// routes
//Signup
router.post('/register', registerController);

//login
router.post('/login', loginController);

// export
module.exports = router;



