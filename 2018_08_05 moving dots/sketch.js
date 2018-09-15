 let bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

    for (let i=0; i<1500; i++) {
    let x = random(width);
    let y = random(height);
    let r = 3;

	 let vx = null;
	 let vy = null;

  	 bubble[i] = new Circle(x,y,r,vx,vy);

   }

}

function draw() { 
	background(0);

    for (i=0; i<bubble.length; i++) {
		bubble[i].show();
		bubble[i].move();
	
}
	
}

class Circle {
	constructor(x,y,r,vx,vy) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.vx = vx;
		this.vy = vy;
	}

	show() {
		ellipse(
			this.x,
			this.y,
			this.r)
	}

	move() {
		this.vx = random(-1,1);
		this.vy = random(-1,1);
		this.x += this.vx;
		this.y += this.vy;

	}
}
