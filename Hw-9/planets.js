function Planets(){
  this.size = random(50, 100);
  this.x = random(0, 750);
  this.y = random(50, 200);
  this.r = random(100, 200);
  this.g = random(0, 100);
  this.b = random(150, 250);
  this.xSpeed = random(0.5, 3);
  this.edge = this.size * 0.5;


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

  this.move = function(){
    this.x = this.x + this.xSpeed;
    if (this.x > 900){
      this.x = -100;
    }
  };

  // this.bullet = function(){
  //   if (this.state) {
  //     fill(255, 20, 100);
  //     if (this.bullX === null) {
  //       this.bullX = mouseX;
  //     }
  //     ellipse(this.bullX, this.bullY, this.sizeB, this.sizeB);
  //     this.bullY = this.bullY - 3;
  //     this.x = this.x;
  //   }
  // };
  //
  // this.shoot = function (){
  //     if (mouseIsPressed){
  //       this.state = !this.state;
  //     }
  // };

}
