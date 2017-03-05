
var col = {
  r: 100,
  g: 10,
  b: 150
};

var midi_X = 350;
var midi_Y = 0;
var midi_effect = 30;
var xavier = 50;
var floof = 2;
var button = {};


function setup() {
    createCanvas(800, 800);
    background(50,20,50);

    button.x = width / 2;
    button.y = height / 2;
    button.width = 150;
    button.height = 100;
    button.color_a = color(150, 100, 50);
    button.color_b = color(10, 200, 250);
    button.text = "Click & Hold";

}

function draw() {


    if (mouseX >= button.x - button.width/2 && mouseX <= button.x + button.width/2 && mouseY >= button.y - button.height/2 && mouseY <= button.y + button.height/2){
      fill(button.color_a);
       if(mouseIsPressed){
         strokeWeight(0);
         fill(col.r, col.g, col.b);
         blendMode(OVERLAY);
         rect(midi_X, midi_Y, xavier, xavier);
         midi_X = midi_X + midi_effect;
         midi_Y = midi_Y + floof;
         if(midi_X <= 0 || midi_X >= width){midi_effect = -midi_effect;}
         if(midi_Y <= 0 || midi_Y >= height){floof = -floof +1;}
         col.r = random(100,150);
         col.g = random(0,10);
         col.b = random(100, 255);

      }
    } else {
    fill(button.color_b);
    }

      rectMode(CENTER);
      rect(button.x, button.y, button.width, button.height);

      fill(255);
      textSize(20);
      text(button.text, button.x-55, button.y + 10);




    }
