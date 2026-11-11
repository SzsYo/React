
function saludarAprendiz(nombreA, callback) {
  console.log("Hola, " + nombreA);

  callback(nombreA);
}

function mostrarBienvenida(nombreA) {
  console.log("Bienvenido al curso de JavaScript, " + nombreA + "!");
}

saludarAprendiz("Carlos", mostrarBienvenida);
