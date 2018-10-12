let video;
let poseNet;
let poses = [];
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
	// Hide the video element, and just show the canvas
	video.hide();
}

function draw() {
	background(0);

	// Loop through all the poses detected
	for (let i = 0; i < poses.length; i++) {
		// For each pose detected, loop through all the keypoints
		for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
			// A keypoint is an object describing a body part (like rightArm or leftShoulder)
			let keypoint = poses[i].pose.keypoints[j];
			noseX = poses[0].pose.keypoints[0].position["x"]
			noseY = poses[0].pose.keypoints[0].position["y"]
			ellipse(noseX, noseY, 20, 20);

		}
	}

	for (let i = 1; i < 100; i++) {
		stroke(map(noseX * noseX, 0, width * height, 200, 255));

		line(i * i, noseX * 5 - 1000, i, -noseY * 100);
		line(i * i, noseX * 5 - 1000, i, noseY);

		line(i * i, noseX - 300, noseY * 100);


		line(noseX, -noseY, -noseX + (i * 3) % 5000, -noseX + i * 10);

		line(windowWidth - noseX, -windowHeight - noseY, -noseX + (i * 3) % 5000, -noseX + i * 10);

	}
}



function modelReady() {
	select('#status').html('Model Loaded');
}

function drawKeypoints() {
	// // Loop through all the poses detected
	// for (let i = 0; i < poses.length; i++) {
	// 	// For each pose detected, loop through all the keypoints
	// 	for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
	// 		// A keypoint is an object describing a body part (like rightArm or leftShoulder)
	// 		let keypoint = poses[i].pose.keypoints[j];
	// 		noseX = poses[0].pose.keypoints[0].position["x"]
	// 		noseY = poses[0].pose.keypoints[0].position["y"]
	// 		ellipse(noseX, noseY, 30, 30);

	// 	}
	// }
}