const express = require('express');
const coursesRoute = express();

coursesRoute.use(express.json());

coursesRoute.post('/signup',function(req,res){

})

coursesRoute.post('/signin',function(req,res){
    
})

module.exports = {
    coursesRoute : coursesRoute
}