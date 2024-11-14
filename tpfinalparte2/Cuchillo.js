class Cuchillo{
  constructor(){
    this.posX = random(width);
    this.posY =random(-4000, 0);
    this.velocidad = random(1,3);
    this.imagen =  loadImage('data/cuchillo.png'); 
  }
  
  dibujar(){
      image(this.imagen, this.posX, this.posY, 50, 50);
      this.posY += this.velocidad;
    
  }
  
  colision(personaje) {
  let distancia = dist(this.posX, this.posY, personaje.posX, personaje.posY);
  let tamPersonaje = 30; 
  if (distancia < tamPersonaje / 2 + 15) {
    return true;
  }
  return false;
}  
  
}
