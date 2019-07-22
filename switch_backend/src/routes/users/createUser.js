const express = require('express');
const router = express.Router;
const createToken = require('../../createToken');

module.exports = router({mergeParams: true})
.post('/users', (req, res, next) => {

  let tempUser = new req.db.User(req.body);

  req.db.User.findOne({username: tempUser.username}).exec()
    .then((found) => {

      console.log(found);

      if (found) throw new req.createError(400, 'User already exists!');
      else return tempUser.save();
    })
    .then((savedUser) => {
      
      req.savedUser = savedUser;
      next();
      //res.json(savedUser);
      // TODO: send response with the user's token
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}, createToken)
