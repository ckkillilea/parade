function preload(){
  font = loadFont('coast-Regular.otf');
    bgImg = loadImage('../img/barbsinging.jpg');
}  

let bgImg;
let curtainsEnabled = false; 


function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER, CENTER);
  textFont(font);
  fill(255);
}

function draw() {
  background(bgImg);
  let curtainWidth = map(mouseX, 0, width, width / 2, 0);
  curtainWidth = constrain(curtainWidth, 0, width / 2);
  
   
  drawCurtain(0, curtainWidth); 
  drawCurtain(width - curtainWidth, curtainWidth); 
  
  if (mouseX > width / 2) { 
  fill(255,105,180);
    textSize(100);
  text("Nobody, no nobody \n is gonna rain on my parade!", width / 2, height / 2);
  }
  
    if (mouseX <= width / 2 && mouseX > 0) {
  let strobeColor = (floor(millis() / 250) % 2 === 0) ?   color(0) : color(255, 255, 0);  
  fill(strobeColor);
    textSize(200);
    text("THE END", width / 2, height / 2);
       
  }

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
function keyPressed() {
  curtainsEnabled = true;
}