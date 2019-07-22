const express = require('express');
const router = express.Router;
const sortUsersByPoints = require("../../sortUsersByPoints");

module.exports = router({mergeParams: true})
.get('/users/top10users', (req, res, next) => {
  req.db.User.find({}).exec()
  .then((users) => {
    let sortedUsers = users.sort(sortUsersByPoints);

    console.log(sortedUsers[0].points);
    console.log(sortedUsers[1].points);

    res.json(sortedUsers.slice(0, 10));
  }).catch(err => {
    console.log(err);
    next(err);
  });
});
