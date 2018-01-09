// [ 6 flashy colors]:

 function setup() {
 var canvas = createCanvas(windowWidth, windowHeight);
 background(255);
 colorMode(RGB);
 //stroke(255,100);
 noStroke();
 rectMode(CENTER);

 frameRate(20);
 }

 /*
 for this one:
 create circles that rotate
 */

 function draw() {
 //background(255);
 //bezier(mouseX,mouseY,285,20,285,275,30,275);
//xint=30
 xint=random(1,60);
 size=random(1,60);
 //var from = color(218, 165, 32,150);
 //var to = color(72, 61, 139,150);
  var from = color(random(255), random(255), random(255),255);
 var to = color(random(255), random(255), random(255),255);
 //randomSeed(4);

//arrayWidth=windowWidth;
//arrayHeight=windowHeight;

 arrayWidth=mouseX;
arrayHeight=mouseY;

for(var k =0; k<=(arrayHeight/50); k++){
 for(var i =0; i<=(arrayWidth/50); i++){
   var val=(i*5)/100;
   fill(lerpColor(from, to, val));
   rect(xint+i*50, xint+50*k, size, size);
   //rotate(PI * ((windowWidth - mouseX) / windowWidth) / 400);
    }
 }
}
