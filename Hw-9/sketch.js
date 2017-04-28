var planet = [];
var destroyer;
var bullArr = [];
var bullFired = 0;

function setup() {
  createCanvas(800, 800);

  for (var i = 0; i < 20; i++){
    planet[i] = new Planets();
  }

    destroyer = new Destroyer ();
    for (var j = 0; j < 20; j++){
      bullArr[j] = new Bullet();
    }
  // for (var e = 0; e < 40; e++){
  //   bullArr[e] = new Destroyer ();
  // }
}

function draw() {
  background(13, 16, 69);

  for (var i = 0; i < 20; i++){
    planet[i].display();
    planet[i].move();

  }

  destroyer.display();

  for (var j = 0; j < 20; j++){
    if ((j + 1) <= bullFired) {
      // bullArr[j].bullet();
      bullArr[j].shoot();
      bullArr[j].hitCheck(planet);
    }
  }
  // destroyer.shoot();


}

function mouseReleased() {
  bullFired++;
}

function collision(){
  alert('hello');

}
