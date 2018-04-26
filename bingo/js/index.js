"use strict";

var dom = {
  resJ: document.querySelector(".resjugador"),
  resC: document.querySelector(".rescpu"),
  res: document.querySelector("#resultado"),
  button: document.querySelector("button")
};

/*Se generan los números del 1 al 90, se desordenan y se almacenan en el array. Luego se coge solo el primero y se elimina del array para que no se repita.*/
var numbersGame = _.shuffle(_.range(1, 91));

var generaNumerosJuego = function generaNumerosJuego(numbersGame) {

  var numero = numbersGame.pop();
  dom.res.textContent = "" + numero;
  compruebaResul(numero);
  winner();
};

/*Tenemos 2 arrays, uno para jugador y otro para cpu, donde vamos a almacenar los 15 primeros números y retirarlos de la lista generada anteriormente.*/

var generaNumerosJugadores = function generaNumerosJugadores() {
  var jugador = _.shuffle(_.range(1, 91));
  jugador = jugador.splice(0, 15);
  return jugador;
};

var arJugador = generaNumerosJugadores();
var arCpu = generaNumerosJugadores();

/*Se genera el cartón.*/
var generaCarton = function generaCarton() {
  for (var i = 0; i < 15; i++) {
    var divJ = document.createElement("div");
    var divC = document.createElement("div");

    divJ.className = 'number number' + arJugador[i];
    divC.className = 'number number' + arCpu[i];

    divJ.textContent = "" + arJugador[i];
    divC.textContent = "" + arCpu[i];

    dom.resJ.appendChild(divJ);
    dom.resC.appendChild(divC);
  }
};

generaCarton();

/*Se comprueba si el número generado está en el cartón de cada usuario y le aplica la clase.*/

var compruebaResul = function compruebaResul(numero) {
  arJugador = _.pull(arJugador, numero);
  arCpu = _.pull(arCpu, numero);
  var arDivs = document.querySelectorAll(".number" + numero);
  arDivs.forEach(function (divFind) {
    return divFind.classList.add('encontrado');
  });
};

/*Se comprueba si el contenido de los cartones es igual a 0, si lo es, significa que ha ganado entonces quita el botón y muestra un mensaje.*/

var winner = function winner() {
  debugger;
  if (arJugador.length == 0) {
    alert("Jugador ha ganado.");
    dom.button.remove();
  }
  if (arCpu.length == 0) {
    alert("CPU ha ganado.");
    dom.button.remove();
  }
};
