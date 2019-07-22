require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const mongoose = require('mongoose');
// to read the .env file (yes I need this comment)
const dotenv = require('dotenv').config();
const routes = require('./routes')
const cors = require('cors');
const app = express();
const port = 3000;
// take the database url
const dbUrl = process.env.DB_URL;
const loadLimit = process.env.LOAD_LIMIT;
mongoose.Promise = global.Promise;

if (!dbUrl) {
  console.log('Please insert DB_URL in .env file');
  process.exit();
}
// establish connection with the database
mongoose.connect(dbUrl, {
  useNewUrlParser: true
});
mongoose.connection.on("open", (ref) => {
  console.log("Connected to mongodb server");
});
const allowedOrigins = [
  `http://localhost:${port}`,
  'http://localhost:8080',
  'http://localhost:8081',
  'http://localhost:8082',
];
app.use(cors({
  origin: allowedOrigins
}));

// you need this to parse the body Andrews, yes I am an idiot
app.use(bodyParser.json({
  limit: loadLimit
}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: loadLimit
}));
app.use(cors({
  origin: "*"
}));

// router
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

//error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json(err.message);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`http://localhost:${port}/`);
});

module.exports = app;