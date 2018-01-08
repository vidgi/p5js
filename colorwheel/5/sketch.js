// [ 5 color exp ]:

var scribble = new Scribble();
scribble.bowing = 0.3;
scribble.roughness = 1.5;


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(RGB);
  stroke(255, 100);
  strokeWeight(2);

  //noStroke();
  //rectMode(CENTER);

  frameRate(13);
}

/*
for this one:
create circles that rotate
*/

function draw() {
  background(255,255,255,150);
  // scribble.scribbleRect( 30,30, 200, 200 );

  //bezier(mouseX,mouseY,285,20,285,275,30,275);
  xint = 30

  var from = color(218, 165, 32, 150);
  var to = color(72, 61, 139, 150);

//   var from = color(0, 195, 255, 150);
//   var to = color(155, 255, 28, 150);


  // var from = color(random(255), random(255), random(255),100);
  //var to = color(random(255), random(255), random(255),100);
  //randomSeed(4);

  for (var k = 0; k <= (mouseY / 50); k++) {
    for (var i = 0; i <= (mouseX / 50); i++) {
      var val = (i * 5) / 100;
      noFill();
      stroke(lerpColor(from, to, val));

      scribble.scribbleEllipse(xint + i * 50, xint + 50 * k, 40, 40);
      fill(lerpColor(from, to, val));
      ellipse(xint + i * 50, xint + 50 * k, 40, 40);
      rotate(PI * ((windowWidth - mouseX) / windowWidth) / 400);
    }
  }
}
