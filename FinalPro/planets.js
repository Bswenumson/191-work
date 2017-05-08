function Planets(){
  // Here I created my variables for the planets.
  this.size = random(50, 100);
  this.x = random(0, 750);
  this.y = random(50, 200);
  this.r = random(100, 200);
  this.g = random(0, 100);
  this.b = random(150, 250);
  this.xSpeed = random(1, 4);
  this.edge = this.size * 0.5;

// I wanted the ellipses to be equal in their distance within one another. I also wanted an ombre effect with the coloring.
  this.display = function(){
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size);
    push();
    blendMode(MULTIPLY);
    ellipse(this.x, this.y, this.size * 0.75, this.size * 0.75);
    ellipse(this.x, this.y, this.size * 0.25, this.size * 0.25);
    ellipse(this.x, this.y, this.size * 0.5, this.size * 0.5);
    pop();
  };
// Here I just created the movement for the plannets
  this.move = function(){
    this.x = this.x + this.xSpeed;
    if (this.x > 900){
      this.x = -100;
    }
  };
}
