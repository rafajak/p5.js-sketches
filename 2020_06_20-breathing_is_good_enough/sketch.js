let i = 1;
let sound, cnv;
let display_text = true;

function preload() {
	sound = loadSound('assets/song.mp3');
}

function setup() {
	cnv = createCanvas(700, 700);
	frameRate(50);

	cnv.mouseClicked(function () {
		if (sound.isPlaying()) {
			// sound.pause();

		} else {

			sound.play();
			sound.setVolume(0.1);
		}
		display_text = false;
	});

}

function draw() {

	if (display_text == true) {
		fill(255);
		stroke(0);
		strokeWeight(3);
		textSize(17);

		background(0)

		text("Hobby: breathing", width / 2 - 65, height / 2)
		strokeWeight(1);

		textSize(12);
		text("[CLICK ANYWHERE TO START] ", width / 2 - 85, height / 2 + 18)



	} else {
		background(0);
		fill(255);
		stroke(255);

		ellipse(width / 2, height / 2, 400 + sin(i) * 100)
		i = i + 1e-2

	}
}