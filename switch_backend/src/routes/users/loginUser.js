const express = require('express');
const router = express.Router;
const checkToken = require('../../checkToken');

// login user using the token
module.exports = router({mergeParams: true})
.get('/users/login', checkToken, (req, res, next) => {
  let decoded = req.decoded;
  req.db.User.findById(decoded.id).exec()
  .then((userFound) => {
    if (!userFound) throw new createError(404, "Couldn't find user " + decoded.id);
    else res.json(userFound);
  }).catch(err => {
    next(err);
  });
});
