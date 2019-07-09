const express = require('express');
const router = express.Router();
const mongo = require('mongojs');

router.get('/', (req, res, next) => {
  res.send('Server works!');
});

module.exports = router;
