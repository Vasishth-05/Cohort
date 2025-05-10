const {Router} = require('express');
const userRoute = Router();
const jwt = require('jsonwebtoken');
const {JWT_USER_SECRET} = require('../config')
const { userModel } = require('../db');

userRoute.post('/signup', async function(req,res){
    try {
    
        const {email, password, firstname, lastname} = req.body;
    
        await userModel.create({
            email : email,
            password : password,
            firstname : firstname,
            lastname : lastname
        })
    
        res.json({
            message : "You are successfully signed up"
        }) 

    } catch (error) {
            res.json({
                message : `Facing an ${error}`
            })
        }   
})

userRoute.post('/signin',async function(req,res){
    try {
        const { email, password} = req.body;
    
        const users = await userModel.findOne({
            email : email,
            password : password
        });
    
        if(users){
            const token = jwt.sign({
                _id : users._id
            }, JWT_USER_SECRET)
    
            res.json({
                token : token
            })
        } else {
            res.status(403).json({
                message : 'incorrect credentials'
            })
        }
        } catch (error) {
            res.json({
                message : `Found an ${error}`
            })           
        }
})


module.exports = {
    userRoute : userRoute
}