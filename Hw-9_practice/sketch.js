var zip = [];

function setup() {
    createCanvas(800, 800);
    for (var i = 0; i < 500; i++){
      zip[i] = new Zip();
    }
}

function draw() {
    background(0);
    for (var i = 0; i < 200; i++) {
      zip[i].move();
      zip[i].display();
    }
}

// At first I couldn't get it to show up while using a class file, so I made sure it worked here first, then transfered my work.

/*function Zip(){
    this.x = random(0, 800);
    this.y = random(0, 800);
    this.size = random(5, 50);
    this.r = random(0, 75);
    this.g = random(100, 200);
    this.b = random(150, 250);
    this.speed = random(0.25 , 1);

    this.display = function() {
      fill(this.r, this.g, this.b);
      ellipse(this.x, this.y, this.size, this.size);
      fill(0);
      ellipse(this.x, this.y, this.size * 0.25, this.size * 0.25);
    };

    this.move = function() {
      // this.x = this.x + this.speed;
      this.y = this.y - this.speed;
      if (this.y < 0 - this.size * 0.5){
        this.y = height;
      }

    };
}
*/
