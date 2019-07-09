require('./models');
const express = require('express');
const createError = require('http-errors');
const mongoose = require('mongoose');
// to read the .env file (yes I need this comment)
const dotenv = require('dotenv').config();
const routes = require('./routes/index')
const app = express();
const port = 3000;
//take the database url
const dbUrl = process.env.DB_URL;


if(!dbUrl) {
  console.log('Please insert DB_URL in .env file');
  process.exit();
}
// establish connection with the database
mongoose.connect(dbUrl,{ useNewUrlParser: true });
mongoose.connection.on("open", (ref) => {
  console.log("Connected to mongodb server");
});

//router
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
