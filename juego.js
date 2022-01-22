var myArray = ['Saber', 'Archer', 'Lancer'];
var random = Math.floor(Math.random() * myArray.length);
var rValue = myArray[random];

function ganador() {
    document.getElementById("aleatorio").innerHTML = rValue
};

var jugador = document.getElementById("botones");
var cpu = rValue;
var resultado;

jugador.addEventListener("click", accion);

function accion() {
    if (jugador === cpu ) {
        return resultado = "Empate";
    }
    else if (jugador == "boton_uno" && cpu == "Archer" || jugador == "boton_dos" && cpu == "Lancer" || jugador == "boton_tres" && cpu == "Saber") {
        return resultado = "Perdiste"
    }
    else if (jugador == "boton_uno" && cpu == "Lancer" || jugador == "boton_tres" && cpu == "Archer" || jugador == "boton_dos" && cpu == "Saber") {
        return resultado = "Ganaste"
    }
 }

 function textoResultado() {
     document.getElementById("result_text").innerHTML = resultado;
     accion()
 };

document.getElementById("botones").onclick = function () {
    ganador()
    textoResultado()
    accion()
};
