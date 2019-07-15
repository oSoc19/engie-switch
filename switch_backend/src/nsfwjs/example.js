/*
 * File inpired by https://github.com/infinitered/nsfwjs/issues/25
 * Run from switch_backend directory with node src/nsfwjs/example.js
 */

const tf = require('@tensorflow/tfjs-node')
const fs = require('fs');
const jpeg = require('jpeg-js');

const load = require('./dist/index').load



// Fix for JEST
const globalAny = global
globalAny.fetch = require('node-fetch')
const timeoutMS = 10000
const NUMBER_OF_CHANNELS = 3


const readImage = (path) => {
  const buf = fs.readFileSync(path)
  const pixels = jpeg.decode(buf, true)
  return pixels
}


const imageByteArray = (image, numChannels) => {
  const pixels = image.data
  const numPixels = image.width * image.height;
  const values = new Int32Array(numPixels * numChannels);

  for (let i = 0; i < numPixels; i++) {
    for (let channel = 0; channel < numChannels; ++channel) {
      values[i * numChannels + channel] = pixels[i * 4 + channel];
    }
  }

  return values
}


const imageToInput = (image, numChannels) => {
  const values = imageByteArray(image, numChannels)
  const outShape = [image.height, image.width, numChannels] ;
  const input = tf.tensor3d(values, outShape, 'int32');

  return input
}

function predictImage(image) {
  return new Promise((resolve, reject) => {
    const model_path = 'file://./src/nsfwjs/model/'
    load(model_path).then((model) => {
      console.log('model loaded')
      const logo = readImage(__dirname+'/'+image)
      const input = imageToInput(logo, NUMBER_OF_CHANNELS)
      model.classify(input).then((predictions) => {
        console.log(predictions)
      })
    })
  })
}

predictImage('../../../../../beach.jpg')
