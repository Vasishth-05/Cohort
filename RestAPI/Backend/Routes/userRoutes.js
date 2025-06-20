const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getMe} = require('../Controller/userController');
const { protect } = require('../middlewares/authMIddleware');

router.post('/', registerUser); 
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;