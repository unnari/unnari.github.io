var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var x = 150;
var y = 150;
var augah = 150 + faceWidth*0.25;
var augav = 150 - faceWidth*0.25;
var munnurl = 255;
var litur = 0;


function setup(){
  createCanvas (300,300);
}

function draw(){
  background(180);
  fill(0);
  rect(150-faceWidth/2, 150, faceWidth, faceHeight/2);
  fill(255);
  ellipse(x, y, faceWidth, faceHeight);
  fill(0);
  arc(x, y, faceWidth, faceHeight, PI, 0);
  ellipse(augav, height/2, eyeSize, eyeSize);
  ellipse(augah, height/2, eyeSize, eyeSize);
  fill(munnurl);
  fill (litur);
  arc(x, y+30, faceWidth/2, 30, 0, PI);
  fill(255);
  arc(x, y+10, faceWidth/5, faceHeight/4, 0, PI);
  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.
  
}
tóti er fá
function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  30);
  munnurl 	 = random(0, 255);
  litur = int(random(-1,1));
}
