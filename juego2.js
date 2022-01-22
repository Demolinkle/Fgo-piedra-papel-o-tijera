var imagenesRandom = ["saber.png", "archer.png", "lancer.png"];
var azar = Math.floor(Math.azar() * imagenesRandom.length);
var aValue = imagenesRandom[azar];
console.log(aValue)

function randomImagen() {
    document.getElementById("imagen_aleatoria", "saber.png", "archer.png", "lancer.png").innerHTML = aValue
};

document.getElementById("botones").onclick = function () {
    randomImagen()
};