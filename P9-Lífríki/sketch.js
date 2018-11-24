var zoogs = [];

function setup() {
  createCanvas(600, 600);
  // Búum til hundrað zoog hluti.
  for (var i = 0; i < 100; i = i+1){
    zoogs[i] = new Zoog(random(200,400),random(100,400),random(50,200));
  }
}

function draw() {
	background(200,150,0);
  fill(255,200,0);
	ellipse(300,300,500,500);
  // Teiknum og hreyfum alla Zoog kallana okkar
  for (var i = 0; i < zoogs.length; i = i+1){
  	zoogs[i].move();
  	zoogs[i].show();
  }
}

function mousePressed(){
  for (var i = zoogs.length-1; i >= 0; i = i-1){
    if(fjarl(zoogs[i].x,zoogs[i].y,mouseX,mouseY) < 50){
		    zoogs.splice(i,1);
	  }
  }
}

// Klasinn Zoog
// (x,y): er miðpunkturinn sem hann er teiknaður útfrá.
// bukur: er lengdin á búknum
// dir: er stefnan sem hann ferðast í
// speed: er hraðinn sem hann ferðast á
// eyecolor: er liturinn á augunum hans
class Zoog{
  constructor(x,y,bukur) {
    this.x = x;
    this.y = y;
    this.bukur = bukur;
		this.dir = random(0,2*PI);
		this.speed = random(1,3);
		this.eyeColor = color(100,100,100);
  }

  // Teiknar geimveruna zoog
  show(){
    rectMode(CENTER);
    // Teiknum búkinn
      rectMode(CENTER);
      // Teiknum búkinn
      fill(44,44,44);
      rect(this.x,this.y,70,this.bukur)
      // Teiknum hausinn
      fill(255);
      ellipse(this.x,this.y-this.bukur/2, 80,80);
      // Teiknum augun
      fill(this.eyecolor);
      ellipse(this.x - 25, this.y - this.bukur/2, 20,25);
      ellipse (this.x + 25,this.y - this.bukur/2, 20,25);
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
      if (fjarl(this.x,this.y,width/2,height/2) > 250){
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
function fjarl(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
