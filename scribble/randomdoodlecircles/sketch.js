function setup() {
    var canvas = createCanvas(windowWidth * 0.98, windowHeight * 0.97);
    frameRate(30)
    background(255);
    stroke(0);
    strokeWeight(5);
    noFill();
  }

var g = 50;
var b = 100;

  function draw() {
  //  background(255,255,255,50);

    // create an instance of scribble and set a few parameters
    noFill();
    var scribble = new Scribble();
    scribble.bowing = 0.1;
    scribble.roughness = 5;
    // x=random(1,3*windowHeight)
   x = random(1, 0.75 * windowHeight)
    strokeWeight(1);
    stroke(random(0, 255), g, b);
   scribble.scribbleEllipse(windowWidth / 2, windowHeight / 2, x, x);

   // /*
    noStroke();
    //  stroke(255 );
    fill(255, 255, 255, 75);
    textSize(200);
    textAlign(CENTER, [CENTER]);
    text('title', windowWidth / 2, (windowHeight / 2) + 40);
    textSize(20);

    text('[ s u b t i t l e ] ', windowWidth / 2, (windowHeight / 2) + 70);
   // */

  }
