function lanzar() {
  var elemResultado = document.getElementById('resultado');
  var cantidad = Math.round(Math.random() * (6 - 1) + 1);
  elemResultado.innerHTML = '<h1>' + cantidad + '<h1>';
}