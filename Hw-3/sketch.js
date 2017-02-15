function setup() {
  createCanvas(500, 500);
  background(118, 106, 116);

/*
 First I created a canvas, in a lovely purple-grey.
 Now I want to try and create some background effects.
 The arcs ended up reminding me of an angry eye, so I went
 with it.
*/

// I am thinking it would be sweet to add a horizon line, so I am adding a large rectangle.

  fill(112,175,207);
  rect(0,0,500,280);

// I wanted the arm to be behind the body/head, so I moved it up.
// Left arm

  fill(24,110,53);
  ellipse(430,245,80,30);
  ellipse(464,215,20,80);
  rect(453,146,20,30,5,10,5);

// this arc is to give the fist some shape.
  noFill();
  arc(467,160,25,15,HALF_PI,PI);


  // Head

  fill(24,110,53);
  ellipse(280,220,240,240);

// Right Arm

  fill(24,110,53);
  ellipse(160,245,80,30);
  ellipse(125,280,20,80);
  rect(120,310,20,30,5,10,5);

  // this arc is to give the fist some shape.
  noFill();
  arc(467,160,25,15,HALF_PI,PI);
  // LEFT eye

  fill(184,95,87);
  arc(250,200,60,60,0,PI+QUARTER_PI,CHORD);


  fill(184,127,113);
  arc(250,200,50,50,0,HALF_PI);

  fill(0,0,0);
  ellipse(250,200,30,30);

  fill(255,255,255);
  rect(230,195,10,5);

  // RIGHT eye

  push();

  fill(166, 61, 60);
  // ellipse(350, 205, 60, 53);
  arc(350, 205, 55, 55, 100, PI, CHORD);

  fill(184, 95, 87);
  arc(350,205,45,45,HALF_PI+QUARTER_PI,PI);

  fill(184, 127, 113);
  arc(350,205,40,40,100,HALF_PI);

  // I orinigally couldn't figure out how to rotate an ellipse, so I had other plans for my second eye. After Monday class I got it.

  // fill(184, 127, 113);
  // ellipse(350, 205, 40, 35);

  fill(0, 0, 0);
  ellipse(350, 205, 27, 27);

  fill(255, 255, 255);
  rect(338, 199, 7, 5);

  fill(255, 255, 255);
  rect(334, 203, 7, 5);

  pop();

  // Now I shall attempt a mouth.

  noFill();
  stroke(7,31,15);
  arc(250, 300, 100, 50, PI+QUARTER_PI, TWO_PI);

  // I want to add some teeth

  fill(255, 255, 255);
  triangle(245,275,255,275,250,250);

  // Here I wasn't sure if I wanted the tooth up or down.
  //triangle(245, 275, 255, 275, 244, 308);

  triangle(290,283,298,292,300,258);
  //fill(255, 255, 255);
  //quad(20,30,68,80,35,60,205);

  // NOSE

  fill(0,0,0);
  ellipse(285,240,10,10);
  ellipse(305,240,10,10);

  noFill();
  stroke(0,0,0);
  arc(285,240,20,20,PI,0);
  arc(305,240,20,20,PI,0);

  // This is becoming a grump monster.

// Now I need to make some arms.  I put these up near the head so I can arrange them properly.

// Now for some final details... hair perhaps? A fin? Spikey hair?

  fill(42,43,43);
  triangle(285,100,295,120,290,65);
  triangle(295,105,305,130,310,75);
  triangle(310,110,310,140,325,85);
  triangle(295,130,300,150,312,95);

  textSize(20);
  var newText;
  newText = "Grump Monsta' by Brooke Swenumson";
  text(newText,100,450,500,50);


}

function draw() {

}
