const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const createError = require('http-errors');
const checkToken = require('../../utils/checkToken');
let users = mongoose.model('User');
let posts = mongoose.model('Post');
const compare = require("../../utils/sortFeeds");
const nsfwjs = require('../../nsfwjs');
const urlString = require('../../utils/urlString');
const removeUserFromReviews = require('../../utils/removeUserFromReviews')
// Here we are using promises to have only one error handler
// when doing mongoose queries

module.exports = router

// Update review by adding a 'like'
// post instead of put because we would need to change too much
.post('/:id/plus', checkToken, (req, res, next) => {

  let token = req.decoded.id;

  posts.findById(req.params.id)
    .populate('reviews.plus reviews.minus user challenge')
    .then(post => {
      //check if post has plus reviews
      if(post.reviews.plus.length != 0)
      {
        //if the user has already added a review, do nothing
        let found = post.reviews.plus.find(user => user._id == token)
        if (found)
        {
          res.json(post);
          return;
        }
      }
      // if it's the first time the user does this, add the user to the review
      users.findById(token)
        .then(user => {

          if (!user) throw new createError(404, 'User not found');

          //this function checks if the user was already in the "dislike" section
          //if true, then we return the new array without the user
          console.log(post.reviews.minus.length);
          post.reviews.minus = removeUserFromReviews(post.reviews.minus, token);
          console.log(post.reviews.minus.length);
          post.reviews.plus.push(user);
          post.save();
          res.json(post);
        })
    }).catch(err => {
      console.log(err);
      next(err);
    });
})

.post('/:id/minus', checkToken, (req, res, next) => {

  let token = req.decoded.id;

  posts.findById(req.params.id)
    .populate('reviews.minus reviews.plus user challenge')
    .then(post => {

      //check if post has minus reviews
      if(post.reviews.minus.length != 0)
      {
        //if the user has already added a review, do nothing
        let found = post.reviews.minus.find(user => user._id == token)
        if (found)
        {
          res.json(post);
          return;
        }
      }
        // if it's the first time the user does this, add the user to the review
        users.findById(token)
          .then(user => {

            if (!user) throw new createError(404, 'User not found');
            //this function checks if the user was already in the "like" section
            //if true, then we return the new array without the user
            console.log(post.reviews.plus.length);
            post.reviews.plus = removeUserFromReviews(post.reviews.plus, token);
            console.log(post.reviews.plus.length);
            post.reviews.minus.push(user);
            post.save();
            res.json(post);
          })
    }).catch(err => {
        console.log(err);
        next(err);
      })
})
.get('/:id', (req, res, next) => {
  posts.findById(req.params.id)
    .populate('user')
    .populate('challenge')
    .populate('reviews')
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
})
  // Get all posts
  .get('/', (req, res, next) => {
    posts.find({})
      .populate('user')
      .populate('challenge')
      //.populate('reviews')
      .then((posts) => {
        let sortedPosts = posts.sort(compare)
        res.json(sortedPosts)
      })
      .catch(err => {
        console.log(err);
        next(err);
      });
  })
  // TESTING PURPOSES ONLY
  .delete('/', (req, res, next) => {
    posts.deleteMany({}, (err, post) => {
      if (err) return next(err);
      res.send('Done!');
    })
  })
  // Create a new post
  .post('/', (req, res, next) => {
    let tempPost = new posts(req.body);
    let imageBuf = urlString.toBytes(tempPost.image)
    nsfwjs.predict(imageBuf).then(predictions => {
      tempPost.nsfwjs = predictions
      return tempPost.save()
    }).then((savedPost) => {
      res.json(savedPost);
    }).catch((err) => {
      console.log(err);
      next(err);
    })
  });
