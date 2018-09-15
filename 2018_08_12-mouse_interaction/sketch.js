
// stage = 0: 






let blobs = [];
let stage = 0;

function setup() { 
	createCanvas(windowWidth, windowHeight);

	blob1 = new Blob(width/2, height/2, 200);
	blob2 = new Blob(mouseX,mouseY, 100);
}




function draw() {
	background(0); 
		if (stage == 1) { 
					background(255,51,102);
					blob1.brightness = (231,29,54);

		}

	if (blob1.intersection(blob2.x, blob2.y, blob2.l)) {
		background(60,170,180);


	if ((blob1.l > windowWidth) && (blob1.l > windowHeight)) {
		
		blob2.brightness = 255;
		blob1.l = 255;
		
		blob1.brightness = (231,29,54);

		stage = 1;

	}

		
	}

	noStroke();
	fill(255);

	blob1.show();
		blob1.move();

	blob2.show();
			blob1.move();

		blob2.x = mouseX;
		blob2.y = mouseY;


}


class Blob { 
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

	if (dist(this.x,this.y,blob2x,blob2y) < (this.l/2 - blob2l/2)) { 
		return true;
	 } else {
		return false; 
	 }
	}





}


	function mousePressed() {
		
		if (blob1.intersection(blob2.x, blob2.y, blob2.l)) {

			blob1.l *=1.5;
		}
	}	


