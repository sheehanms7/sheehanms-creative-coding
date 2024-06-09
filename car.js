function setup() {
createCanvas(400, 400);
}

function draw() {
background(220);

// Car body
fill(255, 0, 0);
rect(100, 200, 200, 50);

// Car roof and window
fill(0);
rect(150, 170, 100, 30);
rect(200, 180, 50, 20);

// Wheels
fill(0);
ellipse(150, 250, 50, 50);
ellipse(250, 250, 50, 50);
}
