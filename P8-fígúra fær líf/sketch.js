var fígúra1, fígúra2, fígúra3

function setup() {
  createCanvas(600, 600);
  // Búum til þrjá zoog hluti.
  fígúra1 = new Fígúra(200,400,100);
  fígúra2 = new Fígúra(300,300,75);
  fígúra3 = new Fígúra(400,300,150);
}

function draw() {
	background(200,150,0);
  fill(255,200,0);
  noStroke();
	ellipse(300,300,500,500);
  // Ef hluturinn er nálgt miðjunni, þá hreyfir hann sig
  // Ef ekki þá stoppar hann og blikkar bara augunum.
  fígúra1.move();
  fígúra1.show();
  fígúra2.move();
  fígúra2.show();
  fígúra3.move();
  fígúra3.show();
}

// Klasinn Zoog
// (x,y): er miðpunkturinn sem hann er teiknaður útfrá.
// bukur: er lengdin á búknum
// dir: er stefnan sem hann ferðast í
// speed: er hraðinn sem hann ferðast á
// eyecolor: er liturinn á augunum hans
class Fígúra{
  constructor(x,y,bukur) {
    this.x = x;
    this.y = y;
    this.bukur = bukur;
    this.dir = random(0,2*PI);
    this.speed = random(0,5);
    this.eyeColor = color(100,100,100);
  }

  // Teiknar geimveruna zoog
  show(){
    rectMode(CENTER);
    strokeWeight(1.5);
    stroke(0);
    /// Teiknum búkinn
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

  // Hreyfir zoog um skjáinn.
  // Hann minnkar sífelt hraðann, en velur svo slembistenfu
  // og fyglir henni á nyjum slbenum hraða.
	move(){
		this.x = this.x + this.speed*cos(this.dir);
		this.y = this.y + this.speed*sin(this.dir);
		this.speed = this.speed/1.05;
		if(this.speed < 0.1){
			this.dir = random(0,2*PI);
			this.speed = random(1,5);
		}
      if (fjarlægð(this.x,this.y,width/2,height/2) > 250){
      	this.blink();
        this.dir = atan((this.y - height/2)/(this.x-width/2));
        if(this.x - width/2 > 0){
        	this.dir = this.dir + PI;
        }
      }
	}

  // Velur slembinn lit fyrir augun á zoog.
	blink(){
		this.eyeColor = color(random(255), random(255), random(255));
	}
}

// Skilar fjarlægðinni á milli punktanna
// (x1,y1) og (x2,y2).
function fjarlægð(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
