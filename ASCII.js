const density = 'MWBCDEFA0896543271bdaecf-:'
const density_end = ';                   '
// const density_end = ';:+=-,._                   '

function buildDensityString(inputChars, densityOrder, endChars) {
  const uniqueChars = []

  for (const char of inputChars) {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char)
    }
  }

  const expandedChars = []

  for (const char of uniqueChars) {
    const lowerChar = char.toLowerCase()
    const upperChar = char.toUpperCase()

    if (!expandedChars.includes(lowerChar)) {
      expandedChars.push(lowerChar)
    }

    if (!expandedChars.includes(upperChar)) {
      expandedChars.push(upperChar)
    }
  }

  let orderedChars = ''

  for (const densityChar of densityOrder) {
    if (expandedChars.includes(densityChar)) {
      orderedChars += densityChar
    }
  }

  return orderedChars + endChars
}

const inputString = 'DA:51:70:53'
const arrangedDensity = buildDensityString(inputString, density, density_end)
console.log(arrangedDensity)
let video
let asciiDiv;



function ascii_setup() {
  ascii_cleanup();
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  video = createCapture(VIDEO);
  video.size(120,90);
  asciiDiv = createDiv();
  asciiDiv.style('position', 'fixed');
  asciiDiv.style('inset', '0');
  asciiDiv.style('z-index', '10');
  asciiDiv.style('pointer-events', 'none');
  video.hide();
  
}

function ascii_cleanup() {
  if (video) {
    video.remove();
    video = null;
  }

  if (asciiDiv) {
    asciiDiv.remove();
    asciiDiv = null;
  }
}


  function ascii_stage(){

  background(0);
  video.loadPixels();
    let asciiImage= '';
  for (let j=0; j < video.height; j++) { 
  for (let i= 0; i < video.width; i++) {
  const pixelIndex = (i+j*video.width)*4;
  const r = video.pixels[pixelIndex +0];
  const g = video.pixels[pixelIndex +1];
  const b = video.pixels[pixelIndex +2];
  const avg = (r+g+b)/ 3;
  const len = arrangedDensity.length;
  const charIndex = floor(map(avg,0,255,0, len));

  const c = arrangedDensity.charAt(charIndex) 
  if (c ==' ') asciiImage +='&nbsp;'
 else asciiImage += c;
  }
    asciiImage += '<br/>';

  } 
  asciiDiv.html(asciiImage);
}