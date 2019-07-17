const jwt = require('jsonwebtoken');
const config = require('./config');
const checkToken = require('./checkToken');
const mongoose = require('mongoose');
const createError = require('http-errors');

let users = mongoose.model('User');

module.exports = (req, res, next) => {
  let id = req.savedUser._id;
  users.findById(id).exec()
  .then((user) => {
    if(!user) throw new createError(404,"Couldn't find user " + req.savedUser._id);
    else
    {
      let token = jwt.sign({id: id}, config.secret);
      return token;
    }
  })
  .then((token) => {
    console.log(token);
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
      user: req.savedUser
    });
  })
  .catch(err => {
    console.log(err);
    next(err);
  });
};
//TODO: Check if this really works
