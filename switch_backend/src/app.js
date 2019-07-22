require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const database = require('./database.js');
const expressWinston = require('express-winston');
const logger = require('./logger.js');
// to read the .env file (yes I need this comment)
const dotenv = require('dotenv').config();
const routes = require('./routes')
const cors = require('cors');
const port = 3000;
// take the database url
const allowedOrigins = [
  `http://localhost:${port}`,
  'http://localhost:8080'
];

module.exports = () => express()
.use(expressWinston.logger({
  winstonInstance: logger,
  msg: '{{res.statusCode}} {{req.method}} {{req.url}}'
}))
.use(cors({
  origin: allowedOrigins
}))
// you need this to parse the body Andrews, yes I am an idiot
.use(bodyParser.json({
  limit: loadLimit
}))
.use(bodyParser.urlencoded({
  extended: true,
  limit: loadLimit
}))
.use((req, res, next) => {
    req.base = `${req.protocol}://${req.get('host')}`;
    req.logger = logger;
    req.db = database;
    req.createError = createError;
    return next();
})
// router
.use('/api', routes);
// catch 404 and forward to error handler
.use((req, res, next) => {
  next(createError(404));
})
//error handler
.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json(err.message);
})
.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`http://localhost:${port}/`);
});
