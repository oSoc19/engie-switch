const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const createError = require('http-errors');
const createToken = require('../../createToken');
const checkToken = require('../../checkToken');
const sortUsersByPoints = require("../../sortUsersByPoints");
//These are the models we'll be interacting with
let user = mongoose.model('User');

// Here we are using promises to have only one error handler
// when doing mongoose queries

// TODO: ADD TOKEN AUTH FOR PUT AND POST REQUESTS

module.exports = router

  // Get top 10
  //TODO get this route working
  .get('/top10users', (req, res, next) => {
    user.find({}).exec()
    .then((users) => {
      let sortedUsers = users.sort(sortUsersByPoints);

      console.log(sortedUsers[0].points);
      console.log(sortedUsers[1].points);

      res.json(sortedUsers.slice(0, 10));
    }).catch(err => {
      console.log(err);
      next(err);
    });
  })

  // login user using the token
  .get('/login', checkToken, (req, res, next) => {

    let decoded = req.decoded;
    user.findById(decoded.id).exec()
    .then((userFound) => {
      if (!userFound) throw new createError(404, "Couldn't find user " + decoded.id);
      else res.json(userFound);
    }).catch(err => {
      next(err);
    });
  })
  // Get a user by it's id
  .get('/:id', (req, res, next) => {
    user.findById(req.params.id).exec()
      .then((userFound) => {
        if (!userFound) throw new createError(404, "Couldn't find user " + req.params.id);
        else res.json(userFound);
      }).catch((err) => {
        console.log(err);
        next(err);
      });
  })
  // Update a user's username
  // TODO: Check if the username already exists
  // If it does, send an error and retry to do it
  .put('/:id', (req, res, next) => {

    let userToFind = {username: req.body.username};

    user.findOne(userToFind).exec()
      .then((userFound) => {
        if (userFound) throw new createError(400, 'Username already exists!');
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
    user.find({}).exec()
    .then((users) => {
      res.json(users);
    }).catch(err => {
      next(err);
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
    user.findOne({username: tempUser.username}).exec()
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
