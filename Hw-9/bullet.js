function Bullet(){
  this.bullY = 675;
  this.sizeB = 15;
  this.bullX = null;
  this.edge = this.sizeB * 0.5;

  this.shoot = function (){
      fill(255, 20, 100);
      if (this.bullX === null) {
        this.bullX = mouseX;
      }
      ellipse(this.bullX, this.bullY, this.sizeB, this.sizeB);
      this.bullY = this.bullY - 10;
  };

  this.hitCheck = function(planets){
    var planet;
    var distance;
    var maxDist;
    var collision = false;

    for (var i = 0; i < 20; i++){
      planet = planets[i];
      distance = dist(this.bullX, this.bullY, planet.x, planet.y);
      maxDist = this.edge + planet.edge;
      if(distance <= maxDist){
        planet.x = this.bullX = -100;
        planet.y = this.bullY = -100;

      }
    }

  };
  // this.shoot = function (){
  //   this.state = true;
  //     // if (mouseIsPressed){
  //     //   this.state = !this.state;
  //     // }
  // };



}
