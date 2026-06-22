let currentScene = "intro_text";
// let currentScene = "Outro";


let serialValue = 'scan your card';
let port;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  textFont('Courier');
  textAlign(CENTER, CENTER);
  noStroke();
}

function setup_tekst() {
  ascii_cleanup();
  resizeCanvas(windowWidth, windowHeight);
  background(20);
  textFont('Courier');
  textAlign(CENTER, CENTER);
  noStroke();
}

outrotext = `everyone is a number in the EYE of the algorithm
your needs
your experiences
your personality
        
your number is evaluated`

function draw() {
  switch (currentScene) {
    case "intro_text":
      intro_text();
      break;
    case "checking_stage":
      checking_stage();
      break;
    case "UID_text":
      intro_text("YOU ARE:");
      break;
    case "pixel_stage":
      pixelscene();
      break;
    case "asciiCamera":
      ascii_stage();
      break;
    // case "Outro":
    //   intro_text(`Test:`);
    //   break;
    case "Outro":
      intro_text(outrotext);
      // intro_text(`everyone is a number in the EYE of the algorithm
      //   your needs
      //   your experiences
      //   your personality
        
      //   your number is evaluated`);
      break;
    default:
      console.log("Error: Unknown scene");
  }
  ;
}


function TriggerAfterReceive() {
    currentScene = "checking_stage";
    
    console.log(serialValue);
    console.log(currentScene);
    changeSceneAfterSeconds(2, "UID_text");
    // changeSceneAfterSeconds(25, "pixel_stage", pixel_setup);
    changeSceneAfterSeconds(5, "asciiCamera", ascii_setup);
    // changeSceneAfterSeconds(20, "Outro", remove);
    changeSceneAfterSeconds(30, "Outro", setup_tekst);
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