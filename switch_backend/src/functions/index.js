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

const params = {};


async function classify(imageBuf)
{
  // if (scoreThreshold) {
  //   params.score_threshold = scoreThreshold;
  // }

  // Set the payload by giving the content.
  const payload = {};
  payload.image = {imageBytes: imageBuf};

  const [response] = await client.predict({
    name: modelFullId,
    payload: payload,
    params: params,
  });
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
