function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesPedidos = array.filter(
    (elem) => elem === "Enero" || elem === "Marzo" || elem === "Noviembre"
  );
  if (
    mesesPedidos.includes("Enero") &&
    mesesPedidos.includes("Marzo") &&
    mesesPedidos.includes("Noviembre")
  )
    return mesesPedidos;
  else return "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
