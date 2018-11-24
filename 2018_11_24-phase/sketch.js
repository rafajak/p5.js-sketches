// var xspacing = 3; // Distance between each horizontal location
// var w; // Width of entire wave
// var theta = 0.0; // Start angle at 0
// var amplitude = 75.0; // Height of wave
// var period = 500.0; // How many pixels before the wave repeats
// var dx; // Value for incrementing x
// var yvalues; // Using an array to store height values for the wave


let circle = {
	x: 80,
	y: 450,
	color: '255',
	active: false,
	radius: 30,
}

function preload() {
	song1 = loadSound('assets/d3.mp3');
	song2 = loadSound('assets/d3.mp3');

}

function setup() {

	createCanvas(710, 600);
	stable_wave = new SinWave();
	song1.loop()

	song2.loop()

	_ = new SinWave();
}

function draw() {

	background(0);
	fill(255);
	stroke(255)
	strokeWeight(10)
	// rect(30, 31, 30, 31)
	line(80, 450, 600, 450)
	fill(60, 170, 180)
	strokeWeight(3)

	ellipse(circle.x, circle.y, circle.radius);
	fill(255);

	stable_wave.calcWave();
	stable_wave.renderWave();
	fill(60, 170, 180)

	_.calcWave();
	_.renderWave();
	_.updatePeriod();

	speed = map(_.period - stable_wave.period, -250, 0, 0.5, 1.0)

	song2.rate(speed);
	song2.amp(0.5);

}
class SinWave {
	constructor(xspacing = 1,
		w = width,
		theta = 0,
		amplitude = 75,
		period = 500,
		dx = (TWO_PI / this.period) * this.xspacing,
		yvalues = Array(600)) {


		this.xspacing = xspacing
		this.w = w
		this.theta = theta
		this.amplitude = amplitude
		this.period = period
		this.dx = dx
		this.yvalues = yvalues
	}

	calcWave() {
		// Increment theta (try different values for 
		// 'angular velocity' here)
		// this.period = map(mouseX, 0, width, 1, 500); // How many pixels before the wave repeats
		this.dx = (TWO_PI / this.period) * this.xspacing;
		this.theta += 0.02;
		// For every x value, calculate a y value with sine function
		let x = this.theta;

		for (var i = 90; i < this.yvalues.length; i++) {
			this.yvalues[i] = sin(x) * this.amplitude;
			x += this.dx;
		}
	}

	renderWave() {
		noStroke();
		// fill(255);
		// A simple way to draw the wave with an ellipse at each location
		for (var x = width / 2 - this.yvalues.length; x < this.yvalues.length; x++) {
			ellipse(x * this.xspacing, height / 2 + this.yvalues[x], 16, 16);
		}
	}

	updatePeriod() {

		// this.period = map(mouseX, 0, width, 10, 20)
		// this.period = map(mouseX, 0, width, 250, 500)
		this.period = map(circle.x, 80, 600, 250, 500)

	}
}




function mousePressed() {

	distance = dist(mouseX, mouseY, circle.x, circle.y);
	if (distance < circle.radius) {
		circle.active = true;
		circle.color = '200';
	} else {
		circle.active = false;
		circle.color = '200';
	}
	return false;
}



// Run when the mouse/touch is dragging.
function mouseDragged() {
	if (circle.active) {
		circle.x = constrain(circle.x + (mouseX - circle.x) * 0.1, 80, 600)

		circle.y = constrain(circle.y + (mouseY - circle.y) * 0.1, 450, 450)

	}
	return false;
}