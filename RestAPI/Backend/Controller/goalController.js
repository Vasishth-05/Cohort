const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModels')
const User = require('../models/userModel');


const getGoals = asyncHandler(async(req,res) => {
    const goals = await Goal.find({ user : req.user.id })

    res.status(200).json(goals)
})

const setGoals = asyncHandler(async(req,res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field ')
    }

    const goal = await Goal.create({
        text : req.body.text,
        user : req.user.id
    })

    res.status(200).json(goal)
})

const putGoals = asyncHandler(async(req,res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not Found');
    }

    const user = await findById(req.user.id);

    //check for user
    if(!user){
        res.status(401);
        throw new Error('User not Found');
    }

    //make sure the loged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not Found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

const deleteGoals = asyncHandler(async(req,res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not Found');
    }

    const user = await User.findById(req.user.id);

    //check for user
    if(!user){
        res.status(401);
        throw new Error('User not Found');
    }

    //make sure the loged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not Found');
    }

    await goal.deleteOne();

    res.status(200).json({id:req.params.id});
})

module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}