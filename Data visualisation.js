let buyerRatings = [4, 3, 5, 2, 4]; // Example ratings from buyers
let sellerRatings = [5, 4, 3, 4, 5]; // Example ratings from sellers
let categories = ["Bidding Process", "Variety of Cars", "Listing Process", "Communication Tools", "Overall Experience"];
let colors;

function setup() {
    createCanvas(800, 400);
    colors = [color(179, 58, 58), color(79, 79, 79), color(51, 51, 51)];
    noLoop();
}

function draw() {
    background(255);
    textSize(16);
    fill(0);
    textAlign(CENTER, CENTER);
    
    text("RevUp Auction Feedback", width / 2, 30);
    
    let chartWidth = width - 100;
    let chartHeight = height - 100;
    let barWidth = chartWidth / (buyerRatings.length * 2);
    let maxRating = 5;
    
    // Draw category labels
    for (let i = 0; i < categories.length; i++) {
        text(categories[i], 50 + i * (barWidth * 2 + 10) + barWidth, height - 30);
    }
    
    // Draw buyer ratings bars
    for (let i = 0; i < buyerRatings.length; i++) {
        let barHeight = map(buyerRatings[i], 0, maxRating, 0, chartHeight);
        fill(colors[0]);
        rect(50 + i * (barWidth * 2 + 10), height - 50 - barHeight, barWidth, barHeight);
    }
    
    // Draw seller ratings bars
    for (let i = 0; i < sellerRatings.length; i++) {
        let barHeight = map(sellerRatings[i], 0, maxRating, 0, chartHeight);
        fill(colors[1]);
        rect(50 + barWidth + i * (barWidth * 2 + 10), height - 50 - barHeight, barWidth, barHeight);
    }
    
    // Draw legend
    fill(colors[0]);
    rect(width - 180, 60, 20, 20);
    fill(0);
    text("Buyers", width - 140, 70);
    
    fill(colors[1]);
    rect(width - 180, 90, 20, 20);
    fill(0);
    text("Sellers", width - 140, 100);
}

// Hypothetical actual feedback data
let actualBuyerRatings = {
    "Bidding Process": 4,
    "Variety of Cars": 3,
    "Listing Process": 5,
    "Communication Tools": 2,
    "Overall Experience": 4
};

let actualSellerRatings = {
    "Bidding Process": 5,
    "Variety of Cars": 4,
    "Listing Process": 3,
    "Communication Tools": 4,
    "Overall Experience": 5
};

// Convert feedback data to arrays
function convertFeedbackDataToArray(feedbackData) {
    let ratingsArray = [];
    for (let category in feedbackData) {
        ratingsArray.push(feedbackData[category]);
    }
    return ratingsArray;
}

// Update data
buyerRatings = convertFeedbackDataToArray(actualBuyerRatings);
sellerRatings = convertFeedbackDataToArray(actualSellerRatings);
