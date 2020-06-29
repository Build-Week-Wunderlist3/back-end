const jwt  = require('jsonwebtoken');
const secrets = require('../config/secrets.js');


module.exports = (req, res, next) => {

    const { authorization: token } = req.headers;

    if (token) {
        jwt.verify(token, secrets.jwt_secret, (err, decodedToken) => {
   
            if (err) {
                res.status(401).json({ message: "bad auth from restited MW" });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({ message: "bad auth from restited MW" });
    }

};