from imageai.Detection import ObjectDetection
import os

execution_path = os.getcwd()
resnet = "resnet50_coco_best_v2.0.1.h5"
yoloTiny = "yolo-tiny.h5"
yolo = "yolo.h5"
#idenprof = "idenprof.h5"

# TODO: create own model for clothes and such

detector = ObjectDetection()

#detector.setModelTypeAsTinyYOLOv3()
#detector.setModelTypeAsYOLOv3()
detector.setModelTypeAsRetinaNet()

detector.setModelPath(os.path.join(execution_path, resnet))
detector.loadModel()
detections = detector.detectObjectsFromImage(input_image = os.path.join(execution_path, "clothes2.jpg"),
 output_image_path = os.path.join(execution_path, "evaluatedImage.jpg"),
 minimum_percentage_probability = 30)

for eachObject in detections:
    print(eachObject["name"] , " : ", eachObject["percentage_probability"], " : ", eachObject["box_points"])
    print("--------------------------------")
