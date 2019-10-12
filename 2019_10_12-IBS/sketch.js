let x = 0;
let n;
let display_text = true;

function preload() {

	sound = loadSound('assets/ibs3000.mp3');
}

function setup() {
	let display_test = true;

	cnv = createCanvas(windowWidth, windowHeight);
	frameRate(60)

	cnv.mouseClicked(function () {
		if (sound.isPlaying()) {
			sound.pause();
			display_text = true;
		} else {
			display_text = false;
			sound.setVolume(0.3);
			sound.play();
		}
	})
}



function draw() {


	if (display_text == true) {
		fill(255);
		stroke(0);
		strokeWeight(3);
		textSize(17);

		background(0)

		text("	    IBS3000", width / 2 - 60, height / 2)
		strokeWeight(1);

		textSize(12);
		text("[CLICK ANYWHERE TO START] ", width / 2 - 85, height / 2 + 18)



	} else {

		background(255)
		x = x + 0.0001

		for (i = 0; i < width; i = i + 10) {
			fill(0)
			noStroke()
			n = noise(x * i / 30)
			ellipse(i, map(n, 0, 1, 0, height), int(windowWidth / 29))
		}
	}
}