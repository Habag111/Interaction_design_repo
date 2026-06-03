const density = 'Ñ@#W$9876543210?!abc;:+=-,._                  '
//const density = '           .:-=+%#@'
let video
let asciiDiv;


function camera_setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64,48);
  asciiDiv = createDiv();
  
}

function camera_stage(){

  video.loadPixels();
    let asciiImage= '';
  for (let j=0; j < video.height; j++) { 
 // let asciiRow = '';
  for (let i= 0; i < video.width; i++) {
  const pixelIndex = (i+j*video.width)*4;
  const r = video.pixels[pixelIndex +0];
  const g = video.pixels[pixelIndex +1];
  const b = video.pixels[pixelIndex +2];
  const avg = (r+g+b)/ 3;
  const len = density.length;
  const charIndex = floor(map(avg,0,255,0, len));
    
  //noStroke();
  //fill(255);
  //square(i*w,j*h,w);
  const c = density.charAt(charIndex) 
  if (c ==' ') asciiImage +='&nbsp;'
 else asciiImage += c;
  }
    asciiImage += '<br/>';
  //createDiv(asciiRow)
  //console.log(asciiRow);
  } 
  asciiDiv.html(asciiImage);
}
