const jwt = require('jsonwebtoken')

exports.autenticateToken = async (req,res,next) => {
    // Check whether token exists
    if(!req.headers['access-token']) return res.status(401).send({msg : "Unauthorised"});
    
    // Verify Token
    try {
        req.body.user = await jwt.verify(req.headers['access-token'], process.env.JWT_SECRET_KEY);
        next();
    } catch(err){
        res.send(err);
    }
}


// To see if he is registered user but if there is a token it mean
exports.isRegisteredUser = async (req,res,next) => {
    if(req.body.user.existUser == true)
        next()
    else
        res.status(403).send({msg: "You are not a registered user"})
}