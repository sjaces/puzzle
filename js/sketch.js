function setup() {
  // put setup code here
  createCanvas(720, 400);
  background(240);
  var myX= mouseX;
  var myY = mouseY;
  var aX=aY=bX=bY=250;
  fill(120,20,20);
  a = ellipse(aX,aY,50,50);
  
  fill(20,20,120);
  b = ellipse(bX,bY,90,90);
}

function draw() {
  // put drawing code here
  var myX= mouseX;
  var myY = mouseY;
  background(240);
  fill(120,20,20);
  if (mouseIsPressed) {
    aX = mouseX;
  aY = mouseY;
  ellipse(aX,aY,50,50);
  } else {
    
    bX = mouseX;
    bY = mouseY;
  }




  fill(20,20,120);
  ellipse(bX,bY,90,90)
}