function setup() {
    createCanvas(600,600);
    background(160,23,25);

}




function draw() {
// By moving background to the "draw()" function we overwrite the previous ellipse positions.
    // background(160,23,25);

    // Using the environment variables, mouseX & mouseY
    ellipse(mouseX,mouseY,30,30);




}
