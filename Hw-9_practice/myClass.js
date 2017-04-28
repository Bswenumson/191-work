// Define my class... I didn't know what to call it so it became Zip
function Zip(){
    this.size = random(5, 50);
    this.x = random(0 + this.size, 800 - this.size);
    this.y = random(0 + this.size, 800 - this.size);
    this.r = random(0, 75);
    this.g = random(100, 200);
    this.b = random(150, 250);
    this.speedX = random(0.25 , 1);
    this.speedY = random(0.25, 1);
    this.edge = this.size * 0.5;

    this.display = function() {
      push();
      blendMode(SCREEN);
      fill(this.r, this.g, this.b);
      ellipse(this.x, this.y, this.size, this.size);
      fill(0);
      ellipse(this.x, this.y, this.size * 0.25, this.size * 0.25);
      pop();
    };

    this.move = function() {
      this.x = this.x + this.speedX;
      if (this.x >= width - this.edge || this.x <= 0 + this.edge){
        this.speedX = -this.speedX;
      }

      this.y = this.y + this.speedY;
      if (this.y >= height - this.edge || this.y <= 0 + this.edge){
        this.speedY = -this.speedY;
      }

    };
}
