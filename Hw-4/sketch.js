    var fallingY1 = 0;
    var fallingX1 = 0;
    var fallingY2 = 0;
    var fallingY3 = 0;
    var fallingY4 = 0;

function setup() {
    createCanvas(800,600);

}

function draw() {

    // This will map the background color change seemlessly to the mouse position, this was the first thing I wanted to do.

    var bgRed, bgGreen, bgBlue;

    bgRed = map(mouseX, 0, 600, 0, 255);
    bgGreen = map(mouseY, 0, 600, 0, 255);
    bgBlue = map(mouseX + mouseY, 0, 1200, 255, 0);

    background(bgRed, bgGreen, bgBlue);
    frameRate(60);

    // I want different shaded ellipses to fall from top to bottom of the canvas.

    push();
    fill(155);
    blendMode(MULTIPLY);
    ellipse(fallingX1,fallingY1,20,20);
    ellipse(fallingX1+100,fallingY1-150,30,30);
    ellipse(fallingX1+200,fallingY1-300,20,20);
    ellipse(fallingX1+300,fallingY1-200,30,30);
    ellipse(fallingX1+400,fallingY1,20,20);
    ellipse(fallingX1+500,fallingY1-400,30,30);
    ellipse(fallingX1+600,fallingY1,20,20);
    ellipse(fallingX1+700,fallingY1-250,30,30);

    fill(255);
    ellipse(fallingX1+50,fallingY2,20,20);
    ellipse(fallingX1+150,fallingY2-300,30,30);
    ellipse(fallingX1+250,fallingY2-100,20,20);
    ellipse(fallingX1+350,fallingY2-400,30,30);
    ellipse(fallingX1+450,fallingY2-150,20,20);
    ellipse(fallingX1+550,fallingY2,30,30);
    ellipse(fallingX1+650,fallingY2-350,20,20);
    ellipse(fallingX1+750,fallingY2-200,30,30);

    fill(0);
    ellipse(fallingX1+25,fallingY3-100,20,20);
    ellipse(fallingX1+125,fallingY3-250,30,30);
    ellipse(fallingX1+225,fallingY3,20,20);
    ellipse(fallingX1+325,fallingY3-50,30,30);
    ellipse(fallingX1+425,fallingY3-300,20,20);
    ellipse(fallingX1+525,fallingY3-100,30,30);
    ellipse(fallingX1+625,fallingY3,20,20);
    ellipse(fallingX1+725,fallingY3-200,30,30);

    fill(100);
    ellipse(fallingX1+75,fallingY4-50,20,20);
    ellipse(fallingX1+175,fallingY4-150,30,30);
    ellipse(fallingX1+275,fallingY4,20,20);
    ellipse(fallingX1+375,fallingY4-300,30,30);
    ellipse(fallingX1+475,fallingY4-125,20,20);
    ellipse(fallingX1+575,fallingY4,30,30);
    ellipse(fallingX1+675,fallingY4-200,20,20);
    ellipse(fallingX1+775,fallingY4-50,30,30);


    fallingY1 = fallingY1 + 1;
    fallingY2 = fallingY2 + 0.5;
    fallingY3 = fallingY3 + 0.75;
    fallingY4 = fallingY4 + 0.63;

    if (frameCount % 1050 === 0) {fallingY1 = 0;}
    if (frameCount % 2100 === 0) {fallingY2 = 0;}
    if (frameCount % 1575 === 0) {fallingY3 = 0;}
    if (frameCount % 1450 === 0) {fallingY4 = 0;}
    pop();

    // Next I want to create a triangle shape that is mapped to the mouse
    // I want to make my mouse triangle form more complex so I will keep adding triangles with different value change ranges

    push();
    strokeWeight(2);

    var fillColor;
    var triSize;
    var fillColorTwo;
    var fillUp;
    var fillUpTwo;

    fillColor = map(mouseX,0,600,0,255);
    triSize = map(mouseY,0,600,300,100);
    fillColorTwo = map(mouseX,0,600,255,0);
    fillUp = map(mouseY,0,800,0,255);
    fillUpTwo = map(mouseY,0,800,255,0);

    fill(fillUp);
    triangle(mouseX - 50,mouseY + 50,mouseX - 25,mouseY - 75,mouseX + 50,mouseY + 25);

    fill(fillColor);
    triangle(mouseX - 75,mouseY,mouseX,mouseY - 75,mouseX + 50, mouseY + 50);

    fill(fillUpTwo);
    triangle(mouseX - 75,mouseY - 25,mouseX + 25,mouseY - 50,mouseX + 25,mouseY + 75);

    fill(fillColorTwo);
    triangle(mouseX - 50,mouseY - 50,mouseX + 50,mouseY,mouseX - 25,mouseY+50);
    pop();



}
