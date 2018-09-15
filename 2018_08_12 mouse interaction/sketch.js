

let bubble = [];

function setup() {
    createCanvas(windowWidth, windowHeight);




    for (i = 0; i<2000; i++) {

    let x = random(0,windowWidth);
    let y = random(0,windowHeight);

    let r = random(5,30);

	let vx = null;
	let vy = null;

    let fill_ = color(random(0,20),random(0,20),random(150,200),random(0,200));
;


		bubble[i] = new Bubble(x,y,r,vx,vy,fill_)
}

}

function draw() {
	background(0,20,100);

	for (let obj of bubble) { 
		obj.show();
		obj.move();
		// obj.clicked();
	}

}


class Bubble {
	 constructor(x,y,r,vx,vy,fill_) {
		this.x  = x;
		this.y = y;
		this.r = r;
		this.vx = vx;
		this.vy = vy;
		this.fill_ = fill_
	}

	show() {
		fill(this.fill_);
		noStroke();
		ellipse(this.x,this.y,this.r*2);
	}

	move() {
		this.x  = this.x+random(-0.5,0.5);
		this.y  = this.y+random(-0.5,0.5);
	}

	clicked() {
		background(random(0,255));

		if (dist(mouseX,mouseY,this.x,this.y) <= this.r) { 
			this.fill_ = 255;
			console.log(this.fill_);
		}

	}
}


function mouseDragged() { 
	for (let i = 0; i < bubble.length; i++) {
	 bubble[i].clicked();
	}
	}

