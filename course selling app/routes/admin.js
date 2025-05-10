const {Router} = require('express');
const adminRoute = Router();
const jwt = require('jsonwebtoken');
const { adminModel, courseModel } = require('../db');
const { JWT_ADMIN_SECRET } = require('../config');
const { adminMiddleware } = require("../middlewares/admin")

adminRoute.post('/signup', async function(req,res){
    try {
        const { email, password, firstname, lastname} = req.body;

        await adminModel.create({
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

adminRoute.post('/signin',async function(req,res){
    try {
        const { email, password} = req.body;
    
        const users = await adminModel.findOne({
            email : email,
            password : password
        });
    
        if(users){
            const token = jwt.sign({
                _id : users._id
            }, JWT_ADMIN_SECRET)
    
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

adminRoute.post('/courses',adminMiddleware, async function(req,res){
    const userId = req.userId;

    const { title , description , price , imgUrl , creatorId } = req.body;

    await courseModel.create({
        title : title,
        description : description,
        price : price,
        imgUrl : imgUrl,
        creatorId : creatorId
    })

    res.json({
        message : 'course is created',
        courseId : course._id
    })
})

adminRoute.put('/courses', async function(req,res){
    const adminId = req.userId;

    const { title , description , price , imgUrl , creatorId } = req.body;

    const updateCourse = await courseModel.updateOne({
        _id : courseId,
        creatorId : adminId
    }, {
        title : title,
        description : description,
        price : price,
        imgUrl : imgUrl,
    })

    res.json({
        message : "course updated",
        courseId : updateCourse._id
    })



})

adminRoute.get('/courses/bulk',function(req,res){
    const { title , description , price , imgUrl , creatorId } = req.body;

})

module.exports = {
    adminRoute : adminRoute
}
