function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES)

}

function draw() {
	background(0);

	fill(255);
	stroke(255);
	strokeWeight(10);

	let angle1 = map(mouseX, 0, windowWidth, 0, 360) + 270;
	let angle2 = map(mouseX, 0, windowWidth, 0, 30);

	let r1 = 200;
	let r2 = 100;

	let x1 = windowWidth / 2;
	let y1 = windowHeight / 2;

	let dx1 = windowWidth / 2 + cos(angle1) * r1
	let dy1 = windowHeight / 2 + sin(angle1) * r1

	let dx2 = windowWidth / 2 + cos(angle2) * r2
	let dy2 = windowHeight / 2 + sin(angle2) * r2

	point(x1, y1);
	point(dx1, dy1);

	point(dx2, dy2);

	line(x1, y1, dx1, dy1);
	line(x1, y1, dx2, dy2);

	noFill();
	strokeWeight(5)
	stroke(map(mouseX, 0, windowWidth, 0, 255));
	ellipse(width / 2, height / 2, 410);
}