const jwt = require('jsonwebtoken');
const { JWT_USER_SECRET } = require('../config');

async function adminMiddleware(req,res,next){
    const token = req.headers.token;
    
    const verifyUserDetails = jwt.verify(token,JWT_USER_SECRET);

    if(verifyUserDetails){
        req.users = verifyUserDetails.id;
        next();
    } else {
        res.status(403).json({
            message : "incorrect credentials"
        })
    }
}

module.exports = {
    adminMiddleware : adminMiddleware
}