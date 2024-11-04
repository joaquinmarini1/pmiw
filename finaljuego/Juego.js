class Juego {
   constructor() {
     this.dibujarPersonaje();
     this.cuchillos = [];
     this.cantidadCuchillos = 100;
     this.timer = new Timer();
     this.fondo = imagenFondo; 
     this.estado = "Inicio";

     // Creación de los cuchillos
     for (let i = 0; i < this.cantidadCuchillos; i++) {
       this.cuchillos[i] = new Cuchillo();
     }
   }

   dibujar() {
     if (this.estado === "Inicio") {
       this.dibujarPantallaInicial();
     } else if (this.estado === "Juego") {
       this.dibujarFondo();
       this.personaje.dibujar();
       this.dibujarCuchillos();
       this.timer.dibujar();

       if (this.timer.llegoLimite()) {
         this.estado = "Ganaste";
       }
     } else if (this.estado === "Ganaste") {
       this.dibujarPantallaGanaste();
     }
   }

   dibujarPantallaInicial() {
     background(0);
     image(this.fondo, 0, 0, width, height);
     fill(255);
     textAlign(CENTER, CENTER);
     textSize(32);
     text("Clickeá para empezar", width / 2, height / 2);
   }

   dibujarPantallaGanaste() {
     background(0);
     fill(0, 255, 0);
     textAlign(CENTER, CENTER);
     textSize(32);
     text("¡Ganaste! clickeá para reiniciar", width / 2, height / 2);
   }

   dibujarFondo() {
     image(this.fondo, 0, 0, width, height);
   }

   dibujarPersonaje() {
     this.personaje = new Personaje();
   }

   dibujarCuchillos() {
     for (let i = 0; i < this.cantidadCuchillos; i++) {
       this.cuchillos[i].dibujar();
     }
   }

   teclaPresionada(keyCode) {
     this.personaje.teclaPresionada(keyCode);
   }

   reiniciarJuego() {
     this.timer = new Timer();
     this.estado = "Inicio"; 
     this.dibujarPersonaje();
   }
}
