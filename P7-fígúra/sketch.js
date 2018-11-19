function setup() {
  createCanvas(400,500);
}

function draw() {
  background(255,200,0);
  fígúra();
}

function fígúra(){
  rectMode(CENTER);
  // Teiknum búkinn
  fill(44,44,44);
  rect(200,200,70,100);
  // Teiknum hausinn
  fill(255);
  ellipse(200,150, 80,80);
  // Teiknum augun
  fill(200);
  ellipse (175,145, 20,25);
  ellipse (225,145, 20,25);
  //Munnur
  fill(236,36,94);
  ellipse(200,170, 25, 20);
  // Teiknum fæturna
  line (180, 250, 180, 300);
  line (220, 250, 220, 300);
  line (200, 250, 200, 270);
}
