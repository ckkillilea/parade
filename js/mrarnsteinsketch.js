let img1, img2;
let currentImage, currentText;
let imgX, textX;
let textScale, textR, textG, textB;
let state = 1;

function preload(){
  font = loadFont('../coast-Regular.otf');
  img1 = loadImage('../img/funnygirlred.jpg');  
  img2 = loadImage('../img/bridalbarbara.jpg');  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  currentImage = img1;
  textFont(font);
  currentText = "Hey Mr. Arnstein!";
  imgX = -width; 
  textX = width; 
  textScale = 1;
  updateTextColor();
  textSize(90);

}

function draw() {
  background(0);
  image(currentImage, imgX, 0, width, height);
  
  updateTextColor();
  fill(textR, textG, textB);
  textSize(90 * textScale);
  textAlign(CENTER, CENTER);
  text(currentText, textX, height / 2);

   if (state === 1) {
    if (imgX < 0) {
      imgX += 5;  
    }
    if (textX > width / 2) {
      textX -= 3; 
    }
  } else if (state === 2) {
      let scaledTextWidth = textWidth(currentText) * textScale;
    if (scaledTextWidth < width) {
      textScale += 0.01;
    } 
  }
}

function keyPressed() {
  if (state === 1) {
    state = 2;
    currentImage = img2;
    currentText = "HERE I AM!!!!!";
    textX = width / 2;
    textScale = 1;
  }
}

function updateTextColor() {
  textR = random(255);
  textG = random(255);
  textB = random(255);
}