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

router.post('/users/', (req, res, next) => {
  let tempUser = new user(req.body);
  if(user.findById(tempUser.id))
  {
    next(new Error('User already exists!'));
  }
  tempUser.save((err, req) => {
    if (err) return next(err);
    res.json(req);
  });
});

// Post an issue
router.post('/ISSUE/', (req, res, next) => {
  let issue = new Issue(req.body);
  if(Issue.findById(issue._id))
    next(new Error('Issue already exists, please try modifying its status'));
  issue.save((err, req) => {
    if (err) return next(err);
    //execute id change before saving
    res.json(req);
  });
});

module.exports = router;
