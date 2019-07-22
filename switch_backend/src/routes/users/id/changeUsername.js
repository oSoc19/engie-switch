const express = require('express');
const router = express.Router;

module.exports = router({mergeParams: true})
// Update a user's username
// TODO: Check if the username already exists
// If it does, send an error and retry to do it
.put('/users/:id', (req, res, next) => {

  let userToFind = {username: req.body.username};

  req.db.User.findOne(userToFind).exec()
    .then((userFound) => {

      if (userFound) throw new req.createError(400, 'User already exists!');

      req.db.User.findById(req.params.id).exec()
        .then((userFound) => {

          if (!userFound) throw new req.createError(404, "Couldn't find user " + req.params.id);

          userFound.username = req.body.username;
          return userFound.save();
        })
        .then((updatedUser) => {
          res.json(updatedUser);
        });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});
