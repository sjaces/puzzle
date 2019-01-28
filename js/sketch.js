var myImage;
const piecesSize = 100;
var half = piecesSize/2;
var thereIsASelection=true;

function preload()
{
  // load images
  rojo = loadImage("./imagenes/rojo.png");
  rojo.x=200, rojo.y=100, rojo.nombre="rojo"; 
  azul = loadImage("./imagenes/azul.png");
  azul.x=10+piecesSize, azul.y=150+piecesSize, azul.nombre="azul";
  verde = loadImage("./imagenes/verde.png");
  verde.x=0, verde.y=50, verde.nombre="verde";
  amarillo = loadImage("./imagenes/amarillo.png");
  amarillo.x=20, amarillo.y=0, amarillo.nombre="amarillo";
  rojo.activo=azul.activo=verde.activo=amarillo.activo=false;

  piezas = [rojo, azul, verde, amarillo];
}


function setup() {
  // put setup code here
  
  anchoPantalla = window.innerWidth;
  altoPantalla = window.innerHeight;
  
  createCanvas(anchoPantalla, altoPantalla);
  background(240);
  

  // image(azul, 300+50, 200+50, piecesSize, piecesSize);
  
  // image(rojo, 300, 200, piecesSize,piecesSize);
  // loadImage('./imagenes/rojo.png', img => {image(myImage, 100, 100, 300 , 300)});
}

function draw() {
  // put drawing code here
  
  background(240);

  

  image(rojo, rojo.x, rojo.y, piecesSize, piecesSize);
  image(azul, azul.x, azul.y, piecesSize, piecesSize);
  image(verde, verde.x, verde.y, piecesSize, piecesSize);
  image(amarillo, amarillo.x, amarillo.y, piecesSize, piecesSize);
  
  if(mouseIsPressed){

    mover();
    
  } else {
    rojo.activo=azul.activo=verde.activo=amarillo.activo=false;
    thereIsASelection = false;
  }



  
}

function amIOnTop(pieza){
    // I see if my mouse is on top of the piece
    if(mouseX<pieza.x+piecesSize && mouseX>pieza.x 
    && mouseY<pieza.y+piecesSize && mouseY>pieza.y
      ) {
        // console.log(`Estoy encima de ${pieza.nombre}`);
        return true;
      } else {
        return false;
      }
      
    }
    
    function anythingClicked(pieza) {
      var clicked = false;
      // if({piezas.activo} && pieza.activo == true){
        //   return true;
        // }


        // I'm looking if there is a selection
      if(thereIsASelection){

        if(pieza.activo){
          return true;
        }else{
          return false;
        }

      }

      pieza.activo = true;
      thereIsASelection = true;
      return true;



        
}

function mover() {

  if (amIOnTop(azul) && anythingClicked(azul)) { 
    azul.x = mouseX-half;
    azul.y = mouseY-half;
    return;
  } else if (amIOnTop(rojo) && anythingClicked(rojo)) {
    rojo.x = mouseX-half;
    rojo.y = mouseY-half;
    return;
  } else if (amIOnTop(verde)  && anythingClicked(verde)) {
    verde.x = mouseX-half;
    verde.y = mouseY-half;
    return;
  } else if (amIOnTop(amarillo) && anythingClicked(amarillo)) {
    amarillo.x = mouseX-half;
    amarillo.y = mouseY-half;
    return;
  } 
  
}

function touchMoved() {

  mover();
  // if (amIOnTop(azul)) { 
  //   azul.x = mouseX-half;
  //   azul.y = mouseY-half;
  //   return;
  // } else if (amIOnTop(rojo)) {
  //   rojo.x = mouseX-half;
  //   rojo.y = mouseY-half;
  //   return;
  // } else if (amIOnTop(verde)) {
  //   verde.x = mouseX-half;
  //   verde.y = mouseY-half;
  //   return;
  // } else if (amIOnTop(amarillo)) {
  //   amarillo.x = mouseX-half;
  //   amarillo.y = mouseY-half;
  //   return;
  // } 

  
}