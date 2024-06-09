let trail = [];
let maxTrailLength = 50;
let colors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < maxTrailLength; i++) {
        colors.push([random(255), random(255), random(255)]);
    }
}

function draw() {
    background(0);

    // Add current mouse position to the trail
    trail.push({x: mouseX, y: mouseY});

    // Remove the oldest point if the trail is too long
    if (trail.length > maxTrailLength) {
        trail.shift();
    }

    // Draw the trail
    for (let i = 0; i < trail.length; i++) {
        let pos = trail[i];
        let c = colors[i % colors.length];
        fill(c[0], c[1], c[2]);
        noStroke();
        ellipse(pos.x, pos.y, 20);
    }
}
