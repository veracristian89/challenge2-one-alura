var tablero = document.querySelector("canvas");
var pincel = tablero.getContext("2d");

function crearTablero(){
    pincel.fillStyle = "lightgrey";
    pincel.fillRect(0,0,1200,700);
    //suelo de la horca
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(500,450);
    pincel.lineTo(500,455);
    pincel.lineTo(800,455);
    pincel.lineTo(800,450);
    pincel.fill();
}

function dibujarPoste(){
    //poste de la horca
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(600,450);
    pincel.lineTo(605,450);
    pincel.lineTo(605,150);
    pincel.lineTo(600,150);
    pincel.fill();
}
function dibujarPaloHorizontal(){
    //palo horizontal de la horca
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(600,150);
    pincel.lineTo(600,145);
    pincel.lineTo(750,145);
    pincel.lineTo(750,150);
    pincel.fill();
}
function DibujarSoga(){
    //soga de la horca
    pincel.fillStyle = "brown";
    pincel.beginPath();
    pincel.moveTo(750,150);
    pincel.lineTo(745,150);
    pincel.lineTo(745,200);
    pincel.lineTo(750,200);
    pincel.fill();
}
function dibujarCabeza(){
    //dibujar cabeza
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(750,230,30,0,2*3.14);
    pincel.fill();
    pincel.fillStyle = "lightgrey";
    pincel.beginPath();
    pincel.arc(750,230,25,0,2*3.14);
    pincel.fill();
}
function dibujarCuerpo(){
    //dibujar cuerpo
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(752,255);
    pincel.lineTo(747,255);
    pincel.lineTo(747,350);
    pincel.lineTo(752,350);
    pincel.fill();
}

//dibujar brazos y piernas

function dibujarDiagonalDerecha(x,y){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(x,y);
    pincel.lineTo(x+50, y+50);
    pincel.lineTo(x+53, y+47);
    pincel.lineTo(x+3,y-3);
    pincel.fill();
}

function dibujarDiagonalIzquierda(x,y){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(x,y)
    pincel.lineTo(x-50, y+50);
    pincel.lineTo(x-53, y+47);
    pincel.lineTo(x-3,y-3);
    pincel.fill();
}

//dibujarDiagonalDerecha(750,275) brazo derecho
//dibujarDiagonalDerecha(750,350) pierna derecha
//dibujarDiagonalIzquierda(750,275) brazo izquierdo
//dibujarDiagonalIzquierda(750,350) pierna izquierda

//dibujar linea para letra

function dibujarLineaLetra(x,y){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x, y+5);
    pincel.lineTo(x+50, y+5);
    pincel.lineTo(x+50,y);
    pincel.fill();
}

//dibujar letra

function escribirEnCanvas(letra,x,y){
    pincel.fillStyle="black";
    pincel.beginPath();
    pincel.font = "italic 50px Arial";
    pincel.fillText(letra,x,y)
}

function finDelJuego(resultado,x,y,color){
    pincel.fillStyle=color;
    pincel.beginPath();
    pincel.font = "italic 50px Arial";
    pincel.fillText("Fin del Juego!! la palabra era " + resultado,x,y)
}
//y va a ser siempre 500
//escribirEnCanvas(letra,x,500)




//-----------------------------------------------------------------------



