// Ejercicio 5: Async/Await
// Objetivo: simular la consulta de los espacios disponibles de un parqueadero
// con una espera de tres segundos.

// Función que devuelve una promesa: simula una consulta a una base de datos
function consultarEspaciosDisponibles() {
  return new Promise((resolve) => {
    // Espera de 3 segundos (3000 milisegundos)
    setTimeout(() => {
      const espaciosDisponibles = 35;
      resolve(espaciosDisponibles);
    }, 3000);
  });
}

// Función asíncrona: se declara con "async" para poder usar "await"
async function mostrarEspacios() {
  console.log("Consultando espacios disponibles...");

  // await pausa esta función hasta que la promesa se resuelva
  const espacios = await consultarEspaciosDisponibles();

  // Se ejecuta solo cuando ya llegó la respuesta (~3 segundos después)
  console.log("Espacios disponibles: " + espacios);
}

// Ejecutar la función asíncrona
mostrarEspacios();
