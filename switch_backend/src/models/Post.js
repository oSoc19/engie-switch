const mongoose = require('mongoose');
const objectId = mongoose.Schema.ObjectId;
const challenge = require('./Challenge');
const user = require('./User');
//defining a model

const Post = new mongoose.Schema
({
  id: objectId,
  challenge: user,
  user: challenge,
  image: String, //BASE64_CONTENT
  text: String,
  reviews: 0
});

mongoose.model('Post', Post);
