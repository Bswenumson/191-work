
  var xX = 100;
  var yY = 100;
  var diam = 30;
  var filz = [0, 100, 150, 200, 250];
  var filzVal = 0;
  // var movz = random(0.5, 2.5);
  var balz = [];

function setup(){
    createCanvas(800, 600);
    for (var i = 0; i < 50; i++) {
      balz[i] = display();
    }
}

function draw(){
    // background(0);
  var bgRed, bgGreen, bgBlue;

    bgRed = map(mouseX, 0, 600, 0, 255);
    bgGreen = map(mouseY, 0, 600, 0, 255);
    bgBlue = map(mouseX + mouseY, 0, 1200, 255, 0);

  background(bgRed, bgGreen, bgBlue);
  frameRate(60);
  fill(filz[filzVal]);
  for (var i = 0; i < 50; i++){
    display();
}
  // move();

  yY = yY + 1;
  if(yY > 600){
    yY = 0;
  }

}

function display(){

  ellipse(xX, yY, diam, diam);

}

function move(){
  yY =+ movz;

  if(yY > 600){
    yY = 0;
  }

}
