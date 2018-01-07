// [ 1 color exp ]:

 function setup() {
 var canvas = createCanvas(windowWidth, windowHeight);
 background(255);
 colorMode(RGB);
 stroke(255,100);
 //noStroke();
 //rectMode(CENTER);
 frameRate(15);
 }

 /*
 for this one:
 create circles that rotate
 */
 var i =0;
 // var from = color(random(255), random(255), random(255),100);
 // var to = color(random(255), random(255), random(255),100);
 //var from = color(218, 165, 32,100);
 //var to = color(72, 61, 139,100);
 function draw() {
 //background(255);
 var from = color(218, 165, 32,100);
 var to = color(72, 61, 139,100);
 //randomSeed(numb);
 //var from = color(random(255), random(255), random(255),100);
 //var to = color(random(255), random(255), random(255),100);

 i=i+1
 if (i <=50){
 val=((50-i)*2)/100;
 fill(lerpColor(from, to, val));
 rotate((PI*val/10));

 rect(windowWidth/2, windowHeight/20, 5+10*(50-i), 5+10*(50-i));
 }
 }
