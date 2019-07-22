const jwt = require('jsonwebtoken');
const config = require('./config');
const createError = require('http-errors');


module.exports = (req, res, next) => {
  // Check if the headers contain these values
  // Express headers are auto converted to lowercase
  try
  {
    console.log(req.headers);
    let token = req.headers['x-access-token'] || req.headers['authorization'];;
    //check if token is not null to see if authorization header exists
    if(!token) throw new req.createError(400, 'Please provide authorization header');
    if(token.startsWith('Bearer '))
    {
      // Remove Bearer from string
      // TODO: Explain what the Bearer is
      console.log(token);

      token = token.slice(7, token.length);
    }
    if(!token) throw new createError(400, 'Auth token not supplied');

      // TODO: explain what the secret is
      // TODO: explain the decoding
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) throw new createError(401, "Token is not valid");
      req.decoded = decoded;
      console.log(decoded);
      next();
    });
  }
  catch(err)
  {
    console.log(err);
    next(err);
  }
};
