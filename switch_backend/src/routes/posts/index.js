const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const createError = require('http-errors');

let posts = mongoose.model('Post');
const compare = require("../../sortFeeds");
// Here we are using promises to have only one error handler
// when doing mongoose queries

module.exports = router
  // Get all posts
  .get('/', (req, res, next) => {
    posts.find({})
      .populate('user')
      .populate('challenge')
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