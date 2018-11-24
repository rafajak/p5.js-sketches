// var xspacing = 3; // Distance between each horizontal location
// var w; // Width of entire wave
// var theta = 0.0; // Start angle at 0
// var amplitude = 75.0; // Height of wave
// var period = 500.0; // How many pixels before the wave repeats
// var dx; // Value for incrementing x
// var yvalues; // Using an array to store height values for the wave



function preload() {
	song1 = loadSound('assets/d3.mp3');
	song2 = loadSound('assets/d3.mp3');

}

function setup() {
	createCanvas(710, 400);
	stable_wave = new SinWave();
	song1.loop()

	song2.loop()

	_ = new SinWave();
}

function draw() {

	background(0);
	fill(255)

	stable_wave.calcWave();
	stable_wave.renderWave();
	fill(60, 170, 180, 150)

	_.calcWave();
	_.renderWave();
	_.updatePeriod()

	speed = map(Math.abs(_.period - stable_wave.period), 0, 99, 1, 1.1)


	// map(mouseX, 0, width, 0.5, 1.5);
	// freq(10000)
	song2.rate(speed);
	song2.amp(0.5);
	// song2.freq(freq);
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

		this.period = map(mouseX, 0, width, 500, 1)
	}
}