
let blobs = [];

function setup() { 
	createCanvas(windowWidth, windowHeight);

	for (i = 0; i < 100; i++) { 
		x = random(width);
		y = random(height);

		blobs[i] = new Rectangle(x,y, 30);
	}

}




function draw() {
	background(0); 



	noStroke();
	fill(255);

	for (i = 0; i < blobs.length; i++) { 
	blobs[i].show();
	blobs[i].move();

	blobs[i].changeColor(255);

	for (let other of blobs) { 
		if (other != blobs[i] && blobs[i].intersection(other.x, other.y, other.l)) {
			blobs[i].changeColor(125);
		}
	// 	background(60,170,180);
	// }
	}
}
}


class Rectangle { 
	constructor(x,y,l,number) { 

		this.x = x;
		this.y = y;
		this.l = l;
		this.number = number;
		this.brightness = 255;
	}

	show() { 
		fill(this.brightness);
		ellipse(this.x, this.y, this.l);	
	}

	//write number inside of rectangle
	write_nr() { 
		textSize(7);
		textStyle(BOLD);
		fill(0);
		text(this.number, this.x-this.l/4, this.y+l/6);

	}


	move() { 
		this.x += random(-0.5,0.5) 
		this.y += random(-0.5,0.5) 
	}

	contains(px,py) { 

		if (dist(this.x, this.y, px, py) < this.l) {
			return true;
		} else { 
			return false;

				}
		}

   intersection(blob2x, blob2y, blob2l) {

	if (dist(this.x,this.y,blob2x,blob2y) < (this.l/2 + blob2l/2)) { 
		return true;
	 } else {
		return false; 
	 }
	}

	

	changeColor(bright) { 

			this.brightness = bright;
	}
}

