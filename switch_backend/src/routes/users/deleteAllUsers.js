const express = require('express');
const router = express.Router;

module.exports = router({mergeParams: true})
// Delete all users (TESTING PURPOSES ONLY)
.delete('/users', (req, res, next) => {
  req.db.User.deleteMany({}, (err, users) => {
    if (err) return next(err);
    res.send('Done!');
  });
});
