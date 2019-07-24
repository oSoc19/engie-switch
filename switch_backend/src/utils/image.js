const tinify = require("tinify");
require('dotenv').config()

if(!process.env.TINIFY_API_KEY) {
  console.log('Please insert TINIFY_API_KEY in .env file');
  process.exit();
}

tinify.key = process.env.TINIFY_API_KEY;

/*
 * Crop the image to square size x size
 * The algo from tinify crop the "interesting" part of the image
 * Then tinify the image
 */
function cropTinify(imageBuffer, size) {
  return new Promise((resolve, reject) => {
    tinify.fromBuffer(imageBuffer)
    .resize({
      method: "cover",
      width: size,
      height: size,
    })
    .toBuffer((err, data) => {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

module.exports = {
  cropTinify,
}

/*
const fs = require('fs')
let sourcePath = '/home/user/Downloads/photo-1494790108377-be9c29b29330.jpeg'
let targetPath = '/home/user/Downloads/photo-1494790108377-be9c29b29330_1.jpeg'
let content = fs.readFileSync(sourcePath)
cropTinify(content, 500).then(compressed => {
  fs.writeFileSync(targetPath, compressed)
})
//*/
