const jwt = require('jsonwebtoken')


exports.checkToken = async (req, res, next) => {
    try {
        //code
        const token = req.headers["authtoken"]
        if (!token) {
            return res.status(401).json({message: 'no token available'});
        }
        const decoded = jwt.verify(token, 'jwtsecret')
        req.user = decoded.user
        
        next();
    } catch (err) {
        // err
        console.log(err)
        res.send('Token Invalid').status(500)
    }
}