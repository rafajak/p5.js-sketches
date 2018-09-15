cubes = [];
function setup() { 
	createCanvas(windowWidth, windowHeight);
	for (i = 0; i < 10; i++) { 

		// let x = random(windowWidth-100);
		let y = random(windowHeight-100);

		let x = 150*i;
		// let y = random(windowHeight-100);
		let l = 100
		let z = (50);

		cubes[i] = new Cube(x,y,l,z)

		}
}




function draw() {
	background(0); 


	

	// let cube = new Cube(windowWidth/2,windowWidth/2,100,30);

	for (let cube of cubes) { 
	 cube.show();
	 cube.move();

	}

	}




class Cube { 
	constructor(x,y,l,z) { 

		this.x = x;
		this.y = y;
		this.l = l;
		this.z = z;

	}

	show() { 
		noFill();
		stroke(255);
		rect(this.x,this.y,this.l,this.l);
		rect(this.x+this.z,this.y+this.z,this.l,this.l);

		fill(250);
		strokeWeight(2);
		line(this.x, this.y, this.x + this.z, this.y + this.z);
		line(this.x, this.y + this.l, this.x + this.z, this.y + this.z + this.l);
		line(this.x + this.l, this.y, this.x + this.l + this.z, this.y + this.z);
		line(this.x + this.l, this.y, this.x + this.l + this.z, this.y + this.z);
		line(this.x + this.l, this.y + this.l, this.x + this.l + this.z ,this.y+this.z+this.l);
		}

	move() {
		// let ran_move = random(-1,1);
		// this.x += ran_move;
		// this.y += ran_move;
		// this.l += ran_move;
		// this.z += ran_move;

	let ran_move = random(-0.5,0.5);
		this.x += random(-0.5,0.5);
		this.y += random(-0.5,0.5);
		this.l += random(-1,1);
		this.z += random(-1,1);

	}

	}