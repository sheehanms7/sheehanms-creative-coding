let bucket;
let objects = [];
let score = 0;
let gameOver = false;

function setup() {
    createCanvas(600, 600);
    bucket = new Bucket();
}

function draw() {
    background(0);

    if (gameOver) {
        textSize(32);
        fill(255);
        textAlign(CENTER, CENTER);
        text("Game Over! Final Score: " + score, width / 2, height / 2);
        return;
    }

    bucket.display();
    bucket.move();

    if (frameCount % 60 == 0) {
        objects.push(new FallingObject());
    }

    for (let i = objects.length - 1; i >= 0; i--) {
        objects[i].display();
        objects[i].move();

        if (objects[i].caught(bucket)) {
            score++;
            objects.splice(i, 1);
        } else if (objects[i].offScreen()) {
            gameOver = true;
        }
    }

    textSize(24);
    fill(255);
    text("Score: " + score, 10, 25);
}

class Bucket {
    constructor() {
        this.width = 100;
        this.height = 20;
        this.x = width / 4;
        this.y = height - this.height - 10;
    }

    display() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

    move() {
        if (keyIsPressed) {
            if (keyCode === LEFT_ARROW && this.x > 0) {
                this.x -= 10;
            } else if (keyCode === RIGHT_ARROW && this.x < width - this.width) {
                this.x += 10;
            }
        }
    }
}

class FallingObject {
    constructor() {
        this.size = 20;
        this.x = random(width);
        this.y = 0;
        this.speed = 5;
    }

    display() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.size);
    }

    move() {
        this.y += this.speed;
    }

    caught(bucket) {
        return this.y + this.size / 2 > bucket.y &&
               this.x > bucket.x &&
               this.x < bucket.x + bucket.width;
    }

    offScreen() {
        return this.y - this.size / 2 > height;
    }
}
