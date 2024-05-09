var bubbles = [];

var Bubble = (function () {
    function Bubble(pos, vel, col, radius) {
        this.pos = pos;
        this.vel = vel;
        this.col = col;
        this.radius = radius;
    }

    Bubble.prototype.show = function () {
        noStroke();
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    };
  
    Bubble.prototype.update = function () {
        this.pos.add(this.vel);
        this.edges();
    };

    Bubble.prototype.edges = function () {
        if (this.pos.x - this.radius < 0 || this.pos.x + this.radius > width) {
            this.vel.x *= -1;
        }
        if (this.pos.y - this.radius < 0 || this.pos.y + this.radius > height) {
            this.vel.y *= -1;
        }
    };

    return Bubble;    
})();

function preload(){
  font = loadFont('coast-Regular.otf');
  bgImg = loadImage('../img/broadwaypink.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    textFont(font);
    textSize(125); 
}

function draw() {
    background(bgImg);
    bubbles.forEach((bubble) => {
        bubble.update();
        bubble.show();
    });

    fill(255, 255, 0);
  textAlign(CENTER,CENTER);
    text('lifes candy and \n the suns a ball of butter',600,200);
}

function mousePressed() {
    const pos = createVector(mouseX, mouseY);
    const vel = createVector(random(-4, 4), random(-4, 4));
    const col = color(random(0, 255), random(0, 255), random(0, 255));
    const radius = random(20, 100);
    bubbles.push(new Bubble(pos, vel, col, radius));
}
