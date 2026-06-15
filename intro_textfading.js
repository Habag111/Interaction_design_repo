let currentScene = "intro_text";
let t = 0;
const symbolSet = 'MWBCDEFA0896543271bdaecf-:'.split('');
const baseSymbolSize = 6;
const baseCellPadding = 4;
const baseLetterSpacing = 6;
const baseLineSpacing = 24;
const letters = {
  A: [
    '.111.',
    '1...1',
    '1...1',
    '11111',
    '1...1',
    '1...1',
    '1...1'
  ],
  B: [
    '1111.',
    '1...1',
    '1...1',
    '1111.',
    '1...1',
    '1...1',
    '1111.'
  ],
  C: [
    '.1111',
    '1....',
    '1....',
    '1....',
    '1....',
    '1....',
    '.1111'
  ],
  D: [
    '111..',
    '1..1.',
    '1...1',
    '1...1',
    '1...1',
    '1..1.',
    '111..'
  ],
  E: [
    '11111',
    '1....',
    '1....',
    '1111.',
    '1....',
    '1....',
    '11111'
  ],
  F: [
    '11111',
    '1....',
    '1....',
    '1111.',
    '1....',
    '1....',
    '1....'
  ],
  G: [
    '.1111',
    '1....',
    '1....',
    '1.111',
    '1...1',
    '1...1',
    '.1111'
  ],
  H: [
    '1...1',
    '1...1',
    '1...1',
    '11111',
    '1...1',
    '1...1',
    '1...1'
  ],
  I: [
    '11111',
    '..1..',
    '..1..',
    '..1..',
    '..1..',
    '..1..',
    '11111'
  ],
  J: [
    '..111',
    '...1.',
    '...1.',
    '...1.',
    '...1.',
    '1..1.',
    '.11..'
  ],
  K: [
    '1...1',
    '1..1.',
    '1.1..',
    '11...',
    '1.1..',
    '1..1.',
    '1...1'
  ],
  L: [
    '1....',
    '1....',
    '1....',
    '1....',
    '1....',
    '1....',
    '11111'
  ],
  M: [
    '1...1',
    '11.11',
    '1.1.1',
    '1...1',
    '1...1',
    '1...1',
    '1...1'
  ],
  N: [
    '1...1',
    '11..1',
    '1.1.1',
    '1..11',
    '1...1',
    '1...1',
    '1...1'
  ],
  O: [
    '.111.',
    '1...1',
    '1...1',
    '1...1',
    '1...1',
    '1...1',
    '.111.'
  ],
  P: [
    '1111.',
    '1...1',
    '1...1',
    '1111.',
    '1....',
    '1....',
    '1....'
  ],
  Q: [
    '.111.',
    '1...1',
    '1...1',
    '1...1',
    '1.1.1',
    '1..1.',
    '.11.1'
  ],
  R: [
    '1111.',
    '1...1',
    '1...1',
    '1111.',
    '1.1..',
    '1..1.',
    '1...1'
  ],
  S: [
    '.1111',
    '1....',
    '1....',
    '.111.',
    '....1',
    '....1',
    '1111.'
  ],
  T: [
    '11111',
    '..1..',
    '..1..',
    '..1..',
    '..1..',
    '..1..',
    '..1..'
  ],
  U: [
    '1...1',
    '1...1',
    '1...1',
    '1...1',
    '1...1',
    '1...1',
    '.111.'
  ],
  V: [
    '1...1',
    '1...1',
    '1...1',
    '1...1',
    '.1.1.',
    '.1.1.',
    '..1..'
  ],
  W: [
    '1...1',
    '1...1',
    '1...1',
    '1.1.1',
    '1.1.1',
    '11.11',
    '1...1'
  ],
  X: [
    '1...1',
    '.1.1.',
    '..1..',
    '..1..',
    '.1.1.',
    '1...1',
    '1...1'
  ],
  Y: [
    '1...1',
    '.1.1.',
    '..1..',
    '..1..',
    '..1..',
    '..1..',
    '..1..'
  ],
  Z: [
    '11111',
    '....1',
    '...1.',
    '..1..',
    '.1...',
    '1....',
    '11111'
  ],
  '0': [
    '.111.',
    '1...1',
    '1...1',
    '1...1',
    '1...1',
    '1...1',
    '.111.'
  ],
  '1': [
    '..1..',
    '.11..',
    '..1..',
    '..1..',
    '..1..',
    '..1..',
    '.111.'
  ],
  '2': [
    '11111',
    '....1',
    '....1',
    '11111',
    '1....',
    '1....',
    '11111'
  ],
  '3': [
    '11111',
    '....1',
    '....1',
    '11111',
    '....1',
    '....1',
    '11111'
  ],
  '4': [
    '1...1',
    '1...1',
    '1...1',
    '11111',
    '....1',
    '....1',
    '....1'
  ],
  '5': [
    '11111',
    '1....',
    '1....',
    '11111',
    '....1',
    '....1',
    '11111'
  ],
  '6': [
    '11111',
    '1....',
    '1....',
    '11111',
    '1...1',
    '1...1',
    '11111'
  ],
  '7': [
    '11111',
    '....1',
    '...1.',
    '..1..',
    '.1...',
    '.1...',
    '.1...'
  ],
  '8': [
    '11111',
    '1...1',
    '1...1',
    '11111',
    '1...1',
    '1...1',
    '11111'
  ],
  '9': [
    '11111',
    '1...1',
    '1...1',
    '11111',
    '....1',
    '....1',
    '11111'
  ],
   '%': [
    '11...',
    '1...1',
    '...1.',
    '..1..',
    '.1...',
    '1...1',
    '...11'
  ],
  '?': [
    '.111.',
    '1...1',
    '...1.',
    '..1..',
    '..1..',
    '.....',
    '..1..'
  ],
  ' ': [
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....'
  ],
  '(': [
    '..1..',
    '.1...',
    '1....',
    '1....',
    '1....',
    '.1...',
    '..1..'
  ],
  ')': [
    '..1..',
    '...1.',
    '....1',
    '....1',
    '....1',
    '...1.',
    '..1..'
  ],
  '?': [
    '.111.',
    '1...1',
    '...1.',
    '..1..',
    '..1..',
    '.....',
    '..1..'
  ],

   ':': [
    '.....',
    '.....',
    '.....',
    '..1..',
    '.....',
    '.....',
    '..1..'
  ],
   '-': [
    '.....',
    '.....',
    '.....',
    '.111.',
    '.....',
    '.....',
    '.....'
  ],
  ' ': [
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....'
  ],
  a: [
    '.11.',
    '1..1',
    '1111',
    '1..1',
    '1..1'
  ],
  b: [
    '111.',
    '1..1',
    '111.',
    '1..1',
    '111.'
  ],
  c: [
    '.111',
    '1...',
    '1...',
    '1...',
    '.111'
  ],
  d: [
    '111.',
    '1..1',
    '1..1',
    '1..1',
    '111.'
  ],
  e: [
    '1111',
    '1...',
    '1111',
    '1...',
    '1111'
  ],
  f: [
    '1111',
    '1...',
    '1111',
    '1...',
    '1...',
  ],
  g: [
    '.111',
    '1...',
    '1.11',
    '1..1',
    '.111'
  ],
  h: [
    '1..1',
    '1..1',
    '1111',
    '1..1',
    '1..1',
  ],
  i: [
    '.1.',
    '.1.',
    '.1.',
    '.1.',
    '.1.',
  ],
  j: [
    '.111',
    '..1.',
    '..1.',
    '..1.',
    '11..'
  ],
  k: [
    '1..1',
    '1.1.',
    '11..',
    '1.1.',
    '1..1',
  ],
  l: [
    '1...',
    '1...',
    '1...',
    '1...',
    '111.'
  ],
  m: [
    '1..1',
    '1111',
    '1..1',
    '1..1',
    '1..1',
  ],
  n: [
    '1...1',
    '11..1',
    '1.1.1',
    '1..11',
    '1...1',
  ],
  o: [
    '.11.',
    '1..1',
    '1..1',
    '1..1',
    '.11.'
  ],
  p: [
    '111.',
    '1..1',
    '111.',
    '1...',
    '1...',
  ],
  q: [
    '.11.',
    '1..1',
    '1..1',
    '1.11.',
    '.111'
  ],
  r: [
    '111.',
    '1..1',
    '111.',
    '1.1.',
    '1..1',
  ],
  s: [
    '.111',
    '1...',
    '.11.',
    '...1',
    '111.'
  ],
  t: [
    '1111',
    '..1.',
    '..1.',
    '..1.',
    '..1.'
  ],
  u: [
    '1..1',
    '1..1',
    '1..1',
    '1..1',
    '.11.'
  ],
  v: [
    '1..1',
    '1..1',
    '1..1',
    '.11.',
    '.11.',
  ],
  w: [
    '1..1',
    '1..1',
    '1..1',
    '1111',
    '1..1',
  ],
  x: [
    '1..1',
    '1..1',
    '.11.',
    '1..1',
    '1..1',
  ],
  y: [
    '1..1',
    '.1.1',
    '..1.',
    '..1.',
    '..1.',
  ],
  z: [
    '1111',
    '..1.',
    '.1..',
    '1...',
    '1111',
  ],
  '_': [
    '....',
    '....',
    '....',
    '....',
    '....',
  ],


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont('Courier');
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  if (currentScene === "intro_text") {
    t ++;
    intro_text();
    if (t == 100) {
      currentScene = "checking_evaluating";
      t = 0;
    }
  }
  if (currentScene === "checking_evaluating") {
    t ++;
    if (t == 100) {
      currentScene = "pixel";
      t = 0;
    }
  }
  ;
}


function mousePressed() {
  if (currentScene === "intro") {
    camera_setup();
    currentScene = "checking_evaluating"; // Switch to asciiCamera on click
  }
  else if (currentScene === "gameplay") {
    currentScene = "gameOver";
  }
}

  function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
}

function draw() {
  intro_text();
}

function intro_text(){
  background(0);
  textFont('Courier');
  textAlign(CENTER, CENTER);
  noStroke();


  const parts = ['DO YOU THINK ', 'YO', 'U', 'ID', ' ARE EXCLUDED ?'];
  const bottomLine = 'scan your card';
  const lines = [parts.join(''), bottomLine];

  const maxLineUnits = Math.max(
    ...lines.map((line) =>
      line
        .split('')
        .reduce((sum, char) => sum + getLetterWidth(char), 0)
    )
  );

  const availableWidth = max(width - 40, 200);
  const availableHeight = max(height - 40, 200);
  const estimatedLineHeight = 7 * (baseSymbolSize + baseCellPadding);

  const cycle = 4000;
  const fadeDur = 400;
  const t = millis() % cycle;

  const getLineAlpha = (line) => {
    const visibleFirstHalf = t < 2000;
    if (line === 'YO') {
      if (visibleFirstHalf) {
        if (t < fadeDur) return Math.floor(map(t, 0, fadeDur, 0, 255));
        if (t > 2000 - fadeDur) return Math.floor(map(t, 2000 - fadeDur, 2000, 255, 0));
        return 255;
      }
      return 0;
    }
    if (line === 'ID') {
      if (!visibleFirstHalf) {
        const t2 = t - 2000;
        if (t2 < fadeDur) return Math.floor(map(t2, 0, fadeDur, 0, 255));
        if (t2 > 2000 - fadeDur) return Math.floor(map(t2, 2000 - fadeDur, 2000, 255, 0));
        return 255;
      }
      return 0;
    }
    return 255;
  };

  const scaleX = availableWidth / (maxLineUnits * (baseSymbolSize + baseCellPadding) + (maxLineUnits - 1) * baseLetterSpacing);
  const scaleY = availableHeight / (lines.length * estimatedLineHeight + (lines.length - 1) * baseLineSpacing);
  const scale = Math.min(scaleX, scaleY, 1);

  const symbolSize = Math.max(6, Math.floor(baseSymbolSize * scale));
  const cellWidth = Math.max(8, Math.floor(symbolSize + baseCellPadding * scale));
  const cellHeight = cellWidth;
  const letterSpacing = Math.max(2, Math.floor(baseLetterSpacing * scale));
  const lineSpacing = Math.max(12, Math.floor(baseLineSpacing * scale));

  const totalHeight = lines.length * (7 * cellHeight) + (lines.length - 1) * lineSpacing;
  let y = (height - totalHeight) / 2 + cellHeight / 2;

  // Center the top line and render parts sequentially on the same y
  const topWidth = parts.reduce((sum, p) => sum + getLineWidth(p, cellWidth, letterSpacing), 0);
  let x = (width - topWidth) / 2 + cellWidth / 2;

  for (const part of parts) {
    const alpha = getLineAlpha(part);
    fill(255, alpha);
    for (const char of part) {
      const letter = letters[char] || letters[' '];
      drawLetter(letter, x, y, cellWidth, cellHeight);
      x += getLetterWidth(char) * cellWidth + letterSpacing;
    }
  }

  // Draw the bottom line below the top line
  y += 7 * cellHeight + lineSpacing;
  const bottomWidth = getLineWidth(bottomLine, cellWidth, letterSpacing);
  x = (width - bottomWidth) / 2 + cellWidth / 2;
  fill(255);
  for (const char of bottomLine) {
    const letter = letters[char] || letters[' '];
    drawLetter(letter, x, y, cellWidth, cellHeight);
    x += getLetterWidth(char) * cellWidth + letterSpacing;
  }
}





      



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function getLetterWidth(char) {
  return letters[char]?.[0]?.length || 5;
}

function getLineWidth(line, cellWidth, letterSpacing) {
  return line.split('').reduce((sum, char) => sum + getLetterWidth(char) * cellWidth, 0) + Math.max(0, line.length - 1) * letterSpacing;
}

function drawLetter(letter, xOffset, yOffset, cellWidth, cellHeight) {
  for (let row = 0; row < letter.length; row++) {
    for (let col = 0; col < letter[row].length; col++) {
      if (letter[row][col] === '1') {
        const x = xOffset + col * cellWidth;
        const y = yOffset + row * cellHeight;
        text(random(symbolSet), x, y);
      }
    }
  }
}

function draw() {
  checking_evaluating();
}

function checking_evaluating(){
  background(0);
  textFont('Courier');
  textAlign(CENTER, CENTER);
  noStroke();

  const lines = [
    'CHECKING',
    '(EVALUATING)',
  ];

  const maxLineUnits = Math.max(
    ...lines.map((line) =>
      line
        .split('')
        .reduce((sum, char) => sum + getLetterWidth(char), 0)
    )
  );

  const symbolSize = baseSymbolSize;
  const cellWidth = symbolSize + baseCellPadding;
  const cellHeight = cellWidth;
  const letterSpacing = baseLetterSpacing;
  const lineSpacing = baseLineSpacing;

  drawSymbolBackground(cellWidth, cellHeight);

  fill(0);
  const totalHeight = lines.length * (7 * cellHeight) + (lines.length - 1) * lineSpacing;
  let y = (height - totalHeight) / 2;

  for (const line of lines) {
    const lineWidth = getLineWidth(line, cellWidth, letterSpacing);
    let x = (width - lineWidth) / 2;

    const isEvaluatingLine = line.trim() === '(EVALUATING)';
    // 2s visible, 2s hidden cycle (4000ms). Fade in/out at edges.
    const cycle = 4000;
    const fadeDur = 400; // ms
    const t = millis() % cycle;
    let evalAlpha = 255;
    if (isEvaluatingLine) {
      if (t < 2000) {
        // visible window: fade in at start, fade out at end
        if (t < fadeDur) evalAlpha = Math.floor(map(t, 0, fadeDur, 0, 255));
        else if (t > 2000 - fadeDur) evalAlpha = Math.floor(map(t, 2000 - fadeDur, 2000, 255, 0));
        else evalAlpha = 255;
      } else {
        evalAlpha = 0;
      }
    }

    for (const char of line) {
      const letter = letters[char] || letters[' '];
      if (!isEvaluatingLine) {
        fill(0);
        drawLetter(letter, x, y, cellWidth, cellHeight);
      } else if (evalAlpha > 0) {
        fill(0, evalAlpha);
        drawLetter(letter, x, y, cellWidth, cellHeight);
      }
      x += getLetterWidth(char) * cellWidth + letterSpacing;
    }

    y += 7 * cellHeight + lineSpacing;
  }
}

function drawSymbolBackground(cellWidth, cellHeight) {
  fill(255);
  textSize(Math.floor(cellHeight * 0.9));
  textLeading(cellHeight);

  const cols = Math.ceil(width / cellWidth);
  const rows = Math.ceil(height / cellHeight);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * cellWidth;
      const y = row * cellHeight;
      text(random(symbolSet), x, y);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  intro_stage();
}

function getLetterWidth(char) {
  return letters[char]?.[0]?.length || 5;
}

function getLineWidth(line, cellWidth, letterSpacing) {
  return line.split('').reduce((sum, char) => sum + getLetterWidth(char) * cellWidth, 0) + Math.max(0, line.length - 1) * letterSpacing;
}

function drawLetter(letter, xOffset, yOffset, cellWidth, cellHeight) {
  for (let row = 0; row < letter.length; row++) {
    for (let col = 0; col < letter[row].length; col++) {
      if (letter[row][col] === '1') {
        const x = xOffset + col * cellWidth;
        const y = yOffset + row * cellHeight;
        rect(x, y, cellWidth, cellHeight);
      }
    }
  }
}

let cam;
const CAPTURE_WIDTH = 640;
const CAPTURE_HEIGHT = 480;
const PIXEL_SIZE = 10;

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
      const bw = brightness > 127 ? 255 : 0;
      fill(bw);
      rect(x, y, PIXEL_SIZE, PIXEL_SIZE);
    }
  }

  pop();
}
