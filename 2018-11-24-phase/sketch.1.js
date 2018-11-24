var xspacing = 3; // Distance between each horizontal location
var w; // Width of entire wave
var theta = 0.0; // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0; // How many pixels before the wave repeats
var dx; // Value for incrementing x
var yvalues; // Using an array to store height values for the wave

function setup() {
	createCanvas(710, 400);

	w = width + 16;

	yvalues = new Array(200);
}

function draw() {
	period = map(mouseX, 0, width, 1, 500); // How many pixels before the wave repeats
	dx = (TWO_PI / period) * xspacing;

	background(0);
	calcWave();
	renderWave();
}

function calcWave() {
	// Increment theta (try different values for 
	// 'angular velocity' here)
	theta += 0.02;

	// For every x value, calculate a y value with sine function
	var x = theta;
	for (var i = 0; i < yvalues.length; i++) {
		yvalues[i] = sin(x) * amplitude;
		x += dx;
	}
}

function renderWave() {
	noStroke();
	fill(255);
	// A simple way to draw the wave with an ellipse at each location
	for (var x = 35; x < yvalues.length; x++) {
		ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
	}
}


// class SinWave {
// 	constructor(xspacing,
// 		w,
// 		theta,
// 		amplitude,
// 		period,
// 		dx,
// 		yvalues) {


// 		this.spacing = xspacing
// 		this.w = w
// 		this.theta = theta
// 		this.amplitude = amplitude
// 		this.period = period
// 		this.dx = dx
// 		this.yvalues = yvalues


// 		function calcWave() {
// 			// Increment theta (try different values for 
// 			// 'angular velocity' here)
// 			this.theta += 0.02;

// 			// For every x value, calculate a y value with sine function
// 			var x = this.theta;
// 			for (var i = 0; i < this.yvalues.length; i++) {
// 				yvalues[i] = sin(x) * this.amplitude;
// 				x += this.dx;
// 			}
// 		}

// 		function renderWave() {
// 			noStroke();
// 			fill(255);
// 			// A simple way to draw the wave with an ellipse at each location
// 			for (var x = 35; x < this.yvalues.length; x++) {
// 				ellipse(x * this.xspacing, height / 2 + this.yvalues[x], 16, 16);
// 			}
// 		}
// 	}