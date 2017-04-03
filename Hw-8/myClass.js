// Define my class... I didn't know what to call it so it became Zip
function Zip(){
    this.x = random(0, 800);
    this.y = random(0, 800);
    this.size = random(5, 50);
    this.r = random(0, 75);
    this.g = random(100, 200);
    this.b = random(150, 250);
    this.speed = random(0.25 , 1);

    this.display = function() {
      blendMode(DIFFERENCE);
      fill(this.r, this.g, this.b);
      ellipse(this.x, this.y, this.size, this.size);
      fill(0);
      ellipse(this.x, this.y, this.size * 0.25, this.size * 0.25);
    };

    this.move = function() {
      // this.x = this.x + this.speed;
      this.y = this.y - this.speed;
      if (this.y < 0 - this.size * 0.5){
        this.y = height + this.size * 0.5;
      }
    };
}
