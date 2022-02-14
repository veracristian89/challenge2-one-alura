var juegoNuevo = document.querySelector(".nuevo-juego");
var palabra = "";

//funcion sortear palabra asociada a su evento.
juegoNuevo.addEventListener("click", function(event){
    event.preventDefault();
    pincel.clearRect(0,0,1200,700)
    crearTablero();
    
    var listaDePalabras = ["autobus", "teclado", "programa", "aprender", "funcion", "lista", "mano", "celebrar", "pensar"];
    
    function sortearPalabra(){
            return listaDePalabras[(Math.floor(Math.random()*(listaDePalabras.length)))];
    }
    
    sortearPalabra();
    palabra = sortearPalabra();
    

    function dibujarLineasPalabra(){
        for(contador = 0; contador<(palabra.length*60); contador = contador + 60) {
            dibujarLineaLetra(500 + contador,510);
        }
    }
    
    dibujarLineasPalabra();
    
});

var check = document.querySelector(".check");
var listaLetras = [];
var vidas = 0;

function valorDelIndice(letra, array){
    indices = [];
    for(var i = 0; i<array.length; i++){
        if (array[i] == letra){
            indices.push(i)
        }
    } 
    return indices;     
}

var xError = 450
//detectar letra tipeada
check.addEventListener("click", function(event){
    event.preventDefault();
    var input = document.querySelector(".ingresar-letra");
    var caracteresPermitidos = "abcdefghijklmnñopqrstuvwxyz"
    var expresion = new RegExp(input.value,"i");

    //validando que sean letras    
    function validarCaracteres(){
        if(!expresion.test(caracteresPermitidos)){
            alert("ingrese solo letras");
        }else if(input.value == ""){
            alert("el campo no puede estar vacio");
        }else{
            console.log(input.value);
        }
    }
    validarCaracteres();
   
    //validando que la letra este en la palabra 
    //escribiendo la letra correcta en el lugar correcto
    listaLetras = [...palabra];
    console.log(listaLetras)

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
        
    }else {
        xError= xError+50
        escribirEnCanvas(input.value.toUpperCase(),xError,560);
        vidas++;
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

