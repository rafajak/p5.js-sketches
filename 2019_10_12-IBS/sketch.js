let x = 0;
let n;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60)
}

function draw() {
	background(255)
	x = x + 0.0001

	for (i = 0; i < width; i = i + 10) {
		fill(0)
		noStroke()
		n = noise(x * i / 10)
		ellipse(i, map(n, 0, 1, 0, height), 50)
	}
}