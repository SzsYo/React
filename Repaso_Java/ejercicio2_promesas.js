// Ejercicio 2: Promesas
// Objetivo: simular la validación de las credenciales de inicio de sesión de un usuario.

// Datos "guardados" en el sistema (simulan una base de datos)
const usuarioRegistrado = "aprendiz01";
const claveRegistrada = "sena2026";

// Función que devuelve una promesa con el resultado de la validación
function validarCredenciales(usuario, clave) {
  return new Promise((resolve, reject) => {
    // setTimeout simula el tiempo que tarda el servidor en responder
    setTimeout(() => {
      if (usuario === usuarioRegistrado && clave === claveRegistrada) {
        // Credenciales correctas: la promesa se cumple (fulfilled)
        resolve("Inicio de sesión exitoso. Bienvenido, " + usuario);
      } else {
        // Credenciales incorrectas: la promesa se rechaza (rejected)
        reject("Usuario o contraseña incorrectos");
      }
    }, 1000);
  });
}

// Caso 1: credenciales correctas
validarCredenciales("aprendiz01", "sena2026")
  .then((mensaje) => {
    // then() recibe el valor enviado con resolve()
    console.log("Caso 1:", mensaje);
  })
  .catch((error) => {
    // catch() recibe el valor enviado con reject()
    console.log("Caso 1:", error);
  });

// Caso 2: credenciales incorrectas
validarCredenciales("aprendiz01", "clave_mala")
  .then((mensaje) => {
    console.log("Caso 2:", mensaje);
  })
  .catch((error) => {
    console.log("Caso 2:", error);
  });
