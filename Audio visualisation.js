let mic, fft;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();

    // Create an audio input and start it
    mic = new p5.AudioIn();
    mic.start();

    // Create an FFT object to analyze the audio
    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
    background(0);

    // Get the waveform from the audio input
    let waveform = fft.waveform();

    // Draw the waveform
    stroke(255);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        vertex(x, y);
    }
    endShape();
}
