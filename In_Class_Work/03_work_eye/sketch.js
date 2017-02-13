function setup() {

  createCanvas(500, 500);
  background(105, 17, 240);

// Using command and / you can create a comment.
  fill(230, 140, 260);
  stroke(0, 0, 0);
  strokeWeight(6);
  ellipse(250, 250, 360, 250);

  /*
  This is a block comment. Everything between the two stars is commented out.
  */

  // Translate: translate(), moves the relative position of all shape functions below it.
  // Translates will accumulate with each other

  fill(0, 200, 250);
  stroke(0, 0, 0);
  strokeWeight(6);
  ellipse(250, 250, 100, 250);


  // below this is the pupil

  fill(0, 0, 0);
  stroke(55, 30, 165);
  strokeWeight(6);
  ellipse(250, 250, 40, 160);

  //push();
  //stroke(255);
  //line(10,100,100,100);

//  pop();
  // using the command push(); above a code block and pop(); bellow, only the code within the block will be affected by the commands. In this sandbox, all manipulator functions will only affect that within the sandbox.

  translate(40, -80);
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(2);
  ellipse(250, 250, 40, 20);

  translate(30, 20);
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(2);
  ellipse(250, 250, 40, 20);
}
