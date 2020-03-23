let previous_x = 300;
let previous_y = 300;
let new_x = 300;
let new_y = 300;
let bases = [];
var base;

function setup() {
	createCanvas(601, 601);
	background(0);

	let h = 500;

	baseA = new BaseTriangleDots(300, 10, 2)
	baseB = new BaseTriangleDots(300 - (h / sqrt(3)), h + 10, 2)
	baseC = new BaseTriangleDots(300 + (h / sqrt(3)), h + 10, 2)
	bases = [baseA, baseB, baseC]

}

class BaseTriangleDots {
	constructor(xcoord, ycoord, d) {
		this.xcoord = xcoord;
		this.ycoord = ycoord;
		this.d = d;
	}

	display() {
		ellipse(this.xcoord, this.ycoord, this.d)
	}

}

function draw() {
	noStroke()


	for (var i = 0, l = bases.length; i < l; i++) {
		bases[i].display()
	}

	selected_base = int(random(0, 3))
	base = bases[selected_base];

	previous_x = new_x
	previous_y = new_y

	new_x = previous_x + round(base.xcoord - previous_x) / 2;
	new_y = previous_y + round(base.ycoord - previous_y) / 2;
	ellipse(new_x, new_y, 3);

}