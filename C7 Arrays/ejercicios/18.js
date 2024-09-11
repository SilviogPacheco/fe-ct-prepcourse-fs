function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let promedio = 0;
  resultadosTest.forEach((num) => (promedio += num));
  return promedio / resultadosTest.length;
}

module.exports = promedioResultadosTest;
