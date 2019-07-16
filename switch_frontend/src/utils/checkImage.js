import * as nsfwjs from 'nsfwjs'


let checkImage = async (imageIdName) => {
    const img = document.getElementById(imageIdName)

    // Load model from my S3.
    // See the section hosting the model files on your site.
    const model = await nsfwjs.load()

    // Classify the image
    const predictions = await model.classify(img)
    window.console.log('Predictions: ', predictions)
    return predictions;
}

export default checkImage;