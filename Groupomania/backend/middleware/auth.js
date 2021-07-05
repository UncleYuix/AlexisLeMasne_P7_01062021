const jwt = require('jsonwebtoken');
require('dotenv').config()

// de la même manière que le P6, dotenv est utilisé, il ne doit pas être envoyé sur git pour sécuriser le projet


module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.TOKEN)
      const userId = decodedToken.userId;
      if (req.body.userId && req.body.userId != userId) {
        return res.status(402).json({error: new Error('Invalid request!')})
      } else {
        next();
      }
    } catch {
      res.status(402).json({
        error: new Error('Invalid request!')
      });
    }
};