"use strict";

var dom = {
    marcador: document.querySelector(".marcador"),
    equipo1: document.querySelector(".equipo1"),
    equipo2: document.querySelector(".equipo2"),
    button: document.querySelector("button")
};

var teams = ['F.C. Barcelona', 'Real Madrid', 'Valencia C.F.', 'Atlético de Madrid', 'Real Betis', 'Villarreal C.F.', 'Sevilla F.C.', 'Getafe C.F.', 'Girona F.C.', 'Celta de Vigo', 'S.D. Eibar', 'Real Sociedad', 'Athletic de Bilbao', 'C.D. Leganés', 'Deportivo Alavés', 'Espanyol C.F.', 'Levante U.D.', 'R.C. Deportivo', 'U.D. Las Palmas', 'Málaga C.F.'];

/*Se mezclan los equipos y se elige uno eliminadolo de la lista, luego se le pasan estos
equipos a la función generaResultado, para que genere los goles y muestre el resultado.*/
var equipos = _.shuffle(teams);

var iniciaPartido = function iniciaPartido() {
    var equipo1 = equipos.shift();
    var equipo2 = equipos.shift();
    generaResultado(equipo1, equipo2);
};

/*Se genera un número aleatorio de goles entre 0 y 12.*/
var generaGoles = function generaGoles() {
    var goles = _.shuffle(_.range(0, 12));
    goles = goles.slice(0, 1);
    return goles;
};

/*Se genera el resultado, cogiendo los equipos seleccionados en la función inicia partido*/
var divNombreEquipo1 = document.createElement("div");
var divNombreEquipo2 = document.createElement("div");
var divDivisor = document.createElement("div");
var divResultado1 = document.createElement("div");
var divResultado2 = document.createElement("div");

var generaResultado = function generaResultado(equipo1, equipo2) {
    if (equipo1 == undefined || equipo2 == undefined) {
        dom.button.remove();
        dom.marcador.remove();
        alert("No hay más partidos en esta jornada.");
    }

    var goles1 = generaGoles();
    var goles2 = generaGoles();

    divNombreEquipo1.className = 'nombreequipo';
    divNombreEquipo2.className = 'nombreequipo';
    divDivisor.className = 'divisor';
    divResultado1.className = 'resultado';
    divResultado1.className = 'resultado';

    divNombreEquipo1.textContent = "" + equipo1;
    divResultado1.textContent = "" + goles1;
    divDivisor.textContent = " - ";
    divNombreEquipo2.textContent = "" + equipo2;
    divResultado2.textContent = "" + goles2;

    dom.equipo1.appendChild(divNombreEquipo1);
    dom.equipo1.appendChild(divResultado1);
    dom.marcador.appendChild(divDivisor);
    dom.equipo2.appendChild(divNombreEquipo2);
    dom.equipo2.appendChild(divResultado2);
};
