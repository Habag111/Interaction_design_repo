let cam;
const CAPTURE_WIDTH = 640;
const CAPTURE_HEIGHT = 480;
const PIXEL_SIZE = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  captureWidth = windowWidth;
  captureHeight = windowWidth * (CAPTURE_HEIGHT / CAPTURE_WIDTH);
  cam = createCapture(VIDEO);
  cam.size(captureWidth, captureHeight);
  cam.hide();
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  captureWidth = windowWidth;
  captureHeight = windowWidth * (CAPTURE_HEIGHT / CAPTURE_WIDTH);
  cam.size(captureWidth, captureHeight);
}

function draw() {
  background(0);
  cam.loadPixels();

  for (let x = 0; x < cam.width; x += PIXEL_SIZE) {
    for (let y = 0; y < cam.height; y += PIXEL_SIZE) {
      const i = (x + y * cam.width) * 4;
      const r = cam.pixels[i];
      const g = cam.pixels[i + 1];
      const b = cam.pixels[i + 2];
      const brightness = (r + g + b) / 3;
      let tone;
      if (brightness < 80) {
        tone = 0;        // black
      } else if (brightness < 110) {
        tone = 85;       // dark gray
      } else if (brightness < 150) {
        tone = 170;      // light gray
      } else {
        tone = 255;      // white
      }
      fill(tone);
      noStroke();
      rect(x, y, PIXEL_SIZE, PIXEL_SIZE);
    }
  }

  pop();
}
