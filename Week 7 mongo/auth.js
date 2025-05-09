const jwt = require('jsonwebtoken');
const JWT_SECRET = 'harekrsna';

function auth(req,res,next){
    const token = req.headers.token;

    const response = jwt.verify(token,JWT_SECRET);

    if(response){
        req.userId = token.userId;
        next();
    } else {
        res.status(403).json({
            message : 'Credentials Incorrect'
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}