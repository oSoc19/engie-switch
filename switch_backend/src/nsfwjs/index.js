/*
 * Code inpired by https://github.com/infinitered/nsfwjs/issues/25
 */
const tf = require('@tensorflow/tfjs-node')
const jpeg = require('jpeg-js');
/*
 * Load model once
 */
const load = require('./dist/index').load
const model_path = `file://${__dirname}/model/`
let model;
load(model_path).then(m => {
  model = m;
  console.log('model loaded')
})

const NUMBER_OF_CHANNELS = 3

function imageByteArray(image, numChannels) {
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

function imageToInput(image, numChannels) {
  const values = imageByteArray(image, numChannels)
  const outShape = [image.height, image.width, numChannels] ;
  const input = tf.tensor3d(values, outShape, 'int32');

  return input
}

function predict(imageBuf) {
  const pixels = jpeg.decode(imageBuf, true)
  const input = imageToInput(pixels, NUMBER_OF_CHANNELS)
  return model.classify(input).then(predictions => {
    // make an object instead of an array
    let ret = {}
    for(let pred of predictions) {
      ret[pred['className'].toLowerCase()] = pred['probability']
    }
    return ret
  })
}

module.exports = {
  predict: predict,
}
