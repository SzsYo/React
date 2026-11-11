
function consultarEspaciosDisponibles() {
  return new Promise((resolve) => {
    // Espera de 3 segundos (3000 milisegundos)
    setTimeout(() => {
      const espaciosDisponibles = 35;
      resolve(espaciosDisponibles);
    }, 3000);
  });
}

async function mostrarEspacios() {
  console.log("Consultando espacios disponibles...");

  const espacios = await consultarEspaciosDisponibles();

  console.log("Espacios disponibles: " + espacios);
}

mostrarEspacios();
