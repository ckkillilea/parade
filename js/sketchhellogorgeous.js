function preload(){
  font = loadFont('coast-Regular.otf');
    bgImg = loadImage('../img/broadwaypink.png');
}  
function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER, CENTER);
  textFont(font);
  fill(255);

}
     

function draw() {
  background(bgImg);
  
  let strobeColor = (floor(millis() / 250) % 2 === 0) ? color(0) : color(255, 255, 0); 
  
  fill(strobeColor);
  textSize(200);
  text("HELLO \n GORGEOUS", width / 2, height / 2);
  
  textSize(40); 
  fill('black');
  text("The show begins now...", width / 2, height / 2 +250); 
  
     let curtainWidth = map(mouseX, 0, width, width / 2,     0);

  drawCurtain(0, curtainWidth);
  drawCurtain(width - curtainWidth, curtainWidth); 

}

function drawCurtain(x, w) {
  noStroke();
  for (let i = 0; i < w; i++) {
    let inter = map(i, 0, w, 0, 1);
    let c = lerpColor(color(130, 0, 0), color(200, 30, 30), inter);
    fill(c);
    rect(x + i, 0, 1, height);
  }
}