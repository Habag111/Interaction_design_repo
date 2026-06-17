let currentScene = "checking_stage";

let serialValue = 'click to connect';
let port;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  textFont('Courier');
  textAlign(CENTER, CENTER);
  noStroke();
}

checking_setup();

function draw() {
  switch (currentScene) {
    case "intro_text":
      intro_text();
      break;
    case "checking_stage":
      checking_stage();
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
    checking_setup();
    currentScene = "checking_stage"; 
    console.log(serialValue);
    console.log(currentScene);
}

function mousePressed() {
    connectSerial();
}