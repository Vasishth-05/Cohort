const express = require('express');
const router = express.Router();
const {registerUser} = require('../Controller/userController')

router.post('/', registerUser); 

module.exports = router;