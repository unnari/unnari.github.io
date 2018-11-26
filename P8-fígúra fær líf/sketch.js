var unnsi, unnsi2, unnsi3

function setup() {
  createCanvas(600,600);
  unnsi = new Unnsi(150,150,150,100,150);
  unnsi2 = new Unnsi(100,100,30,120,100);
  unnsi3 = new Unnsi(350,300,250,150,50);
}

function draw() {
  background(234,124,21);
  fill(532,123,43);
	ellipse(300,300,500,500);
  unnsi.move();
  unnsi.show();
  unnsi2.move();
  unnsi2.show();
  unnsi3.move();
  unnsi3.show();
}

class Unnsi{
  constructor(x,y,bukur,haus,litur){
    this.x = x;
    this.y = y;
    this.bukur = bukur;
    this.haus = haus;
    this.dir = random(0,2*PI);
    this.speed = random(0,5);
    this.bukurlitur = color(150,300,56);
  }

show() {
  rectMode(CENTER);
  strokeWeight(2);
  stroke(0);
	// búkur
	fill(this.bukurlitur);
	rect(this.x,this.y,-250,this.bukur)
  // haus
	fill(70,150,0)
	ellipse(this.x,this.y - this.bukur/2, this.haus,this.haus)
	//fætur
	fill(70,150,0)
	line (this.x - 20, this.y + this.bukur/2, this.x - 50, this.y + this.bukur/2 + 75);
  line (this.x + 20, this.y + this.bukur/2, this.x + 50, this.y + this.bukur/2 + 75);
  line (this.x,this.y + this.bukur/2, this.x + 0, this.y + this.bukur/2 + 40);
	//hendur
	fill(0)
	line (this.x - 20, this.y , this.x - 20, this.y + 25);
  line (this.x + 20, this.y , this.x + 20, this.y + 25);
	// augu
	fill(0)
	rect (this.x - 50,this.y - this.bukur/2, 20,40);
  rect (this.x + 50,this.y - this.bukur/2, 20,40);

 }

 move(){
		this.x = this.x + this.speed*cos(this.dir);
		this.y = this.y + this.speed*sin(this.dir);
		this.speed = this.speed/1.07;
		if(this.speed < 0.3){
			this.dir = random(0,2*PI);
			this.speed = random(1,7);
    }
    if (fjarlægð(this.x,this.y,width/2,height/2) > 250){
      this.litur();
      this.dir = atan((this.y - height/2)/(this.x-width/2));
      if(this.x - width/2 > 0){
        this.dir = this.dir + PI;
    }
  }
}

litur(){
		this.bukurlitur = color(random(255), random(255), random(255));

  }
}

function fjarlægð(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
