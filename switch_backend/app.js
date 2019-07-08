const express = require('express')
const mongo = require('mongojs')
const dotenv = require('dotenv');
dotenv.config();

const port = 3000

let db_url = process.env.DB_URL
if(!db_url) {
  console.log('Please insert DB_URL in .env file')
  process.exit();
}

const db = mongo(db_url, ['challenges'])
console.log('Connected to database '+db_url)
let ObjectId = mongo.ObjectId;

var server = express()

//todo: add routes
server.use("/image", (req, res, next) => {
  console.log('image')
  next()
})

let chall = db.collection('challenges')
//chall.createIndex({id: 1})

chall.find({ "_id": ObjectId('5d234426d0ee5b332ce18997') }, function(err, challenge) {
  console.log(challenge)
})
chall.save({'test': 'ok'})

server.listen(port)
