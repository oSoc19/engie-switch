const express = require('express')
const jsonServer = require('json-server')
const port = 3000

var challengeRouter = jsonServer.router("./challenges.json") // Express router
var server = jsonServer.create()       // Express server

//todo: add image router and handle it myself with Express
server.use("/image", (req, res, next) => {
  console.log('image')
  console.log(req)
  console.log(res)
  next()
})


server.use(challengeRouter)

server.listen(port)
