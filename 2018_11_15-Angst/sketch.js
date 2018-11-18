let points = []
number_of_points = 200
let song
let speed

function preload() {
	song = loadSound('assets/circus.mp3');
}

function setup() {
	createCanvas(400, 400);
	song.loop()
	for (i = 0; i < number_of_points; i++) {
		points.push(new Point1(choose([0, width]), random(0, height)))
	}
}

function draw() {

	background(255);
	fill(255);
	stroke(0);

	for (let p of points) {

		// p.show()
		p.move()
		p.teleport()
		p.drawConnection()

	}
	// Set the rate to a range between 0.1 and 4
	// Changing the rate alters the pitch
	// var speed = map(mouseY, 0.1, height, 0, 2);
	speed = map(dist(mouseX, mouseY, width / 2, height / 2), 0, windowWidth / 2, 1, 4);
	speed = constrain(speed, 0.01, 1);
	song.rate(speed);

}


class Point1 {

	constructor(x, y) {

		this.x = x;
		this.y = y;
		this.vx = choose([-1, 1]);
		this.vy = choose([-1, 1]);
		this.mate = Math.floor(random(0, number_of_points));
	}

	show() {
		point(this.x, this.y);
	}

	move() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;

	}
	teleport() {
		if ((this.x > width + 3) || (this.y > height + 3) || (this.x < -3) || (this.y < -3)) {
			this.x = choose([0, width + 1]);
			this.y = random(0, height - 1);

			if (this.x == 0) {
				this.vx = 1;
			} else {
				this.vx = -1;
			}
			this.vy = choose([-1, 1]);

		}
	}

	drawConnection() {
		strokeWeight(map(dist(mouseX, mouseY, width / 2, height / 2), 0, windowWidth / 2, 0, 10));
		stroke(map(dist(this.x, this.y, points[this.mate].x, points[this.mate].y), 0, width / 2, 0, 60));
		line(this.x, this.y,
			points[this.mate].x, points[this.mate].y)
	}
}

function choose(choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];

}