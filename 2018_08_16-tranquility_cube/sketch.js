cubes = [];
function setup() { 
	createCanvas(windowWidth, windowHeight);
	for (i = 0; i < 20	; i++) { 

		let y = random(windowHeight-100);


		let x = 100*i;
		let l = random(50,100);
		let z = l/2;

		cubes[i] = new Cube(x,y,l,z)

		}

		let l = 400
		let x = windowWidth/2-(1/2)*l-80;
		let y = windowHeight/2-(1/2)*l-100;
		let z = 150;

		stable_cube = new Cube(x,y,l,z)
}




function draw() {
	background(0); 


	for (let cube of cubes) { 
	 cube.show();
	 cube.move(v= 2);

	 cube.vibrate(-0.5,0.5,
	 			-0.5,0.5,
	 			// -200,200,
	 			-0.5,0.5,
	 			-50,50);

	 stable_cube.show();


	//  	 stable_cube.vibrate(
	//  	 		-0.5,0.5,
	//  			-0.5,0.5,
	//  			-0,0,
	//  			-100,100,
	//  			);	 
	}

	}




class Cube { 
	constructor(x,y,l,z,x0,y0) { 

		this.x = x;
		this.x0 = x;

		this.y = y;
		this.y0 = y;

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

	move(v) {

		this.x += v;
		this.y += v;

		if ((this.x > windowWidth) || (this.y > windowHeight)) {

			this.y = this.y0 - windowWidth;
			this.x = this.x0 - windowHeight;

		}
	}

	vibrate(xy_low,xy_high,
		l_low=0,l_high=0,
		z_low=0,z_high=0) {

		this.x += random(xy_low, xy_high);
		this.y += random(xy_low, xy_high);
		this.l += random(l_low, l_high);
		this.z += random(z_low, z_high);

	 }

	 // mouseover(mouseX, mouseY) { 
	 // 	if mouse 

	 // }

	}

	