let video;
let poseNet;
let poses = [];
let skeletons = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  // image(video, 0, 0, width, height);

	// console.log(poses[0].pose.keypoints[0].position)
  // We can call both functions to draw all keypoints and the skeletons
    background(0);

  drawKeypoints();
  // drawSkeleton();

}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = poses[i].pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      // if (keypoint.score > 0.2) {
      //   fill(255, 0, 0);
      //   noStroke();
      //   ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      // nose = console.log(poses[0].pose.keypoints[0].position)
      noseX = poses[0].pose.keypoints[0].position["x"]
      noseY = poses[0].pose.keypoints[0].position["y"]
      ellipse(noseX, noseY, 10, 10);

      }
    }
  }
