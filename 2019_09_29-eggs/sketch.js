

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
	if (level > 0.1) {

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
