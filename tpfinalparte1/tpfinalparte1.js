//Ernestina Lamas Marini Joaquin Comision 1
// https://youtu.be/R3Cgy1FB0MY
let textos = [];
let fondos = [];
let pantalla = 0;
let historial = [];
let bifurcacion = false;
let sonidoFondo
function preload() {
  for (let i = 0; i < 20; i++) {
    fondos[i] = loadImage("data/imagen" + i + ".webp");
    sonidoFondo = loadSound("data/fondo.mp3"); 
}
}

function setup() {
  createCanvas(640, 480);
  textos = [
     " ",
     "Un hombre caminando hacia su hogar.", //0
    "En cuanto llega, se sienta en su sillón verde para leer una novela.", //1
    "La novela cuenta como una pareja de amantes planean matar al esposo de la mujer.", //2
    "DECISION",  //3
    "La pareja deja la cabaña y se dirigen a una mansión", //4 CAMINO A
    "Los amantes se separan. El hombre armado se dirige hacia la casa del esposo,", //5 CAMINO B
    "El amante llega a la mansión y busca la forma de entrar sin ser visto", //6
    "DECISION", //7
    "Lo descubren y lo atrapan", //8 CAMINO B
    "Logra entrar sin ser visto", //9 CAMINO A
    "El amante recorre los pasillos de la mansión con un cuchillo en su mano", //10
    "Abre la puerta de una habitación particular", //11
    "Entra a la habitación en la que hay un sillón verde y un hombre leyendo", //12
    "DECISION", //13
    "El hombre se defiende y mata al amante", //14 FINAL A
    "El lector muere", //15 FINAL B
    "La pareja llega a la mansion y entran sin ser vistos", //16
    "Entran a una habitacion con un sillon verde y un hombre leyendo", //17
    "LA MUJER AYUDA AL LECTOR Y JUNTOS MATAN AL AMANTE", //18 FINAL C
  ];
}

function draw() {
  background(255);

  if (fondos[pantalla]) {
    image(fondos[pantalla], 0, 0, width, height);
  }
if (pantalla === 0) {
  
    dibujarBoton(20, height - 60, 140, 40, "Activar Sonido");
  }
  FondoDeTexto(textos[pantalla]);

  if (pantalla === 4) { 
    dibujarBoton(width / 2 - 160, height - 60, 140, 40, "Se van juntos");
    dibujarBoton(width / 2 + 20, height - 60, 140, 40, "Se separan");
    dibujarBoton(20, height - 60, 100, 40, "Atrás");
    bifurcacion = true;
  } else if (pantalla === 8) { 
    dibujarBoton(width / 2 - 160, height - 60, 140, 40, "Lo descubren y atrapan");
    dibujarBoton(width / 2 + 20, height - 60, 140, 40, "Logra entrar sin ser visto");
    dibujarBoton(20, height - 60, 100, 40, "Atrás");
    bifurcacion = true;
  } else if (pantalla === 14) { 
    dibujarBoton(width / 2 - 160, height - 60, 140, 40, "El lector se defiende y mata al amante");
    dibujarBoton(width / 2 + 20, height - 60, 140, 40, "El lector muere");
    dibujarBoton(20, height - 60, 100, 40, "Atrás");
    bifurcacion = true;
  }   else {
    bifurcacion = false;

      if (pantalla === 9 || pantalla === 15 || pantalla === 16 || pantalla === 19) { 
      dibujarBoton(width / 2 - 50, height - 60, 100, 40, "Reiniciar");
    } else {
      if (pantalla < textos.length - 1) {
        dibujarBoton(width - 120, height - 60, 100, 40, "Siguiente");
      }
    }
    if (pantalla > 0) {
      dibujarBoton(20, height - 60, 100, 40, "Atrás");
      
      if (!sonidoFondo.isPlaying()) {
      sonidoFondo.play();
      }
    }
  }
}

function mousePressed() {
  if (bifurcacion) {
    if (pantalla === 4) {
      if (detectarBoton(width / 2 - 160, height - 60, 140, 40)) {
        SiguientePantalla(5);
      } else if (detectarBoton(width / 2 + 20, height - 60, 140, 40)) {
        SiguientePantalla(6);
      } else if (detectarBoton(20, height - 60, 100, 40)) {
        VolverPantalla();
      }
    } else if (pantalla === 8) {
      if (detectarBoton(width / 2 - 160, height - 60, 140, 40)) {
        SiguientePantalla(9);
      } else if (detectarBoton(width / 2 + 20, height - 60, 140, 40)) {
        SiguientePantalla(10);
      } else if (detectarBoton(20, height - 60, 100, 40)) {
        VolverPantalla();
      }
    } else if (pantalla === 14) {
      if (detectarBoton(width / 2 - 160, height - 60, 140, 40)) {
        SiguientePantalla(15);
      } else if (detectarBoton(width / 2 + 20, height - 60, 140, 40)) {
        SiguientePantalla(16);
      } else if (detectarBoton(20, height - 60, 100, 40)) {
        VolverPantalla();
      }
    }
  } else {
    if (pantalla === 5 && detectarBoton(width - 120, height - 60, 100, 40)) {
      SiguientePantalla(17);
    } else if (pantalla < textos.length - 1 && detectarBoton(width - 120, height - 60, 100, 40)) {
      SiguientePantalla(pantalla + 1);
    }
    
     if ((pantalla === 9 || pantalla === 15 || pantalla === 16 || pantalla === 19) && detectarBoton(width / 2 - 50, height - 60, 100, 40)) {
      pantalla = 0;
    }
     
    if (pantalla > 0 && detectarBoton(20, height - 60, 100, 40)) {
      VolverPantalla();
    }
    if (pantalla === 0 && detectarBoton(20, height - 60, 140, 40)) {
    
      if (sonidoFondo.isPlaying()) {
      sonidoFondo.pause(); 
    } else {
      sonidoFondo.loop(); 
    }
  }
  }
}
