const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId;
//const challenge = mongoose.model('Challenge');
//const user = mongoose.model('User');
//defining a model

const Post = new mongoose.Schema
({
  id: objectId,
  challenge: {type: objectId, ref: 'Challenge'},
  user: {type: objectId, ref: 'User'},
  image: String, //BASE64_CONTENT
  text: String,
  dateTime: {type: Date, default: Date.now},
  reviews: 0
});

mongoose.model('Post', Post);
