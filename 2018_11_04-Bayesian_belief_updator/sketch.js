function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(20);
	textAlign(CENTER, CENTER);
	setTimeout(instructions(1), 20000);

}


function draw() {
	background(0);

	// noStroke();

	fill(240, 135, 132);
	// ellipse(width / 2, height / 2, 200);
	stroke(255);
	fill(255);
	textAlign(CENTER, CENTER);



}

function instructions(num_instr) {
	if (num_instr == 1) {
		createP('wuttt');
		// ("I'm here to help you update your beliefs given new evidence. \n Click anywhere to continue", width / 2, height / 2)
	}
	// if (num_instr == 2) {
	// 	text("wut", width / 2, height / 2);
	// }
}





// // 1. display text: "I'm here to help you update your beliefs given new evidence. Click anywhere to continue"
// 2. input what 's the probability of your hypothesis being true before you'
// ve seen the evidence ?
// 	3. How likely are you to see this evidence
// if your hypothesis is true ? (X times more likely OR 30 % )
// 4. How likely are you to see this evidence
// if your hypothesis is false ? (X times more likely OR 30 % )

// or 'how much more likely are you to see this evidence if your hypothesis was true, compared to if your hypothesis was false?'

// 5. calculate posterior probability

// show the result