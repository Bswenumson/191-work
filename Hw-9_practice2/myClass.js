// Define my class... I didn't know what to call it so it became Zip
function Zip(){
    // this.size = random(5, 50);
    // this.x = random(0 + this.size, 800 - this.size);
    // this.y = random(0 + this.size, 800 - this.size);
    // this.r = random(0, 75);
    // this.g = random(100, 200);
    // this.b = random(150, 250);
    // this.speedX = random(0.25 , 1);
    // this.speedY = random(0.25, 1);
    // this.edge = this.size * 0.5;

    this.x1 = 0;
    this.x2 = this.x1 + 20;
    this.x3 = this.x2 - 10;
    this.y1 = 0;
    this.y2 = this.y1 + 10;
    this.y3 = this.y2 + 10;
    this.r = random(100, 200);
    this.g = random(0, 75);
    this.b = random(150, 250);
    this.speedX = random(0.25, 1);
    this.speedY = random(0.25, 1);
    this.transX = random(0, 800);
    this.transY = random(0, 800);

    this.display = function() {
      // push();
      // blendMode(SCREEN);
      // fill(this.r, this.g, this.b);
      // ellipse(this.x, this.y, this.size, this.size);
      // fill(0);
      // ellipse(this.x, this.y, this.size * 0.25, this.size * 0.25);
      // pop();

      push();
      translate(this.transX, this.transY);
      noStroke();
      fill(this.r, this.g, this.b);
      triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
      pop();
    };

    this.move = function() {
      this.x1 = this.x1 + this.speedX;
      this.x2 = this.x2 + this.speedX;
      this.x3 = this.x3 + this.speedX;
      if (this.x1 >= width || this.x1 <= 0 || this.x2 >= width || this.x2 <= 0 || this.x3 >= width || this.x3 <= 0){
        this.speedX = -this.speedX;
      }

      this.y1 = this.y1 + this.speedY;
      this.y2 = this.y2 + this.speedY;
      this.y3 = this.y3 + this.speedY;
      if (this.y1 >= height || this.y1 <= 0 || this.y2 >= height || this.y2 <= 0 || this.y3 >= height || this.y3 <= 0){
        this.speedY = -this.speedY;
      }

    };
}
