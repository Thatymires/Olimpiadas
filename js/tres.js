var canvas = document.getElementById('tela3');

var c = canvas.getContext('2d');

let tela3 = new Starfield(c);
tela3.inicializa();
tela3.start();
