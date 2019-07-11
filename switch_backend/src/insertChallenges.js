require('./models');
const fs = require('fs');
const mongoose = require('mongoose');
// to read the .env file (yes I need this comment)
const dotenv = require('dotenv').config();

// take the database url
const dbUrl = process.env.DB_URL;
mongoose.Promise = global.Promise;

if(!dbUrl) {
  console.log('Please insert DB_URL in .env file');
  process.exit();
}

// establish connection with the database
mongoose.connection.on("open", (ref) => {
  console.log("Connected to mongodb server");
  insert();
});
mongoose.connect(dbUrl,{ useNewUrlParser: true });

function insert() {
  let challenge = mongoose.model('Challenge');
  let json = fs.readFileSync('challenges.json');
  let data = JSON.parse(json);
  //console.log(challenges)
  challenge.collection.insertMany(data.challenges, (err, obj) => {
    if(err) {
      console.log(err)
    } else {
      console.log('inserted')
    }
    process.exit()
  })
}
