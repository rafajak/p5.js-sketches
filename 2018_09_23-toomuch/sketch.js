 let bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

    for (let i=0; i<20; i++) {
    let x0 = random(width);
    let y0 = random(height);
	let r0 = 3;
	let b0 = random(30,150);
	let mem0 = random(30,200);
	 let vx0 = 20;//i%500+1;
	 let vy0 = 20;//i%500+1;

  	 bubble.push(new Circle(x0,y0,r0,vx0,vy0,b0,mem0));

   }

   for (let i=0; i<1; i++) {
    let x1 = random(width);
	let y1 = random(height);
	let r1 = 3;
    let b1 = 250;
	let mem1 = 1000;

	 let vx1 = 20//i%5+1;
	 let vy1 = 20//i%5+1;

  	 bubble.push(new Circle(x1,y1,r1,vx1,vy1,b1,mem1));

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
	constructor(x,y,r,vx,vy,brightness,mem) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.vx = vx;
		this.vy = vy;
		this.brightness = brightness;
		this.history = [];
		this.mem = mem;
		
	}

	show() {
		fill(this.brightness);
		
		
		// stroke();

		for (let i = 0; i < this.history.length; i++) {
			
			noStroke();
			
			if (i == this.history.length-1){ 
				stroke(70);
				strokeWeight(0.5);

			}
			ellipse(
				this.history[i].x,
				this.history[i].y,
				this.r-this.r/5,
				);	
			}

			ellipse(
				this.x,
				this.y,
				this.r);
		}

	move() {
		
		let vx = random(-this.vx,this.vx);
		let vy = random(-(this.vy),(this.vy));

		if ((this.x + vx < width) && (this.x + vx > 0)) { 
			this.x += vx;
		}

		if ((this.y + vy < height) && (this.y + vy > 0)) { 
			this.y += vy;
		}

		let vec = createVector(this.x,this.y);
		this.history.push(vec);

		for (var i =0; i<this.history.length; i++) {
			this.history[i].x += vx/50 + random(-1,1);
			this.history[i].y += vy/50 + random(-1,1);

		}
		if (this.history.length > this.mem) {
			this.history.splice(0,1);

		}
	}
}
