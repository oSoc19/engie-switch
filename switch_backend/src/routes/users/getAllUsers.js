const express = require('express');
const router = express.Router;

module.exports = router({mergeParams: true})
// Get all users (TESTING PURPOSES ONLY)
.get('/users', (req, res, next) => {
  req.db.User.find({}).exec()
  .then((users) => {
    res.json(users);
  }).catch(err => {
    next(err);
  });
});
