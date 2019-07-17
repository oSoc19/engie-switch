const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const createError = require('http-errors');
const createToken = require('../../createToken');
const checkToken = require('../../checkToken');

//These are the models we'll be interacting with
let user = mongoose.model('User');

// Here we are using promises to have only one error handler
// when doing mongoose queries

// TODO: ADD TOKEN AUTH FOR PUT AND POST REQUESTS

module.exports = router
  // login user using the token
  .get('/login', checkToken, (req, res) => {

    let decoded = req.decoded;
    res.json({
      "id": decoded.id
    });
  })
  // Get a user by it's id
  .get('/:id', (req, res, next) => {
    user.findById(req.params.id).exec()
      .then((userFound) => {
        if (!userFound) throw new createError(404, "Couldn't find user " + req.params.id);
        else res.json(userFound);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  })
  // Update a user's username
  // TODO: Check if the username already exists
  // If it does, send an error and retry to do it
  .put('/:id', (req, res, next) => {

    let userToFind = {
      username: req.body.username
    }

    user.findOne(userToFind).exec()
      .then((userFound) => {
        if (userFound) throw new createError(400, 'User already exists!');
        user.findById(req.params.id).exec()
          .then((userFound) => {
            if (!userFound) throw new createError(404, "Couldn't find user " + req.params.id);
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
  })
  // Get all users (TESTING PURPOSES ONLY)
  .get('/', (req, res, next) => {
    user.find({}, (err, users) => {
      if (err) return next(err);
      res.json(users);
    });
  })
  // Delete all users (TESTING PURPOSES ONLY)
  .delete('/', (req, res, next) => {
    user.deleteMany({}, (err, users) => {
      if (err) return next(err);
      res.send('Done!');
    });
  })
  // Create a new user
  // users can't have the same username
  // TODO: generate token
  // TODO: generate random username
  .post('/', (req, res, next) => {
    let tempUser = new user(req.body);
    user.findOne({
        username: tempUser.username
      }).exec()
      .then((found) => {
        console.log(found);
        if (found) throw new createError(400, 'User already exists!');
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