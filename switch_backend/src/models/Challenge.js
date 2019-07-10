const mongoose = require('mongoose');
const objectId = mongoose.Schema.ObjectId;
//defining a model

const Challenge = new mongoose.Schema
({
  id: objectId,
  title: String,
  description: String,
  picture: String, //BASE64_CONTENT
  reward: 0
});

mongoose.model('Challenge', Challenge);
