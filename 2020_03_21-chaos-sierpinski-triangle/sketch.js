  let previous_x = 300;
  let previous_y = 300;
  let new_x = 300;
  let new_y = 300;

  function setup() {
  	createCanvas(610, 610);
  	background(0);

  	baseA = new BaseTriangleDots(300, 20, 5)
  	baseB = new BaseTriangleDots(20, 580, 5)
  	baseC = new BaseTriangleDots(580, 580, 5)
  }

  class BaseTriangleDots {
  	constructor(xcoord, ycoord, d) {
  		this.xcoord = xcoord;
  		this.ycoord = ycoord;
  		this.d = 2;
  	}

  	display() {
  		ellipse(this.xcoord, this.ycoord, this.d)
  	}

  }


  function draw() {
  	noStroke()
  	baseA.display()
  	baseB.display()
  	baseC.display()

  	selected_base = int(random(1, 4))

  	previous_x = new_x
  	previous_y = new_y
  	if (selected_base == 1) {

  		new_x = previous_x + round(baseA.xcoord - previous_x) / 2;
  		new_y = previous_y + round(baseA.ycoord - previous_y) / 2;
  		ellipse(new_x, new_y, 3);

  	}

  	if (selected_base == 2) {

  		new_x = previous_x + round(baseB.xcoord - previous_x) / 2;
  		new_y = previous_y + round(baseB.ycoord - previous_y) / 2;
  		ellipse(new_x, new_y, 3);

  	}
  	if (selected_base == 3) {

  		new_x = previous_x + round(baseC.xcoord - previous_x) / 2;
  		new_y = previous_y + round(baseC.ycoord - previous_y) / 2;
  		ellipse(new_x, new_y, 3);
  	}

  }