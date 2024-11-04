class Cuchillo{
  constructor(){
    this.posX = random(width);
    this.posY =random(-4000, 0);
    this.velocidad = random(1,3);
    this.imagen = imagenCuchillo;
    this.atrapada = false;
  }
  
  dibujar(){
      image(this.imagen, this.posX, this.posY, 50, 50);
      this.posY += this.velocidad;
    
  }
}
