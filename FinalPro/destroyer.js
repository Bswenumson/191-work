function Destroyer(){
  // Here are the variables for my destroyer
  this.x = mouseX;
  this.y = 675;
  this.size = 10;
  this.state = false;

// I wanted to display a little yellow ship with orange jets. I figured the triangle looks the most aerodynamic.
  this.display = function(){
    fill(240, 71,18);
    ellipse(mouseX -15, 700, 20, 40);
    ellipse(mouseX +15, 700, 20, 40);
    fill(229, 155, 17);
    triangle(mouseX - 30, 700, mouseX , 650, mouseX + 30, 700);
  };
}
