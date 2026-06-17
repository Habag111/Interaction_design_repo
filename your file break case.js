let currentScene = "intro_text";

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
    case "intro_text":
      intro_text();
      break;
    case "checking_stage":
      checking_stage();
      break;
    case "pixel_stage":
      pixelscene();
      break;
    case "asciiCamera":
      ascii_stage();
      break;
    case "gameOver":
      drawGameOverScene();
      break;
    default:
      console.log("Error: Unknown scene");
  }
  ;
}

// frameRate(12);

function TriggerAfterReceive() {
    // checking_setup();
    currentScene = "checking_stage"; 
    console.log(serialValue);
    console.log(currentScene);
    changeSceneAfterSeconds(5, "pixel_stage", pixel_setup);
    changeSceneAfterSeconds(25, "asciiCamera", ascii_setup);
}

function changeSceneAfterSeconds(seconds, sceneName, callback) {
  setTimeout(() => {
    currentScene = sceneName;
    if (typeof callback === "function") {
      callback();
    }
  }, seconds * 1000);
}

function mousePressed() {
    connectSerial();
}