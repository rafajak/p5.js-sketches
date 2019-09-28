// let points = []
// number_of_points = 200
// let song
// let speed
// let hide_text = false

// function preload() {
// 	song = loadSound('assets/circus.mp3');
// }

// function setup() {
// 	createCanvas(400, 400);
// 	song.loop()
// 	for (i = 0; i < number_of_points; i++) {
// 		points.push(new Point1(choose([0, width]), random(0, height)))
// 	}
// }

// function draw() {

// 	background(255);


// 	for (let p of points) {

// 		// p.show()
// 		p.move()
// 		p.teleport()
// 		p.drawConnection()

// 	}
// 	// Set the rate to a range between 0.1 and 4
// 	// Changing the rate alters the pitch
// 	// var speed = map(mouseY, 0.1, height, 0, 2);
// 	speed = map(dist(mouseX, mouseY, width / 2, height / 2), 0, windowWidth / 2, 1, 4);
// 	song.rate(speed);
// 	song.amp(0.1);

// 	fill(255);
// 	stroke(0);
// 	if (hide_text == false) {
// 		fill(255);
// 		stroke(0);
// 		strokeWeight(3);
// 		textSize(20);
// 		text("Click anywhere to turn the sound on/off", width / 2 - 180, height / 2)
// 	}
// }


// class Point1 {

// 	constructor(x, y) {

// 		this.x = x;
// 		this.y = y;
// 		this.vx = choose([-1, 1]);
// 		this.vy = choose([-1, 1]);
// 		this.mate = Math.floor(random(0, number_of_points));
// 	}

// 	show() {
// 		point(this.x, this.y);
// 	}

// 	move() {
// 		this.x = this.x + this.vx;
// 		this.y = this.y + this.vy;

// 	}
// 	teleport() {
// 		if ((this.x > width + 3) || (this.y > height + 3) || (this.x < -3) || (this.y < -3)) {
// 			this.x = choose([0, width + 1]);
// 			this.y = random(0, height - 1);

// 			if (this.x == 0) {
// 				this.vx = 1;
// 			} else {
// 				this.vx = -1;
// 			}
// 			this.vy = choose([-1, 1]);

// 		}
// 	}

// 	drawConnection() {
// 		strokeWeight(map(dist(mouseX, mouseY, width / 2, height / 2), 0, windowWidth / 2, 0, 10));
// 		stroke(map(dist(this.x, this.y, points[this.mate].x, points[this.mate].y), 0, width / 2, 0, 60));
// 		line(this.x, this.y,
// 			points[this.mate].x, points[this.mate].y)
// 	}
// }

// function choose(choices) {
// 	var index = Math.floor(Math.random() * choices.length);
// 	return choices[index];

// }

// function mousePressed() {

// 	hide_text = true

// 	if (getAudioContext().state !== 'running') {
// 		getAudioContext().resume();
// 	} else {

// 		getAudioContext().suspend()
// 	}

// }

var sound, amplitude, cnv;
egg_mode = true

function preload() {
	sound = loadSound('assets/song.mp3');
}

function setup() {
	cnv = createCanvas(600, 600);
	amplitude = new p5.Amplitude();
	background(10) // start / stop the sound when canvas is clicked
	cnv.mouseClicked(function () {
		if (sound.isPlaying()) {
			sound.stop();
		} else {
			sound.play();
		}
	});
}

function draw() {
	var level = amplitude.getLevel();
	// var size = map(level, 0, 1, 0, width);
	if (level > 0.1) {

		// && (level < 0.2)) {

		// background(255,51,102);
		// ;

		// blob1.brightness = (231,29,54);
		// strokeWeight(1)
		random_w = random(0, width),
			random_h = random(0, height),
			random_pupil_tilt_x = random(-10, 10)
		random_pupil_tilt_y = random(-8, 8)

		fill(0)
		noStroke();
		fill(0)

		ellipse(random_w, random_h, 79, 75);
		fill(255)

		ellipse(random_w, random_h, 73, 65);
		if (egg_mode) {

			fill(249, 208, 16)
		} else {
			fill(0)
		}
		ellipse(random_w + random_pupil_tilt_x, random_h + random_pupil_tilt_y, 43, 47);



	}

	if (level > 0.23) {
		egg_mode = false
		fill(0)
		noStroke()
		rectMode(CENTER)
		fill(255, 51, 102)

		rect(300, 300, 500, 500)
	}
	console.log(level)

}