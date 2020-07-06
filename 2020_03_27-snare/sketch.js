// read the whole thing and see if there's anything to fix 

let points = [];

lines = [];
var mock_width = 400;
var beats = [5, 3]; 
var xoff = 0.1;
var f, n;
let osc, envelope, fft;
let notes = [1, 1.125, 1.25, 1.334, 1.5, 1.667, 1.875, 2];
let note = 0;



function get_x_intervals(divs) {
	let z = 0
	let x_positions = [];
	while (z < width) {
		x_positions.push(z + (width / divs))
		z = z + (width / divs)
	}
	return x_positions
}

function setup() {




	createCanvas(710, 200);
	osc = new p5.SinOsc();

	// Instantiate the envelope
	envelope = new p5.Env();

	// set attackTime, decayTime, sustainRatio, releaseTime
	envelope.setADSR(0, 0.9, 0.1, 0.5);

	// set attackLevel, releaseLevel
	envelope.setRange(0.2, 0);


	noStroke();




	noise0 = new p5.Noise('brown'); // other types include 'brown' and 'pink'
	env0 = new p5.Env();
	env1 = new p5.Env();
	env0.setADSR(0.00001, 0.05, 0.001, 0.3);
	env1.setADSR(0.1, 0.5, 0.1, 0.3);
	// env2 = new p5.Env();
	env2 = new p5.Env();
	env2.setADSR(0.00001, 0.5, 0.01, 3);
	// env3.setADSR(1, 5, 1, 3);


	env = new p5.Env();
	// set attackTime, decayTime, sustainRatio, releaseTime
	env.setADSR(0.0001, 0.01, 0.2, 0.1);

	// set attackLevel, releaseLevel
	env.setRange(0.2, 0);

	envs = [env, env, env];
	noise0.start();
	noise0.amp(0);

	createCanvas(400, 600);
	strokeWeight(5)



	for (let b of beats) {
		for (i = 1; i < mock_width; i = i + mock_width / b) {

			points.push(new Point(i, 0, 35 + (b - 1) * 50, 10));

			lines.push(new Line(b, i, 20 + (b - 1) * 50, i, b * 50));
			console.log(lines)
		}
	}
	lines.push(new Line(1, 2, 0, 2, height));
	lines.push(new Line(1, width - 2, 0, width - 2, height));





}

function draw() {

	background(0);

	for (const [index, _point] of points.entries()) {
		_point.show();
		_point.move();
		_point.checkifbeyond();
		// console.log(index % envs.length)
	}
	for (const [index, line] of lines.entries()) {

		liney = line.intersects();
		if (line.intersects()) {

			line.changeColor();
			env_choice = envs[liney % envs.length];



			// console.log(_point)
			env_choice.play(noise0);

		} else {
			line.changeColorBack()

		}
		line.show();

	}

	// xoff = xoff + 0.001;
	// n = noise(xoff);
	console.log(n)
}




class Point {

	constructor(id, x, y, d = 5) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.d = d;
		this.vx = 3;
	}

	show() {
		stroke(255);
		fill(255);
		ellipse(this.x, this.y, this.d)
	}

	move() {
		this.x = this.x + this.vx;
	}

	checkifbeyond() {
		if (this.x >= width) {
			this.x = 0;
			osc.start();

			let notes = [1, 1.125, 1.25, 1.334, 1.5, 1.667, 1.875, 2];
			let BASE = 110;
			f = notes[0]
			if (random() > 0.25) {
				f = random(notes)
			}
			osc.freq(BASE * f);



		}
	}
}


class Line {

	constructor(level, x1, y1, x2, y2) {
		this.level = level;
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.color = color(127, 92, 174);
		this.intersects = function () {

			for (const _point of points) {
				if ((_point.x > this.x1 - 5) && (_point.x < this.x1 + 10)) {
					return this.level;
				} else {
					return false;
				}

			}


		}


	}

	show() {
		fill(this.color)
		stroke(this.color)
		line(this.x1, this.y1, this.x2, this.y2);
	}

	changeColor() {
		this.color.levels[0] = 0;
	}

	changeColorBack() {
		this.color.levels[0] = 255;
	}



}


