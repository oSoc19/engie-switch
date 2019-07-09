const mongoose = require('mongoose');
const objectId = mongoose.Schema.ObjectId;
//defining a model

const Post = new mongoose.Schema
({
  id: objectId,
  challangeId: String,
  userId: String,
  image: String, //BASE64_CONTENT
  text: String,
  reviews: 0
});

mongoose.model('Post', Post);
