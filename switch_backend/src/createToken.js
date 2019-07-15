const jwt = require('jsonwebtoken');
const config = require('./config');
const checkToken = require('./checkToken');
const mongoose = require('mongoose');
const createError = require('http-errors');

let users = mongoose.model('User');

module.exports = (req, res) => {
  let id = req.body.id;
  users.findById(id).exec()
  .then((user) => {
    if(!user) throw new createError(404,"Couldn't find user " + req.params.id);
    else {
      {
        let token = jwt.sign({id: id}, config.secret);
        return token;
      }
    }
  })
  .then(() => {
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token
    })
  })
  .catch(err => {
    res.json({
      success: false,
      message: 'Authentication failed! Please check the request'
    });
  })
};
//TODO: Check if this really works 
