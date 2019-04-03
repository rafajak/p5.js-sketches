function setup() {
    createCanvas(windowWidth, windowHeight);
}

let t = 100;

function draw() {
    x1 = mouseX
    x2 = width * noise(0.01 * t, 2500)
    x3 = width * noise(0.01 * t, 3500)
    x4 = width * noise(0.01 * t, 4500)

    y1 = mouseY
    y2 = height * noise(0.01 * t, 5500)
    y3 = height * noise(0.01 * t, 6500)
    y4 = height * noise(0.01 * t, 7500)

    t += random(1)
    stroke(0, 0, 0, 50);
    strokeWeight(1)
    noFill();

    if (x1 != 0) {
        bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    }
}