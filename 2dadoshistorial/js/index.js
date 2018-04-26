var arhistory1 = [];
var arhistory2 = [];

function lanzar() {
  var cantidad1, cantidad2;

  var elemResultado1 = document.getElementById('resultado1');
  var elemResultado2 = document.getElementById('resultado2');
  var elemHisD1 = document.getElementById('hdado1');
  var elemHisD2 = document.getElementById('hdado2');

  cantidad1 = calcular();
  arhistory1.push(cantidad1 + ' ');
  elemResultado1.innerHTML = '<h1>' + cantidad1 + '</h1>';
  elemHisD1.innerHTML = '<p>' + arhistory1 + '</p>';

  cantidad2 = calcular();
  arhistory2.push(cantidad2 + ' ');
  elemResultado2.innerHTML = '<h1>' + cantidad2 + '</h1>';
  elemHisD2.innerHTML = '<p>' + arhistory2 + '</p>';
}

function calcular() {
  var cantidad = Math.round(Math.random() * (6 - 1) + 1);
  return cantidad;
}