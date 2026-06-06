let currentScene = "intro";
let serialValue = 'click to connect';
let port;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  textFont('Courier');
  textAlign(CENTER, CENTER);
  noStroke();
  console.log(serialValue);
}

function draw() {
  switch (currentScene) {
    case "intro":
      intro_stage();
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



// function mousePressed() {
//   if (currentScene === "intro") {
//     camera_setup();
//     currentScene = "asciiCamera"; // Switch to asciiCamera on click
//   }
//   else if (currentScene === "gameplay") {
//     currentScene = "gameOver";
//   }
// }