// [ 1 color exp ]:

 function setup() {
 var canvas = createCanvas(windowWidth, windowHeight*2);
 background(255);
 colorMode(RGB);
 stroke(255,100);
 //noStroke();
 rectMode(CENTER);

 var from = color(218, 165, 32,100);
 var to = color(72, 61, 139,100);
 colorMode(RGB);
 for(var i =0; i<=50; i++){
 var val=((50-i)*2)/100;
 fill(lerpColor(from, to, val));
 rect(windowWidth/2, windowHeight/2, 20+10*(50-i), 20+10*(50-i));
 rotate((PI*val/100))
 frameRate(1);
 }

 }

 /*
 for this one:
 create circles that rotate
 */

 function draw() {
 background(255);
 //bezier(mouseX,mouseY,285,20,285,275,30,275);

 var from = color(random(255), random(255), random(255),100);
 var to = color(random(255), random(255), random(255),100);
 colorMode(RGB);
 for(var i =0; i<=50; i++){
 var val=((50-i)*2)/100;
 fill(lerpColor(from, to, val));
 rect(windowWidth/2, windowHeight/2, 20+10*(50-i), 20+10*(50-i));
 rotate((PI*val/100))
}
 }
