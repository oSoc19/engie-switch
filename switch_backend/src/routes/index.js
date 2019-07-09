const express = require('express');
const router = express.Router();
const mongo = require('mongoose');

router.get('/', (req, res, next) => {
  res.send('Server works!');
});

module.exports = router;
