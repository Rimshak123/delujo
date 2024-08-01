// routes/userRoutes.js
const express = require('express');
const { registerController, loginController, getAllUsersController } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/users', getAllUsersController); // New route for fetching all users

module.exports = router;
