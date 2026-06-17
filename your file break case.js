let currentScene = "intro";
let serialValue = 'click to connect';
let port;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  textFont('Courier');
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  switch (currentScene) {
    case "intro":
      intro_stage();
      break;
    case "2_text":
      text3_stage();
      break;
    case "3_text":
      text2_stage();
      break;
    case "asciiCamera":
      camera_stage();
      break;
    case "gameOver":
      drawGameOverScene();
      break;
    default:
      console.log("Error: Unknown scene");
  }
  ;
}


function TriggerAfterReceive() {
    camera_setup();
    currentScene = "asciiCamera"; 
    console.log(serialValue);
    console.log(currentScene);
}

function mousePressed() {
    connectSerial();
}