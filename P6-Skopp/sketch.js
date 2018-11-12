var x = 100;
var y = 100;
var hradiX = 5;
var hradiY = 11;
var bolti = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;

function setup() {
	createCanvas(600,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(333,33,10);
  x = x + hradiX;
  y = y + hradiY;
  if ((x > width-bolti/2) || (x < bolti/2))  {
    hradiX = hradiX * -1;
  }
  if ((y > height-bolti/2) || (y < bolti)) {
    hradiY = hradiY * -1;
  }

  if(abs(spadiY - y) < bolti/2 + spadiThykkt/2 && abs(mouseX - x) < bolti/2 + spadiBreidd/2){
    hradiY = hradiY * -1;
		stig = stig + 1;
	}

  fill(255,255,0);
  rect(x, y, bolti, bolti);
	rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
	fill(0);
	text("Stig: " + stig,20,20);
}
