// [ flashy colors use for background]:
var font;
function preload() {
  font = loadFont('./assets/Avenir.otf');
}

var points;
var bounds;

 function setup() {
 var canvas = createCanvas(windowWidth, windowHeight);
 background(255);
 colorMode(RGB);
 //stroke(255,100);
 noCursor();

 rectMode(CENTER);

 frameRate(20);


  points = font.textToPoints(' u ', 0, 0, 10, {
    sampleFactor: 20,
    simplifyThreshold: 0
  });
  bounds = font.textBounds(' u ', 0, 0, 10);

 }

 /*
 for this one:
 create circles that rotate
 */

 function draw() {
//    noStroke();
//
//  //background(255);
//  //bezier(mouseX,mouseY,285,20,285,275,30,275);
// //xint=30
//  xint=random(1,60);
//  size=random(1,60);
//  //var from = color(218, 165, 32,150);
//  //var to = color(72, 61, 139,150);
// var from = color(random(255), random(255), random(255),255);
//  var to = color(random(255), random(255), random(255),255);
//  //randomSeed(4);
//
// //arrayWidth=windowWidth;
// //arrayHeight=windowHeight;
//
// arrayWidth=mouseX;
// arrayHeight=mouseY;
//
// for(var k =0; k<=(arrayHeight/50); k++){
//  for(var i =0; i<=(arrayWidth/50); i++){
//    var val=(i*5)/100;
//    fill(lerpColor(from, to, val));
//    rect(xint+i*50, xint+50*k, size, size);
//    //rotate(PI * ((windowWidth - mouseX) / windowWidth) / 400);
//     }
//  }

 var heightf =400
 var widthf = 400
 stroke(0);
  fill(255, 104, 204);
  fill(255,255,255)
 beginShape();
  translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  translate(height/2,-height/4)
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    vertex(
      p.x * widthf / bounds.w +
        sin(5 * p.y / bounds.h + millis() / 500) * widthf / 10,
      p.y * heightf / bounds.h
    );
  }
  endShape(CLOSE);

}
