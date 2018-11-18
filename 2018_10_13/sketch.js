let video;
let poseNet;
let poses;
let noseX = null;
let noseY = null;

function setup() {
	createCanvas(windowWidth, windowHeight);

	video = createCapture(VIDEO);
	video.size(width, height);

	// Create a new poseNet method with a single detection
	poseNet = ml5.poseNet(video, modelReady);
	// This sets up an event that fills the global variable "poses"
	// with an array every time new poses are detected
	poseNet.on('pose', function (results) {
		poses = results;

	});

	noseX = poses[0].pose.keypoints[0].position["x"]
	noseY = poses[0].pose.keypoints[0].position["y"]

	// Hide the video element, and just show the canvas
	video.hide();
}

function draw() {
	background(0);
	fill(255);
	ellipse(width - noseX, noseY, 20, 20);


}



function modelReady() {
	select('#status').html('Model Loaded');
}