function lanzar() {
  var cantidad;
  var elemResultado1 = document.getElementById('resultado1');
  var elemResultado2 = document.getElementById('resultado2');
  elemResultado1.innerHTML = '<h1>' + calcular(cantidad) + '<h1>';
  elemResultado2.innerHTML = '<h1>' + calcular(cantidad) + '<h1>';
}

function calcular(cantidad) {
  cantidad = Math.round(Math.random() * (6 - 1) + 1);
  return cantidad;
}