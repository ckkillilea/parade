let circleY = [];

function preload(){
  font = loadFont('coast-Regular.otf');
}

  function setup() {
  createCanvas(windowWidth,windowHeight);
  for (let i = 0; i < 25; i++) {
    circleY[i] = random(height);
    textFont(font);
  }
    
}

function draw() {
  background(0);
  fill('yellow');
  textAlign(CENTER,CENTER);
  textSize(125);
    text('dont tell me not to live, \n just sit and putter',600,200);
  fill(255);
  for (let i = 0; i < circleY.length; i++) {
    let circleX = width * i / circleY.length;
    circle(circleX, circleY[i], 40);
    noStroke();

    circleY[i]++;
    
    if (circleY[i] > height) {
      circleY[i] = 0;
    }
  }
}