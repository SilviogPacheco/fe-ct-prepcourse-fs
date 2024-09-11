function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let multiplo = 1;
  let resultados = [0];
  while (multiplo <= 10) {
    resultados.push(multiplo * 6);
    multiplo++;
  }
  return resultados;
}

module.exports = tablaDelSeis;
