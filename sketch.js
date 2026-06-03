let currentScene = "intro";


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


function mousePressed() {
  if (currentScene === "intro") {
    camera_setup();
    currentScene = "asciiCamera"; // Switch to asciiCamera on click
  }
  else if (currentScene === "gameplay") {
    currentScene = "gameOver";
  }
}