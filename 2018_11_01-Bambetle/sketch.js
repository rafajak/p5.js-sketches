function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	stroke(127, 255, 212);
	strokeWeight(5);
	for (i = 0; i < 300; i++) {
		stroke(map(i, 0, 20, 75, 241) % 255, map(i, 0, 20, 225, 240) % 255, map(i, 0, 20, 240, 102) % 255);

		line(width + i, width + i + i, i * -(map(mouseX, 0, windowWidth, -windowWidth / 2, windowWidth / 2)), 0);
		line(width + i, width + i + i + i, i * (map(mouseX, 0, windowWidth, -windowWidth / 2, windowWidth / 2)), 0);

		stroke(map(i, 0, 20, 19, 88) % 255, map(i, 0, 20, 121, 56) % 255, map(i, 0, 20, 164, 163) % 255);

		line(-width + i, width + i + i, i * -(map(mouseX, 0, windowWidth, -windowWidth / 2, windowWidth / 2)), 0);
		line(-width + i, width + i + i + i, i * (map(mouseX, 0, windowWidth, -windowWidth / 2, windowWidth / 2)), 0);

	}

}