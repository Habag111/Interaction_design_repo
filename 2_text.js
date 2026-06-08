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
    '.111.',
    '1...1',
    '1..11',
    '1.1.1',
    '11..1',
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
    '.111.',
    '1...1',
    '....1',
    '...1.',
    '..1..',
    '.1...',
    '11111'
  ],
  '3': [
    '.111.',
    '1...1',
    '....1',
    '..11.',
    '....1',
    '1...1',
    '.111.'
  ],
  '4': [
    '...1.',
    '..11.',
    '.1.1.',
    '1..1.',
    '11111',
    '...1.',
    '...1.'
  ],
  '5': [
    '11111',
    '1....',
    '1111.',
    '....1',
    '....1',
    '1...1',
    '.111.'
  ],
  '6': [
    '.111.',
    '1....',
    '1....',
    '1111.',
    '1...1',
    '1...1',
    '.111.'
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
    '.111.',
    '1...1',
    '1...1',
    '.111.',
    '1...1',
    '1...1',
    '.111.'
  ],
  '9': [
    '.111.',
    '1...1',
    '1...1',
    '.1111',
    '....1',
    '...1.',
    '.11..'
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
  ]
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
}

function draw() {
  intro_stage();
}

function intro_stage(){
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

    for (const char of line) {
      const letter = letters[char] || letters[' '];
      drawLetter(letter, x, y, cellWidth, cellHeight);
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
  fill(0);
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
