const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
//const challenge = mongoose.model('Challenge');
//const user = mongoose.model('User');
//defining a model

const Post = new mongoose.Schema
({
  id: objectId,
  challenge: {type: objectId, ref: 'Challenge'},
  user: {type: objectId, ref: 'User'},
  image: String, //BASE64_CONTENT
  nsfwjs: {},
  score: {}, // classification score
  text: String,
  dateTime: {type: Date, default: Date.now},
  reviews: {
    plus: [{
      type: objectId,
      ref: 'User'
    }],
    minus: [{
      type: objectId,
      ref: 'User'
    }],
  }
});

mongoose.model('Post', Post);
