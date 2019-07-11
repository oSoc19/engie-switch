onst express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const createError = require('http-errors');

//These are the models we'll be interacting with
let challenge = mongoose.model('Challenge');
let user = mongoose.model('User');
let post = mongoose.model('Post');


// Here we are using promises to have only one error handler
// when doing mongoose queries

// Get a challenge by it's id
router.get('/:id', (req, res, next) => {
  user.findById(req.params.id).exec()
  .then((challengeFound) => {
    if (!challengeFound) throw new createError(404,"Couldn't find challenge " + req.params.id);
    else res.json(challengeFound);
  })
  .catch((err) => {
    console.log(err);
    next(err);
  });
});

// Get all challenges (TESTING PURPOSES ONLY)
router.get('/', (req, res, next) => {
  challenge.find({}, (err, challenges) => {
    if(err) return next(err);
    res.json(challenges);
  });
});

// Delete all challenges (TESTING PURPOSES ONLY)
router.delete('/', (req, res, next) => {
  challenge.deleteMany({}, (err, challenges) => {
    if(err) return next(err);
    res.send('Done!');
  });
});

// Create a new challenge

// router.post('/', (req, res, next) => {
//   let tempUser = new challenge(req.body);
//   user.findOne({username: tempUser.username}).exec()
//   .then((found) => {
//     console.log(found);
//     if(found) throw new createError(400, 'User already exists!');
//     else return tempUser.save();
//   })
//   .then((savedUser) => {
//     res.json(savedUser);
//     // TODO: send response with the user's token
//   })
//   .catch((err) => {
//     console.log(err);
//     next(err);
//   });
// });

module.exports = router;
