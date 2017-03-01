// Define Global Variables
    var col = {
      r: 100,
      g: 100,
      b: 100
    };
    var valX = 0;
    var valY = 0;
    var valX_2 = 100;
    var valY_2 = 100;
    var midi = 20;
    var midiCat = 30;
    var xavier = 15;
    var floof = 25;



function setup() {
    createCanvas(800,800);
    var currFrameRate;
    currFrameRate = frameRate(25);
    background(10);



}

function draw() {

    // background(0, random(0, 10));

    push();
    blendMode(OVERLAY);
    noStroke();
    col.r = random (20, 150);
    col.g = random (100, 200);
    col.b = random (100,190);
    fill(col.r, col.g, col.b);

    valX = noise(midi) * width;
    valY = random(0,height);
    midi = midi + 1;
    midiCat = abs(midi * 0.5);

    if (frameCount % 1500 === 0){midi = 20;}
    arc(valX, valY, midi, midiCat, 0, PI+QUARTER_PI, OPEN);
    pop();


    push();
    blendMode(SCREEN);
    col.r = random (15, 20);
    col.g = random (10, 100);
    col.b = random (150, 250);
    fill(col.r,col.g,col.b);
    noStroke();
    ellipse(valX_2, valY_2, xavier, floof);

    valX_2 = noise(xavier) * width;
    valY_2 = random(0,height);
    xavier = xavier + 0.01;
    floof = floof - 0.001;


    pop();



    // if (frameCount % 100 === 0){valY = 100};

/*
  push();
  stroke(col.r,col.g,col.b);
  line(0,800,valX_2,valY_2);

  col.r = random (100,180);
  col.g = random(0,100);
  col.b = random(100,200);

  valX_2 = random (0, width);
  valY_2 = random(0,height);
  pop();
*/

}
