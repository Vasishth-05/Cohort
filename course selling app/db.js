const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
mongoose.connect(`mongodb+srv://Vasishth:mongo%4029@cluster0.sl1ojdh.mongodb.net/course-App`);

const users = new Schema ({
    email : {type : String , unique : true},
    password : String,
    firstname : String,
    lastname : String,
})

const admin = new Schema ({
    email : {type : String , unique : true},
    password : String,
    firstname : String,
    lastname : String,
})

const courses = new Schema ({
    title : String,
    description : String,
    price : Number,
    imgUrl : String,
    creatorId : ObjectId
})

const purchases = new Schema ({
    _id : ObjectId,
    courseId : ObjectId,
    userId : ObjectId
})

const userModel = mongoose.model('user', users);
const adminModel = mongoose.model('admin', admin);
const courseModel = mongoose.model('courses', courses);
const purchaseModel = mongoose.model('purchases', purchases);

module.exports = {
    userModel : userModel,
    adminModel : adminModel,
    courseModel : courseModel,
    purchaseModel : purchaseModel
}