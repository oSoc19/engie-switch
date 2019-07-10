const mongoose = require('mongoose');
const objectId = mongoose.Schema.ObjectId;
//defining a model

const User = new mongoose.Schema
({
  id: objectId,
  username: String,
  profilePic: String,//BASE64_CONTENT
  points: 0
});

mongoose.model('User', User);
