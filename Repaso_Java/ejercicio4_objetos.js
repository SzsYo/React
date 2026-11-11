
const parqueadero = {
  nombre: "Parqueadero Central",
  direccion: "Calle 50 # 45-20",
  capacidad: 80,

  mostrarCaracteristicas: function () {
    console.log("Nombre: " + this.nombre);
    console.log("Dirección: " + this.direccion);
    console.log("Capacidad: " + this.capacidad + " vehículos");
  }
};

console.log("Bienvenido a " + parqueadero.nombre);

parqueadero.mostrarCaracteristicas();
