function setup() {
  createCanvas(400, 400); // Define canvas size
  noStroke(); // Remove stroke for smoother shapes
}

function draw() {
  background(200); // Set background color

  // Head
  fill(0, 255, 0); // Set head fill color (green)
  ellipse(200, 200, 150, 150); // Draw head as an ellipse

  // Eyes
  fill(255, 0, 0); // Set eyes fill color (red)
  ellipse(170, 180, 20, 20); // Draw left eye
  ellipse(230, 180, 20, 20); // Draw right eye

  // Mouth
  fill(0, 0, 0); // Set mouth fill color (black)
  arc(200, 230, 60, 60, 0, PI); // Draw mouth as an arc
}
