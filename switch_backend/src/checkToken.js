const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports = (req, res, next) => {
  // Check if the headers contain these values
  // Express headers are auto converted to lowercase
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if(token.startsWith('Bearer '))
  {
    // Remove Bearer from string
    // TODO: Explain what the Bearer is

    token = token.slice(7, token.length);
  }
  if(token)
  {
    // TODO: explain what the secret is
    // TODO: explain the decoding
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err)
      {
        return res.json({
            success: false,
            message: 'Token is not valid'
          });
      }
      else
      {
        req.decoded = decoded;
        next();
      }
    });
  }
  else
  {
    return res.json({
        success: false,
        message: 'Auth token is not supplied'
      });
  }
};
