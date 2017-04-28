function Destroyer(){
  this.x = mouseX;
  this.y = 675;
  this.size = 10;
  this.state = false;


  this.display = function(){
    fill(240, 71,18);
    ellipse(mouseX -15, 700, 20, 40);
    ellipse(mouseX +15, 700, 20, 40);
    fill(229, 155, 17);
    triangle(mouseX - 30, 700, mouseX , 650, mouseX + 30, 700);
  };

  this.bullet = function(){
    if (this.state) {
      fill(255, 20, 100);
      ellipse(mouseX, this.y, this.size, this.size);
      this.y = this.y - 3;
      this.x = this.x;
    }
  };

  this.shoot = function (){
      if (mouseIsPressed){
        this.state = !this.state;
      }
  };


  // this.collide = function(planetArr, myIdx){
  //   var distance;
  //
  //   for (var i = 0; i < planetArr.length, i++){
  //     var collision : false;
  //
  //     kill = planetArr[i];
  //
  //     if (i !== myIdx){
  //       distance = dist()
  //     }
  //   }
  // }
}
