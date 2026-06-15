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


  const lines = ['DO YOU THINK ','YO','U','ID',' ARE EXCLUDED ?'];

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

  for (const line of lines) {
    const lineWidth = getLineWidth(line, cellWidth, letterSpacing);
    let x = (width - lineWidth) / 2 + cellWidth / 2;

    fill(255, getLineAlpha(line));
    for (const char of line) {
      const letter = letters[char] || letters[' '];
      drawLetter(letter, x, y, cellWidth, cellHeight);
      x += getLetterWidth(char) * cellWidth + letterSpacing;
    }

    y += 7 * cellHeight + lineSpacing;
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


