   var scribble = new Scribble();
   scribble.bowing = 0.5;
   scribble.roughness = 1;

   function setup() {
     var canvas = createCanvas(windowWidth * 0.98, windowHeight * 0.97);
     frameRate(5)
     background(255);
     strokeWeight(1);
     noFill();
   }

   function draw() {
     background(255);
     translate(50, 0);
     for (let i = 0; i < 2; i++) {
       var myArrayvert = [random(1, 500), random(10, 500), random(100, 300), random(100, 500), random(100, 200), random(1, 300), random(1, 500), random(1, 300)];
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


   }