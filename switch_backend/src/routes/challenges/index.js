const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const createError = require('http-errors');

//These are the models we'll be interacting with
let challenge = mongoose.model('Challenge');

// Here we are using promises to have only one error handler
// when doing mongoose queries

module.exports = router
  // Get daily challenge
  .get('/daily', (req, res, next) => {
    challenge.findById('5d2c4f320356bd1fde52495c').exec()
      .then((challengeFound) => {
        if (!challengeFound) throw new createError(404, "Couldn't find challenge " + req.params.id);
        else res.json(challengeFound);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  })
  // Get a challenge by it's id
  .get('/:id', (req, res, next) => {
    challenge.findById(req.params.id).exec()
      .then((challengeFound) => {
        if (!challengeFound) throw new createError(404, "Couldn't find challenge " + req.params.id);
        else res.json(challengeFound);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  })
  // Get all challenges (TESTING PURPOSES ONLY)
  .get('/', (req, res, next) => {
    challenge.find({}, (err, challenges) => {
      if (err) return next(err);
      res.json(challenges);
    });
  })
  // Delete all challenges (TESTING PURPOSES ONLY)
  .delete('/', (req, res, next) => {
    challenge.deleteMany({}, (err, challenges) => {
      if (err) return next(err);
      res.send('Done!');
    });
  });

// TODO MAYBE IN FUTURE VERSIONS
// Create a new challenge
// To be able to have challenges created by the community
