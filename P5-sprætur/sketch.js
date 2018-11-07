var hundur;
var ugly_dog;

function preload() {
  hundur = loadImage('assets/dog.png'); // https://www.dogexpress.in/how-much-a-labrador-puppy-costs-in-india
  ugly_dog = loadImage('assets/ugly dog.jpg'); // https://www.mprnews.org/story/2018/06/24/bulldog-from-minnesota-wins-worlds-ugliest-dog-title
}

function setup() {
  createCanvas(700,450);
  background(hundur);
}

function draw() {
  ellipse (random(0,width),random(0,height),10,10);
}

function mousePressed() {
  imageMode(CENTER);
  image(ugly_dog,mouseX,mouseY);
}

function keyPressed() {
  imageMode(CORNER);
  background(hundur);
}
