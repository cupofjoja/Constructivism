// strong angles
// empty space
// limited use of color
// lines suggestng direction and movement
var r, g, b;
var bubbleRadius = 270;

var x = 0;
var y = 0;
var xspeed = 0;
var yspeed = 0.3;


function setup() {
    createCanvas(800, 600);
    background(245);
    
    r = random(255);
    g = random(255);
    b = random(255);
    
}

function drawBubble(){
    noStroke();
    smooth();
    fill(200, 10, 10, 170);
    ellipse(600, y, bubbleRadius, bubbleRadius);
    ellipse(600, y, 300, 300)
}
function bubbleMove() {
    x = x + xspeed;
    y = y + yspeed;
    
    if ((x > width-bubbleRadius) || (x < 0)) {
        xspeed = xspeed * -1;
    }
    if ((y > height) || (y < 0)) {
        yspeed = yspeed * -1;
    }
}

function drawBar() {
    noStroke();
    fill(00, 00, 0, 80);
    rect(x, y*0.5, 800, 50);
    rect(x, y/1.5, 800, 20);
    rect(x, y/2.5, 800, 10);
}
function barMove() {
   
}

function drawMountains() {
    noStroke();
    fill(0, 0, 0, 20);
    triangle(570, 470, 650, 600, 430, 600); //small mountain
    triangle(370, 370, 0, 600, 470, 600); // medium mountain
    triangle(600, 600, 796, 600, 750, 320); // highest mountain
}

function drawOverlayMount(){
    noStroke();
    fill(0, 0, 0, 230);
    triangle(260, 400, 355, 600, 0, 600); 
    triangle(330, 490, 390, 600, 100, 600); 
}

function drawLine(){
    line();
}


function draw() {
    background(250);
    
    drawBar();
    drawBubble();
    drawMountains();
    drawOverlayMount();
    
    bubbleMove();
}

