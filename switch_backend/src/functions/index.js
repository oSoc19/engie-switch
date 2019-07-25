const args = require('process').argv;
const automl = require('@google-cloud/automl');
const fs = require('fs');
// Create client for prediction service.
const client = new automl.PredictionServiceClient();
const projectId = `osoc19-switch`;
const computeRegion = `us-central1`;
const modelId = `ICN8191421497732791570`;
//const scoreThreshold = `value between 0.0 and 1.0, e.g. "0.5"`;

// Get the full path of the model.
const modelFullId = client.modelPath(projectId, computeRegion, modelId);

// Read the file content for prediction.

const params = {};


async function classify(filePath)
{

  //const content = fs.readFileSync(filePath, 'base64');

  // if (scoreThreshold) {
  //   params.score_threshold = scoreThreshold;
  // }

  // Set the payload by giving the content and type of the file.
  const payload = {};
  payload.image = {imageBytes: filePath};

  const [response] = await client.predict({
    name: modelFullId,
    payload: payload,
    params: params,
  });
  // console.log('Prediction results: ');
  // console.log(response.payload);
  // response.payload.forEach(result => {
  //   console.log(`${result.displayName} has a prediction score of ${result.classification.score}`);
  // });
  let scoreObject = {};
  let classificationName = response.payload[0].displayName;
  let classificationScore = response.payload[0].classification.score;
  scoreObject.good = classificationName == 'reusable_bottle' ? classificationScore : 0;
  scoreObject.bad = classificationName == 'non_reusable_bottle' ? classificationScore : 0;
  return scoreObject;
}

module.exports = {
  classify: classify,
}

// const path = "C:/Users/Andrews/Pictures/non_reusable.jpg"
// classify(path);
