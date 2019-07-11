const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const createError = require('http-errors');
const userRoutes = require('./users/');
const challegeRoutes = require('./challenges/');

//These are the models we'll be interacting with
let challenge = mongoose.model('Challenge');
let user = mongoose.model('User');
let post = mongoose.model('Post');

// Check if the server is running
router.get('/', (req, res, next) => {
  res.send('Server works!');
});

// re-route users to the user routes
router.use('/users', userRoutes);

// re-route users to the challenge routes
router.use('/challenges', challegeRoutes);

module.exports = router;
