/***iniciar juego***/
const juegoNuevo = document.querySelector("[data-nuevo-btn]");
let palabra = "";
var listaDePalabras = ["autobus", "teclado", "programa", "aprender", "funcion", "lista", "mano", "celebrar", "pensar"];
function sortearPalabra(){
    return listaDePalabras[(Math.floor(Math.random()*(listaDePalabras.length)))];
}
function dibujarLineasPalabra(){
    for(contador = 0; contador<(palabra.length*60); contador = contador + 60) {
        dibujarLineaLetra(500 + contador,510);
    }
}
juegoNuevo.addEventListener("click", function(event){
    event.preventDefault();
    pincel.clearRect(0,0,1200,700)
    crearTablero();
    palabra = sortearPalabra();
    dibujarLineasPalabra();
});

/*------------------------------------------------------*/

const check = document.querySelector("[data-check-btn]");
let listaLetras = [];
let vidas = 0;

function valorDelIndice(letra, array){
    indices = [];
    for(var i = 0; i<array.length; i++){
        if (array[i] == letra){
            indices.push(i)
        }
    } 
    return indices;     
}

/*------------------------------------------------------*/
var input = document.querySelector("[data-letra-input]");
input.addEventListener("keypress", (e)=>{
    e.preventDefault
 if (e.key == "Enter"){
    check.click();
 }
});
let caracteresPermitidos = "abcdefghijklmnñopqrstuvwxyz"
function validarCaracteres(){
    if(!caracteresPermitidos.includes(input.value)){
        alert("ingrese solo letras");
        return false;
    }else if(input.value == ""){
        alert("el campo no puede estar vacio");
        return false;
    }else{
        return true;
    }
}

let xError = 450
let letrasIngresadas =[];

//detectar letra tipeada
check.addEventListener("click", function(event){
    event.preventDefault();
       
    let listaLetras = [...palabra];
    
    console.log(listaLetras);
    console.log(letrasIngresadas);

    if (validarCaracteres()) {
        letrasIngresadas.push(input.value);
        if(valorDelIndice(input.value, listaLetras).length >= 1){
            for(indice=0; indice<valorDelIndice(input.value, listaLetras).length; indice++){
                var x=500;
                for(num=0;num<listaLetras.length; num++){
                    if(valorDelIndice(input.value, listaLetras)[indice] == num){
                        escribirEnCanvas(input.value.toUpperCase(),x ,500);
                        break;
                    }else{
                        x=x+60;
                    }
                }
            }
        } else {
            xError= xError+50
            escribirEnCanvas(input.value.toUpperCase(),xError,560);
            vidas++;
        }
    }
    

    if(vidas == 1) {
        dibujarPoste();
        dibujarPaloHorizontal();
        DibujarSoga();
    }else if(vidas == 2){
        dibujarCabeza();
    }else if(vidas == 3){
        dibujarCuerpo();
    }else if(vidas == 4){
        dibujarDiagonalDerecha(750,275) //brazo derecho
        dibujarDiagonalIzquierda(750,275) //brazo izquierdo
    }else if(vidas == 5){
        dibujarDiagonalDerecha(750,350) //pierna derecha
        dibujarDiagonalIzquierda(750,350) //pierna izquierda

    }
    
    
    input.value=""
    
});

