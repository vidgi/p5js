// [ S O U N D  S C R I B B L E R ]
var mic
function setup() {
    var canvas = createCanvas(windowWidth * 0.98, windowHeight * 0.97);
    frameRate(15)
    background(255);
    stroke(0);
    strokeWeight(5);
    noFill();

    mic = new p5.AudioIn();
    mic.start();
  }

var g = 50;
var b = 100;

  function draw() {
    var vol = mic.getLevel();
    var h = map(vol, 0, 1, 0.1 * windowHeight, 0.75 * windowHeight);
    //  var height = map(vol, 0, 1, 0, windowHeight/4);
    background(255,255,255,50);
    // create an instance of scribble and set a few parameters
    noFill();
    var scribble = new Scribble();
    scribble.bowing = 0.1;
    scribble.roughness = 3;
    // x=random(1,3*windowHeight)
   //x = random(1, 0.75 * windowHeight)
   var x = 2*h;
    strokeWeight(10);
    stroke(random(0, 255), g, b);
   //scribble.scribbleEllipse(windowWidth / 2, (windowHeight*3 / 4)-4*height, x, x);
   scribble.scribbleEllipse(windowWidth / 2, windowHeight/2, x, x);
  }
