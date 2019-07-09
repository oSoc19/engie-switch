const express = require('express');
const mongojs = require('mongojs');
// to read the .env file (yes I need this comment)
const dotenv = require('dotenv').config();
const routes = require('./routes/index')
const app = express();
const port = 3000;
const dbUrl = process.env.DB_URL;


if(!dbUrl) {
  console.log('Please insert DB_URL in .env file');
  process.exit();
}

const db = mongojs(dbUrl, ['myCollection']);
/*const db = mongojs(dbUrl, () => {
  console.log('Connected to the database');
});*/


//console.log('Connected to database '+dbUrl);

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
