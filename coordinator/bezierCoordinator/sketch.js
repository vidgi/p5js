// [ bezier COORDINATOR]:

 function setup() {
 var canvas = createCanvas(windowWidth, windowHeight);
 background(255);
 strokeWeight(1);
 stroke(0, 0, 0);
 noFill();
 }

 /*
 for BEZIER PART:
 first need to figure out a way to represent anchor pts and control handles,
 then need a button or key to switch between them
 */

 function draw() {
 background(255);
 bezier(mouseX,mouseY,285,20,285,275,30,275);
 }

 // otherthings to coordinate later:
 //   - tracker to know where mouse is gonna draw, coordinates of cur mouse pos
 //   - ui to switch between modes:
 //      - ellipse
 //      - rect
 //      - points
 //      - quad
 //      - triangle
 //      - bezier curves
 //      - lines
