

var myArray = ['Saber', 'Archer', 'Lancer'];
var random = Math.floor(Math.random() * myArray.length);
var rValue = myArray[random];
console.log(rValue)

function ganador() {
    document.getElementById("aleatorio").innerHTML = rValue
};

document.getElementById("botones").onclick = function () {
    ganador()
};