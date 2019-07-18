from imageai.Prediction.Custom import CustomImagePrediction
import os

execution_path = os.getcwd()

prediction = CustomImagePrediction()
prediction.setModelTypeAsDenseNet()
prediction.setModelPath("bottles/models/model_ex-012_acc-0.656250.h5")
prediction.setJsonPath("bottles/json/model_class.json")
prediction.loadModel(num_objects=2)

predictions, probabilities = prediction.predictImage(os.path.join(execution_path, "2.jpg"), result_count=2)

for eachPrediction, eachProbability in zip(predictions, probabilities):
    print(eachPrediction + " : " + eachProbability)
