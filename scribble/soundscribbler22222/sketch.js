// [ S O U N D  S C R I B B L E R ]
var mic
function setup() {
    var canvas = createCanvas(windowWidth * 0.98, windowHeight * 0.97);
    frameRate(30)
    background(255);
    stroke(0);
    //strokeWeight(5);
    noFill();

    mic = new p5.AudioIn();
    mic.start();
  }

var g = 50;
var b = 100;

  function draw() {
    noStroke();
    rectMode(CENTER);

    xint=random(1,60);
    size=random(1,60);
    //var from = color(218, 165, 32,150);
    //var to = color(72, 61, 139,150);
   var from = color(random(255), random(255), random(255),255);
    var to = color(random(255), random(255), random(255),255);
    //randomSeed(4);

   arrayWidth=windowWidth;
   arrayHeight=windowHeight;

   //arrayWidth=mouseX;
  // arrayHeight=mouseY;

   for(var k =0; k<=(arrayHeight/50); k++){
    for(var i =0; i<=(arrayWidth/50); i++){
      var val=(i*5)/100;
      fill(lerpColor(from, to, val));
      rect(xint+i*50, xint+50*k, size, size);
      //rotate(PI * ((windowWidth - random(windowWidth)) / windowWidth) / 1);
       }
    }

    var vol = mic.getLevel();
    var h = map(vol, 0, 1, 0.1 * windowHeight, windowHeight);
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
    strokeWeight(1);
    stroke(random(0, 255), g, b);
  //  scribble.scribbleRect(windowWidth / 2, windowHeight/2, x, x);
   scribble.scribbleEllipse(windowWidth / 2, windowHeight/2, x, x);
   scribble.scribbleEllipse(windowWidth / 2, windowHeight/2, x, x);
   scribble.scribbleEllipse(windowWidth / 2, windowHeight/2, x, x);
   //scribble.scribbleEllipse(windowWidth / 2, windowHeight/2, x/2, x/2);

  }
