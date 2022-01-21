var myArray = ['saber', 'archer', 'lancer'];
var rand = Math.floor(Math.random() * myArray.length);
var rValue = myArray[rand];
console.log(rValue)

function ganador(){
    document.getElementById("aleatorio") = rValue
};
document.getElementById("boton1", "boton2", "boton3").onclick = function(){
    ganador();
}