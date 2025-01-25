# Elephant Detection and Alert System

## Overview
This project is a software-based solution designed to detect elephants using a web camera and Artificial Intelligence (AI). It leverages YOLO v5 for object detection, Roboflow for dataset management and model training, and Google Colab for deployment. The system sends SMS alerts upon detecting an elephant to notify users in real-time, making it suitable for wildlife monitoring and prevention of human-animal conflicts.

---

## Features
- **Elephant Detection**: Uses YOLO v5 for AI-based detection of elephants.
- **Web Camera Integration**: Captures live video feed for real-time monitoring.
- **Alert System**: Sends SMS notifications to a predefined phone number upon detecting an elephant.
- **Cloud-Based Deployment**: Runs on Google Colab for ease of use and accessibility.
- **Dataset Management**: Utilizes Roboflow for dataset annotation, augmentation, and model training.

---

## System Requirements
- **Hardware**:
  - Web Camera
  - Computer or Laptop with internet access

- **Software**:
  - Python 3.9 or higher
  - Google Colab account
  - Required Python Libraries:
    - `torch`
    - `opencv-python`
    - `yolov5`
    - `twilio`
    - `requests`

---

## Setup Instructions

### 1. Dataset Preparation
- Use Roboflow to create and annotate a dataset of elephant images.
- Export the dataset in YOLO format and upload it to Google Drive.

### 2. Model Training
- Train the YOLO v5 model on the annotated dataset using Google Colab.
- Use the `yolov5` GitHub repository for training the model.

### 3. Deployment
1. Clone the YOLO v5 repository in Google Colab:
   ```bash
   !git clone https://github.com/ultralytics/yolov5.git
   ```
2. Install the required dependencies:
   ```bash
   %pip install -r yolov5/requirements.txt
   ```
3. Load your trained model weights into the YOLO v5 framework.
4. Connect the web camera using OpenCV.

### 4. Alert System
- Configure the Twilio API to send SMS alerts:
  1. Sign up for a Twilio account and obtain your Account SID, Auth Token, and Twilio phone number.
  2. Add the credentials to the script.

---

## Code Workflow
1. **Video Capture**: Captures video feed using the OpenCV library.
2. **Object Detection**: Runs the YOLO v5 model on each video frame to detect elephants.
3. **Alert Trigger**: If an elephant is detected, an SMS alert is sent using the Twilio API.

---

## How to Run the Project
1. Open the provided Google Colab notebook.
2. Upload the YOLO-trained model weights and dataset to Google Drive.
3. Run the cells in the notebook to start real-time detection and alerting.

---

## Project Structure
```plaintext
.
├── yolov5/                  # YOLO v5 repository
├── data/
│   ├── dataset.yaml         # Roboflow-exported dataset configuration
│   └── images/              # Dataset images
├── model/
│   └── best.pt              # Trained YOLO v5 model weights
├── scripts/
│   └── alert.py             # Twilio SMS alert script
└── main.ipynb               # Google Colab notebook for deployment
```

---

## Future Enhancements
- Integrate additional wildlife species detection.
- Deploy the solution on an edge device like Raspberry Pi.
- Enable email and push notifications for alerts.

---

## Credits
- **YOLO v5**: [Ultralytics](https://github.com/ultralytics/yolov5)
- **Roboflow**: Dataset annotation and augmentation
- **Twilio**: SMS alert service

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.
