var siz =100;
var speed=50;
var g = 50;
var b = 100;
var intcirc = 300;
var initialscrib=1; //turn on or off initial scrib
var stk = 10;

function setup() {
    var canvas = createCanvas(windowWidth * 0.98, windowHeight * 0.97);
    frameRate(15)
    background(255);
    stroke(0);
    strokeWeight(stk);
    noFill();
if (initialscrib==1){
for(var i =0; i<intcirc; i++){

    // create an instance of scribble and set a few parameters
    noFill();
    var scribble = new Scribble();
    scribble.bowing = 0.1;
    scribble.roughness = 3;
    // x=random(1,3*windowHeight)
   // x = random(1, 0.75 * windowHeight)
    strokeWeight(stk);
    stroke(random(0, 255), g, b);
  //  scribble.scribbleEllipse(windowWidth / 2, windowHeight / 2, x, x);
    if (siz>windowHeight) {
    	speed=-speed;
      g=230;
      b=170;
    }
     if (siz<0) {
    	speed=-speed;
      g=50;
      b=100;
    }

    siz=siz+speed
    scribble.scribbleEllipse(windowWidth / 2, windowHeight / 2,     siz, siz);
}
}

  }


  function draw() {
    background(255,255,255,50);

    // create an instance of scribble and set a few parameters
    noFill();
    var scribble = new Scribble();
    scribble.bowing = 0.1;
    scribble.roughness = 5;
    // x=random(1,3*windowHeight)
   // x = random(1, 0.75 * windowHeight)
    strokeWeight(stk);
    stroke(random(0, 255), g, b);
  //  scribble.scribbleEllipse(windowWidth / 2, windowHeight / 2, x, x);
    if (siz>windowHeight) {
    	speed=-speed;
      g=230;
      b=170;
    }
     if (siz<0) {
    	speed=-speed;
      g=50;
      b=100;
    }

    siz=siz+speed
    scribble.scribbleEllipse(windowWidth / 2, windowHeight / 2,     siz, siz);

    /*
    noStroke();
    //  stroke(255 );
    fill(255, 255, 255, 75);
    textSize(200);
    textAlign(CENTER, [CENTER]);
    text('title', windowWidth / 2, (windowHeight / 2) + 40);
    textSize(20);

    text('[ s u b t i t l e ] ', windowWidth / 2, (windowHeight / 2) + 70);
    */

  }
