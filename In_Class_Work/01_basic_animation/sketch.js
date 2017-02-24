function setup() {
    createCanvas(600,600);
    background(160,23,25);

}

// Variales to define ellipse position
      var posX = 100;
      var posY = 100;


function draw() {

    ellipse(posX,posY,30,30);

    //  update posX every frame
    posX= posY + 1;
    posY = posX +1;


}
