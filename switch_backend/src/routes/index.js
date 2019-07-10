const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//These are the models we'll be interacting with
let challenge = mongoose.model('Challenge');
let user = mongoose.model('User');
let post = mongoose.model('Post');

// Check if the server is running
router.get('/', (req, res, next) => {
  res.send('Server works!');
});

// Get a user by it's id
router.get('/users/:id', (req, res, next) => {
  user.findOne({"id": req.params.id}, (err, user) => {
    if(err) return next(err);
    if(!user) return next(new Error('Not found ' + req.params.id));
    res.json(user);
  });
});

// Here we are using promises to have only one error handler
router.post('/users/', (req, res, next) => {
  let tempUser = new user(req.body);
  user.findOne({username: tempUser.username}).exec()
  .then((found) => {
    if(found) throw new Error('User already exists!');
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
