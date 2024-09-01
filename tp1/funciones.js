function aumentarConClick() {
  if (mouseButton === RIGHT) {
    filas++;
    columnas++;
  } else if (mouseButton === LEFT) {
    filas--;
    columnas--;
  }
  ancho = width / columnas;
  alto = height / filas;
}
