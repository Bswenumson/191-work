var planet = [];
var destroyer;
var bullArr = [];
var bullFired = 0;
var hit;
var launch;
var win;
var loose;
var count = ["20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
var c = 0;

// I had to load in sound effects
function preload(){
  hit = loadSound('Sound/pipe_sound.wav');
  launch = loadSound('Sound/rad_sound.mp3');
  win = loadSound('Sound/yay.mp3');
  loose = loadSound('Sound/fail.wav');
}

function setup() {
  createCanvas(800, 800);

  // Here I created the arrays for the planets and bullets, I also called the destroyer into creation.

  for (var i = 0; i < 20; i++){
    planet[i] = new Planets();
  }

    destroyer = new Destroyer ();
    for (var j = 0; j < 20; j++){
      bullArr[j] = new Bullet();
    }
}

function draw() {
  // Dark Blue background for the "sky"
  background(13, 16, 69);
// Here I called the specific functions to display and move my planets
  for (var i = 0; i < 20; i++){
    planet[i].display();
    planet[i].move();
  }
// Here is the destroyer displayed
  destroyer.display();
// Here is where I called the bullets into existence and called my collision check
  for (var j = 0; j < 20; j++){
    if ((j + 1) <= bullFired) {
      bullArr[j].shoot();
      bullArr[j].hitCheck(planet);
    }
  }
  // Here I made a countdown for bullets left
  fill(255);
  textSize(40);
  text("Shots Left:", 500, 775);
  text(count[c], 725, 775);
}
// Here I created some conditionals for when the mouse is released, including the bullet array increasing, as well as the audio effect
function mouseReleased() {
  bullFired++;
  if (c <= 19){
    c++;
    launch.play();
  }else {
    c = 20;
    if(planet.y > 0){
      loose.play();
    }else {
      loose.play();
    }
  }
}
