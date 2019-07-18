from imageai.Prediction.Custom import ModelTraining
import os

trainer = ModelTraining()
trainer.setModelTypeAsDenseNet()
trainer.setDataDirectory("bottles")
trainer.trainModel(num_objects=2, num_experiments=50, enhance_data=True, batch_size=16, show_network_summary=True)
