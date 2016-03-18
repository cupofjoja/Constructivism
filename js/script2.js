var vLocation;
var vSpeed;
var letters = [];
var rand;
var rand2;
var numLocation;

var mySound;

function preload() {
    mySound = loadSound("../sounds/Copycatt_Affection.mp3");
}

function setup() {
    createCanvas(800, 600);
    background(250);
    
    mySound.setVolume(0.1);
    mySound.play();
    
    vLocation = createVector(100, 100);
    vSpeed = createVector(0.5, 0.1); 
    rand = random(100000000, 999999999);
    rand2 = sq(rand);
    numLocation = createVector(200, 0)
    
}


function drawLetter() {
    noStroke();
    fill("red");
    textSize(700);
    textAlign();
    text(key, 20, 300);
}

function drawBox() {
    textSize(25);
    textLeading(10);
    fill(255, 0, 0, 170);
    text(rand2 * mouseX, numLocation.x, 5);
    text(rand2 * mouseY, numLocation.x, 30);
    text(rand2 * mouseX, numLocation.x, 55);
    text(rand2 * mouseY, numLocation.x, 80);
    text(rand2 * mouseX, numLocation.x, 110);
    text(rand2 * mouseY, numLocation.x, 135);
    text(rand2 * mouseX, numLocation.x, 160);
    text(rand2 * mouseY, numLocation.x, 185);      
}

function drawTransShape(){
    noStroke();
    //strokeWeight(3);
    //fgftranslate(width/2, height/2);
    rotate(PI/3.0);
    fill(0, 0, 0, 20);
    rect(vLocation.x, -700, 300, 1000);
}

function drawTiltShape() {
    noStroke();
    fill(51);
    rect(400, 0, 150, 600);
}

function drawDot(){
    noStroke();
    fill(51);
    ellipse(390, 315, 150, 150);
}





function draw() {
    background(250);
    drawDot();
    drawLetter();
    drawBox();
    
    
    drawTransShape();
    drawTiltShape();
   
    
    
    moveObject();
}

function moveObject(){
    vLocation.add(vSpeed);
    
    if((vLocation.x > width) || (vLocation.x < 0)) {
        vSpeed.x = vSpeed.x * -1;
    }
    if((vLocation.y > height) || (vLocation.y < 0)) {
        vSpeed.y = vSpeed.y * -1;
    }
    
}