var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  
  document.addEventListener("keydown", dibujarTeclado);
  document.addEventListener("keydown", moverTeclado);
  var cuadrito = document.getElementById("area_de_dibujo");
  var papel = cuadrito.getContext("2d");
  var x = 20;
  var y = 20;
  var size = 50;


  var rojo = new Image();
  var azul = new Image();
  
  rojo.src = "imagenes/rojo.png";
  azul.src = "imagenes/azul.png";

  
  rojo.onload = function(){
    placeImage(rojo, 150, 150, size, size, papel2);
  }
  azul.onload = function(){
    placeImage(azul, x, y, size, size, papel);
  }
  
  
  function placeImage(image, xinicial, yinicial, anchoImg, altoImg, lienzo)
  { 
    lienzo.drawImage(image,xinicial,yinicial,anchoImg,altoImg);
    
  }

  function borrarLienzo(lienzo, papel){
    papel.clearRect(0,0,lienzo.width,lienzo.height);
}

function moverTeclado(evento)
  {
    var colorcito = "#FAA";
    var movimiento = 5;
    switch(evento.keyCode)
    {
      case teclas.UP:
        borrarLienzo(cuadrito, papel);
        y = y - movimiento;
        placeImage(azul, x, y, size, size, papel);
        placeImage(rojo, 150, 150, size, size, papel);
        break;
        case teclas.DOWN:
        y = y + movimiento;
        borrarLienzo(cuadrito, papel);
        placeImage(azul, x, y, size, size, papel);  
        placeImage(rojo, 150, 150, size, size, papel);
        break;
        case teclas.LEFT:
        x = x - movimiento;
        borrarLienzo(cuadrito, papel);
        placeImage(azul, x, y, size, size, papel);  
        placeImage(rojo, 150, 150, size, size, papel);
        break;
        case teclas.RIGHT:
        x = x + movimiento;
        borrarLienzo(cuadrito, papel);
        placeImage(azul, x, y, size, size, papel);  
        placeImage(rojo, 150, 150, size, size, papel);
      break;

      

    }
  }



  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
  
  function dibujarTeclado(evento)
  {
    var colorcito = "#FAA";
    var movimiento = 5;
    switch(evento.keyCode)
    {
      case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
      break;
      case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
      case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
      case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
    }
  }