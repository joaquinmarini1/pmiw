//Marini Joaquin Comision 1
//Link al video https://youtu.be/ZfWrFRNF9X4

let filas = 3, columnas = 6, ancho, alto;
let obra;
let azuloscuro
let azul 
 
function preload (){
  obra = loadImage("data/obra.jpg");
}
function setup() {
  createCanvas(800, 400);
  ancho = width/columnas;
  alto = height/filas;
  azul = color(39, 41, 186);
  azuloscuro = color(6, 13, 29);
  
}

function draw() {
  background(azuloscuro);
  image(obra, 0, 0);
  translate(width / 2, 0); 
  for (let j=0; j<columnas; j++) {
    for (let i=0; i<filas; i++) {
      let distan = dist(i*ancho, j*alto, mouseX, mouseY);
      let tono = map(distan, 255, width, 255, 0);
      if ((i+j)%2==0) {
        fill(azul);
        rect(i*ancho, j*alto, ancho, alto);
        fill(azuloscuro);
        ellipse(i*ancho+ancho/2, j*alto+alto/2, ancho, alto);
        } else {
      fill(azul, tono);
        ellipse(i*ancho+ancho/2, j*alto+alto/2, ancho, alto);

      }
    }
  }
 }  
 
 function traerColor( columnas, filas) {
   let azuloscuro = color(6, 13, 29);
   let azul = color(39, 41, 186);
   if ((columnas + filas) % 2 == 0) {
     return azul;
   } else {
     return azuloscuro;
   }
 }
   
 
function mouseClicked(){
 aumentarConClick();
}
