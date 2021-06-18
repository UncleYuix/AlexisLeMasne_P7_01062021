const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];//  token est 1 - Berear est 0
        const decodedToken = jwt.verify(token, 'XyJ__L9_VU2qMq8E7r_d__428_JRz9_vv7Uz4wVX_V__5eqE__s6829_tzB');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId)
         {
            throw 'Invalid user ID';
        } else {
            next();
          }
    } catch{
        res.status(401).json({ error: new Error('Invalid request!')});// erreur 401, requête non authentifiée
    }
};