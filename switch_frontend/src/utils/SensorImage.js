import * as nsfwjs from 'nsfwjs'


let checkImage = async () => {
    const img = document.getElementById('img')

    // Load model from my S3.
    // See the section hosting the model files on your site.
    const model = await nsfwjs.load()

    // Classify the image
    const predictions = await model.classify(img)
    console.log('Predictions: ', predictions)
}

export default checkImage;