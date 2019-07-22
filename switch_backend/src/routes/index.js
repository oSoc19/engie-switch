const express = require('express');
const router = express.Router();
const glob = require('glob');

// We'll be using glob to:
module.exports = () => glob
// search all the files with the .js extension in every subfolder
  .sync('**/*.js', {cwd: `${__dirname/}`})
// require each file
  .map(filename => require(`./${filename}`))
// keep only the router objects
  .filter(router => Object.getPrototypeOf(router) == routerObject)
// return one single router object with all the other routers inside
  .reduce((rootRouter, router) => rootRouse.use(router), routerObject({mergeParams: true}));
