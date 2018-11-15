let points = []
number_of_points = 200

function setup() {
	createCanvas(400, 400);

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
		strokeWeight(4);
		stroke(map(dist(this.x, this.y, points[this.mate].x, points[this.mate].y), 0, width / 2, 0, 60));
		line(this.x, this.y,
			points[this.mate].x, points[this.mate].y)
	}
}

function choose(choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];

}