//polynomial regression

let squares = []
let poly_dgr = 2;

x_vals = [];
y_vals = [];

let a, b, c, d;
let dragging = false;

let learningRate = 0.2;
let optimizer = tf.train.adam(learningRate);

function setup() {
  createCanvas(windowWidth, windowHeight);
  a = tf.variable(tf.scalar(random(-1, 1)));
  b = tf.variable(tf.scalar(random(-1, 1)));
  c = tf.variable(tf.scalar(random(-1, 1)));
  d = tf.variable(tf.scalar(random(-1, 1)));
  e = tf.variable(tf.scalar(random(0, 1)));
  f = tf.variable(tf.scalar(random(0, 1)));

  append(squares, new Square_with_digit(width / 2 - 75, 30, 30, 1))
  append(squares, new Square_with_digit(width / 2 - 30, 30, 30, 2, col = 200))
  append(squares, new Square_with_digit(width / 2 + 15, 30, 30, 3));


}


// function predict(x) { 
// y = xa^3 + xb^2 + xc + d 
// const xs = tf.tensor1d(x);

function predict(x) {
  const xs = tf.tensor1d(x);

  if (poly_dgr == 3) {

    return tf.pow(xs, 3).mul(a)
      .add(tf.pow(xs, 2).mul(b))
      .add(xs).mul(c)
      .add(d)
  }
  if (poly_dgr == 2) {

    return tf.pow(xs, 2).mul(a)
      .add(xs).mul(b)
      .add(c)
  }
  if (poly_dgr == 1) {
    return xs.mul(e).add(f)
  }

}



function loss(pred, label) {
  // console.log(pred.sub(label).square().mean());

  return pred.sub(label).square().mean();
}



function mouseReleased() {
  dragging = false;
}

function draw() {

  background(0)
  textFont("Arial");
  textAlign(LEFT);

  fill(200);
  for (let square of squares) {
    fill(200);
    square.show();
    square.contains_mouse();
  }
  stroke(0.5);
  fill(255);
  textSize(12);
  textFont("Comic Sans MS");
  textAlign(CENTER);
  text('Select the polynomial degree', width / 2 - 15, 80);

  textSize(30);
  textAlign(CENTER);
  text('THE MAGNIFICENT OVERFITTING MACHINE', width / 2, height - 50);



  // console.log(poly_dgr);


  if (dragging) {
    let x = map(mouseX, 0, width, -1, 1);
    let y = map(mouseY, 0, height, 1, -1);

    if ((mouseX > squares[0].x) && (mouseX < squares[2].x + squares[2].a) && (mouseY <= squares[0].y + 60)) {} else {

      x_vals.push(x);
      y_vals.push(y);
    }

  } else {
    tf.tidy(() => {
      if (x_vals.length > 0) {
        const ys = tf.tensor1d(y_vals);
        optimizer.minimize(() => loss(predict(x_vals), ys));
      }
    });
  }


  stroke(255);
  strokeWeight(8);
  for (let i = 0; i < x_vals.length; i++) {
    let px = map(x_vals[i], -1, 1, 0, width);
    let py = map(y_vals[i], -1, 1, height, 0);
    point(px, py);
  }



  if (poly_dgr == 1) {
    const lineX = [0, 1];
    const _y = tf.tidy(() => predict(lineX));
    let lineY = _y.dataSync();

    let x1 = map(lineX[0], 0, 1, 0, windowWidth);
    let x2 = map(lineX[1], 0, 1, 0, windowWidth);
    let y1 = map(lineY[0], 0, 1, windowHeight, 0);
    let y2 = map(lineY[1], 0, 1, windowHeight, 0);

    strokeWeight(2);
    line(x1, y1, x2, y2);
    strokeWeight(0.5)
    textSize(10);
    text("I messed something up and linear regression doesn't work", width / 2, height / 2)
    _y.dispose();
    // ys.dispose();

    // console.log(tf.memory().numTensors);

  } else {

    const curveX = [];
    for (let x = -1; x <= 1; x += 0.05) {
      curveX.push(x);
    }

    const ys = tf.tidy(() => predict(curveX));
    let curveY = ys.dataSync();
    ys.dispose();

    beginShape();
    noFill();
    stroke(255);
    strokeWeight(2);
    for (let i = 0; i < curveX.length; i++) {
      let x = map(curveX[i], -1, 1, 0, width);
      let y = map(curveY[i], -1, 1, height, 0);
      vertex(x, y);
    }
    endShape();
  }

  // fill(255);
  // console.log(tf.memory().numTensors);
}

class Square_with_digit {
  constructor(x, y, a, digit, col) {
    this.x = x,
      this.y = y,
      this.a = a,
      this.digit = digit
    this.col = 255
    this.isOverRectangle = false
    this.isSelected = false
    this.cursor = cursor(ARROW);
  }

  show() {
    fill(this.col);
    stroke(3);

    rect(this.x,
      this.y,
      this.a,
      this.a);

    fill(0);
    textSize(30);
    noStroke();
    text(this.digit, this.x + 8, this.y + 25);
    // console.log(this.isOverRectangle);

    // text('1', width/2-30-45+8, 55);

  }

  contains_mouse(squarex, squarey) {

    if ((mouseX >= this.x && mouseX <= this.x + this.a) &&
      (mouseY >= this.y && mouseY <= this.y + this.a)) {

      this.cursor = cursor(HAND);
      this.isOverRectangle = true
    } else {
      this.cursor = cursor(ARROW);
      this.isOverRectangle = false
    }

  }
}



function mousePressed() {
  dragging = true;

  if (poly_dgr == 2) {
    squares[1].col = (200)
  }

  if (squares[0].isOverRectangle) {
    squares[0].col = (200);
    squares[1].col = (255);
    squares[2].col = (255);

    poly_dgr = 1



  } else if (squares[1].isOverRectangle) {
    squares[0].col = (255);
    squares[1].col = (200);
    squares[2].col = (255);

    poly_dgr = 2

  } else if (squares[2].isOverRectangle) {
    squares[0].col = (255);
    squares[1].col = (255);
    squares[2].col = (200);

    poly_dgr = 3


  }




}