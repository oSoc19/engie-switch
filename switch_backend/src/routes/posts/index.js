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
// post instead of put because we would need to change too much
.post('/:id/plus', checkToken, (req, res, next) => {

  let token = req.decoded.id;

  posts.findById(req.params.id)
    .populate('reviews.plus')
    .then(post => {

      if(post.reviews.plus.length != 0)
      {
        let found = post.reviews.plus.find(user => user._id == token)
        if (found) throw new createError(400, 'user has already reviewed with a plus!')
      }

      users.findById(token)
        .then(user => {

          if (!user) throw new createError(404, 'User not found');

          post.reviews.plus.push(user);
          post.save(p => {
            res.json(p);
          });
        })
    }).catch(err => {
      console.log(err);
      next(err);
    });
})

.post('/:id/minus', checkToken, (req, res, next) => {

  let token = req.decoded.id;

  posts.findById(req.params.id).exec()
    .populate('reviews.minus')
    .then(post => {

      if(post.reviews.minus.length != 0)
      {
        let found = post.reviews.minus.find(user => user._id == token)
        if (found) throw new createError(400, 'user has already reviewed with a minus!')
      }

        users.findById(token).exec()
          then(user => {

            if (!user) throw new createError(404, 'User not found');

            post.reviews.minus.push(user);
            post.save(p => {
              res.json(p);

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
