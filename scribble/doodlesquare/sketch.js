   var scribble = new Scribble();
   scribble.bowing = 0.5;
   scribble.roughness = 1;

   function setup() {
     var canvas = createCanvas(windowWidth * 0.98, windowHeight * 0.97);
     frameRate(10)
     background(255);
     strokeWeight(1);
     noFill();
   }

   function draw() {
     background(255);
     translate(150, 50);
    // var myArrayvert = [20, 20, 140, 20, 140, 140, 260, 140, 260, 260, 20, 260];
    var myArrayvert = [30,20,285,20,285,275,30,275];
     var numPts = myArrayvert.length / 2;
     for (let i = 0; i < myArrayvert.length / 2; i++) {
       var x1 = myArrayvert[0 + 2 * i];
       var x2 = myArrayvert[2 + 2 * i];
       var y1 = myArrayvert[1 + 2 * i];
       var y2 = myArrayvert[3 + 2 * i];
       if (i == (myArrayvert.length / 2) - 1) {
         var x2 = myArrayvert[0];
         var y2 = myArrayvert[1];
       }
       scribble.scribbleLine(x1, y1, x2, y2);
     }   
   }