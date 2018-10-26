var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var x = 150;
var y = 150;


function setup(){
  createCanvas (300,300);
}

function draw(){
  background(255,0,0);
  ellipse(x, y, faceWidth, faceHeight);

  var vinstra_auga = width/2 - faceWidth*0.25;
  var hægra_auga = width/2 + faceWidth*0.25;
  ellipse(vinstra_auga, height/2, eyeSize, eyeSize);
  ellipse(hægra_auga, height/2, eyeSize, eyeSize);

  arc(160, 169, 20, 16, 2, PI + QUARTER_PI);

  arc(153, 194, 20, 8, 180, PI + QUARTER_PI);




  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  30);
}
