const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;

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

module.exports = mongoose;
