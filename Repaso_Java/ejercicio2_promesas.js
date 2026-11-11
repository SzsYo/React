
const usuarioRegistrado = "aprendiz01";
const claveRegistrada = "sena2026";

function validarCredenciales(usuario, clave) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario === usuarioRegistrado && clave === claveRegistrada) {
        resolve("Inicio de sesión exitoso. Bienvenido, " + usuario);
      } else {
        reject("Usuario o contraseña incorrectos");
      }
    }, 1000);
  });
}

validarCredenciales("aprendiz01", "sena2026")
  .then((mensaje) => {
    console.log("Caso 1:", mensaje);
  })
  .catch((error) => {
    console.log("Caso 1:", error);
  });

validarCredenciales("aprendiz01", "clave_mala")
  .then((mensaje) => {
    console.log("Caso 2:", mensaje);
  })
  .catch((error) => {
    console.log("Caso 2:", error);
  });
