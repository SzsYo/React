
const vehiculo = {
  marca: "Mazda",
  modelo: "CX-30",
  color: "Rojo",
  placa: "ABC123",
  año: 2024,
  disponible: true
};

const vehiculoJSON = JSON.stringify(vehiculo);
console.log("Vehículo en JSON:");
console.log(vehiculoJSON);

const vehiculoRecuperado = JSON.parse(vehiculoJSON);

console.log("Información recuperada:");
console.log("Marca: " + vehiculoRecuperado.marca);
console.log("Modelo: " + vehiculoRecuperado.modelo);
console.log("Color: " + vehiculoRecuperado.color);
console.log("Placa: " + vehiculoRecuperado.placa);
console.log("Año: " + vehiculoRecuperado.año);
console.log("Disponible: " + vehiculoRecuperado.disponible);
