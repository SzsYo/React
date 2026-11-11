// Ejercicio 1: Callbacks
// Objetivo: crear una función que reciba el nombre de un aprendiz y una
// función callback que muestre un mensaje de bienvenida.

// Función principal: recibe un nombre y una función (callback)
function saludarAprendiz(nombreAprendiz, callback) {
  // Primero se muestra el saludo con el nombre recibido
  console.log("Hola, " + nombreAprendiz);

  // Luego se ejecuta la función que llegó como argumento
  callback(nombreAprendiz);
}

// Callback: muestra el mensaje de bienvenida
function mostrarBienvenida(nombreAprendiz) {
  console.log("Bienvenido al curso de JavaScript, " + nombreAprendiz + "!");
}

// Se pasa mostrarBienvenida SIN paréntesis, para que saludarAprendiz la ejecute después
saludarAprendiz("Carlos", mostrarBienvenida);
