let currentScene = "intro";
let t = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  textFont('Courier');
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  if (currentScene === "intro") {
    t ++;
    if (t == 100) {
      currentScene = "evaluating";
      t = 0;
    }


    
  } else if (currentScene === "2_text") {
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


function mousePressed() {
  if (currentScene === "intro") {
    camera_setup();
    currentScene = "asciiCamera"; // Switch to asciiCamera on click
  }
  else if (currentScene === "gameplay") {
    currentScene = "gameOver";
  }
}