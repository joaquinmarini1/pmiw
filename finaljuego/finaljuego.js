let imagenHombre;
let imagenCuchillo;
let imagenFondo;
let juego;
function preload() {
  imagenHombre = loadImage('data/hombre.png');
  imagenCuchillo = loadImage('data/cuchillo.png');
  imagenFondo = loadImage('data/fondo.png');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}


function draw() {
  background(200);
  juego.dibujar();
}

function mousePressed() {
   if (juego.estado === "Inicio") {
      juego.estado = "Juego";
      } else if (juego.estado === "Ganaste") {
      juego.reiniciarJuego();
   }
}

function keyPressed()  {
  juego.teclaPresionada(keyCode);
}
