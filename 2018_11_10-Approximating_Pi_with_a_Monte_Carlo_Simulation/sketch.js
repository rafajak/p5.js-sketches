let points = []
let is_in_circle = []
let pi = null

function setup() {
	createCanvas(640, 640 + 40);
	frameRate(30);
}



function draw() {

	background(10, 15, 20);
	noStroke();
	fill(53, 53, 53);
	rect(10, 10, 620, 620);

	fill(0);
	ellipse(10 + 620 - 620 / 2, 10 + 620 - 620 / 2, 620);

	strokeWeight(7)
	stroke(252, 95, 117);
	generate_point()
	draw_points()

	pi = calculate_pi()
// 	console.log(calculate_pi())
	stroke(0);
	fill(255);
	strokeWeight(0.5)
	textSize(20)

	text('pi ≈ ', 30, 660);
	text(pi, 70, 660);

	text('error = ', 450, 660);
	text(Math.abs(Math.PI -
		Number(pi)).toFixed(6), 520, 660);
}

function draw_points() {
	for (let xy of points) {
		point(xy[0], xy[1]);
	}
}

function generate_point() {
	// if (points.length >= 2000) {
	// 	return
	// }
	points.push([random(10, 10 + 620),
		random(10, 10 + 620)
	])

	if (points) {
		is_it_in = dist(points[points.length - 1][0],
			points[points.length - 1][1],
			10 + 620 - 620 / 2,
			10 + 620 - 620 / 2) < (620 / 2)
	}

	is_in_circle.push(is_it_in);

}

function calculate_pi() {
	let cnt_inside_circle = is_in_circle.reduce((a, b) => a + b)
	pi = Number(cnt_inside_circle / points.length * 4).toFixed(6)
	return pi
}
