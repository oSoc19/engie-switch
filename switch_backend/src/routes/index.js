const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const createError = require('http-errors');

//These are the models we'll be interacting with
let challenge = mongoose.model('Challenge');
let user = mongoose.model('User');
let post = mongoose.model('Post');

// Here we are using promises to have only one error handler
// when doing mongoose queries

// Check if the server is running
router.get('/', (req, res, next) => {
  res.send('Server works!');
});

// Get a user by it's id
router.get('/users/:id', (req, res, next) => {
  user.findById(req.params.id).exec()
  .then((userFound) => {
    if (!userFound) throw new createError(404,"Couldn't find user " + req.params.id);
    else res.json(userFound);
  })
  .catch((err) => {
    console.log(err);
    next(err);
  });
});

// Update a user's username
// TODO: Check if the username already exists
// If it does, send an error and retry to do it
router.put('/users/:id', (req, res, next) => {

  let userToFind = {username: req.body.username}
  let valueToUpdate = {$set: userToFind};

  user.findOne(userToFind).exec()
  .then((userFound) => {
    if (userFound) throw new createError(400, 'User already exists!');
    user.findByIdAndUpdate(req.params.id, valueToUpdate).exec()
    .then((userFound) => {
      user.findOne()
      if (!userFound) throw new createError(404,"Couldn't find user " + req.params.id);
    });
    res.json(userFound);
  })
  .catch((err) => {
    console.log(err);
    next(err);
  });
});

// Get all users (TESTING PURPOSES ONLY)
router.get('/users/', (req, res, next) => {
  user.find({}, (err, users) => {
    if(err) return next(err);
    res.json(users);
  });
});

// Delete all users (TESTING PURPOSES ONLY)
router.delete('/users/', (req, res, next) => {
  user.deleteMany({}, (err, users) => {
    if(err) return next(err);
    res.send('Done!');
  });
});

// Create a new user
// users can't have the same username
router.post('/users/', (req, res, next) => {
  let tempUser = new user(req.body);
  user.findOne({username: tempUser.username}).exec()
  .then((found) => {
    console.log(found);
    if(found) throw new createError(400, 'User already exists!');
    else return tempUser.save();
  })
  .then((savedUser) => {
    res.json(savedUser);
  })
  .catch((err) => {
    console.log(err);
    next(err);
  });
});

module.exports = router;
