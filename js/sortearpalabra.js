/***iniciar juego***/
const juegoNuevoBtn = document.querySelector("[data-nuevo-btn]");
let listaDePalabras = ["autobus", "teclado", "programa", "aprender", "funcion", "lista", "mano", "celebrar", "pensar"];
let palabra = "";
let listaLetras = [];
let vidas = 0;
let aciertos = 0;
let letrasIngresadas = [];
let palabrasSorteadas= false;

/*funcion para sortear palabra*/
function sortearPalabra() {
    return listaDePalabras[(Math.floor(Math.random() * (listaDePalabras.length)))];
};

function dibujarLineasPalabra() {
    for (contador = 0; contador < (palabra.length * 60); contador = contador + 60) {
        dibujarLineaLetra(500 + contador, 510);
    };
};

juegoNuevoBtn.addEventListener("click", function (event) {
    event.preventDefault();
    pincel.clearRect(0, 0, 1200, 700);
    crearTablero();
    palabra = sortearPalabra();
    listaLetras = [...palabra];
    dibujarLineasPalabra();
    vidas = 0;
    letrasIngresadas = [];
    xError = 450;
    aciertos = 0;
    palabrasSorteadas = true;
});

/* valida si la letra esta y devuelve un array con las posiciones */
const check = document.querySelector("[data-check-btn]");
function valorDelIndice(letra, array) {
    
    indices = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] == letra) {
            indices.push(i)
        }
    }
    return indices;       
    
}

/*convirtiendo el enter del input en click del check*/
var input = document.querySelector("[data-letra-input]");
input.addEventListener("keypress", (e) => {
    e.preventDefault
    if (e.key == "Enter") {
        check.click();
    }
});

/* validando que el input.value sea correcto */
let caracteresPermitidos = "abcdefghijklmnñopqrstuvwxyz"
function validarCaracteres() {
    if (!caracteresPermitidos.includes(input.value)) {
        alert("ingrese solo letras minusculas");
    } else if (input.value == "") {
        alert("el campo no puede estar vacio");
    }else if (!palabrasSorteadas) {
        alert("debe hacer click en Nuevo Juego")
    } else {
        return true;
    }
}

/*----------------------------------------------------------------*/

let xError = 450;
check.addEventListener("click", function (event) {
    event.preventDefault();

    if (validarCaracteres() && vidas < 5 && palabrasSorteadas) {

        if (listaLetras.includes(input.value) && !letrasIngresadas.includes(input.value)) {
            for (indice = 0; indice < valorDelIndice(input.value, listaLetras).length; indice++) {
                var x = 500;
                for (num = 0; num < listaLetras.length; num++) {
                    if (valorDelIndice(input.value, listaLetras)[indice] == num) {
                        escribirEnCanvas(input.value.toUpperCase(), x, 500);
                        aciertos++;
                        break;
                    } else {
                        x = x + 60;
                    }
                }
            }
        } else if (!listaLetras.includes(input.value) && !letrasIngresadas.includes(input.value)) {
            xError = xError + 50
            escribirEnCanvas(input.value.toUpperCase(), xError, 560);
            vidas++;
        } else if (letrasIngresadas.includes(input.value)) {
            alert("ya ingresaron esa letra")
        }
        if (!letrasIngresadas.includes(input.value)) {
            letrasIngresadas.push(input.value);
        }
        if (vidas == 1) {
            dibujarPoste();
            dibujarPaloHorizontal();
            DibujarSoga();
        } else if (vidas == 2) {
            dibujarCabeza();
        } else if (vidas == 3) {
            dibujarCuerpo();
        } else if (vidas == 4) {
            dibujarDiagonalDerecha(750, 275) //brazo derecho
            dibujarDiagonalIzquierda(750, 275) //brazo izquierdo
        } else if (vidas == 5) {
            dibujarDiagonalDerecha(750, 350) //pierna derecha
            dibujarDiagonalIzquierda(750, 350) //pierna izquierda
            finDelJuegoPerdedor(palabra.toUpperCase(), 200, 650, "red");
        }
        if (aciertos == listaLetras.length) {
            finDelJuegoGanador(palabra.toUpperCase(), 200, 650)
            vidas = 6;
        }
    }
    

    

    input.value = ""

});

/*----------------------------------------- */
const desistirBtn = document.querySelector("[data-desistir-btn]");

desistirBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (vidas != 6 && palabrasSorteadas) {
        finDelJuegoPerdedor(palabra.toUpperCase(), 200, 650);
        vidas = 6;
        aciertos = 0;
    }

})
