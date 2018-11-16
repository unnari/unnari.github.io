function setup() {
  createCanvas(400,500);
}

function draw() {
  background(255,200,0);
  zoog();
}

// Teiknar geimveruna zoog
function zoog(){
  rectMode(CENTER);
  // Teiknum búkinn
  fill(236,36,94);
  rect(200,200,40,100);
  // Teiknum hausinn
  fill(255);
  ellipse(200,150, 80,80);
  // Teiknum augun
  fill(100);
  ellipse (175,150, 20,40);
  ellipse (225,150, 20,40);
  // Teiknum fæturna
  line (180, 250, 180, 300);
  line (220, 250, 220, 300);
}
