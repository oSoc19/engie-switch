const express = require('express');
const router = express.Router;

module.exports = router({mergeParams: true})
// Get a user by it's id
.get('/users/:id', (req, res, next) => {
  req.db.User.findById(req.params.id).exec()
    .then((userFound) => {
      if (!userFound) throw new req.createError(404, "Couldn't find user " + req.params.id);
      else res.json(userFound);
    }).catch((err) => {
      console.log(err);
      next(err);
    });
});
