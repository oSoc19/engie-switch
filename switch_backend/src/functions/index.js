async function main(
  // projectId,
  // computeRegion,
  // modelId,
  // filePath,
  // scoreThreshold)
{
  const automl = require('@google-cloud/automl');
  const fs = require('fs');
  // Create client for prediction service.
  const client = new automl.PredictionServiceClient();
  const projectId = `osoc19-switch`;
  const computeRegion = `us-central1`;
  const modelId = `ICN8191421497732791570`;
  const filePath = `../reusableBottle.jpg`;
  //const scoreThreshold = `value between 0.0 and 1.0, e.g. "0.5"`;

  // Get the full path of the model.
  const modelFullId = client.modelPath(projectId, computeRegion, modelId);

  // Read the file content for prediction.
  const content = fs.readFileSync(filePath, 'base64');

  const params = {};

  // if (scoreThreshold) {
  //   params.score_threshold = scoreThreshold;
  // }

  // Set the payload by giving the content and type of the file.
  const payload = {};
  payload.image = {imageBytes: content};

  const [response] = await client.predict({
    name: modelFullId,
    payload: payload,
    params: params,
  });

  console.log('Prediction results: ');
  response.payload.foreach(result => {
    console.log(`${result.displayname} has a prediction score of ${result.clasification.score}`);
  });
  // [END automl_quickstart]
}
main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
