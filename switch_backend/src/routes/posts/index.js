const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const createError = require('http-errors');
const checkToken = require('../../checkToken');
let users = mongoose.model('User');
let posts = mongoose.model('Post');
const compare = require("../../sortFeeds");
// Here we are using promises to have only one error handler
// when doing mongoose queries

module.exports = router

// Update review by adding a 'like'
.put('/:id/plus', checkToken, (req, res, next) => {
  posts.findById(req.params.id)
    .populate('reviews')
    .then(post => {
      post.reviews.plus.find(user => user._id == req.decoded.id)
        .then(found => {
          if (found) throw new createError(400, 'User has already reviewed with a plus!');
        });

      users.findById(req.decoded.id).exec()
        then(user => {
          if (!user) throw new createError(404, 'User not found');

          post.reviews.plus.push(user);
        });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
})

.put('/:id/minus', checkToken, (req, res, next) => {
  posts.findById(req.params.id)
    .populate('reviews')
    .then(post => {
      post.reviews.plus.find(user => user._id == req.decoded.id)
        .then(found => {
          if (found) throw new createError(400, 'User has already reviewed with a minus!');
        });

        users.findById(req.decoded.id).exec()
          then(user => {

            if (!user) throw new createError(404, 'User not found');

            post.reviews.minus.push(user);

          });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
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
      .populate('reviews')
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
    //console.log(tempPost);
    return tempPost.save()
      .then((savedPost) => {
        res.json(savedPost);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      })
  });
