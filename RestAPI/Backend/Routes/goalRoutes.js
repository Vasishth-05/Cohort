const express = require('express');
const { getGoals, setGoals, putGoals, deleteGoals } = require('../Controller/goalController');
const { protect } = require('../middlewares/authMIddleware');

const router = express.Router();

router.route('/').get(protect,getGoals).post(protect,setGoals);
router.route('/:id').put(protect,putGoals).delete(protect,deleteGoals);

module.exports = router;