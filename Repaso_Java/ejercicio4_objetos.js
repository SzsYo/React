// Ejercicio 4: Objetos
// Objetivo: crear un objeto que represente un parqueadero con nombre, dirección,
// capacidad y un método que muestre sus características.

const parqueadero = {
  // Propiedades (datos del parqueadero)
  nombre: "Parqueadero Central",
  direccion: "Calle 50 # 45-20",
  capacidad: 80,

  // Método (acción del objeto): muestra las características
  mostrarCaracteristicas: function () {
    // "this" se refiere al propio objeto parqueadero
    console.log("Nombre: " + this.nombre);
    console.log("Dirección: " + this.direccion);
    console.log("Capacidad: " + this.capacidad + " vehículos");
  }
};

// Consultar una propiedad con el punto
console.log("Bienvenido a " + parqueadero.nombre);

// Ejecutar el método
parqueadero.mostrarCaracteristicas();
