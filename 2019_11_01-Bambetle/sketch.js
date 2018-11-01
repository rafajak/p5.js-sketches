function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);

	for (let i = 1; i < 100; i++) {
		stroke(map(mouseX * mouseX, 0, width * height, 200, 255));

		line(i * i + random(-0.1, 0.1), mouseX * 5 - 1000 + random(-0.1, 0.1), i + random(-0.1, 0.1), -mouseY * 100) + random(-0.1, 0.1);
		line(i * i + random(-0.1, 0.1), mouseX * 5 - 1000 + random(-0.1, 0.1), i + random(-0.1, 0.1), mouseY + random(-0.1, 0.1));

		line(i * i + random(-0.1, 0.1), mouseX - 300 + random(-0.1, 0.1), mouseY * 100 + random(-0.1, 0.1));


		line(mouseX + random(-0.1, 0.1), -mouseY + random(-0.1, 0.1), -mouseX + (i * 3) % 5000 + random(-0.1, 0.1), -mouseX + i * 10 + random(-0.1, 0.1));

		line(windowWidth - mouseX + random(-0.1, 0.1), -windowHeight - mouseY + random(-0.1, 0.1), -mouseX + (i * 3) % 5000 + random(-0.1, 0.1), -mouseX + i * 10 + random(-0.1, 0.1));

	}
}